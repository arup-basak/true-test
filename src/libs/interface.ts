export interface ProductProps {
    productId: string,
    heading: string,
    price: number
}

export interface LabProps {
    labName: string,
    labLocation: string
}

export interface Report {
    patientName: string,
    patientId: number,
    age: number,
    testResults: ReportResult[]
}

export interface ReportResult {
    testName: string,
    result: number,
    unit: string,
    referenceRange: string
}