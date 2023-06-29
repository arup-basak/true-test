import { Report } from '@/libs/interface'
import React from 'react'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import ImageButton from '@/components/ImageButton'
import edit_icon from 'public/edit.svg'
import Status from './Status'

interface ReportProp {
    data: Report,
    id: number
}

const MinReportCard = (
    { data, id }: ReportProp
) => {
    const { push } = useRouter();
    return (
        <div className='bg-slate-200 rounded p-2 px-4 w-full my-3 flex items-center justify-between transition shadow-md hover:bg-slate-300'>
            <div>
                {`${id + 1}. ${data.patientDetails.find((item) => item.key === "Name")?.value}`}
            </div>
            <div className='flex items-center'>
                <Status status={data.status}/>
                <ImageButton
                    src={edit_icon}
                    altText='Edit Icon'
                    onClick={() => { push(`/admin/edit/${data.patientId}`) }}
                />
                <Button
                    innerText='Get Report'
                    onClick={() => push(`/admin/report/${data.patientId}`)} />
            </div>
        </div>
    )
}

export default MinReportCard