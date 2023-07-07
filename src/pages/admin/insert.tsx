import React, { useRef } from 'react';
import Head from 'next/head';
import { getEmptyReport } from '@/libs/lib';
import { Report } from '@/libs/interface';
import EditComponent from '@/components/admin/EditComponent';
import { db } from '@/libs/firebase'
import { collection, doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/router';
import Button from '@/components/Button';

const Add = () => {
  const { push } = useRouter()

  const handleAddData = async (data: Report) => {
    const reportRef = collection(db, "reports")
    const docRef = doc(reportRef, data.patientId)

    try {
      await setDoc(docRef, data);
      push('/admin')
    } catch (error) {
      alert("Error")
    }
  }
  return (
    <>
      <Head>
        <title>New Report</title>
      </Head>
      <main className="w-full bg-white">
        {/* <div className='flex justify-end mobile:w-full tablet:w-3/5 p-2 m-auto'>
          <Button
            innerText="Save as Draft"
            onClick={handleAddData}
          />
        </div> */}
        <div className='mobile:w-full tablet:w-3/5 m-auto pr-3'>
          <EditComponent
            defaultData={getEmptyReport()}
            onSave={(data: Report) => handleAddData(data)}
            saveText='Save As Draft'
          />
        </div>
      </main>
    </>
  );
};

export default Add;
