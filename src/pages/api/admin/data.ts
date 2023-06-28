import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import BloodTestReportSchema from '@/schemas/report.schema';

const URI: string = process.env.DB_URI || "mongodb://localhost:27017/reports";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method !== "POST")
        res.status(502).json({ message: "Bad Gateway" })
    try {
        await mongoose.connect(URI);

        const model = mongoose.models.bloodtestreports || mongoose.model('bloodtestreports', BloodTestReportSchema);

        const response = await model.find(req.body);
        if (response) {
            res.status(200).json(response);
        }
        else
            res.status(502).json({ "response": false })
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ "response": false });
    }
}
