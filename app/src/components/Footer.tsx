"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#0a0a14] border-t border-white/10 py-8 text-center">
    <div className="max-w-6xl mx-auto px-6">
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold text-lg mb-1">
        Syeda Sabahat Abid
      </p>
      <p className="text-gray-500 text-sm mb-6">Full Stack Developer</p>

      <div className="flex justify-center gap-4 mb-6">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sabahatabid157@gmail.com" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
          <FaEnvelope size={16} />
        </a>
        <a href="https://www.linkedin.com/in/sabahat-abid-0018662ba" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all">
          <FaLinkedin size={16} />
        </a>
        <a href="https://github.com/sabahatabid" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
          <FaGithub size={16} />
        </a>
        <a href="https://vercel.com/sabahat-abids-projects" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all">
          <FaGlobe size={16} />
        </a>
      </div>

      <p className="text-gray-600 text-xs">
        © {new Date().getFullYear()} Syeda Sabahat Abid · Built with Next.js & Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;
