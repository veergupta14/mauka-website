"use client";
import { MotionDiv } from "@/lib/motion";
import { MotionSection } from "@/lib/motion";

export default function BestVolunteersPage() {
  return (
    <main className="bg-[#FFFDF6] min-h-screen px-6 py-20 text-[#1C1C1C] font-sans">
      <MotionSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#F96A0B] mb-10">Mauka’s Game-Changers</h1>
        <p className="text-lg text-gray-700 mb-12">
          These are the students who didn’t just volunteer. They led, they showed up, and they redefined what it means to serve.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Anaya Singh",
              grade: "Grade 11",
              impact: "₹1.2L raised • 7 NGOs matched • 40 hours served",
            },
            {
              name: "Zaid Merchant",
              grade: "Grade 10",
              impact: "₹85k raised • 3 maternal health camps hosted",
            },
            {
              name: "Ishika Roy",
              grade: "Grade 12",
              impact: "Created Mauka’s digital media kit • 50+ students onboarded",
            },
          ].map((v, i) => (
            <MotionDiv
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-xl p-6 text-left"
            >
              <h3 className="text-xl font-semibold text-[#F96A0B] mb-1">{v.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{v.grade}</p>
              <p className="text-gray-800 text-base">{v.impact}</p>
            </MotionDiv>
          ))}
        </div>
      </MotionSection>
    </main>
  );
}
