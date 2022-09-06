// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxdUxR2TqWxGdh-8NSUGCOhqSLFtS5CPE",
  authDomain: "blog-4a8de.firebaseapp.com",
  projectId: "blog-4a8de",
  storageBucket: "blog-4a8de.appspot.com",
  messagingSenderId: "65250224132",
  appId: "1:65250224132:web:30a57b0bbc037025c5ed51"
};

// Initialize Firebase
export const handle = initializeApp(firebaseConfig);
