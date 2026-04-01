"use client";
import React, { useState, useEffect } from "react";
import { FaUser, FaHome, FaLaptopCode, FaBriefcase, FaCertificate, FaBars, FaTimes, FaEnvelope, FaCode } from "react-icons/fa";

const navLinks = [
  { href: "#hero", label: "Home", icon: <FaHome /> },
  { href: "#about", label: "About", icon: <FaUser /> },
  { href: "#experience", label: "Experience", icon: <FaBriefcase /> },
  { href: "#skills", label: "Skills", icon: <FaLaptopCode /> },
  { href: "#projects", label: "Projects", icon: <FaCode /> },
  { href: "#certifications", label: "Certifications", icon: <FaCertificate /> },
  { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "navbar-glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
            SA
          </div>
          <span className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
            Sabahat<span className="text-blue-400"> Abid</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <span className="text-blue-400 text-xs">{link.icon}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me button - desktop */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white text-xl p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden navbar-glass border-t border-white/10">
          <ul className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-blue-400">{link.icon}</span>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                className="flex justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
