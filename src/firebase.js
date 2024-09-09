// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt8sF5clftyoBQ5r5YP-kxMrBYDMG3QJI",
  authDomain: "fire-form-ec6e8.firebaseapp.com",
  projectId: "fire-form-ec6e8",
  storageBucket: "fire-form-ec6e8.appspot.com",
  messagingSenderId: "1051972479898",
  appId: "1:1051972479898:web:2475377b46ec71a1776823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}