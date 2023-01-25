// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4C7TFHWzQme8xc8VykniFFJwyfCTDJ4E",
  authDomain: "smart-library-123.firebaseapp.com",
  projectId: "smart-library-123",
  storageBucket: "smart-library-123.appspot.com",
  messagingSenderId: "126970320728",
  appId: "1:126970320728:web:d4f7c81371c279f4cdf72d",
  measurementId: "G-QZK45FM39B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { analytics, auth }