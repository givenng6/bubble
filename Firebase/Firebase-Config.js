import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4__EMQPG4wLKSlSYMawOYeqDEMErvYrE",
  authDomain: "bubble-116c3.firebaseapp.com",
  projectId: "bubble-116c3",
  storageBucket: "bubble-116c3.appspot.com",
  messagingSenderId: "1088812327912",
  appId: "1:1088812327912:web:e09dcfa536ac9db547fa5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
