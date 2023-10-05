import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDiPArgHPUh9SYsbq9Pfrv_KQ3u6mgEdCA",
  authDomain: "ebook-b1fdf.firebaseapp.com",
  projectId: "ebook-b1fdf",
  storageBucket: "ebook-b1fdf.appspot.com",
  messagingSenderId: "602526938404",
  appId: "1:602526938404:web:96960781a101bc2ce72fb1",
  measurementId: "G-7ENG8X6QBL"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

export default app;
