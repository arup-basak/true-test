import React from 'react';
import { LabProps } from '@/libs/interface';
import LabComponent from '@/components/LabComponent';
import Head from 'next/head';

const HomePage = () => {
  const dataArray: LabProps[] = [
    {
      labName: "Lab C",
      labLocationLink: "https://goo.gl/maps/rDRUbsE7U1mpB5dt9"
    },
    {
      labName: "Lab D",
      labLocationLink: "https://goo.gl/maps/E11mWJ5wEEtZewr89"
    },
    {
      labName: "Lab E",
      labLocationLink: "https://goo.gl/maps/qekgNotpUPt7oLA76"
    }
  ];
  return (
    <>
      <Head>
        <title>Labs</title>
      </Head>
      <div className='h-screen bg-black text-[#F2CC8F]'>
        <div className='p-6 text-3xl m-auto w-max'>Visit our Labs</div>
        <div className='grid desktop:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1 m-auto w-3/5 gap-2 p-2'>
          {dataArray.map((lab, index) => (
            <LabComponent
              key={index}
              labName={lab.labName}
              labLocationLink={lab.labLocationLink}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
