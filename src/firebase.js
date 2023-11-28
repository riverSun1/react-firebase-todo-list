import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "react-todo-list-10f4a.firebaseapp.com",
    projectId: "react-todo-list-10f4a",
    storageBucket: "react-todo-list-10f4a.appspot.com",
    messagingSenderId: "277014732832",
    appId: "1:277014732832:web:d44cd29fd064fd39b15c45",
    measurementId: "G-ZKMEG5SRMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);