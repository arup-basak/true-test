import React from 'react';

const Status = ({ status }: { status: string }) => {
  const statusColors: Record<string, string> = {
    'success': 'border-green-900 bg-green-500',
    'payment-required': 'border-red-900 bg-red-500',
    'draft': 'border-yellow-900 bg-yellow-500',
    'failed': 'border-violet-900 bg-violet-500',
  };
  const statusStrings: Record<string, string> = {
    'success': 'Success',
    'payment-required': 'Payment Required',
    'draft': 'Draft',
    'failed': "Failed"
  };

  const color = statusColors[status] || '';
  const statusString = statusStrings[status] || '';

  return (
    <div className={`text-[14px] tablet:text-xs select-none border rounded p-1 ${color} whitespace-nowrap text-white scale-75`}>
      {statusString}
    </div>
  );
};

export default Status;
