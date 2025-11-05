"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-blue-400 mb-4"
      >
        Hi, I’m Syeda Sabahat Abid
      </motion.h1>

      <h2 className="text-2xl mb-6">
        <Typewriter
          options={{
            strings: ["Frontend Developer 💻", "Next.js Enthusiast 🚀", "Creative Designer 🎨"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <a
        href="#projects"
        className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
