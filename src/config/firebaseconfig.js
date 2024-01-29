// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider}from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp-Du0Dj1hHEeC0GRaXCxYfapS9aowSFA",
  authDomain: "buget-manager.firebaseapp.com",
  projectId: "buget-manager",
  storageBucket: "buget-manager.appspot.com",
  messagingSenderId: "921564831111",
  appId: "1:921564831111:web:0fe0eae0201efff95d4722",
  measurementId: "G-4X9SM2KGR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider =new GoogleAuthProvider();
export const db =getFirestore(app);