// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword , onAuthStateChanged  , signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALFeL4HyB-v09IroJfQyyDipTR48_SUDg",
  authDomain: "storage-6e263.firebaseapp.com",
  projectId: "storage-6e263",
  storageBucket: "storage-6e263.firebasestorage.app",
  messagingSenderId: "743184590510",
  appId: "1:743184590510:web:9c402ca0eaca4a687f2f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {
    app,
    auth,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword 
    , onAuthStateChanged,
    signOut
}