"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { motion } from "framer-motion";

interface Blog {
  id?: string;
  title: string;
  author: string;
  date: string;
  content: string;
}

export default function BlogCMS() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [form, setForm] = useState<Blog>({ title: "", author: "", date: "", content: "" });

  const fetchBlogs = async () => {
    const snapshot = await getDocs(collection(db, "blogs"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Blog));
    setBlogs(data);
  };

  const submitBlog = async () => {
    if (!form.title || !form.content) return;
    await addDoc(collection(db, "blogs"), form);
    setForm({ title: "", author: "", date: "", content: "" });
    fetchBlogs();
  };

  const deleteBlog = async (id: string) => {
    await deleteDoc(doc(db, "blogs", id));
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto py-10 px-6"
    >
      <h2 className="text-3xl font-bold text-[#F96A0B] mb-6">Blog CMS</h2>

      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border px-4 py-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          className="w-full border px-4 py-2 mb-3 rounded"
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full border px-4 py-2 mb-3 rounded"
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="w-full border px-4 py-2 mb-3 rounded h-40"
        />
        <button
          onClick={submitBlog}
          className="bg-[#F96A0B] text-white px-6 py-2 rounded-lg hover:bg-orange-700"
        >
          Publish Blog
        </button>
      </div>

      <div className="grid gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-6 rounded-xl shadow border border-orange-100">
            <h3 className="text-xl font-semibold text-[#F96A0B] mb-1">{blog.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              By {blog.author} • {blog.date}
            </p>
            <p className="text-gray-700 text-sm mb-3 line-clamp-4">{blog.content}</p>
            <button
              onClick={() => deleteBlog(blog.id!)}
              className="text-red-600 text-sm hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}