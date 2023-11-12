// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaaoqCvUM8ikgMZaJ9kQiO0j6EXdf91zg",
  authDomain: "userauth-f38b9.firebaseapp.com",
  projectId: "userauth-f38b9",
  storageBucket: "userauth-f38b9.appspot.com",
  messagingSenderId: "458857603025",
  appId: "1:458857603025:web:ab8b7d8b3ebb0a8f73caf0",
  measurementId: "G-JSM1XML688"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);