// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI3j-qoXED8uVjRIZ_LDZh67SYoCIksFs",
    authDomain: "pry-portafolio-d0dd1.firebaseapp.com",
    projectId: "pry-portafolio-d0dd1",
    storageBucket: "pry-portafolio-d0dd1.appspot.com",
    messagingSenderId: "323420261365",
    appId: "1:323420261365:web:1ac2465399d4b7546deebc"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db = getFirestore();// conexion a la BD
export {
  db,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
};
