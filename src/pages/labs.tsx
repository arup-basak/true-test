import React from 'react';
import { LabProps } from '@/libs/interface';
import LabComponent from '@/components/LabComponent';
import Head from 'next/head';

const HomePage: React.FC<{ labs: LabProps[] }> = ({ labs }) => {
  return (
    <>
      <Head>
        <title>Labs</title>
      </Head>
      <div className='h-screen'>
        <div className='p-6 text-3xl m-auto w-max'>Visit our Labs</div>
        <div className='grid grid-cols-2 m-auto w-3/4 gap-2 p-2'>
          {labs.map((lab, index) => (
            <LabComponent key={index} labName={lab.labName} labLocation={lab.labLocation} />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const URL = process.env.API_URL || "localhost:3000";
  const res = await fetch(URL + '/labs');
  const labs = await res.json();

  return {
    props: {
      labs
    },
  };
}


export default HomePage;
