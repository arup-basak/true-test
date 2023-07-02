import { Report } from '@/libs/interface'
import React, { useState } from 'react'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import ImageButton from '@/components/ImageButton'
import edit_icon from 'public/edit.svg'
import Status from './Status'
import PaymentDoneButton from './PaymentDone'
import { db } from '@/libs/firebase'
import { setDoc, getDoc, collection, where, query, getDocs, updateDoc, doc } from 'firebase/firestore'

interface ReportProp {
    data: Report,
    id: number
}

const MinReportCard = (
    { data, id }: ReportProp
) => {
    const { push } = useRouter();
    const pName = data.patientDetails['Patient Name']

    const [status, setStatus] = useState(data.status)

    const handleOnClick = async () => { // Not Working
        const ref = collection(db, "reports");
        const q = query(ref, where("patientId", "==", data.patientDetails['Patient Id']));
    
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const docRef = querySnapshot.docs[0].ref;
    
            await updateDoc(docRef, { status: "success" })
                .then(() => {
                    console.log("success");
                    setStatus("success");
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };
    
      
        
        // const querySnapshot = await getDocs(q);
        // querySnapshot.forEach(async (doc) => {
        //     const docRef = doc.ref;
        //     const documentSnapshot = await getDoc(docRef);

        //     if (documentSnapshot.exists()) {
        //         const updatedData = { status: "success" };
        //         await setDoc(docRef, updatedData, { merge: true });
        //         setStatus("success")
        //     } else {
        //         console.log("Document not found.");
        //     }
        // });

    // }

    return (
        <div className='bg-slate-200 rounded p-2 px-4 w-full my-3 flex items-center justify-between transition shadow-md hover:bg-slate-300 mobile:text-sm tablet::text-base'>
            <div>
                {`${id + 1}. ${pName}`}
            </div>
            <div className='flex items-center'>
                {
                    status === 'payment-required' && (
                        <PaymentDoneButton onClick={handleOnClick} />
                    )
                }
                <Status 
                    key={String(data.patientDetails['Patient Id'])}
                    status={status} />
                <ImageButton
                    src={edit_icon}
                    altText='Edit Icon'
                    onClick={() => { push(`/admin/edit/${data.patientId}`) }}
                />
                <Button
                    innerText='Get Report'
                    onClick={() => push(`/admin/report/${data.patientId}`)} />
            </div>
        </div>
    )
}

export default MinReportCard