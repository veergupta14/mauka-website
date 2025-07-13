"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
