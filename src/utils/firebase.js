// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE,
//   authDomain: "musings-cd129.firebaseapp.com",
//   projectId: "musings-cd129",
//   storageBucket: "musings-cd129.appspot.com",
//   messagingSenderId: "370218263209",
//   appId: "1:370218263209:web:cb752cb8214e3191e3ffb8"
// };

// export const app = initializeApp(firebaseConfig);

// utils/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "musings-cd129.firebaseapp.com",
  projectId: "musings-cd129",
  storageBucket: "musings-cd129.appspot.com",
  messagingSenderId: "370218263209",
  appId: "1:370218263209:web:cb752cb8214e3191e3ffb8"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };

