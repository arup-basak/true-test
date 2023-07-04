import { Report } from "./interface";

export const generateRandomNumber = () => {
    const min = 1000000000; // Minimum 10-digit number (inclusive)
    const max = 9999999999; // Maximum 10-digit number (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return randomNumber
}


export const getEmptyReport = (): Report => {
    const id = generateRandomNumber()
    return {
        patientId: id.toString(),
        patientDetails: {
            "Patient Id": id,
            "Patient Name": '',
            "Age": 0,
            "Referred By": '',
            "BarcodeNo": 0,
        },
        reportDetails: {
            "Sample Collection Time": '',
            "Received Time": '',
            "Approved Time": '',
            "Client Group": '',
        },
        testResults: [],
        status: 'draft',
        cost: 0,
        response: false,
    }
}