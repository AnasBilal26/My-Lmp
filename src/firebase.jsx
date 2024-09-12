/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBeWBESqlxh_1DQxwDSbF0yYbVV1OedoMw',
  authDomain: 'authentication-e2eb5.firebaseapp.com',
  projectId: 'authentication-e2eb5',
  storageBucket: 'authentication-e2eb5.appspot.com',
  messagingSenderId: '22451946868',
  appId: '1:22451946868:web:c135039c2bbac599df1821',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
