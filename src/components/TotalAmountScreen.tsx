import React from 'react';

const TotalAmountScreen = (props: {
  totalAmount: number;
}) => {
  return (
    <div className="bg-gray-100 rounded-lg p-8">
      <div className="text-2xl font-bold text-center mb-4">Total Amount</div>
      <div className="text-4xl font-bold text-center text-green-500">
        ₹{props.totalAmount}
      </div>
    </div>
  );
};

export default TotalAmountScreen;
