"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Tech Company",
    message: "Sabahat delivered exceptional work on our web project. Her attention to detail and modern design approach exceeded our expectations.",
    rating: 5
  },
  {
    name: "Ahmed Raza",
    role: "Senior Developer",
    company: "Development Team",
    message: "Working with Sabahat was a great experience. She's a quick learner and brings creative solutions to complex problems.",
    rating: 5
  },
  {
    name: "Fatima Khan",
    role: "Tech Lead",
    company: "Learning Platform",
    message: "Sabahat shows great promise as a frontend developer. Her dedication to learning and improving is truly impressive.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-4 text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What People <span className="text-blue-500">Say</span>
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Feedback from clients, colleagues, and mentors
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg relative hover:shadow-blue-500/20 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4 opacity-50" />
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.message}"</p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
                <p className="text-blue-400 text-xs">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
