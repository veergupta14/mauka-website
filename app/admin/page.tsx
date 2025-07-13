"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TestimonialsManager from "../../components/TestimonialsManager";
import AnalyticsDashboard from "../../components/AnalyticsDashboard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("certificates");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#FFFDF6] text-center px-4">
        <h2 className="text-2xl font-bold mb-4 text-[#F96A0B]">Access Denied</h2>
        <p className="text-gray-600 max-w-md">
          You must be signed in via Google to view this page. If you believe this is an error, please contact the Core Team.
        </p>
      </div>
    );
  }

  const renderContent = () => {
    switch (tab) {
      case "certificates":
        return <div className="py-4">Certificate uploads panel coming soon.</div>;
      case "leaderboard":
        return <div className="py-4">Leaderboard editor coming soon.</div>;
      case "testimonials":
        return <TestimonialsManager />;
      case "analytics":
        return <AnalyticsDashboard />;
      default:
        return null;
    }
  };

  return (
    <main className="bg-[#FFFDF6] min-h-screen px-6 py-20 text-[#1C1C1C] font-sans">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#F96A0B] mb-6">Admin Dashboard</h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome <strong>{user.displayName}</strong> 👋 Manage Mauka submissions and outreach tools below.
        </p>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setTab("certificates")}
            className={`px-4 py-2 rounded-lg text-sm ${
              tab === "certificates" ? "bg-[#F96A0B] text-white" : "bg-gray-100"
            }`}
          >
            Certificates
          </button>
          <button
            onClick={() => setTab("leaderboard")}
            className={`px-4 py-2 rounded-lg text-sm ${
              tab === "leaderboard" ? "bg-[#F96A0B] text-white" : "bg-gray-100"
            }`}
          >
            Leaderboard
          </button>
          <button
            onClick={() => setTab("testimonials")}
            className={`px-4 py-2 rounded-lg text-sm ${
              tab === "testimonials" ? "bg-[#F96A0B] text-white" : "bg-gray-100"
            }`}
          >
            Testimonials
          </button>
          <button
            onClick={() => setTab("analytics")}
            className={`px-4 py-2 rounded-lg text-sm ${
              tab === "analytics" ? "bg-[#F96A0B] text-white" : "bg-gray-100"
            }`}
          >
            Analytics
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md min-h-[200px]">
          {renderContent()}
        </div>
      </motion.section>
    </main>
  );
}
