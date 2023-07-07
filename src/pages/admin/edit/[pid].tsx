import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Button from '@/components/Button';
import axios from 'axios';
import { Report } from '@/libs/interface';
import EditComponent from '@/components/admin/EditComponent';

const EditPanel = () => {
    const router = useRouter();
    const { pid } = router.query;

    const [data, setData] = useState<Report>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`/api/admin/reports?patientId=${pid}`);

                const jsonData = response.data;
                if (jsonData.status !== 'error')
                    setData(jsonData)
            } catch (error) {
                console.error(error);
            }
        };

        if (pid)
            fetchData()
    }, [pid]);

    const handleOnSave = (data: Report) => {
        //TODO
    }


    return (
        <>
            <Head>
                <title>Edit</title>
            </Head>
            <div>
                <div className='w-3/4'>
                    {data && (
                        <EditComponent
                            defaultData={data}
                            onSave={(newData: Report) => { handleOnSave(newData) }}
                            saveText='Update'
                        />
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