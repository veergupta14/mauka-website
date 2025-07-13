"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { motion } from "framer-motion";

interface Volunteer {
  id: string;
  name: string;
  email: string;
  hours: number;
  stars: number;
  certificateLink: string;
}

export default function VolunteerCMS() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);

  const fetchVolunteers = async () => {
    const snapshot = await getDocs(collection(db, "volunteers"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Volunteer));
    setVolunteers(data);
  };

  const updateVolunteer = async (id: string, field: keyof Volunteer, value: any) => {
    const ref = doc(db, "volunteers", id);
    await updateDoc(ref, { [field]: value });
    fetchVolunteers();
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white max-w-6xl mx-auto p-6 rounded-xl mt-10 shadow-lg"
    >
      <h2 className="text-3xl font-bold text-[#F96A0B] mb-6">Volunteer Manager</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-gray-200">
          <thead>
            <tr className="bg-[#FFF7F2]">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Hours</th>
              <th className="px-4 py-2 border">Rating</th>
              <th className="px-4 py-2 border">Certificate</th>
              <th className="px-4 py-2 border">Edit</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map((v) => (
              <tr key={v.id} className="border-t">
                <td className="px-4 py-2 border font-semibold">{v.name}</td>
                <td className="px-4 py-2 border text-sm text-gray-600">{v.email}</td>
                <td className="px-4 py-2 border">
                  <input
                    type="number"
                    className="w-16 border px-2 py-1 rounded"
                    value={v.hours}
                    onChange={(e) => updateVolunteer(v.id, "hours", Number(e.target.value))}
                  />
                </td>
                <td className="px-4 py-2 border">
                  <input
                    type="number"
                    className="w-12 border px-2 py-1 rounded"
                    value={v.stars}
                    onChange={(e) => updateVolunteer(v.id, "stars", Number(e.target.value))}
                  />
                </td>
                <td className="px-4 py-2 border text-blue-600 text-sm">
                  <a href={v.certificateLink} target="_blank" className="hover:underline">
                    View
                  </a>
                </td>
                <td className="px-4 py-2 border text-sm text-gray-500 italic">Auto-saved</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}