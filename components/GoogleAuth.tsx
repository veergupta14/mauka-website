"use client";
import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { motion } from "framer-motion";
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function GoogleAuth() {
  const [user, setUser] = useState<any>(null);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center py-10"
    >
      {!user ? (
        <button
          onClick={login}
          className="bg-[#F96A0B] text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all"
        >
          Sign in with Google
        </button>
      ) : (
        <div className="space-y-4">
          <p className="text-lg">Signed in as <strong>{user.displayName}</strong></p>
          <button
            onClick={logout}
            className="bg-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300"
          >
            Log out
          </button>
        </div>
      )}
    </motion.div>
  );
}