"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Business Assistant",
    description: "AI-powered SaaS web app that automates business tasks and improves productivity.",
    tags: ["Next.js", "AI", "React", "Tailwind"],
    liveLink: "https://ai-business-assistant.vercel.app",
    githubLink: "https://github.com/sabahatabid/AI-Business-Assistant.git",
    highlighted: true,
  },
  {
    title: "Brasato Restaurant",
    description: "Modern restaurant landing page showcasing elegant dining and reservation system.",
    tags: ["Next.js", "Tailwind", "React"],
    liveLink: "https://brasato-restaurant.vercel.app",
    githubLink: "https://github.com/sabahatabid/brasato-restaurant-site.git",
    highlighted: true,
  },
  {
    title: "Weather App",
    description: "Live weather forecast application with real-time data and location services.",
    tags: ["React", "API", "TypeScript"],
    liveLink: "https://weather-app-syeda.vercel.app",
    githubLink: "https://github.com/sabahatabid/weather-aap.git",
    highlighted: true,
  },
  {
    title: "Task Manager Pro",
    description: "Productivity app for managing tasks and improving workflow efficiency.",
    tags: ["Next.js", "Zustand", "Tailwind"],
    liveLink: "https://task-manager-pro.vercel.app",
    githubLink: "https://github.com/sabahatabid/task-manager-pro.git",
    highlighted: false,
  },
  {
    title: "E-commerce Store",
    description: "Full-featured e-commerce platform with shopping cart and payment integration.",
    tags: ["Next.js", "React", "Tailwind", "API"],
    liveLink: "https://ecommerce-store.vercel.app",
    githubLink: "https://github.com/sabahatabid/ecommerce-store.git",
    highlighted: false,
  },
  {
    title: "Brand Outfits Web App",
    description: "Responsive fashion brand showcase with product galleries and modern layouts.",
    tags: ["Next.js", "Tailwind", "React"],
    liveLink: "https://brand-hub.vercel.app",
    githubLink: "https://github.com/sabahatabid/Brand-hub.git",
    highlighted: false,
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
              className={`bg-white/5 border p-6 rounded-2xl hover:border-blue-500/30 transition-all group ${p.highlighted ? "border-purple-500" : "border-white/10"}`}
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
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((tag, t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={p.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 text-sm text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 px-4 py-2 rounded-lg hover:from-blue-500/30 hover:to-purple-500/30 transition-colors"
                >
                  Live Demo <FaExternalLinkAlt size={12} />
                </a>
                <a
                  href={p.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub size={14} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
