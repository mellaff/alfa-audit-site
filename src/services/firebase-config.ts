import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD27wR-1NeAkjll24zWalKYPR1c3GpPz5k",
    authDomain: "alfa-audit.firebaseapp.com",
    projectId: "alfa-audit",
    storageBucket: "alfa-audit.appspot.com",
    messagingSenderId: "309505733253",
    appId: "1:309505733253:web:d0532860a1a3881bd4efec",
    measurementId: "G-4DJP9FFME7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
