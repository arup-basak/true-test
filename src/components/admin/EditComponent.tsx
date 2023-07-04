import React, { useState } from 'react';
import Input from '@/components/Input';
import { Report, PatientDetails, ReportDetails, ReportResult } from '@/libs/interface';
import InsertTestReport from '@/components/admin/InsertTestReport';
import Button from '../Button';

interface EditComponentProps {
    defaultData: Report;
    onChange: (data: Report) => void
}

const EditComponent: React.FC<EditComponentProps> = ({ defaultData, onChange }) => {
    const [report, setReport] = useState<Report>(defaultData);
    const [totalResult, setTotalResult] = useState<number>(defaultData.testResults.length);

    const emptyResult: ReportResult = {
        testName: '',
        result: '',
        unit: '',
        referenceRange: '',
    };

    const updateData = () => {
        onChange(report)
    }

    const handleAddTestReport = () => {
        setReport((prevReport) => ({
            ...prevReport,
            testResults: [...prevReport.testResults, emptyResult],
        }));
        setTotalResult((prevTotal) => prevTotal + 1);
        updateData()
    };

    const handleOnDestroy = (indexToRemove: number) => { // Not Working
        console.log(indexToRemove)
        setReport((prevReport) => ({
            ...prevReport,
            testResults: prevReport.testResults.filter((_, index) => index !== indexToRemove),
        }));
        setTotalResult((prevTotal) => prevTotal - 1);
        updateData()
    };

    const handleChange = (path: string, value: string | number | boolean) => {
        const pathArr = path.split('.');
        if (pathArr.length === 2) {
            setReport((prevReport) => ({
                ...prevReport,
                [pathArr[0]]: {
                    ...(prevReport[pathArr[0]] as PatientDetails | ReportDetails),
                    [pathArr[1]]: value,
                },
            }));
        } else {
            setReport((prevReport) => ({
                ...prevReport,
                [pathArr[0] as keyof Report]: value,
            }));
        }
        updateData()
    };

    return (
        <div>
            <div className='px-2 grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-2'>
                <Input
                    label='Patient ID'
                    labelClassName='ml-1'
                    value={report.patientId}
                    className='w-full'
                    onChange={(e) => handleChange('patientId', e.target.value)}
                    active={false}
                />
                <Input
                    label='Patient Name'
                    labelClassName='ml-1'
                    className='w-full'
                    value={report.patientDetails['Patient Name']}
                    onChange={(e) => handleChange('patientDetails.Patient Name', e.target.value)}
                />
                <Input
                    label='Age'
                    labelClassName='ml-1'
                    className='w-full'
                    value={report.patientDetails.Age.toString()}
                    onChange={(e) => handleChange('patientDetails.Age', parseInt(e.target.value))}
                />
                <Input
                    label='Referred By'
                    labelClassName='ml-1'
                    className='w-full'
                    value={report.patientDetails['Referred By']}
                    onChange={(e) => handleChange('patientDetails.Referred By', e.target.value)}
                />
                <Input
                    label='Barcode No'
                    labelClassName='ml-1'
                    className='w-full'
                    value={report.patientDetails.BarcodeNo.toString()}
                    onChange={(e) => handleChange('patientDetails.BarcodeNo', parseInt(e.target.value))}
                />
                <Input
                    label='Sample Collection Time'
                    labelClassName='ml-1'
                    className='w-full'
                    value={report.reportDetails['Sample Collection Time']}
                    onChange={(e) => handleChange('reportDetails.Sample Collection Time', e.target.value)}
                />
                <Input
                    label='Received Time'
                    labelClassName='ml-1'
                    className='w-full'
                    value={report.reportDetails['Received Time']}
                    onChange={(e) => handleChange('reportDetails.Received Time', e.target.value)}
                />
                <Input
                    label='Approved Time'
                    labelClassName='ml-1'
                    className='w-full'
                    value={report.reportDetails['Approved Time']}
                    onChange={(e) => handleChange('reportDetails.Approved Time', e.target.value)}
                />
                <Input
                    label='Client Group'
                    labelClassName='ml-1'
                    className='w-full'
                    value={report.reportDetails['Client Group']}
                    onChange={(e) => handleChange('reportDetails.Client Group', e.target.value)}
                />
            </div>
            <div>
                {Array.from({ length: totalResult }, (_, index) => (
                    <div key={String(index)}>
                        <InsertTestReport
                            onDestroy={() => handleOnDestroy(index)}
                            data={report.testResults[index] || emptyResult}
                            onChange={(e) => {
                                setReport((prevReport) => {
                                    const updatedResults = [...prevReport.testResults];
                                    updatedResults[index] = e;
                                    return {
                                        ...prevReport,
                                        testResults: updatedResults,
                                    };
                                });
                            }}
                        />
                    </div>
                ))}
            </div>
            <Button onClick={handleAddTestReport} innerText='Add' />
        </div>
    );
};

export default EditComponent;