export interface ProductProps {
    productId: string,
    heading: string,
    price: number
}

export interface LabProps {
    labName: string,
    labLocationLink: string
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
    [key: string]: string | number | boolean;
}

export interface ReportDetails {
    "Sample Collection Time": string,
    "Received Time": string,
    "Approved Time": string,
    "Client Group": string
    [key: string]: string | number | boolean;
}

export interface Report {
    patientId: string,
    patientDetails: PatientDetails
    reportDetails: ReportDetails
    testResults: ReportResult[],
    status: "draft" | "success" | "payment-required" | "failed",
    cost: number,
    response: boolean
    [key: string]: string | number | boolean | PatientDetails | ReportDetails | ReportResult | ReportResult[],
}

export interface ReportResult {
    testName: string,
    result: string,
    unit: string,
    referenceRange: string,
    // interpretation: string
}