import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoVRSUzrNWwxCGwpKUBz0Ii9p7R0whQok",
  authDomain: "luzetta-db.firebaseapp.com",
  projectId: "luzetta-db",
  storageBucket: "luzetta-db.appspot.com",
  messagingSenderId: "63787128816",
  appId: "1:63787128816:web:45478bcf7246205d802f35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const auth = getAuth();

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const createUserProfile = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);
    
    if(!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userRef, {
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
            console.log('error creating a user', error.message);
        }
    }

    return userRef;
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}