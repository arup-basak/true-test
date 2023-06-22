import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import BloodTestReportSchema from '@/schemas/report.schema'

const URI: string = process.env.DB_URI || "mongodb://localhost:27017/reports";

interface ResponseProp {
    success: boolean
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseProp>
) {
    try {
        await mongoose.connect(URI);

        const model = mongoose.models.bloodtestreports || mongoose.model('bloodtestreports', BloodTestReportSchema);

        const report = new model(req.body)

        if (req.method == 'POST')
            report.save()
                .then(() => {
                    res.status(200).json({ success: true });
                })
                .catch((e: any) => {
                    console.log(e)
                    res.status(500).json({ success: false });
                });

    } catch(e: any) {
        console.log(e)
        res.status(500).json({ success: false });
    }
}
