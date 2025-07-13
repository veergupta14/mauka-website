"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { MotionDiv } from "@/lib/motion";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <MotionDiv
        key={path}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </MotionDiv>
    </AnimatePresence>
  );
}
