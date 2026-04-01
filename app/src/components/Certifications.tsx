"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaAward, FaTrophy } from "react-icons/fa";

const certifications = [
  {
    title: "Certificate of Completion",
    issuer: "RezByte",
    date: "October 22, 2025",
    description: "Solo Project-Based Internship — AI Chatbot Development (Sep 8 – Oct 20, 2025)",
    id: "RB-INT-2025-0002",
    icon: "🏅",
    color: "from-blue-500 to-cyan-500",
    border: "border-blue-500/30",
  },
  {
    title: "Certificate of Top Performance",
    issuer: "RezByte",
    date: "October 22, 2025",
    description: "Recognized as Top Performer in the Solo Project-Based Internship for exceptional achievement and commitment to excellence.",
    id: "RB-INT-2025-0002",
    icon: "🥇",
    color: "from-yellow-500 to-orange-500",
    border: "border-yellow-500/30",
  },
  {
    title: "React.js Course",
    issuer: "Coursera",
    date: "2025",
    description: "Completed a comprehensive React.js course on Coursera covering hooks, state management, component architecture, and modern React patterns.",
    id: null,
    icon: "⚛️",
    color: "from-purple-500 to-blue-500",
    border: "border-purple-500/30",
  },
];

const achievements = [
  {
    title: "Top Performer",
    description: "Recognized by RezByte for exceptional achievement during internship",
    icon: <FaTrophy className="text-yellow-400 text-3xl" />,
  },
  {
    title: "14+ Projects",
    description: "Successfully built and deployed full stack web applications",
    icon: <FaAward className="text-blue-400 text-3xl" />,
  },
  {
    title: "AI Specialist",
    description: "Built AI chatbots and ML-powered tools using Python & NLP",
    icon: <FaCertificate className="text-purple-400 text-3xl" />,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Credentials
          </span>
          <h2 className="text-4xl font-extrabold text-white">
            Certifications &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Achievements
            </span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Recognition of my learning journey and professional accomplishments
          </p>
        </motion.div>

        {/* Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={`bg-white/5 border ${cert.border} rounded-2xl p-6 hover:bg-white/8 transition-all group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon + gradient bar */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                {cert.icon}
              </div>

              <h4 className="text-white font-bold text-lg mb-1">{cert.title}</h4>

              <div className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${cert.color} text-white mb-3`}>
                {cert.issuer}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/10 pt-3">
                <span>📅 {cert.date}</span>
                {cert.id && <span className="font-mono">{cert.id}</span>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
