"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";

interface Certificate {
  name: string;
  rating: number;
  fileURL: string;
}

export default function CertificateGallery() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      const snapshot = await getDocs(collection(db, "certificates"));
      const data = snapshot.docs.map((doc) => doc.data() as Certificate);
      setCertificates(data);
    };
    fetchCertificates();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#FFFDF6] min-h-screen px-6 py-20 text-[#1C1C1C] font-sans"
    >
      <h2 className="text-4xl font-bold text-[#F96A0B] text-center mb-10">
        Certificate Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-all"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#F96A0B] mb-1">{cert.name}</h3>
              <p className="text-sm text-gray-700 mb-3">Rated ⭐ {cert.rating}</p>
              <a
                href={cert.fileURL}
                target="_blank"
                className="text-blue-600 hover:underline text-sm"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}