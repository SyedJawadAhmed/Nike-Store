// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE09qj9IwbNuMePDRd3-RLeOBOs1vll70",
  authDomain: "finance-2ec64.firebaseapp.com",
  projectId: "finance-2ec64",
  storageBucket: "finance-2ec64.firebasestorage.app",
  messagingSenderId: "41660035763",
  appId: "1:41660035763:web:95c3a0923dcd318d17f6c6",
  measurementId: "G-GSZEFBSBS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);