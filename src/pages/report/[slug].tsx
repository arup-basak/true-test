import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { jsPDF } from "jspdf";
import ReportComponent from '@/components/Report';
import { Report } from '@/libs/interface'
import Button from '@/components/Button';

const Post = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = useState<Report>({
        patientId: 0,
        patientDetails: [],
        reportDetails: [],
        testResults: []
    });
    const [loading, setLoading] = useState(true);

    const pdfRef = useRef(null);

    const handleGeneratePdfClick = (
        patientName: string
    ) => {
        const content = pdfRef.current || "No Data";
        const doc = new jsPDF("p", "px", "a4", true);
        doc.html(content, {
            html2canvas: {
                allowTaint: true,
                useCORS: true,
                scale: 0.31
            },
            callback: function (doc) {
                doc.save(`${patientName.replace(" ", "_")}_${slug}.pdf`);
            }
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `/api/reports?id=${slug}`;
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        if (slug) {
            fetchData();
        }
    }, [slug]);

    if (loading) {
        return (
            <>
                <Head>
                    <title>Loading...</title>
                </Head>
                <div className='flex tablet:items-center justify-center min-h-[90vh] tablet:text-3xl'>
                    Loading...
                </div>
            </>
        );
    }

    return (
        <main>
            <Head>
                <title>{data.patientId}</title>
            </Head>
            <div>
                <div className='m-auto w-3/4 py-3 pt-5'>
                    <Button
                        onClick={() => handleGeneratePdfClick(data.patientId.toString())}
                        innerText={'Generate PDF'}
                    />
                </div>
                {/* This is PDF area */}
                <div className='m-auto w-3/4'>
                    <div ref={pdfRef}>
                        <ReportComponent data={data} />
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Post;