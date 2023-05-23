import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBxLKZMVIRi02D2QTyu-g2mbxPZwdwmarc",
    authDomain: "books-app-50e2f.firebaseapp.com",
    projectId: "books-app-50e2f",
    storageBucket: "books-app-50e2f.appspot.com",
    messagingSenderId: "608109339246",
    appId: "1:608109339246:web:a7d8f42585851bc370bc7f",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
