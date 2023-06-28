import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import BloodTestReportSchema from '@/schemas/report.schema';

interface StatusMappings {
    [key: string]: number;
}

const statusMappings: StatusMappings = {
    draft: 502,
    'payment-required': 502,
    failed: 502,
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    let isAdmin = false;
    if (req.method === 'POST' && req.body) {
        if (
            req.body.username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
            req.body.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
        ) {
            isAdmin = true;
        }
    }
    try {
        const { id } = req.query;
        await mongoose.connect(process.env.DB_URI || "mongodb://localhost:27017/reports");

        const model = mongoose.models.bloodtestreports || mongoose.model('bloodtestreports', BloodTestReportSchema);

        const response = await model.findOne({ patientId: id }, { _id: 0 });
        if (response) {
            const { status } = response;
            if (!isAdmin && statusMappings[status]) {
                return res.status(statusMappings[status]).json({ status });
            }
            return res.status(200).json(response);
        } else {
            return res.status(502).json({ status: "error" });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ status: "error" });
    }
}
