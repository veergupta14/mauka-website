
"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 1.15]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <motion.section
      style={{ scale, opacity }}
      className="flex flex-col justify-center items-center text-center py-24 px-6 min-h-screen bg-[#FFFDF6]"
    >
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-[#F96A0B]"
      >
        Every Student Deserves a Mauka
      </motion.h2>
      <p className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-700">
        Mauka connects passionate students with purpose-driven NGOs—empowering underprivileged communities through youth-led service.
      </p>
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="/contact"
        className="bg-[#F96A0B] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-orange-700 transition-all glow"
      >
        Join the Movement
      </motion.a>
    </motion.section>
  );
}