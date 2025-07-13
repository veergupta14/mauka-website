"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function UploadCertificatesPage() {
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  const handleUpload = () => {
    if (!file || rating === 0) return alert("Upload a certificate and rate first.");
    setSubmitted(true);
    // Firebase upload logic will go here
  };

  return (
    <main className="bg-[#FFFDF6] min-h-screen px-6 py-20 text-[#1C1C1C] font-sans">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#F96A0B] mb-6">Upload Certificates</h1>
        <p className="text-lg text-gray-700 mb-8">
          NGOs can upload volunteer certificates and rate student contribution. This helps us reward the most committed changemakers.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <label className="block mb-4 font-medium">Upload Certificate (PDF/JPG/PNG)</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mb-6 w-full text-sm"
          />

          <label className="block mb-4 font-medium">Rate the Volunteer (1–5)</label>
          <div className="flex space-x-3 mb-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => setRating(num)}
                className={`px-4 py-2 rounded-full border ${
                  rating === num ? "bg-[#F96A0B] text-white" : "bg-gray-100"
                } transition`}
              >
                {num}
              </button>
            ))}
          </div>

          <button
            onClick={handleUpload}
            className="bg-[#F96A0B] text-white px-6 py-3 rounded-xl shadow-md hover:bg-orange-700 transition-all"
          >
            Submit
          </button>

          {submitted && (
            <p className="mt-4 text-green-600 font-medium">
              ✅ Certificate submitted successfully. Thank you!
            </p>
          )}
        </div>
      </motion.section>
    </main>
  );
}
