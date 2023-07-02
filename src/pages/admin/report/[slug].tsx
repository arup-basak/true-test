import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
// import { jsPDF } from "jspdf";
import ReportComponent from '@/components/report/Report';
import { Report } from '@/libs/interface'
import Button from '@/components/Button';
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";

const Post = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = useState<Report>();
    const [loading, setLoading] = useState(true);

    const pdfRef = useRef(null);

    const handleGeneratePdfClick = (
        patientName: string
    ) => {
        const content = pdfRef.current || "No Data";
        // const doc = new jsPDF("p", "px", "a4", true);
        // doc.html(content, {
        //     html2canvas: {
        //         allowTaint: true,
        //         useCORS: true,
        //         scale: 0.31
        //     },
        //     callback: function (doc) {
        //         doc.save(`${patientName.replace(" ", "_")}_${slug}.pdf`);
        //     }
        // });
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `/api/reports?id=${slug}`;
                const data = {
                    username: secureLocalStorage.getItem("login-username"),
                    password: secureLocalStorage.getItem("login-username")
                };
                const response = await axios.post(url, data);
                const jsonData = response.data;
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData()
    }, [slug, axios]);

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

    // if (data.response == false)
    //     return (
    //         <>
    //             <Head>
    //                 <title>Not Found</title>
    //             </Head>
    //             <div className='flex tablet:items-center justify-center min-h-[90vh] tablet:text-2xl'>
    //                 No Data Found
    //             </div>
    //         </>
    //     )
    return (
        <main>
            <Head>
                <title>Report</title>
            </Head>
            <div className=''>
                <div className='tablet:m-auto mobile:w-full tablet:w-3/4 py-3 pt-5'>
                    <Button
                        onClick={() => {}}
                        innerText={'Generate PDF'}
                    />
                </div>
                <div className='tablet:m-auto tablet:w-3/4 transform origin-top tablet:scale-[.7] mobile:scale-[.4]'>
                    <div ref={pdfRef}>
                        <ReportComponent data={data} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Post;