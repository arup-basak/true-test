import React from 'react';
import Table from '@/components/Table';
import { Report } from '@/libs/interface';

interface ReportTableProps {
  data: Report;
}

const ReportComponent = ({ data }: ReportTableProps) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="mb-4">
        <div className="text-lg font-semibold">Name: {data.patientName}</div>
        <div>ID: {data.patientId}</div>
        <div>Age: {data.age}</div>
      </div>
      <div className="mb-4">
        <span className="font-semibold">Report:</span>
      </div>
      <Table tableData={data.testResults} />
    </div>
  );
};

export default ReportComponent;
