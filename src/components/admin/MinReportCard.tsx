import { Report } from '@/libs/interface'
import React, { useState } from 'react'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import ImageButton from '@/components/ImageButton'
import edit_icon from 'public/edit.svg'
import Status from './Status'
import PaymentDoneButton from './PaymentDone'
import { db } from '@/libs/firebase'
import { updateDoc, doc } from 'firebase/firestore'

interface ReportProp {
    data: Report,
    index: number
}

const MinReportCard = (
    { data, index }: ReportProp
) => {
    const { push } = useRouter();
    const pName = data.patientDetails['Patient Name']

    const [status, setStatus] = useState<string>(data.status)

    const handleOnClick = async () => {
        const docRef = doc(db, "reports", String(data.patientId));

        const updateData = {
            "status": data.status === "payment-required" ? "success" : "payment-required",
            "response": true,
        }

        updateDoc(docRef, updateData)
            .then(() => {
                setStatus(updateData.status)
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className='bg-[#f4f1de] rounded p-2 px-4 w-full my-3 flex items-center justify-between transition hover:bg-[#f5f0d3] mobile:text-sm tablet::text-base'>
            <div>
                {`${index + 1}. ${pName}`}
            </div>
            <div className='flex items-center'>
                {
                    (status === 'payment-required' || status === 'draft') && (
                        <PaymentDoneButton onClick={handleOnClick} />
                    )
                }
                <Status
                    key={String(data.patientDetails['Patient Id'])}
                    status={status} />
                <ImageButton
                    src={edit_icon}
                    altText='Edit Icon'
                    size={18}
                    onClick={() => { push(`/admin/edit/${data.patientId}`) }}
                />
                <Button
                    innerText='Get Report'
                    className='whitespace-nowrap'
                    onClick={() => push(`/report/${data.patientId}`)} />
            </div>
        </div>
    )
}

export default MinReportCard