export interface ProductProps {
    productId: string,
    heading: string,
    price: number
}

export interface LabProps {
    labName: string,
    labLocation: string
}

export interface Table {
    key: string,
    value: string
}

export interface PatientDetails {
    "Patient Id": number,
    "Patient Name": string,
    "Age": number,
    "Referred By": string,
    "BarcodeNo": number
    [key: string]: string | number;
}

export interface ReportDetails {
    "Sample Collection Time": string,
    "Received Time": string,
    "Approved Time": string,
    "Client Group": string
}

export interface Report {
    patientId: number,
    patientDetails: PatientDetails
    reportDetails: ReportDetails
    testResults: ReportResult,
    status: "draft" | "success" | "payment-required" | "failed",
    cost: number,
    response: boolean
}

export interface ReportResult {
    testName: string,
    result: number,
    unit: string,
    referenceRange: string
}