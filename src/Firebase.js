import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTNBH6sJzo4cG9GwIPdDjzsVvZhL2bx4U",
  authDomain: "clone-7e238.firebaseapp.com",
  projectId: "clone-7e238",
  storageBucket: "clone-7e238.appspot.com",
  messagingSenderId: "263437443917",
  appId: "1:263437443917:web:1e4d9960b84a92f5a90d04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
