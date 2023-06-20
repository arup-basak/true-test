import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import BloodTestReportSchema from '@/models/report.model';

const URI: string = process.env.DB_URI || "mongodb://localhost:27017/reports";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");

        const model = mongoose.models.bloodtestreports || mongoose.model('bloodtestreports', BloodTestReportSchema);

        const response = await model.findOne({ "patientId": req.query.id });
        res.status(200).json(response);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "no data" });
    }
}
