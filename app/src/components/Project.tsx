"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Rental E-Commerce Marketplace",
    description: "A dress rental marketplace built with Next.js, Tailwind CSS, and Sanity CMS.",
    tags: ["Next.js", "Tailwind", "Sanity"],
    link: "https://github.com/sabahatabid/Morent-Car.git",
  },
  {
    title: "Smart Bank Chatbot",
    description: "AI-powered banking assistant using NLP for instant customer support.",
    tags: ["Python", "NLP", "AI"],
    link: "https://github.com/sabahatabid/smart-bank-chatbot.git",
  },
  {
    title: "Pizza Order Chatbot",
    description: "Automated pizza ordering chatbot with real-time customer interaction using AI & NLP.",
    tags: ["Python", "NLP", "Chatbot"],
    link: "https://github.com/sabahatabid/PizzaBot.git",
  },
  {
    title: "Weather App",
    description: "Live weather forecast application using OpenWeather API & Streamlit.",
    tags: ["Python", "Streamlit", "API"],
    link: "https://github.com/sabahatabid/weather-aap.git",
  },
  {
    title: "Voice Chatbot",
    description: "A real-time voice-enabled chatbot application with speech recognition.",
    tags: ["Python", "Voice", "AI"],
    link: "https://github.com/sabahatabid/Voice-chatbot.git",
  },
  {
    title: "AI Interactive Book",
    description: "AI-powered interactive book on Physical AI and Humanoid Robotics with an integrated RAG chatbot.",
    tags: ["Docusaurus", "RAG", "AI"],
    link: "https://github.com/sabahatabid/AI-book.git",
  },
  {
    title: "Cloud-Native Todo Chatbot",
    description: "A cloud-native Todo Chatbot application deployed with local Kubernetes.",
    tags: ["Docker", "Kubernetes", "Next.js"],
    link: "https://github.com/sabahatabid/Todo-app-phase-4.git",
  },
  {
    title: "Brand Outfits Web App",
    description: "A modern and responsive fashion brand showcase website.",
    tags: ["Next.js", "Tailwind", "React"],
    link: "https://github.com/sabahatabid/Brand-hub.git",
  },
  {
    title: "Resume Builder",
    description: "Editable & shareable resume builder using React for creating professional resumes.",
    tags: ["React", "TypeScript"],
    link: "https://github.com/sabahatabid/editable-shareable-resume.git",
  },
  {
    title: "OOP in Python",
    description: "A Python project demonstrating Object-Oriented Programming concepts and design patterns.",
    tags: ["Python", "OOP"],
    link: "https://github.com/sabahatabid/OOP-in-python.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="text-4xl font-extrabold text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Work
            </span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            A selection of projects I've built across frontend, backend, and AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-500/30 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag, t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={14} /> View on GitHub <FaExternalLinkAlt size={11} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
