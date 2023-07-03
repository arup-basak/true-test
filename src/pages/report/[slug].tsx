import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { useRouter } from 'next/router';
import Button from '@/components/Button';
import { Report } from '@/libs/interface';
import axios from 'axios';
import { generateDoc } from '@/libs/pdf'
import PDFViewer from '@/components/PdfViewer';


const ReportApp = () => {
    const router = useRouter();
    const { slug } = router.query;
    const { asPath } = useRouter();
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    const URL = `${origin}${asPath}`;

    const [data, setData] = useState<Report>({
        patientId: '',
        patientDetails: {
            "Patient Id": 0,
            "Patient Name": '',
            "Age": 0,
            "Referred By": '',
            "BarcodeNo": 0,
        },
        reportDetails: {
            "Sample Collection Time": '',
            "Received Time": '',
            "Approved Time": '',
            "Client Group": '',
        },
        testResults: [],
        status: 'draft',
        cost: 0,
        response: false,
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (slug) {
                    const response = await axios.post(`/api/report?id=${slug}`);
                    if (response.data.status === 'success') {
                        setData(response.data)
                        const pdf = pdfMake.createPdf(generateDoc(data, URL));
                        pdf.getBlob((blob: Blob) => {
                            setBlob(blob)
                        })
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


    const [blob, setBlob] = useState<Blob>();


    const handleOnClick = () => {
        if (data.response) {
            pdfMake.createPdf(generateDoc(data, URL)).download()
        }
        else
            console.log("No Data")
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
                {
                    blob && (
                        <div className='w-fit mx-auto'>
                            <PDFViewer blobData={blob} />
                        </div>
                    )
                }
            </div>
        </main>
    );
};

export default ReportApp;
