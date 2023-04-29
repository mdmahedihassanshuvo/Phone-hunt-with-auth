// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnC0vbARJr5xYrwMiD80HptYuDgIN7oeY",
  authDomain: "phone-hunt.firebaseapp.com",
  projectId: "phone-hunt",
  storageBucket: "phone-hunt.appspot.com",
  messagingSenderId: "255549994287",
  appId: "1:255549994287:web:ae50828ed44c7b80925dda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app