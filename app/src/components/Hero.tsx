"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown, FaCode, FaServer } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{
        background: "radial-gradient(ellipse at 0% 50%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 100% 20%, rgba(139,92,246,0.12) 0%, transparent 60%), #0f0f1a",
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 w-full flex items-center justify-center">

        {/* Center — Text */}
        <div className="text-center max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for work
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
          >
            <span className="text-white">Hi, I am</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              Syeda Sabahat Abid
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-6 h-9"
          >
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Next.js Developer",
                  "React Developer",
                  "AI Enthusiast",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
          >
            Building end-to-end web applications with modern technologies.
            From pixel-perfect frontends to scalable backends and AI-powered solutions.
          </motion.p>

          {/* Tech pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-2 mb-8 justify-center"
          >
            {["Next.js", "React", "TypeScript", "Node.js", "Python", "Docker"].map((tech) => (
              <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-8 justify-center"
          >
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-7 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20 flex items-center gap-2"
            >
              <FaCode size={14} /> View Projects
            </a>
            <a
              href="#contact"
              className="border border-white/20 text-white px-7 py-3 rounded-xl font-semibold hover:bg-white/5 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <FaServer size={14} /> Hire Me
            </a>
            <a
              href="/sabahat-cv.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500/40 text-blue-400 px-7 py-3 rounded-xl font-semibold hover:bg-blue-500/10 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <FaDownload size={13} /> Resume
            </a>
          </motion.div>

          {/* Social + Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-6 justify-center"
          >
            <a href="https://github.com/sabahatabid" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/sabahat-abid-0018662ba" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all">
              <FaLinkedin size={18} />
            </a>

            <div className="h-8 w-px bg-white/10" />

            <div className="flex gap-5 text-sm">
              <div>
                <span className="text-white font-bold">14+</span>
                <span className="text-gray-500 ml-1">Projects</span>
              </div>
              <div>
                <span className="text-white font-bold">2+</span>
                <span className="text-gray-500 ml-1">Years</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-blue-400 transition-colors flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <FaArrowDown size={13} />
      </motion.a>
    </section>
  );
};

export default Hero;
