import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { generateRandomNumber } from '@/libs/lib';
import { Report, PatientDetails, ReportDetails, ReportResult } from '@/libs/interface';
import axios from 'axios';
import InsertTestReport from '@/components/InsertTestReport';

const Add = () => {
  const id = generateRandomNumber()

  const [totalResult, setTotalResult] = useState(0)

  const emptyResult: ReportResult = {
    testName: "",
    result: "",
    unit: "",
    referenceRange: ""
  }

  const ref = useRef<Report>({
    patientId: id.toString(),
    patientDetails: {
      "Patient Id": id,
      "Patient Name": '',
      "Age": 0,
      "Referred By": '',
      "BarcodeNo": 0,
    },
    reportDetails: {
      "Sample Collection Time": '',
      "Received Time": '',
      "Approved Time": '',
      "Client Group": '',
    },
    testResults: [],
    status: 'draft',
    cost: 0,
    response: false,
  });

  const handleAddTestReport = () => {
    ref.current.testResults.push(emptyResult);
  };

  const handleChange = (path: string, value: string | number | boolean) => {
    const pathArr = path.split('.');

    if (pathArr.length === 2) {
      ((ref.current[pathArr[0]]) as PatientDetails | ReportDetails)[pathArr[1]] = value
    }
    else {
      ref.current[pathArr[0] as keyof Report] = value;
    }
  };

  const handleAddDraft = async () => {
    const response = await axios.post('/api/admin/add', ref.current);
    console.log(response.data.success)
  }

  return (
    <>
      <Head>
        <title>New Report</title>
      </Head>
      <main className="m-auto">
        <div className='grid grid-cols-3'>
          <Input
            label="Patient ID"
            value={ref.current.patientId}
            onChange={e => handleChange("Patient Id", e.target.value)}
          />
          <Input
            label="Patient Name"
            value={ref.current.patientDetails['Patient Name']}
            onChange={e => handleChange("patientDetails.Patient Name", e.target.value)}
          />
          <Input
            label="Age"
            value={ref.current.patientDetails.Age.toString()}
            onChange={e => handleChange("patientDetails.Age", parseInt(e.target.value))}
          />
          <Input
            label="Referred By"
            value={ref.current.patientDetails['Referred By']}
            onChange={e => handleChange("patientDetails.Referred By", e.target.value)}
          />
          <Input
            label="Barcode No"
            value={ref.current.patientDetails.BarcodeNo.toString()}
            onChange={e => handleChange("patientDetails.BarcodeNo", parseInt(e.target.value))}
          />
          <Input
            label="Sample Collection Time"
            value={ref.current.reportDetails["Sample Collection Time"]}
            onChange={e => handleChange("reportDetails.Sample Collection Time", e.target.value)}
          />
          <Input
            label="Received Time"
            value={ref.current.reportDetails["Received Time"]}
            onChange={e => handleChange("reportDetails.Received Time", e.target.value)}
          />
          <Input
            label="Approved Time"
            value={ref.current.reportDetails["Approved Time"]}
            onChange={e => handleChange("reportDetails.Approved Time", e.target.value)}
          />
          <Input
            label="Client Group"
            value={ref.current.reportDetails["Client Group"]}
            onChange={e => handleChange("reportDetails.Client Group", e.target.value)}
          />
        </div>
        {Array.from({ length: totalResult }, (v, index) => (
          <div key={String(index)}>
            <InsertTestReport
              onChange={(e) => {
                ref.current.testResults[index] = e
              }}
            />
          </div>
        ))}

        <Button
          innerText="Add"
          className="m-2"
          onClick={() => {
            setTotalResult(totalResult + 1)
          }}
          animation={true}
        />
        <Button
          innerText="Save as Draft"
          className="m-2"
          onClick={handleAddDraft}
          animation={true}
        />
      </main>
    </>
  );
};

export default Add;
