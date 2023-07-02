import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/libs/firebase'
import { collection, addDoc } from 'firebase/firestore'

interface ResponseProp {
    success: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseProp>
) {
    const reportRef = collection(db, "reports")

    try {
        await addDoc(reportRef, req.body);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
}

