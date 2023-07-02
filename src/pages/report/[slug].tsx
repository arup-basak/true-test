import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { useRouter } from 'next/router';
import { ReportResult } from '@/libs/interface';
import Button from '@/components/Button';
import { Report } from '@/libs/interface';
import axios from 'axios';


const ReportApp = () => {
    const router = useRouter();
    const { slug } = router.query;
    const { asPath } = useRouter();
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    const URL = `${origin}${asPath}`;

    const [data, setData] = useState<Report>()

    const [patientDetails, setPatientDetails] = useState<string[][]>([]);
    const [reportDetails, setReportDetails] = useState<string[][]>([]);
    const [testResult, setTestResult] = useState<string[][]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (slug) {
                    const response = await axios.post(`/api/report?id=${slug}`);
                    if (response.data.status === 'success') {
                        setData(response.data)
                        const pDetails = response.data.patientDetails
                        const rDetails = response.data.reportDetails
                        const tResults = response.data.testResults

                        const pData: string[][] = Object.entries(pDetails as Record<string, string>).reduce((acc, [key, value]) => {
                            acc.push([key.toString(), value.toString()]);
                            return acc;
                        }, [] as string[][]);
                        setPatientDetails(pData);

                        const tData: string[][] = Object.entries(rDetails as Record<string, string>).reduce((acc, [key, value]) => {
                            acc.push([key.toString(), value.toString()]);
                            return acc;
                        }, [] as string[][]);
                        setReportDetails(tData);

                        const rData: string[][] = tResults.map((item: ReportResult) => [
                            item.testName,
                            String(item.result),
                            item.unit,
                            item.referenceRange
                        ]);

                        setTestResult([['TEST NAME', 'VALUE', 'UNIT', 'REFERENCE'], ...rData]);
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        };

        fetchData();
    }, [slug]);

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.fonts = {
        Roboto: {
            normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
            bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
            italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
            bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
        },
    };

    const doc = {
        content: [
            {
                table: {
                    headerRows: 0,
                    widths: ['*', '*'],
                    body: [
                        [
                            {
                                table: {
                                    headerRows: 1,
                                    widths: ['*', '*'],
                                    body: patientDetails
                                }
                            },
                            {
                                table: {
                                    headerRows: 1,
                                    widths: ['*', '*'],
                                    body: reportDetails
                                }
                            }
                        ]
                    ]
                }
            },
            {
                table: {
                    headerRows: 1,
                    widths: ['*', '*', '*', '*'],
                    body: testResult
                }
            },
            { qr: URL },
        ]
    };

    const handleOnClick = () => {
        pdfMake.createPdf(doc).download();
    };

    return (
        <main>
            <Head>
                <title>ReportApp</title>
            </Head>
            <div>
                <Button
                    innerText='Download'
                    onClick={handleOnClick}
                />
            </div>
        </main>
    );
};

export default ReportApp;
