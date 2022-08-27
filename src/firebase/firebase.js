import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-71iIbVyszNhkc58Ol-EVKupgr8jhDn0",
    authDomain: "fir-react-837ba.firebaseapp.com",
    projectId: "fir-react-837ba",
    storageBucket: "fir-react-837ba.appspot.com",
    messagingSenderId: "1082539296070",
    appId: "1:1082539296070:web:d7330034670455667ad147"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
export const db = firebaseApp.firestore();
