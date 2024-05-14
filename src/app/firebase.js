// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2CcIfOGZ9buRrhjGbU6OzpfWtABeiO84",
  authDomain: "hydrohealth-project.firebaseapp.com",
  projectId: "hydrohealth-project",
  storageBucket: "hydrohealth-project.appspot.com",
  messagingSenderId: "956354319325",
  appId: "1:956354319325:web:a144be4c942cc7a092dc34",
  measurementId: "G-4E63JLT05Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);