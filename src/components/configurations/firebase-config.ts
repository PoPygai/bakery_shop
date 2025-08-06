// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAO-uDzj9sfd6NURKxWTZIC33UQNWfGD5I",
    authDomain: "narco-shop.firebaseapp.com",
    projectId: "narco-shop",
    storageBucket: "narco-shop.firebasestorage.app",
    messagingSenderId: "954299007133",
    appId: "1:954299007133:web:1993ff8b50d1570a599474",
    measurementId: "G-T1P5VR6Q3Y"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db = getFirestore(app);