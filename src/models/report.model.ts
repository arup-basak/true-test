import mongoose from "mongoose";

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

export default BloodTestReportSchema