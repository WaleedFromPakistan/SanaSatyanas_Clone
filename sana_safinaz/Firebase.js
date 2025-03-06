import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC1rtUnA2nixFSkc1tCWmsTneToH8WUzdE",
  authDomain: "sanasafinaz-64d83.firebaseapp.com",
  projectId: "sanasafinaz-64d83",
  storageBucket: "sanasafinaz-64d83.firebasestorage.app",
  messagingSenderId: "728957299473",
  appId: "1:728957299473:web:68f4f8a1976889f6d87ab0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider();

export {auth , googleProvider, facebookProvider , db};