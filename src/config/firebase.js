// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDicInNd8w3Fimjzc7vxHEGgV5gxpubJLU",
    authDomain: "yepiiik.firebaseapp.com",
    databaseURL: "https://yepiiik.firebaseio.com",
    projectId: "yepiiik",
    storageBucket: "yepiiik.firebasestorage.app",
    messagingSenderId: "494410411618",
    appId: "1:494410411618:web:f8f43e6b29f26eba5a2b3b",
    measurementId: "G-0VBSPFMBVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);