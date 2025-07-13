"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { MotionDiv } from "@/lib/motion";
import { MotionSection } from "@/lib/motion";

interface Certificate {
  name: string;
  rating: number;
  fileURL: string;
}

export default function CertificateSearchGallery() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [filtered, setFiltered] = useState<Certificate[]>([]);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchCertificates = async () => {
      const snapshot = await getDocs(collection(db, "certificates"));
      const data = snapshot.docs.map((doc) => doc.data() as Certificate);
      setCertificates(data);
      setFiltered(data);
    };
    fetchCertificates();
  }, []);

  useEffect(() => {
    const searchLower = search.toLowerCase();
    const filteredData = certificates.filter(
      (cert) =>
        cert.name.toLowerCase().includes(searchLower) &&
        (rating === 0 || cert.rating === rating)
    );
    setFiltered(filteredData);
  }, [search, rating, certificates]);

  return (
    <MotionSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#FFFDF6] min-h-screen px-6 py-20 text-[#1C1C1C] font-sans"
    >
      <h2 className="text-4xl font-bold text-[#F96A0B] text-center mb-10">
        Certificate Gallery
      </h2>
      <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/2"
        />
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="px-4 py-2 border rounded"
        >
          <option value={0}>All Ratings</option>
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>
              ⭐ {r} only
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((cert, idx) => (
          <MotionDiv
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
          </MotionDiv>
        ))}
      </div>
    </MotionSection>
  );
}