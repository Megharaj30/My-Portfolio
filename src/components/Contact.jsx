import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaRegCopy } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

function Contact() {
  const email = "patilmegharaj90@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast.success("📋 Copied to clipboard! Now don’t ghost me 😅");
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-20 bg-white dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-300 overflow-hidden"
    >
      {/* 🎨 Animated Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 opacity-30 rounded-full animate-pulse blur-3xl top-1/4 left-10"></div>
        <div className="absolute w-[200px] h-[200px] bg-gradient-to-tr from-yellow-500 via-orange-400 to-red-500 opacity-30 rounded-full animate-ping blur-2xl bottom-10 right-10"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Whether you're a recruiter, a fellow developer, or just debugging your life — reach out! Engineers don't sleep, we just cache dreams.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Email with Copy Button */}
          <div className="flex items-center gap-2 group">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:text-cyan-500 dark:hover:text-cyan-300 transition"
            >
              <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring" }}>
                <FaEnvelope size={20} />
              </motion.div>
              {email}
            </a>
            <button
              onClick={handleCopy}
              className="text-gray-500 hover:text-cyan-500 transition"
              title="Copy email"
            >
              <FaRegCopy size={16} />
            </button>
          </div>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/megharaj-patil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:text-cyan-500 dark:hover:text-cyan-300 transition"
          >
            <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring" }}>
              <FaLinkedin size={20} />
            </motion.div>
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Megharaj30"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:text-cyan-500 dark:hover:text-cyan-300 transition"
          >
            <motion.div whileHover={{ rotate: -10 }} transition={{ type: "spring" }}>
              <FaGithub size={20} />
            </motion.div>
            GitHub
          </a>

          {/* Resume Download */}
          <a
            href="/MegharajPatil.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-500 hover:bg-cyan-600 transition rounded-full text-white font-semibold shadow-lg"
          >
            📄 Resume
          </a>
        </motion.div>

        {/* Funny Ending */}
        <motion.p
          className="mt-16 text-sm text-gray-500 dark:text-gray-400 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          P.S. Still here? You're officially one of us. Grab a coffee and let's ship some bugs together ☕🐞.
        </motion.p>
      </div>
    </section>
  );
}

export default Contact;
