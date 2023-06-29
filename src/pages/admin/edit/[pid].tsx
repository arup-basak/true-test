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
                    const response = await axios.post(`/api/reports?id=${pid}`, {
                        "username": secureLocalStorage.getItem("login-username"),
                        "password": secureLocalStorage.getItem("login-username")
                    });

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
                <div className='flex'>
                    <div>
                        {
                            data?.patientDetails.map((item, key) => {
                                return (
                                    <Input
                                        key={key}
                                        label={item.key}
                                        value={item.value}
                                        onChange={() => onHandleChange()}
                                    />
                                );
                            })
                        }
                    </div>
                    <div>
                        {
                            data?.reportDetails.map((item, key) => {
                                return (
                                    <Input
                                        key={key}
                                        label={item.key}
                                        value={item.value}
                                    />
                                );
                            })
                        }
                    </div>
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