"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaRocket } from "react-icons/fa";

const stats = [
  { value: "14+", label: "Projects Completed" },
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

const stack = [
  { icon: <FaCode className="text-blue-400" />, title: "Frontend", desc: "React, Next.js, Tailwind CSS, TypeScript" },
  { icon: <FaServer className="text-purple-400" />, title: "Backend", desc: "Node.js, Python, REST APIs, FastAPI" },
  { icon: <FaDatabase className="text-green-400" />, title: "Database", desc: "MongoDB, PostgreSQL, Sanity CMS" },
  { icon: <FaRocket className="text-yellow-400" />, title: "DevOps", desc: "Docker, Kubernetes, Vercel, GitHub" },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0f0f1a] text-white flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-24 gap-14"
    >
      {/* Left Side - Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative">
          {/* Glow behind image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20" />
          <Image
            src="/saba pic.jpg"
            alt="Syeda Sabahat Abid"
            width={420}
            height={420}
            className="relative rounded-2xl object-cover shadow-2xl grayscale hover:grayscale-0 transition duration-500 border border-white/10"
          />
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
            Full Stack Developer 🚀
          </div>
        </div>
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm font-medium">
          About Me
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Syeda Sabahat Abid
          </span>
        </h2>

        <p className="text-gray-300 leading-relaxed">
          I'm a passionate{" "}
          <span className="text-blue-400 font-semibold">Full Stack Developer</span> who builds
          end-to-end web applications — from pixel-perfect frontends to robust backends and
          cloud deployments. I work across the entire stack using modern technologies like{" "}
          <span className="text-blue-400 font-semibold">Next.js, Node.js, Python, and Docker</span>.
        </p>

        <p className="text-gray-400 leading-relaxed">
          I've built AI-powered chatbots, e-commerce platforms, cloud-native apps with Kubernetes,
          and interactive data tools with Streamlit. I love turning complex problems into clean,
          scalable solutions that deliver real value.
        </p>

        {/* Stack grid */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          {stack.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-500/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-1">
                {item.icon}
                <span className="font-semibold text-sm text-white">{item.title}</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {s.value}
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 text-sm"
          >
            View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/sabahat-abid-0018662ba"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500/50 text-blue-400 px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-500/10 transition-all text-sm"
          >
            LinkedIn →
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
