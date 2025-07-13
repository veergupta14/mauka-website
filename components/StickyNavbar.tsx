"use client";
import { useEffect, useState } from "react";

export default function StickyNavbar() {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(prevScrollY > currentScrollY || currentScrollY < 10);
      setPrevScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-[#FFFDF6] shadow-md ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#F96A0B] font-[cursive]">Mauka</h1>
        <nav className="space-x-6 text-sm md:text-base">
          <a href="/about" className="hover:text-[#F96A0B] link-hover-effect">About</a>
          <a href="/testimonials" className="hover:text-[#F96A0B] link-hover-effect">Testimonials</a>
          <a href="/best-volunteers" className="hover:text-[#F96A0B] link-hover-effect">Best Volunteers</a>
          <a href="/leaderboard" className="hover:text-[#F96A0B] link-hover-effect">Leaderboard</a>
          <a href="/contact" className="hover:text-[#F96A0B] link-hover-effect">Contact</a>
        </nav>
      </div>
    </header>
  );
}