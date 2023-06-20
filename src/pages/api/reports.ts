import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

const URI: string = process.env.DB_URI || "mongodb://localhost:27017/reports";

const BloodTestReportSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  patientId: {
    type: Number,
    required: true
  },
  testResults: [
    {
      testName: {
        type: String,
        required: true
      },
      result: {
        type: Number,
        required: true
      },
      unit: {
        type: String,
        required: true
      },
      referenceRange: {
        type: String,
        required: true
      }
    }
  ]
}, {
  timestamps: true
});

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
