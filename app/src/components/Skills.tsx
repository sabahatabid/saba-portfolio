"use client";
import React from "react";
import { motion } from "framer-motion";

const technicalSkills = [
  { name: "HTML5", level: "90%", proficiency: "Advanced" },
  { name: "CSS3", level: "85%", proficiency: "Advanced" },
  { name: "JavaScript", level: "80%", proficiency: "Intermediate" },
  { name: "TypeScript", level: "75%", proficiency: "Intermediate" },
  { name: "React.js", level: "80%", proficiency: "Intermediate" },
  { name: "Next.js", level: "75%", proficiency: "Intermediate" },
  { name: "Tailwind CSS", level: "85%", proficiency: "Advanced" },
  { name: "Node.js", level: "70%", proficiency: "Intermediate" },
  { name: "Python", level: "75%", proficiency: "Intermediate" },
  { name: "Git & GitHub", level: "80%", proficiency: "Intermediate" },
];

const tools = [
  "VS Code", "Figma", "Sanity CMS", "Vercel",
  "Docker", "Kubernetes", "Streamlit", "Postman",
  "MongoDB", "PostgreSQL",
];

const softSkills = [
  "Problem Solving", "Team Collaboration", "Quick Learner",
  "Attention to Detail", "Time Management", "Communication",
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
            A full overview of my technical stack, tools, and soft skills
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-white mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-blue-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
                  <span className="text-blue-400 text-xs font-semibold">{skill.proficiency}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-white mb-6">Tools & Technologies</h3>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                className="bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:border-blue-500/40 hover:text-white transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.08 }}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:border-purple-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="text-gray-300 font-medium text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
