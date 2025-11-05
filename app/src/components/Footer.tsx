"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaStream } from "react-icons/fa"; // added FaStream for Streamlit

const Footer = () => (
  <footer className="bg-gray-900 text-center py-6 border-t border-gray-700 text-gray-300">
    <p className="mb-3">
      © {new Date().getFullYear()} Syeda Sabahat Abid | Built with ❤️ using Next.js & Tailwind
    </p>

    <div className="flex justify-center space-x-6 text-lg">
      {/* Gmail */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=sabahatabid157@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-400 transition"
        aria-label="Gmail"
      >
        <FaEnvelope size={22} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/sabahat-abid-0018662ba"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={22} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/sabahatabid"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-400 transition"
        aria-label="GitHub"
      >
        <FaGithub size={22} />
      </a>

      {/* Vercel */}
      <a
        href="https://vercel.com/sabahat-abids-projects"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
        aria-label="Vercel"
      >
        <FaGlobe size={22} />
      </a>

      {/* Streamlit */}
      <a
        href="https://share.streamlit.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-400 transition"
        aria-label="Streamlit"
      >
        <FaStream size={22} />
      </a>
    </div>
  </footer>
);

export default Footer;
