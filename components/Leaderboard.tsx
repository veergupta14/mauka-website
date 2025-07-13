"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { MotionSection } from "@/lib/motion";

interface Volunteer {
  name: string;
  rating: number;
  fileURL: string;
}

export default function Leaderboard() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      const q = query(collection(db, "certificates"), orderBy("rating", "desc"));
      const snapshot = await getDocs(q);
      const data: Volunteer[] = snapshot.docs.map((doc) => doc.data() as Volunteer);
      setVolunteers(data);
    };
    fetchVolunteers();
  }, []);

  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md"
    >
      <h2 className="text-3xl font-bold mb-6 text-[#F96A0B]">Top-Rated Volunteers</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="pb-2">Rank</th>
            <th className="pb-2">Name</th>
            <th className="pb-2">Rating</th>
            <th className="pb-2">Certificate</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((vol, idx) => (
            <tr key={idx} className="border-t hover:bg-orange-50 transition">
              <td className="py-2 font-semibold">#{idx + 1}</td>
              <td className="py-2">{vol.name}</td>
              <td className="py-2">⭐ {vol.rating}</td>
              <td className="py-2">
                <a href={vol.fileURL} target="_blank" className="text-blue-600 hover:underline">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </MotionSection>
  );
}