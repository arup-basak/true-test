import { Report } from '@/libs/interface'
import React from 'react'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

const MinReportCard = ({ data }: { data: Report }) => {
    const { push } = useRouter();
    return (
        <div className='bg-red-100 rounded p-2 w-full m-2 grid grid-cols-3'>
            <div>
                {data.patientDetails.find((item) => item.key === "Name")?.value}
            </div>
            <div>
                {data.patientId}
            </div>
            <Button 
                innerText='Get Report' 
                onClick={() => push(`/report/${data.patientId}`)} />
        </div>
    )
}

export default MinReportCard