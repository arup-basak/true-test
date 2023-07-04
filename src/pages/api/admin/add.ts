import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/libs/firebase'
import { collection, doc, setDoc } from 'firebase/firestore'

interface ResponseProp {
    success: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseProp>
) {
    const reportRef = collection(db, "reports")
    const ref = doc(reportRef, String(req.body.patientId))

    try {
        await setDoc(ref, req.body);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
}