// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mycon-blog-4f270.firebaseapp.com",
  projectId: "mycon-blog-4f270",
  storageBucket: "mycon-blog-4f270.appspot.com",
  messagingSenderId: "670984056583",
  appId: "1:670984056583:web:2e571a11b30f2f8605dfa2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
