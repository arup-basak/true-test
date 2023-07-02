import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: String(process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
    authDomain: String(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
    projectId: String(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
    storageBucket: String(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
    messagingSenderId: String(process.env.NEXT_PUBLIC_MESSAGING_SENDER_KEY),
    appId: String(process.env.NEXT_PUBLIC_FIREBASE_APP_ID),
    measurementId: String(process.env.NEXT_PUBLIC_IREBASE_MEASURMENT_ID)
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);