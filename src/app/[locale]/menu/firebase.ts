// firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  databaseURL:
    "https://multilangualdata-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase app (if not already initialized)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export the Firebase Realtime Database instance
export const db = getDatabase(app);
