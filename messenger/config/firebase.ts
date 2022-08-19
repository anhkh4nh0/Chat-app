// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMm0tFTYbBArPfJpNXs7D8GbTu3AiIXp0",
  authDomain: "messenger-2751a.firebaseapp.com",
  projectId: "messenger-2751a",
  storageBucket: "messenger-2751a.appspot.com",
  messagingSenderId: "361804126608",
  appId: "1:361804126608:web:1a1126d5d9eb7102e33b15"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }