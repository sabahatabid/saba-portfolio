"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=sabahatabid157@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailLink, "_blank");
  };

  return (
    <section id="contact" className="bg-gray-800 py-20 text-center">
      <h2 className="text-4xl font-bold text-blue-400 mb-8">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded bg-gray-900 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded bg-gray-900 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 rounded bg-gray-900 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded text-white font-semibold transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;


