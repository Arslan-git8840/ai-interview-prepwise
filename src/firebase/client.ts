import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCiv5RRCQX_jtLQvSNxLfdoPmVdM9tVQfU",
  authDomain: "prepwise-6b4e8.firebaseapp.com",
  projectId: "prepwise-6b4e8",
  storageBucket: "prepwise-6b4e8.firebasestorage.app",
  messagingSenderId: "383431330245",
  appId: "1:383431330245:web:c791fcde0e761c57d723ac",
  measurementId: "G-1D6D9333R8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
