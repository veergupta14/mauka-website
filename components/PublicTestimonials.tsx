"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  message: string;
}

export default function PublicTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const snapshot = await getDocs(collection(db, "testimonials"));
      const data = snapshot.docs.map((doc) => doc.data() as Testimonial);
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#FFFDF6] py-20 px-4 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-[#F96A0B] text-center mb-10">What People Say About Mauka</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border border-orange-100"
          >
            <p className="text-gray-700 italic mb-4">“{t.message}”</p>
            <p className="text-sm font-semibold text-[#F96A0B]">— {t.name}, {t.role}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
