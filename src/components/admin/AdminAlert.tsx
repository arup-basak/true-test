import React, { useState } from 'react';
import RadioGroup from '../RadioGroup';
import Button from '../Button';

const options = [
  { key: "NULL", value: 'No Filter' },
  { key: 'success', value: 'Success' },
  { key: 'payment-required', value: 'Payment Required' },
  { key: 'draft', value: 'Draft' },
  { key: 'failed', value: 'Failed' }
];

interface Props {
  setFilter: (value: string) => void,
  visibility: boolean
}

const AdminAlert = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleButtonClick = () => {
    props.setFilter(selectedOption);
  };

  return (
    <div className={`${props.visibility ? "flex" : "hidden"} items-center justify-center fixed inset-0  bg-[#00000079]`}>
      <div className="bg-white p-6 rounded-lg shadow-lg flex justify-center flex-col">
        <div className="flex justify-center items-center">
          <span className="text-base p-3 select-none">Status:</span>
          <RadioGroup
            values={options.map(option => option.value)}
            onChange={(id: number) => {
              setSelectedOption(options[id].key)
            }}
            activeValue={0}
          />
        </div>
        <Button innerText="Filter" onClick={handleButtonClick} className="px-5 text-base mt-4 mb-2" />
      </div>
    </div>
  );
};

export default AdminAlert;