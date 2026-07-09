"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiSparkles } from "react-icons/hi2";
import { TbStack2 } from "react-icons/tb";

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = "AI / SaaS" | "Frontend" | "Full Stack" | "E-Commerce";

interface Project {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  tech: string[];
  liveUrl: string;
  category: Category;
  featured?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: "ai-assistant",
    title: "AI Business Assistant",
    description:
      "Modern AI SaaS dashboard with analytics, assistant chat, and intelligent automation panels built for scale.",
    screenshot: "/projects/ai-business-assistant.webp",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI", "Node.js"],
    liveUrl: "https://ai-business-assistant.vercel.app",
    category: "AI / SaaS",
    featured: true,
  },
  {
    id: "brasato",
    title: "Brasato Restaurant",
    description:
      "Premium restaurant experience with an elegant digital menu, reservation flow, and refined micro-interactions.",
    screenshot: "/projects/restaurant-web.webp",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    liveUrl: "https://brasato-restaurant.vercel.app",
    category: "Frontend",
    featured: true,
  },
  {
    id: "weather-app",
    title: "Weather Application",
    description:
      "Responsive weather dashboard featuring real-time forecast cards, data visualisations, and smart location search.",
    screenshot: "/projects/weather-app.jpg",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://weather-app-sabahatabid.vercel.app",
    category: "Full Stack",
  },
  {
    id: "brand-hub",
    title: "Brand Hub",
    description:
      "E-commerce brand showcase with polished product discovery, smooth navigation, and fully responsive layout.",
    screenshot: "/projects/brand-hub.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://brand-hub-sabahatabid.vercel.app",
    category: "E-Commerce",
  },
];

// ─── Category colour map ───────────────────────────────────────────────────────

const categoryStyles: Record<Category, string> = {
  "AI / SaaS":   "bg-violet-500/15 text-violet-300 border-violet-500/25",
  "Frontend":    "bg-blue-500/15   text-blue-300   border-blue-500/25",
  "Full Stack":  "bg-cyan-500/15   text-cyan-300   border-cyan-500/25",
  "E-Commerce":  "bg-rose-500/15   text-rose-300   border-rose-500/25",
};

// ─── Animation variants ────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function FallbackImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      onError={() => setImgSrc("/projects/fallback.svg")}
      loading="lazy"
    />
  );
}

function CategoryBadge({ category }: { category: Category }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border tracking-wide ${categoryStyles[category]}`}
    >
      <TbStack2 className="text-[10px]" />      {category}
    </span>
  );
}

function FeaturedBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border bg-amber-400/10 text-amber-300 border-amber-400/30 tracking-wide">
      <HiSparkles className="text-[10px]" />
      Featured
    </span>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.a
      variants={prefersReduced ? {} : cardVariants}
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title} live demo`}
      className={[
        "group relative flex flex-col rounded-[20px] overflow-hidden cursor-pointer",
        "bg-[#13131f] border border-white/[0.07]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1.5 hover:scale-[1.015]",
        "hover:border-white/[0.18]",
        "hover:shadow-[0_8px_40px_-8px_rgba(139,92,246,0.35),0_2px_16px_-4px_rgba(0,0,0,0.7)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
      ].join(" ")}
    >
      {/* ── Image ── */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <FallbackImage src={project.screenshot} alt={project.title} />

        {/* Gradient scrim at bottom of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#13131f] via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Live Demo pill — appears on hover */}
        <div
          className={[
            "absolute bottom-3 right-3 flex items-center gap-1.5",
            "px-3 py-1 rounded-full text-xs font-semibold text-white",
            "bg-white/10 backdrop-blur-md border border-white/20",
            "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0",
            "transition-all duration-300 ease-out",
          ].join(" ")}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse block" />
          Live Demo
          <HiArrowUpRight className="text-[12px]" />
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category={project.category} />
          {project.featured && <FeaturedBadge />}
        </div>

        {/* Title */}
        <h3 className="text-[1.05rem] font-bold text-white leading-snug group-hover:text-violet-200 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-slate-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-2 mt-auto border-t border-white/[0.06]">
          <span className="text-xs text-slate-500 font-medium">
            Click to explore →
          </span>
          <span
            className={[
              "flex items-center gap-1 text-xs font-semibold text-violet-400",
              "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0",
              "transition-all duration-300 ease-out",
            ].join(" ")}
          >
            Open site
            <HiArrowUpRight className="text-[13px]" />
          </span>
        </div>
      </div>

      {/* Subtle inner glow ring on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 70%)",
        }}
      />
    </motion.a>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-24 bg-[#0f0f1a] overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 w-[480px] h-[480px] rounded-full bg-violet-600/8 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 w-[360px] h-[360px] rounded-full bg-blue-600/8 blur-[100px]"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

        {/* ── Section heading ── */}
        <motion.div
          className="mb-16 max-w-2xl"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="block h-px w-8 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-400">
              Selected Work
            </span>
          </div>

          <h2
            id="projects-heading"
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight"
          >
            Projects I've{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Built & Shipped
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Production-grade applications — from AI dashboards to e-commerce — designed
            for real users and deployed at scale.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* ── Footer note ── */}
        <motion.p
          className="mt-12 text-center text-sm text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Every project is live and deployed — click any card to explore.
        </motion.p>

      </div>
    </section>
  );
}
