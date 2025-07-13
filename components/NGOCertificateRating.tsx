"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { motion } from "framer-motion";

interface Certificate {
  id: string;
  name: string;
  rating: number;
  fileURL: string;
}

export default function NGOCertificateRating() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  const fetchData = async () => {
    const q = query(collection(db, "certificates"), orderBy("rating", "desc"));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Certificate));
    setCertificates(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateRating = async (id: string, rating: number) => {
    const certRef = doc(db, "certificates", id);
    await updateDoc(certRef, { rating });
    fetchData();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-[#F96A0B]">Review & Rate Certificates</h2>
      <div className="space-y-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="border p-4 rounded-xl shadow-sm bg-[#FFFDF6]">
            <p className="font-semibold mb-1">{cert.name}</p>
            <a
              href={cert.fileURL}
              target="_blank"
              className="text-blue-600 hover:underline text-sm"
            >
              View Certificate
            </a>
            <div className="flex space-x-3 mt-3">
              {[1, 2, 3, 4, 5].map((r) => (
                <button
                  key={r}
                  onClick={() => updateRating(cert.id, r)}
                  className={`px-3 py-1 rounded-full border ${
                    cert.rating === r ? "bg-[#F96A0B] text-white" : "bg-gray-100"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}