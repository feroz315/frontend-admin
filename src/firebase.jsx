import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWoOL1fPQbv1AmVrouy6x1S-TB5cM2LZo",
  authDomain: "shopify-c4316.firebaseapp.com",
  projectId: "shopify-c4316",
  storageBucket: "shopify-c4316.appspot.com",
  messagingSenderId: "604920546778",
  appId: "1:604920546778:web:5edbb5f4dc65f408ce2ce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(app);

export { FirebaseAuth };