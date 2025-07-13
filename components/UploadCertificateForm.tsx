"use client";
import React, { useState } from "react";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { MotionDiv } from "@/lib/motion";

export default function UploadCertificateForm() {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file || !name || rating === 0) {
      setMessage("⚠️ Please fill all fields and select a file.");
      return;
    }
    setLoading(true);

    try {
      const storageRef = ref(storage, `certificates/${name}-${Date.now()}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          setLoading(false);
          setMessage("❌ Upload failed. Try again.");
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, "certificates"), {
            name,
            rating,
            fileURL: downloadURL,
            createdAt: Timestamp.now(),
          });
          setMessage("✅ Certificate uploaded successfully!");
          setFile(null);
          setName("");
          setRating(0);
          setLoading(false);
        }
      );
    } catch (err) {
      setLoading(false);
      setMessage("❌ Something went wrong.");
    }
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-[#F96A0B]">Upload Certificate</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 border px-4 py-2 rounded"
      />

      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />

      <div className="mb-4">
        <label className="block mb-1 font-medium">Rating (1–5)</label>
        <div className="flex space-x-3">
          {[1, 2, 3, 4, 5].map((r) => (
            <button
              key={r}
              onClick={() => setRating(r)}
              className={
                rating === r
                  ? "px-3 py-1 rounded-full border bg-[#F96A0B] text-white"
                  : "px-3 py-1 rounded-full border bg-gray-100"
              }
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-[#F96A0B] text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-all"
      >
        {loading ? "Uploading..." : "Submit"}
      </button>

      {message && <p className="mt-4 font-medium text-center">{message}</p>}
    </MotionDiv>
  );
}
