import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxbcJpC3pYzwHjJw0v9hyzbk3EiXGRyU0",
  authDomain: "camsoori-tea-shop.firebaseapp.com",
  projectId: "camsoori-tea-shop",
  storageBucket: "camsoori-tea-shop.firebasestorage.app",
  messagingSenderId: "18061477530",
  appId: "1:18061477530:web:ed6e497ae50114d5554123",
  measurementId: "G-4MD9WC0V4G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDoc, getDocs };