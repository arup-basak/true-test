import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Report } from '@/libs/interface';
import MinReportCard from '@/components/AdminPanel/MinReportCard';
import axios from 'axios';
import filter_icon from 'public/filter.svg'
import add_icon from 'public/add.svg'
import ImageButton from '../ImageButton';

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
                <ImageButton
                    src={add_icon}
                    altText='add'
                    onClick={() => { }}
                    text='Add Report'
                    className='px-4 bg-red-200 fixed bottom-0 left-0 hidden'
                    size={18}
                />
                <div className='flex justify-end my-2'>
                    <ImageButton
                        src={filter_icon}
                        altText='filter'
                        onClick={() => { }}
                        text='Filter'
                        className='px-4'
                    />
                </div>
                <div>
                    {data?.map((item, key) => (
                        <MinReportCard data={item} key={key} id={key} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminPanel;
