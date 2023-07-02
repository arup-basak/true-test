import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/libs/firebase';
import { collection, getDocs, getDoc, query, where } from 'firebase/firestore'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { id } = req.query;

    if (req.method !== 'POST') {
        res.status(500).json({ error: "Bad Gateway" });
        return;
    }
    try {
        const reportRef = collection(db, "reports");
        const q = query(reportRef, where("patientId", "==", id));

        const querySnapshot = await getDocs(q);
        const reports = querySnapshot.docs.map((doc) => doc.data());
        if (reports && reports[0].status === 'success') {
            res.status(200).json(reports[0]);
            return;
        }
        res.status(200).json({ "status": reports[0].status });
    } catch (error) {
        console.error("Error querying Firestore:", error);
        res.status(500).json({ error: "Error querying Firestore" });
    }
}
