"use client";
import { MotionDiv } from "@/lib/motion";
import { MotionSection } from "@/lib/motion";

export default function TestimonialsPage() {
  return (
    <main className="bg-[#FFFDF6] min-h-screen px-6 py-20 text-[#1C1C1C] font-sans">
      <MotionSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#F96A0B] mb-10">What People Are Saying</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MotionDiv whileHover={{ scale: 1.02 }} className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#F96A0B] mb-2">Student Volunteer</h3>
            <p className="text-gray-700 italic">
              “Mauka didn’t just give me a platform. It gave me purpose. I learned more about real impact in 6 months than I had in 6 years.”
            </p>
            <p className="mt-2 text-sm font-medium text-right">– Rhea Sharma, Grade 11</p>
          </MotionDiv>

          <MotionDiv whileHover={{ scale: 1.02 }} className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#F96A0B] mb-2">NGO Partner</h3>
            <p className="text-gray-700 italic">
              “Most student volunteers drop after a few weeks. Mauka volunteers? They showed up, followed through, and changed lives. We can’t wait to work with more.”
            </p>
            <p className="mt-2 text-sm font-medium text-right">– Kavita Mishra, HopeBridge Foundation</p>
          </MotionDiv>

          <MotionDiv whileHover={{ scale: 1.02 }} className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#F96A0B] mb-2">Student Volunteer</h3>
            <p className="text-gray-700 italic">
              “I thought I was too young to lead anything. But Mauka trusted me with responsibility—and now I know I can build things that matter.”
            </p>
            <p className="mt-2 text-sm font-medium text-right">– Arjun Kapoor, Grade 10</p>
          </MotionDiv>

          <MotionDiv whileHover={{ scale: 1.02 }} className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#F96A0B] mb-2">NGO Partner</h3>
            <p className="text-gray-700 italic">
              “Your students helped us set up digital access in 3 rural schools. They asked smart questions, showed up early, and made us feel hopeful about the future.”
            </p>
            <p className="mt-2 text-sm font-medium text-right">– Salim Khan, Saathi Trust</p>
          </MotionDiv>
        </div>
      </MotionSection>
    </main>
  );
}
