// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId

  apiKey: "AIzaSyB2TGJLIVqgZOYM2NhXb3P5cvtuvx48Hos",
  authDomain: "dentist-assignment-10.firebaseapp.com",
  projectId: "dentist-assignment-10",
  storageBucket: "dentist-assignment-10.appspot.com",
  messagingSenderId: "811050388461",
  appId: "1:811050388461:web:63beee80025228f7d675e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;