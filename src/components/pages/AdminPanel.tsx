import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Report } from '@/libs/interface';
import MinReportCard from '@/components/admin/MinReportCard';
import axios from 'axios';
import filter_icon from 'public/filter.svg'
import ImageButton from '../ImageButton';
import AdminAlert from '../admin/AdminAlert';

interface FilterInterface {
    key: string,
    value: string
}

const AdminPanel = () => {
    const [data, setData] = useState<Report[]>();
    const [filter, setFilter] = useState<FilterInterface | null>();
    const [viewData, setViewData] = useState<Report[]>();

    const [alertVisibility, setAlertVisibility] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/api/admin/reports');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [setData]);

    useEffect(() => {
        if (!data) {
            return;
        }
        if (!filter)
            setViewData(data);
        else {
            const filteredData = data.filter((item) => item[filter.key] === filter.value);
            setViewData(filteredData);
        }
    }, [data, filter]);

    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <div className='h-screen bg-white'>
                <AdminAlert
                    setFilter={(filterValue: string) => {
                        setFilter(filterValue === 'NULL' ? null : { key: "status", value: filterValue })
                        setAlertVisibility(false)
                    }}
                    visibility={alertVisibility}
                />
                <div className='m-auto mobile:w-full tablet:w-4/5 desktop:w-3/5 h-screen'>
                    <div className='flex justify-end my-2'>
                        <ImageButton
                            src={filter_icon}
                            altText='filter'
                            onClick={() => {
                                setAlertVisibility(true)
                            }}
                            text='Filter'
                            className='px-4'
                        />
                    </div>
                    <div className='px-3'>
                        {viewData?.map((item, index) => {
                            return <MinReportCard
                                key={item.patientId}
                                index={index}
                                data={item}
                            />
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;