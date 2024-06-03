import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "talki-133d5.firebaseapp.com",
  projectId: "talki-133d5",
  storageBucket: "talki-133d5.appspot.com",
  messagingSenderId: "825795156091",
  appId: "1:825795156091:web:6ee87585e74991f8f02ade",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
