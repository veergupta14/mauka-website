"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
  Timestamp,
} from "firebase/firestore";
import { MotionDiv } from "@/lib/motion";

interface Testimonial {
  id?: string;
  name: string;
  role: string;
  message: string;
  createdAt?: Timestamp;
}

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const fetchTestimonials = async () => {
    const snapshot = await getDocs(collection(db, "testimonials"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Testimonial));
    setTestimonials(data);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const addTestimonial = async () => {
    if (!name || !role || !message) return;
    await addDoc(collection(db, "testimonials"), {
      name,
      role,
      message,
      createdAt: Timestamp.now(),
    });
    setName("");
    setRole("");
    setMessage("");
    fetchTestimonials();
  };

  const removeTestimonial = async (id: string) => {
    await deleteDoc(doc(db, "testimonials", id));
    fetchTestimonials();
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#F96A0B] mb-4">Add Testimonial</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-4 py-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Role (e.g., NGO Head / Volunteer)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border px-4 py-2 mb-3 rounded"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border px-4 py-2 mb-4 rounded h-28"
        />
        <button
          onClick={addTestimonial}
          className="bg-[#F96A0B] text-white px-6 py-2 rounded-lg hover:bg-orange-700"
        >
          Submit
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#F96A0B] mb-4">Existing Testimonials</h2>
        <ul className="space-y-4">
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="bg-[#FFFDF6] border border-orange-200 p-4 rounded-xl shadow"
            >
              <p className="text-lg font-semibold">{t.name} – {t.role}</p>
              <p className="text-gray-700 italic mt-2">“{t.message}”</p>
              <button
                onClick={() => t.id && removeTestimonial(t.id)}
                className="mt-3 text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </MotionDiv>
  );
}