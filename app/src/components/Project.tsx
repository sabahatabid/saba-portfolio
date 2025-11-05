"use client";
import React from "react";

const projects = [
  {
    title: "Rental E-Commerce",
    description: "A dress rental marketplace built with Next.js, Tailwind, and Sanity CMS.",
    link: "https://github.com/sabahatabid/Morent-Car.git",
  },
  {
    title: "Weather App",
    description: "Live weather forecast using OpenWeather API & Streamlit.",
    link: "https://github.com/sabahatabid/weather-aap.git",
  },
  {
    title: "Smart Bank Chatbot",
    description: "Smart Bank Chatbot using AI & NLP for instant banking assistance.",
    link: "https://github.com/sabahatabid/smart-bank-chatbot.git",
  },
  {
    title: "Pizza Order Chatbot",
    description: "Pizza Order Chatbot using AI & NLP for automated pizza ordering and real-time customer interaction",
    link: "https://github.com/sabahatabid/PizzaBot.git",
  },
  {
    title: "Website tailwind css",
    description: "Responsive website built using Tailwind CSS for a modern and visually appealing design",
    link: "https://github.com/sabahatabid/website-tailwind-css.git",
  },
  {
    title: "Figma design",
    description: "Creative Figma design showcasing modern UI/UX layouts and responsive interface concepts.",
    link: "https://github.com/sabahatabid/figma.git",
  },
  {
    title: "Editable & Shareable Resume Builder",
    description: "Editable & Shareable Resume Builder using React for creating and sharing professional resumes effortlessly",
    link: "https://github.com/sabahatabid/editable-shareable-resume.git",
  },
  {
    title: "Static Interective Resume",
    description: "Static Interactive Resume built with HTML, CSS, and JavaScript for an engaging personal portfolio experience",
    link: "https://github.com/sabahatabid/1st-resume.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 py-16 text-center">
      <h2 className="text-4xl font-bold text-blue-400 mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-400 transition">
            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
            <p className="text-gray-300 mb-4">{p.description}</p>
            <a href={p.link} className="text-blue-400 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
