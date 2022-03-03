import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs } from 'firebase/firestore';

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

export const registerNewReport = async () => {
    const reportDateTime = new Date().toISOString();
    const reportDate = reportDateTime.split("T");

    const reportRef = doc(firestore, `reports/${reportDate[0]}`);
    const snapShot = await getDoc(reportRef);
    if(!snapShot.exists()) {
        try {
            await setDoc(reportRef, {
                reportDateTime
            });
            return reportRef;
        } catch (error) {
            console.log('Error creating a report', error.message);
        }
    }

    throw new Error("Document already exists.");
}

export const importTracklist = async (tracklist, reportRef) => {
    tracklist.forEach(track => {
        const trackRef = addDoc(collection(firestore, `reports/${reportRef.id}/${track.barcode || "_undefined"}`), {
            track
        });
        return trackRef;
    })
}

export const fetchTracklistByBarcode = async (barcode, report) => {
    const tracklistRef = collection(firestore, `reports/${report}/${barcode}`);
    const snapShot = await getDocs(tracklistRef);
    if(snapShot.docs.length < 1) {
        throw new Error("Tracklist could not be fetched for: " + report + '/' + barcode);
    }
    const trackList = snapShot.docs.map(track => {
        const trackData = track.data();
        return {
            id: track.id,
            ...trackData.track
        }
    });
    return trackList;
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}