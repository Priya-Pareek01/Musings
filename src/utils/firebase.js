// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAhNtPQHw12pf_w1Yrfh-8lzyIyw_uTPoA",
//   authDomain: "musings-cd129.firebaseapp.com",
//   projectId: "musings-cd129",
//   storageBucket: "musings-cd129.appspot.com",
//   messagingSenderId: "370218263209",
//   appId: "1:370218263209:web:cb752cb8214e3191e3ffb8"
// };

// export const app = initializeApp(firebaseConfig);


// firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "musings-cd129.firebaseapp.com",
  projectId: "musings-cd129",
  storageBucket: "musings-cd129.appspot.com",
  messagingSenderId: "370218263209",
  appId: "1:370218263209:web:cb752cb8214e3191e3ffb8"
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage, app };
