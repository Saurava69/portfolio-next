import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let auth;
let googleProvider;
let db;
let analytics;

function getFirebaseAuth() {
  if (!auth) {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
    db = getFirestore(app);
  }
  return { auth, googleProvider, db };
}

async function initAnalytics() {
  if (analytics) return analytics;
  if (typeof window === "undefined") return null;
  const supported = await isSupported();
  if (supported) {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    analytics = getAnalytics(app);
  }
  return analytics;
}

export { getFirebaseAuth, initAnalytics };
