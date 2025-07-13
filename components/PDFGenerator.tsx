"use client";
import { useState } from "react";
import jsPDF from "jspdf";
import { motion } from "framer-motion";

export default function PDFGenerator() {
  const [name, setName] = useState("");
  const [event, setEvent] = useState("Mauka Campaign");
  const [message, setMessage] = useState("");

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Certificate of Appreciation", 105, 30, { align: "center" });
    doc.setFontSize(12);
    doc.text(`This certificate is awarded to`, 105, 50, { align: "center" });
    doc.setFontSize(16);
    doc.text(name, 105, 60, { align: "center" });
    doc.setFontSize(12);
    doc.text(
      `for their outstanding contribution to the ${event}.`,
      105,
      70,
      { align: "center" }
    );
    if (message) {
      doc.text(message, 105, 80, { align: "center" });
    }
    doc.setFontSize(10);
    doc.text("Mauka Core Team", 105, 110, { align: "center" });
    doc.save(`${name}-certificate.pdf`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-[#F96A0B] mb-4">Generate Certificate PDF</h2>

      <input
        type="text"
        placeholder="Volunteer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-4 py-2 mb-3 rounded"
      />
      <input
        type="text"
        placeholder="Event Name (optional)"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
        className="w-full border px-4 py-2 mb-3 rounded"
      />
      <textarea
        placeholder="Custom Message (optional)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border px-4 py-2 mb-4 rounded h-24"
      />

      <button
        onClick={generatePDF}
        className="bg-[#F96A0B] text-white px-6 py-2 rounded-lg hover:bg-orange-700"
      >
        Download PDF
      </button>
    </motion.div>
  );
}