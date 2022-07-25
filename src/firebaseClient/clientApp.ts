// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlVYeafSLECS2-MgwL0xzDlH9QoM52sU0",
  authDomain: "nautstudio-85e01.firebaseapp.com",
  databaseURL: "https://nautstudio-85e01-default-rtdb.firebaseio.com",
  projectId: "nautstudio-85e01",
  storageBucket: "nautstudio-85e01.appspot.com",
  messagingSenderId: "141960963172",
  appId: "1:141960963172:web:6ac9c0bfc32fafcbf32b71",
  measurementId: "G-S8YK30VCPT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
