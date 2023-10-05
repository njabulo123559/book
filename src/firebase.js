// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiPArgHPUh9SYsbq9Pfrv_KQ3u6mgEdCA",
  authDomain: "ebook-b1fdf.firebaseapp.com",
  projectId: "ebook-b1fdf",
  storageBucket: "ebook-b1fdf.appspot.com",
  messagingSenderId: "602526938404",
  appId: "1:602526938404:web:96960781a101bc2ce72fb1",
  measurementId: "G-7ENG8X6QBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { app, analytics, auth}

