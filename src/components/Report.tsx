import React from 'react';
import ReportTable from '@/components/report/ReportTable';
import { Report } from '@/libs/interface';
import Table from './report/Table';
import Image from 'next/image';

interface ReportTableProps {
  data: Report;
}

const ReportComponent = ({ data }: ReportTableProps) => {
  const imageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://true-test.vercel.app/report/${data.patientId}`

  return (
    <div className="p-8 bg-white rounded shadow text-xl">
      <div className="grid grid-cols-2 gap-5">
        <Table data={data.patientDetails} />
        <Table data={data.reportDetails} />
      </div>
      <ReportTable tableData={data.testResults} />
      <div className='m-auto'>
        <Image
          src={imageUrl}
          alt="Description of the image"
          width={150}
          height={150}
          className='m-auto'
        />

      </div>

    </div>
  );
};

export default ReportComponent;
