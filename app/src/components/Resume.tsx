"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaExpand } from "react-icons/fa";
import Image from "next/image";

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-[#0a0a14]">
      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm font-medium mb-3">
              Resume
            </span>
            <h2 className="text-4xl font-extrabold text-white">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Resume
              </span>
            </h2>
          </div>
          <div className="flex gap-3">
            <a
              href="/resume.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 px-5 py-2.5 rounded-xl font-semibold hover:bg-white/10 transition-all text-sm"
            >
              <FaExpand size={12} /> Full View
            </a>
            <a
              href="/resume.jpg"
              download="Sabahat_Abid_Resume"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all text-sm"
            >
              <FaDownload size={12} /> Download
            </a>
          </div>
        </motion.div>

        {/* Resume Image */}
        <motion.div
          className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/resume.jpg"
            alt="Syeda Sabahat Abid Resume"
            width={800}
            height={1100}
            className="w-full h-auto"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;
