import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Report } from '@/libs/interface';
import MinReportCard from '@/components/admin/MinReportCard';
import axios from 'axios';
import SearchBar from '../SearchBar';

const AdminPanel = () => {
    const [data, setData] = useState<Report[]>();
    const [viewData, setViewData] = useState<Report[]>();

    const [filterString, setFilterString] = useState('NULL')
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/api/admin/reports');
                setData(response.data);
                setViewData(response.data)
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [setData]);

    const handleOnFilter = (keyword: string, filter: string) => {
        setSearchText(keyword)
        if (data) {
            const reports: Report[] = data.filter((rep) => {

                if (
                    (
                        rep.patientDetails['Patient Name'].toLowerCase().includes(keyword.toLowerCase()) ||
                        rep.patientId.includes(keyword)
                    ) &&
                    (
                        filter === 'NULL' || rep.status === filter
                    )
                ) {
                    return rep
                }
            })
            setViewData(reports)
        }
    }

    return (
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <div className='h-screen bg-white'>
                <div className='m-auto mobile:w-full tablet:w-4/5 desktop:w-3/5 h-screen'>
                    <SearchBar
                        dropDownOnChange={(value) => {
                            handleOnFilter(searchText, value)
                        }}
                        onType={(value) => handleOnFilter(value, filterString)}
                        className='mx-3 mt-2'
                    />
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