import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { jsPDF } from "jspdf";

const Post = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);

    const handleGeneratePdfClick = () =>  {
        
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:3000/api/reports?id=${slug}`;
                console.log(url)
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
                {data}
                <button className="bg-red-800 p-2" onClick={handleGeneratePdfClick}>Generate PDF</button>
            </div>
        </main>
    );
};

export default Post;