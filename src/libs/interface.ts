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

export interface Report {
    patientId: number,
    patientDetails: Table[]
    reportDetails: Table[]
    testResults: ReportResult[],
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