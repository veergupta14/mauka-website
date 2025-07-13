
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#FFFDF6] min-h-screen px-6 py-20 text-[#1C1C1C] font-sans">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#F96A0B] mb-6">Get in Touch</h1>
        <p className="text-lg text-gray-700 mb-8">
          Want to collaborate, support us, or just say hi? Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full border rounded-md px-4 py-2 bg-[#FFFDF6]"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border rounded-md px-4 py-2 bg-[#FFFDF6]"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows={4}
              required
              className="w-full border rounded-md px-4 py-2 bg-[#FFFDF6]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#F96A0B] text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition-all shadow-md"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 font-medium pt-4">
              ✅ Your message has been sent. We’ll be in touch soon!
            </p>
          )}
        </form>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[#F96A0B] mb-4">Mauka Core Team Contacts</h2>
          <ul className="text-gray-700 space-y-2 text-sm">
            <li><strong>Aadarsh Tripathy</strong> (Head of Mauka) – atripathy@jpischool.com – 12F</li>
            <li><strong>Arsh Choudhary</strong> (Head of Mauka) – arshchoudhary009@gmail.com</li>
            <li><strong>Siddharth Sharma</strong> (Head of Operations) – ssharma28@jpischool.com</li>
            <li><strong>Yashvi Singh</strong> (Head of Operations) – ysingh4@jpischool.com</li>
            <li><strong>Mrityunjay Gupta</strong> (Head of Technology) – mgupta1@jpischool.com</li>
            <li><strong>Veer Gupta</strong> (Head of Technology) – vgupta15@jpischool.com</li>
            <li><strong>Aarush Gupta</strong> (Head of Finance) – agupta41@jpischool.com</li>
            <li><strong>Vivaan Patni</strong> (Head of Outreach) – vpatni@jpischool.com</li>
            <li><strong>Deeva Choudhary</strong> (Head of Outreach) – dchoudhary2@jpischool.com</li>
            <li><strong>Aahvana Kapuria</strong> (Head of Outreach) – akapuria@jpischool.com</li>
          </ul>
        </div>
      </motion.section>
    </main>
  );
}