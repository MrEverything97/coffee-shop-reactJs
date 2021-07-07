import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlILDYji4_ut2nYj70NGJ2vP3w_x_nfac",
  authDomain: "coffee-house-353dc.firebaseapp.com",
  projectId: "coffee-house-353dc",
  storageBucket: "coffee-house-353dc.appspot.com",
  messagingSenderId: "168502646823",
  appId: "1:168502646823:web:838a39354c737ad0401602"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
if (typeof window !== 'undefined') window.Fire = firebase;
// export const storage = firebase.storage();







