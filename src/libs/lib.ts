export const generateRandomNumber = () => {
    const min = 1000000000; // Minimum 10-digit number (inclusive)
    const max = 9999999999; // Maximum 10-digit number (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return randomNumber
}