// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_0Bnpn18rCYkZXHTWIBy4fseDUYd8tf8",
  authDomain: "ema-john-simple-9eca0.firebaseapp.com",
  projectId: "ema-john-simple-9eca0",
  storageBucket: "ema-john-simple-9eca0.appspot.com",
  messagingSenderId: "687691319686",
  appId: "1:687691319686:web:32c531260fb60027df0407",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
