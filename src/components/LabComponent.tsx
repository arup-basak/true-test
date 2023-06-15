import React from 'react';
import { LabProps } from '@/libs/interface';

const LabComponent = (props: LabProps) => {
  return (
    <div className="text-center bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-2">{props.labName}</h1>
      <p className="text-gray-800">{props.labLocation}</p>
    </div>
  );
};

export default LabComponent;
