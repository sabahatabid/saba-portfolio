"use client";
import React from "react";
import { FaUser, FaHome, FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center p-3 text-sm sm:text-base">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-400 whitespace-nowrap">
          Sabahat Abid
        </h1>

        <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-white">
          <li><a href="#hero" className="hover:text-blue-400 flex items-center gap-1"><FaHome /> Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 flex items-center gap-1"><FaUser /> About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 flex items-center gap-1"><FaLaptopCode /> Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-400 flex items-center gap-1"><FaLaptopCode /> Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-400 flex items-center gap-1"><FaLaptopCode /> Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
