// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0vFoQtCjHKXUrMS-vBWm-x54mbKFWvfw",
  authDomain: "test2-12499.firebaseapp.com",
  projectId: "test2-12499",
  storageBucket: "test2-12499.appspot.com",
  messagingSenderId: "458917039365",
  appId: "1:458917039365:web:691fcfe62ec42a2407bb6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
