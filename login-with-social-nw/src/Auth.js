import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,FacebookAuthProvider, signInWithPopup,signOut } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyAFPbVzf3zl-Sr9HunEdMUj_UAH1SLsvTw",
  authDomain: "social-nw-auth.firebaseapp.com",
  projectId: "social-nw-auth",
  storageBucket: "social-nw-auth.appspot.com",
  messagingSenderId: "564098139255",
  appId: "1:564098139255:web:2a187304a9ac3800c8f272",
  measurementId: "G-9L6X1C1VDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const gProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

export const signInWithGoogle = () =>{
    return signInWithPopup(auth,gProvider);
}

export const signInWithFb = () =>{
    return signInWithPopup(auth,fbProvider);
}

export const signOutUser = () => signOut(auth);