// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlrwnWlNaOhxBNnSW5vIlzjFh9gtjIpgc",
    authDomain: "fir-authentication-pract.firebaseapp.com",
    projectId: "fir-authentication-pract",
    storageBucket: "fir-authentication-pract.appspot.com",
    messagingSenderId: "19178707345",
    appId: "1:19178707345:web:e19f010c749327ca74e230"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;