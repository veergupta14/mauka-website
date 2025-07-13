"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#FFFDF6] text-[#1C1C1C] min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-[#F96A0B]"
        >
          This is Their Mauka
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-6 max-w-xl text-lg text-gray-700"
        >
          We connect students with purpose-driven NGOs to create real, measurable impact across India. One Mauka at a time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 flex gap-6"
        >
          <Link
            href="/testimonials"
            className="bg-[#F96A0B] text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all"
          >
            See Impact
          </Link>
          <Link
            href="/admin"
            className="bg-white text-[#F96A0B] px-6 py-3 rounded-lg border border-[#F96A0B] hover:bg-orange-50 transition-all"
          >
            Admin Login
          </Link>
        </motion.div>
      </section>

      {/* MAUKA STATS SECTION */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-[#F96A0B] mb-10">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-4xl font-bold">2,300+</p>
              <p className="text-sm text-gray-600">Student Volunteers</p>
            </div>
            <div>
              <p className="text-4xl font-bold">5,000+</p>
              <p className="text-sm text-gray-600">Service Hours</p>
            </div>
            <div>
              <p className="text-4xl font-bold">75+</p>
              <p className="text-sm text-gray-600">NGO Partners</p>
            </div>
            <div>
              <p className="text-4xl font-bold">1</p>
              <p className="text-sm text-gray-600">Shared Purpose</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#F96A0B] text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-4">Let’s Build the Bridge Together</h3>
          <p className="text-lg mb-8">
            Join Mauka to lead purposeful change. Give someone else a shot—and give yourself one too.
          </p>
          <Link
            href="/admin"
            className="bg-white text-[#F96A0B] px-8 py-3 rounded-lg font-semibold hover:bg-orange-100 transition-all"
          >
            Join The Core Team
          </Link>
        </motion.div>
      </section>
    </main>
  );
}