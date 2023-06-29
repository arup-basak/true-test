import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Button from '@/components/Button';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const { push } = useRouter();

  const handleSubmit = () => {
    push(`/report/${inputValue}`);
  };

  return (
    <>
      <Head>
        <title>Download Report</title>
      </Head>
      <motion.div
        className="flex tablet:items-center justify-center min-h-[88vh]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="flex m-5 tablet:items-center h-fit">
          <Input 
            className='tablet:min-w-[300px] mobile:text-sm tablet:text-base'
            placeholder='Patient Id'
            onChange={(e) => { setInputValue(e.target.value) }} 
            onEnterClick={handleSubmit}
            autoFocus={true}
            maxLen={10}
            />
          <Button
            onClick={handleSubmit}
            innerText="Get Report"
            animation={true}
            className='m-1 px-4 whitespace-nowrap mobile:text-sm tablet:text-base'
          />
        </div>
      </motion.div>
    </>

  );
};

export default App;
