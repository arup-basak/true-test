import { PatientDetails, Report, ReportDetails, ReportResult } from "./interface";

export const generateDoc = (
    data: Report,
    URL: string
) => {
    const pDetails: PatientDetails = data.patientDetails
    const rDetails: ReportDetails = data.reportDetails

    const pData: string[][] = Object.entries(pDetails).map(([key, value]) => [key.toString(), value.toString()]);
    const tData: string[][] = Object.entries(rDetails).map(([key, value]) => [key.toString(), value.toString()]);

    const rData: string[][] = data.testResults.map((item) => [
        item.testName,
        String(item.result),
        item.unit,
        item.referenceRange
    ]);

    const testResult = [['TEST NAME', 'VALUE', 'UNIT', 'REFERENCE'], ...rData]

    const doc = {
        content: [
            {
                table: {
                    headerRows: 0,
                    widths: ['*', '*'],
                    body: [
                        [
                            {
                                table: {
                                    headerRows: 1,
                                    widths: ['*', '*'],
                                    body: pData
                                }
                            },
                            {
                                table: {
                                    headerRows: 1,
                                    widths: ['*', '*'],
                                    body: tData
                                }
                            }
                        ]
                    ]
                }
            },
            {
                table: {
                    headerRows: 1,
                    widths: ['*', '*', '*', '*'],
                    body: testResult
                }
            },
            { qr: URL },
        ]
    };
    return doc;
}