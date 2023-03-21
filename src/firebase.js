// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrWVZ7lvwVRRj-OHQcsCVJwNBT2vvgnGw",
  authDomain: "social-4c592.firebaseapp.com",
  projectId: "social-4c592",
  storageBucket: "social-4c592.appspot.com",
  messagingSenderId: "718336755683",
  appId: "1:718336755683:web:0080e8d94cc9027ef442d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
