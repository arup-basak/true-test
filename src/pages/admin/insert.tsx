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
  const emptyData: Report = getEmptyReport();
  const refData = useRef<Report>(emptyData)

  const { push } = useRouter()

  const handleAddData = async () => {
    const reportRef = collection(db, "reports")
    const docRef = doc(reportRef, refData.current.patientId)

    try {
      await setDoc(docRef, refData.current);
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
        <EditComponent
          defaultData={emptyData}
          onChange={(data: Report) => {
            refData.current = data
          }}
        />
        <Button
          innerText="Save as Draft"
          onClick={handleAddData}
        />
      </main>
    </>
  );
};

export default Add;
