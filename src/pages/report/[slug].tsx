import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { jsPDF } from "jspdf";

const Post = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);

    const pdfRef = useRef(null);

    const handleGeneratePdfClick = (
        patientName: string
    ) => {
        const content = pdfRef.current || "No Data";
        const doc = new jsPDF();
        doc.html(content, {
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
                setData(jsonData['patientName']);
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
                <div>
                    Loading...
                </div>
            </>
        );
    }

    return (
        <main>
            <Head>
                <title>{data}</title>
            </Head>
            <div>
                {/* This is PDF area */}
                <div ref={pdfRef}>
                    {data}
                </div>
                <button
                    className="bg-red-800 p-2"
                    onClick={() => handleGeneratePdfClick(data)}>
                    Generate PDF
                </button>
            </div>
        </main>
    );
};

export default Post;