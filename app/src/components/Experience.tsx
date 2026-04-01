"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaChalkboardTeacher } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance & Projects",
    period: "2023 - Present",
    description: "Building modern full stack web applications using Next.js, React, and Tailwind CSS.",
    achievements: [
      "Developed a Rental E-Commerce Marketplace for traditional attire",
      "Built a dynamic blog and shopping cart using Next.js",
      "Deployed cloud-native apps with Docker & Kubernetes",
      "Built AI chatbots using Python & NLP",
    ],
  },
  {
    role: "AI Chatbot Development Intern",
    company: "RezByte",
    period: "Sep 8 – Oct 20, 2025",
    description: "Solo Project-Based Internship focused on AI Chatbot Development.",
    achievements: [
      "Completed domain-specific AI projects",
      "Strengthened technical skills in NLP and chatbot architecture",
      "Awarded Certificate of Top Performance",
    ],
  },
];

const teaching = [
  {
    role: "Teacher",
    company: "Springfield Academy",
    period: "1 Year",
    description: "Taught technical concepts to students.",
  },
  {
    role: "Teacher",
    company: "Aarfi Coaching",
    period: "6 Months",
    description: "Coaching and teaching technical subjects.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-4xl font-extrabold text-white">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-8">
            <FaBriefcase className="text-blue-400 text-xl" />
            <h3 className="text-xl font-semibold text-white">Professional</h3>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl border-l-4 border-l-blue-500 hover:bg-white/8 transition-all"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-blue-400">{exp.role}</h4>
                    <p className="text-gray-300 text-sm font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 text-xs mt-1 md:mt-0 bg-white/5 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{exp.description}</p>
                <ul className="space-y-1.5">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 shrink-0">▹</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Teaching Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FaChalkboardTeacher className="text-purple-400 text-xl" />
            <h3 className="text-xl font-semibold text-white">Teaching</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teaching.map((t, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl border-l-4 border-l-purple-500 hover:bg-white/8 transition-all"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-purple-400">{t.role}</h4>
                    <p className="text-gray-300 text-sm">{t.company}</p>
                  </div>
                  <span className="text-gray-500 text-xs bg-white/5 px-3 py-1 rounded-full">{t.period}</span>
                </div>
                <p className="text-gray-400 text-sm">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
