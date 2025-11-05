"use client";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-20 gap-10"
    >
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/sabahat.jpg" // 👉 Replace with your image in /public
          alt="Profile Picture"
          width={400}
          height={400}
          className="rounded-2xl object-cover shadow-lg grayscale hover:grayscale-0 transition duration-500"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
        <h2 className="text-4xl md:text-5xl font-bold">
          Hello, I'm <span className="text-blue-400">Syeda Sabahat Abid</span>
        </h2>

        <p className="text-gray-300 leading-relaxed">
          I’m a passionate and motivated <span className="text-blue-400 font-semibold">Frontend Developer</span> who loves
          learning new technologies and building creative web designs. I’m currently exploring
          <span className="text-blue-400 font-semibold"> Next.js, React, and Tailwind CSS</span> to develop modern,
          responsive, and user-friendly websites.
        </p>

        <p className="text-gray-300 leading-relaxed">
          My journey in web development started with curiosity about how websites work. Over time,
          I’ve developed a strong interest in coding beautiful, functional, and interactive user
          interfaces. I enjoy experimenting with layouts, animations, and clean design to create
          smooth user experiences.
        </p>

        <p className="text-gray-300 leading-relaxed">
          As a beginner, I’m constantly improving my skills through practice, projects, and online
          learning. My goal is to grow as a frontend developer and contribute to real-world projects
          that combine creativity and technology.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center md:justify-start gap-5 pt-5">
          <div className="bg-gray-800 px-6 py-4 rounded-xl text-center shadow-md">
            <h3 className="text-2xl font-bold text-blue-400">5+</h3>
            <p className="text-sm text-gray-400">Practice Projects</p>
          </div>
          <div className="bg-gray-800 px-6 py-4 rounded-xl text-center shadow-md">
            <h3 className="text-2xl font-bold text-blue-400">Learning</h3>
            <p className="text-sm text-gray-400">Next.js & React</p>
          </div>
        </div>

        {/* Contact */}
        <div className="pt-5">
          <p className="text-lg text-blue-400 font-semibold">
            Let’s Connect and Learn Together!
          </p>
          <p className="text-sm text-gray-400">
            linkedin.com/in/sabahat-abid-0018662ba
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;


