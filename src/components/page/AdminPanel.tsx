import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Report } from '@/libs/interface';
import MinReportCard from '@/components/MinReportCard';
import axios from 'axios';

const AdminPanel = () => {
    const [data, setData] = useState<Report[]>();

    const [filter, setFilter] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/api/admin/data', filter);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <div className='m-auto w-3/5 h-screen'>
                {data?.map((item, key) => (
                    <MinReportCard data={item} key={key} id={key} />
                ))}
            </div>
        </>
    );
};

export default AdminPanel;
