import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Button from '@/components/Button';
import axios from 'axios';
import { Report } from '@/libs/interface';
import Input from '@/components/Input';
import secureLocalStorage from "react-secure-storage";

const EditPanel = () => {
    const router = useRouter();
    const { pid } = router.query;

    const [data, setData] = useState<Report>()

    const onHandleChange = () => {

    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (pid) {
                    const response = await axios.post(`/api/admin/reports?patientId=${pid}`);

                    const jsonData = response.data;
                    if (jsonData.status !== 'error')
                        setData(jsonData)
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
    }, [pid]);


    return (
        <>
            <Head>
                <title>Edit</title>
            </Head>
            <div>
                <div>
                    {data?.patientDetails && (
                        <ul>
                            {Object.keys(data.patientDetails).map((key: string) => {

                                return (
                                    <Input
                                        key={key}
                                        label={key}
                                        value={String(data.patientDetails[key])}
                                    />
                                )
                            })}
                        </ul>
                    )}
                </div>
                <div>
                    <Button
                        innerText='Save'
                        onClick={() => { }}
                    />
                </div>
            </div>
        </>
    )
}

export default EditPanel