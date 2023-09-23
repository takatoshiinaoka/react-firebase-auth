// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALYrnlq9B0Y5TTWNmZ8nkeqCldJKX28-4",
  authDomain: "react-auth-20230923.firebaseapp.com",
  projectId: "react-auth-20230923",
  storageBucket: "react-auth-20230923.appspot.com",
  messagingSenderId: "1064391552256",
  appId: "1:1064391552256:web:ba1394935a03b4d2dd17e5",
  measurementId: "G-43XKSHVF7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
