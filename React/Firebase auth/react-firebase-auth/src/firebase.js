// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYweTsDLJcjYsm8qG5u8dFYebdqCPDVxM",
  authDomain: "hello-world-30eb8.firebaseapp.com",
  projectId: "hello-world-30eb8",
  storageBucket: "hello-world-30eb8.appspot.com",
  messagingSenderId: "941751996587",
  appId: "1:941751996587:web:967c1ce7e9b55d77e1a7ee",
  measurementId: "G-8K2ZCLX4BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
