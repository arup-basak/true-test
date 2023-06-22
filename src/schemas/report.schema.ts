import mongoose from "mongoose";

const BloodTestReportSchema = new mongoose.Schema({
    patientId: {
        type: Number,
        required: true
    },
    patientDetails: [{
        key: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    }],
    reportDetails: [{
        key: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    }],
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
                required: false
            },
            referenceRange: {
                type: String,
                required: true
            }
        }
    ],
    status: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

export default BloodTestReportSchema