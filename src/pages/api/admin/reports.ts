import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/libs/firebase'
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method !== 'POST') {
        res.status(200).json({ "message": "Bad Gateway" })
        return;
    }

    const ref = collection(db, 'reports');
    const q = req.query && req.query.patientId ?
        query(ref, where("patientId", "==", String(req.query.patientId))) :
        query(ref)

    const querySnapshot = await getDocs(q)
    const reports = querySnapshot.docs.map((doc) => doc.data());
    if (reports) {
        res.status(200).json(req.query && req.query.patientId ? reports[0] : reports)
    }
    else
        res.status(500).json({ "message": "error" })



}
