"use client";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import { motion } from "framer-motion";

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

export default function NGOLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      setError(null);
    } catch (err: any) {
      setError("Login failed: " + err.message);
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
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg mt-10"
    >
      {!user ? (
        <>
          <h2 className="text-2xl font-bold text-[#F96A0B] mb-4">NGO Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 mb-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-2 mb-4 rounded"
          />
          <button
            onClick={login}
            className="bg-[#F96A0B] text-white px-6 py-2 rounded-lg hover:bg-orange-700 w-full"
          >
            Login
          </button>
          {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
        </>
      ) : (
        <>
          <p className="mb-4 text-lg">Welcome, <strong>{user.email}</strong></p>
          <button
            onClick={logout}
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Logout
          </button>
        </>
      )}
    </motion.div>
  );
}