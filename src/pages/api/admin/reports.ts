import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/libs/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method !== 'POST') {
        res.status(200).json({ "message": "Bad Gateway" })
        return;
    }

    const ref = collection(db, 'reports');
    if (req.query && req.query.patientId) {
        const q = query(ref, where("patientId", "==", String(req.query.patientId)))

        const querySnapshot = await getDocs(q)
        const report = querySnapshot.docs[0];
        if (report) {
            res.status(200).json(report.data())
        }
        else {
            res.status(500).json({ "message": "error" })
        }
    }
    else {
        const q = query(ref)
        const querySnapshot = await getDocs(q)
        const reports = querySnapshot.docs.map((doc) => doc.data());
        if (reports) {
            res.status(200).json(reports)
        }
        else {
            res.status(500).json({ "message": "error" })
        }
    }
}