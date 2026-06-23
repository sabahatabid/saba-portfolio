"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Framer Motion",
  "Zustand",
  "API Integration",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a14]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="text-4xl font-extrabold text-white">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Frontend technologies and tools I specialize in
          </p>
        </motion.div>

        {/* Skills Badges */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 text-blue-300 px-6 py-3 rounded-xl text-sm font-medium hover:border-blue-500/60 hover:text-white transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
