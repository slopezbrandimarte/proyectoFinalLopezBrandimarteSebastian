// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore }from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCMZu5-HdpJiEHAi6YltFa64pvMIUYcXig",
    authDomain: "om-shanti-2b526.firebaseapp.com",
    projectId: "om-shanti-2b526",
    storageBucket: "om-shanti-2b526.appspot.com",
    messagingSenderId: "1056549219054",
    appId: "1:1056549219054:web:bd1e2d1766c8eace2da1ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app)

export const auth = getAuth(app)

export const googleProvider= new GoogleAuthProvider()
