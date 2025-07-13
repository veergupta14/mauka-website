"use client";
import { motion } from "framer-motion";

const mockLeaderboard = [
  { name: "Anaya Singh", score: 128, grade: "Grade 11" },
  { name: "Zaid Merchant", score: 112, grade: "Grade 10" },
  { name: "Ishika Roy", score: 103, grade: "Grade 12" },
  { name: "Veer Gupta", score: 101, grade: "Grade 11" },
  { name: "Myra Vyas", score: 97, grade: "Grade 10" },
  { name: "Rehaan Tyagi", score: 92, grade: "Grade 11" },
];

export default function LeaderboardPage() {
  return (
    <main className="bg-[#FFFDF6] min-h-screen px-6 py-20 text-[#1C1C1C] font-sans">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#F96A0B] mb-8">Leaderboard</h1>
        <p className="text-lg text-gray-700 mb-10">
          Here’s where the top volunteers rank based on their total impact — donations raised, hours served, and NGOs onboarded.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
            <thead className="bg-[#F96A0B] text-white">
              <tr>
                <th className="py-4 px-6 text-left">Rank</th>
                <th className="py-4 px-6 text-left">Name</th>
                <th className="py-4 px-6 text-left">Grade</th>
                <th className="py-4 px-6 text-left">Impact Score</th>
              </tr>
            </thead>
            <tbody>
              {mockLeaderboard.map((v, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-[#FAF3E3]" : "bg-[#FFFDF6]"
                  } hover:bg-[#fff4e8] transition-all`}
                >
                  <td className="py-4 px-6 font-semibold">#{i + 1}</td>
                  <td className="py-4 px-6">{v.name}</td>
                  <td className="py-4 px-6">{v.grade}</td>
                  <td className="py-4 px-6">{v.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>
    </main>
  );
}
