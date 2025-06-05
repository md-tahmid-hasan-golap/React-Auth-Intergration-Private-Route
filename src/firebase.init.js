// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABh_5whQVKWj-qLU5q9n9MeUWObMz9c8E",
  authDomain: "auth-integration-d6955.firebaseapp.com",
  projectId: "auth-integration-d6955",
  storageBucket: "auth-integration-d6955.firebasestorage.app",
  messagingSenderId: "683812383771",
  appId: "1:683812383771:web:aa1c1d677cb3449501dcbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);