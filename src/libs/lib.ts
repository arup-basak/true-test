import { Report } from "./interface";

export const generateRandomString = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

export const getRandomStringArray = (len: number) => {
    const array: string[] = [];

    for (let i = 0; i < len; i++) {
        const randomString = generateRandomString(7);
        array.push(randomString);
    }

    return array;
}

export const generateRandomNumber = () => {
    const currentTimeInMillis = new Date().getTime();
    return currentTimeInMillis
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