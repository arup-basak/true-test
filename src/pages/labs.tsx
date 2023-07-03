import React from 'react';
import { LabProps } from '@/libs/interface';
import LabComponent from '@/components/LabComponent';
import Head from 'next/head';

const HomePage = () => {
  const dataArray: LabProps[] = [
    {
      labName: "Lab C",
      labLocation: "Location C"
    },
    {
      labName: "Lab D",
      labLocation: "Location D"
    },
    {
      labName: "Lab E",
      labLocation: "Location E"
    }
  ];
  return (
    <>
      <Head>
        <title>Labs</title>
      </Head>
      <div className='h-screen'>
        <div className='p-6 text-3xl m-auto w-max'>Visit our Labs</div>
        <div className='grid desktop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1 m-auto w-3/5 gap-2 p-2'>
          {dataArray.map((lab, index) => (
            <LabComponent key={index} labName={lab.labName} labLocation={lab.labLocation} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
