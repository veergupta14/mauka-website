
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center bg-[#FFFDF6]">
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-[#f96a0b] border-t-transparent animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}