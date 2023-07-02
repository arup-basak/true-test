import React from 'react';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const DateTimePicker = (props: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <div className='flex flex-col'>
      <span className='p-2'>{props.label}</span>
      <input
        type='datetime-local'
        className='border p-2'
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default DateTimePicker;
