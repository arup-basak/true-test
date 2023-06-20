import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    console.log(inputValue);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <>
      <Head>
        <title>Download Report</title>
      </Head>
      <motion.div
        className="flex tablet:items-center justify-center min-h-[90vh]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center">
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-md sm:w-64 md:w-96 m-1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoComplete='no'
          />
          <Link href={`/report/${inputValue}`}>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 m-1"
            onClick={handleSubmit}
          >
            Submit
          </button>
          </Link>
        </div>
      </motion.div>
    </>

  );
};

export default App;
