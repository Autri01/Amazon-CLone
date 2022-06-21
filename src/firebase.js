import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4jNGNMkIZ-fTLJp8t1rnEsJFCsLdsii4",
  authDomain: "clone-8a726.firebaseapp.com",
  projectId: "clone-8a726",
  storageBucket: "clone-8a726.appspot.com",
  messagingSenderId: "503843535692",
  appId: "1:503843535692:web:1063d7fa9d1e1a9ad62de9",
  measurementId: "G-0HZYYWF9X0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
