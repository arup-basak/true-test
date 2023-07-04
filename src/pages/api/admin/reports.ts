import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/libs/firebase'
import { collection, getDocs, getDoc, query, where, doc } from 'firebase/firestore';


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
        const docRef = doc(db, "reports", String(req.query.patientId));
        const report = await getDoc(docRef);
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