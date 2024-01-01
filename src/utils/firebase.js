// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLGq4Pi_Sb4pLrMw48UX9jI8mCf-lAhPA",
  authDomain: "netflixgpt-2cd07.firebaseapp.com",
  projectId: "netflixgpt-2cd07",
  storageBucket: "netflixgpt-2cd07.appspot.com",
  messagingSenderId: "122088878767",
  appId: "1:122088878767:web:d974c70b1ea87dd4139a5a",
  measurementId: "G-SC5MFSLJR8"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();