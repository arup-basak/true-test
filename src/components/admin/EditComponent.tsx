import React, { useRef, useState } from 'react';
import Input from '@/components/Input';
import { Report, PatientDetails, ReportDetails, ReportResult } from '@/libs/interface';
import InsertTestReport from '@/components/admin/InsertTestReport';
import { generateRandomString, getRandomStringArray } from '@/libs/lib';
import ImageButton from '../ImageButton';
import add_icon from 'public/add.svg'
import Button from '../Button';

interface EditComponentProps {
  defaultData: Report,
  onSave: (data: Report) => void
  saveText: string
}

const EditComponent = (props: EditComponentProps) => {
  const [data, setData] = useState(props.defaultData)

  const keyArr = useRef<string[]>(getRandomStringArray(data.testResults.length))

  const emptyResult: ReportResult = {
    testName: "",
    result: "",
    unit: "",
    referenceRange: ""
  }

  const getKey = (): string => {
    const key = generateRandomString(7)
    keyArr.current.push(key)
    return key
  }

  const handleAddTestReport = () => {
    keyArr.current.push(generateRandomString(7))
    const temp: Report = { ...data }
    temp.testResults.push(emptyResult)
    setData(temp)
  };

  const handleOnDestroy = (n: number) => {
    keyArr.current.splice(n, 1);
    const temp: Report = { ...data }

    if (n >= 0 && n < data.testResults.length) {
      temp.testResults.splice(n, 1);
    }
    setData(temp)
  };

  const handleChange = (path: string, value: string | number | boolean) => {
    const temp: Report = { ...data }
    const pathArr = path.split('.');

    if (pathArr.length === 2) {
      ((temp[pathArr[0]]) as PatientDetails | ReportDetails)[pathArr[1]] = value
    }
    else {
      temp[pathArr[0] as keyof Report] = value;
    }
    setData(temp)
  };

  return (
    <div>
      <Button
        innerText={props.saveText}
        onClick={() => {
          if(data)
            props.onSave(data)
        }}
      />
      <div className='px-2 grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-2'>
        <Input
          label="Patient ID"
          labelClassName='ml-1'
          value={data.patientId}
          className='w-full'
          onChange={e => handleChange("Patient Id", e.target.value)}
          active={false}
        />
        <Input
          label="Patient Name"
          labelClassName='ml-1'
          className='w-full'
          value={data.patientDetails['Patient Name']}
          onChange={e => handleChange("patientDetails.Patient Name", e.target.value)}
        />
        <Input
          label="Age"
          labelClassName='ml-1'
          className='w-full'
          value={data.patientDetails.Age.toString()}
          onChange={e => handleChange("patientDetails.Age", parseInt(e.target.value))}
        />
        <Input
          label="Referred By"
          labelClassName='ml-1'
          className='w-full'
          value={data.patientDetails['Referred By']}
          onChange={e => handleChange("patientDetails.Referred By", e.target.value)}
        />
        <Input
          label="Barcode No"
          labelClassName='ml-1'
          className='w-full'
          value={data.patientDetails.BarcodeNo.toString()}
          onChange={e => handleChange("patientDetails.BarcodeNo", parseInt(e.target.value))}
        />
        <Input
          label="Sample Collection Time"
          labelClassName='ml-1'
          className='w-full'
          value={data.reportDetails["Sample Collection Time"]}
          onChange={e => handleChange("reportDetails.Sample Collection Time", e.target.value)}
        />
        <Input
          label="Received Time"
          labelClassName='ml-1'
          className='w-full'
          value={data.reportDetails["Received Time"]}
          onChange={e => handleChange("reportDetails.Received Time", e.target.value)}
        />
        <Input
          label="Approved Time"
          labelClassName='ml-1'
          className='w-full'
          value={data.reportDetails["Approved Time"]}
          onChange={e => handleChange("reportDetails.Approved Time", e.target.value)}
        />
        <Input
          label="Client Group"
          labelClassName='ml-1'
          className='w-full'
          value={data.reportDetails["Client Group"]}
          onChange={e => handleChange("reportDetails.Client Group", e.target.value)}
        />
      </div>
      <div>
        {
          data.testResults.map((item, index) => {
            const key: string = keyArr.current[index] || getKey();
            return (
              <InsertTestReport
                key={key}
                onDestroy={() => handleOnDestroy(index)}
                data={item || emptyResult}
                onChange={(e) => {
                  const temp: Report = { ...data }
                  temp.testResults[index] = e
                  setData(temp)
                }}
              />
            )
          })
        }
      </div>
      <div className='w-full flex justify-center m-2'>
        <ImageButton
          className=' border border-black px-12'
          text='Add Test Report'
          src={add_icon}
          altText='Add'
          onClick={handleAddTestReport} />
      </div>

    </div>
  )
}

export default EditComponent