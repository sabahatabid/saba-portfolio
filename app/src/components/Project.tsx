"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaEye, FaTimes, FaGithub } from "react-icons/fa";

type Project = {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  tech: string[];
  github?: string;
};

const projects: Project[] = [
  {
    id: "ai-assistant",
    title: "AI Business Assistant",
    description:
      "Modern AI SaaS dashboard with analytics, assistant chat, and automation panels.",
    screenshot: "/projects/ai-business-assistant.webp",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI", "Node.js"],
    github: "https://github.com/sabahatabid/AI-Business-Assistant",
  },
  {
    id: "brasato",
    title: "Brasato Restaurant",
    description:
      "Premium restaurant website with elegant menu, reservation UI, and polished interactions.",
    screenshot: "/projects/restaurant-web.webp",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity"],
  },
  {
    id: "weather-app",
    title: "Weather Application",
    description: "Responsive weather dashboard with forecast cards, charts, and location search.",
    screenshot: "/projects/weather-app.jpg",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    github: "https://github.com/sabahatabid/weather-app",
  },
  {
    id: "brand-hub",
    title: "Brand Hub",
    description: "E-commerce brand showcase with polished product discovery and responsive design.",
    screenshot: "/projects/brand-hub.jpg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sabahatabid/Brand-hub.git",
  },
];

export default function Projects() {
  const [preview, setPreview] = useState<Project | null>(null);

  function ProjectImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
      <Image
        src={imgSrc}
        alt={alt}
        width={1200}
        height={700}
        className={className}
        onError={() => setImgSrc("/projects/fallback.svg")}
      />
    );
  }

  return (
    <section id="projects" className="py-20 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/8 text-blue-300 text-sm font-medium mb-3">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Projects</h2>
            <p className="text-slate-400 mt-3 max-w-2xl">
              Premium, production-ready SaaS and product showcases crafted for clients.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-white shadow transition hover:scale-105">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative rounded-2xl border border-white/6 bg-gradient-to-b from-slate-900/60 to-slate-900/40 backdrop-blur-md shadow-[0_18px_60px_-28px_rgba(0,0,0,0.9)] overflow-hidden"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="relative">
                <div className="w-full h-56 relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.screenshot}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(event) => {
                      const target = event.target as HTMLImageElement | null;
                      if (target) target.src = "/projects/fallback.svg";
                    }}
                  />
                </div>

                <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600/70 to-blue-500/60 px-3 py-1 text-xs text-white shadow">
                  <span className="w-2 h-2 rounded-full bg-white block" />
                  Preview Available
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-400/30 blur-2xl opacity-60" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-300 mb-4 leading-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((item) => (
                    <span key={item} className="text-xs px-2 py-1 rounded-full bg-slate-800/60 border border-white/6 text-slate-100">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                  <button
                    onClick={() => setPreview(project)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/8 bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow hover:scale-105 transition"
                  >
                    <FaEye /> Preview
                  </button>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/8 bg-slate-900/50 px-4 py-2 text-sm font-semibold text-slate-200 shadow hover:scale-105 transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          Preview screenshots available for all projects. Source code and live demos can be shared upon request.
        </p>

        {preview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="relative w-full max-w-4xl rounded-2xl border border-white/8 bg-slate-900 p-4 shadow-2xl">
              <button
                aria-label="Close preview"
                onClick={() => setPreview(null)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/70 text-white"
              >
                <FaTimes />
              </button>

              <h3 className="text-lg font-semibold text-white mb-3">{preview.title}</h3>
              <div className="overflow-hidden rounded-xl border border-white/8 bg-slate-800">
                <ProjectImage src={preview.screenshot} alt={preview.title} className="w-full h-auto object-cover" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {preview.tech.map((item) => (
                  <span key={item} className="text-xs px-2 py-1 rounded-full bg-slate-800/60 border border-white/6 text-slate-100">
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm text-slate-400">
                Preview screenshot only — no external navigation. Source code available on request.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
