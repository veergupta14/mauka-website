"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { motion } from "framer-motion";

export default function AnalyticsDashboard() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "certificates"));
      const ratingsMap: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

      snapshot.forEach((doc) => {
        const rating = doc.data().rating;
        ratingsMap[rating] = (ratingsMap[rating] || 0) + 1;
      });

      const chartData = Object.entries(ratingsMap).map(([rating, count]) => ({
        rating,
        count,
      }));

      setData(chartData);
    };

    fetchData();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold text-[#F96A0B] mb-6">Volunteer Ratings Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="rating" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#F96A0B" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.section>
  );
}
