"use client";
import { MotionDiv } from "@/lib/motion";

export default function AboutPage() {
  return (
    <main className="bg-[#FFFDF6] min-h-screen px-6 py-20 text-[#1C1C1C] font-sans">
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-[#F96A0B] mb-6">What is Mauka?</h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          <strong>Mauka</strong> isn’t just a project—it’s a purpose. We are a youth-powered
          movement from Jayshree Periwal International School, Jaipur, built to connect the{" "}
          <span className="text-[#F96A0B] font-semibold">willing</span> with the{" "}
          <span className="text-[#F96A0B] font-semibold">waiting</span>. We act as a bridge between
          passionate students and impactful NGOs. Between voice and silence. Between those with
          access—and those without.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          In under 2 years, Mauka has connected over{" "}
          <span className="font-semibold">2,300 student volunteers</span> with{" "}
          <span className="font-semibold">75+ NGOs</span>, clocking over{" "}
          <span className="font-semibold">5,000 hours</span> of real-world service. From climate
          change to education, we don’t just support causes—we supercharge them with energy, intent,
          and impact.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Now, we’re scaling to become India’s most organized, student-led service platform. If
          you’ve ever wanted to lead change that outlasts you—
          <span className="text-[#F96A0B] font-semibold">this is your Mauka</span>.
        </p>
      </MotionDiv>
    </main>
  );
}
