import Input from '@/components/Input';
import { useState, ChangeEvent } from 'react';
import { ReportResult } from '@/libs/interface';
import delete_icon from 'public/trash_icon.svg'
import ImageButton from '../ImageButton';

interface InsertTestReportProps {
  onChange: (data: ReportResult) => void;
  data: ReportResult
  onDestroy: () => void
}

const InsertTestReport: React.FC<InsertTestReportProps> = ({ onChange, data, onDestroy }) => {
  const [testName, setTestName] = useState(data.testName);
  const [result, setResult] = useState(data.result);
  const [unit, setUnit] = useState(data.unit);
  const [referenceRange, setRef] = useState(data.referenceRange);

  const handleChange = (event: ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    const newValue = event.target.value;
    setter(newValue);
    onChange({ testName, result, unit, referenceRange, [event.target.id]: newValue });
  };

  return (
    <div className='p-5 m-3 bg-slate-100 rounded-2xl shadow'>
      <div className='w-full flex justify-end'>
        <ImageButton
          src={delete_icon}
          altText='Delete Button'
          onClick={onDestroy}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col">
          <label htmlFor="testName" className="mb-1">
            Test Name
          </label>
          <Input
            id="testName"
            className="w-full rounded-2xl"
            placeholder="Enter test name"
            value={testName}
            onChange={(e) => handleChange(e, setTestName)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="value" className="mb-1">
            Value
          </label>
          <Input
            id="value"
            className="w-full rounded-2xl"
            placeholder="Enter value"
            value={result}
            onChange={(e) => handleChange(e, setResult)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="unit" className="mb-1">
            Unit
          </label>
          <Input
            id="unit"
            className="w-full rounded-2xl"
            placeholder="Enter unit"
            value={unit}
            onChange={(e) => handleChange(e, setUnit)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="reference" className="mb-1">
            Reference
          </label>
          <Input
            id="reference"
            className="w-full rounded-2xl"
            placeholder="Enter reference"
            value={referenceRange}
            onChange={(e) => handleChange(e, setRef)}
          />
        </div>
      </div>
    </div>
  );
};

export default InsertTestReport;
