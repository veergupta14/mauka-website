
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#FDF7EE] border-t border-[#f3e7d1] py-6 mt-24 text-center text-sm text-gray-500"
    >
      <p className="glow">
        © {new Date().getFullYear()} Mauka Initiative. All rights reserved. Built with 💻 by the Core Team.
      </p>
    </motion.footer>
  );
}
