import React from 'react';
import { motion } from 'framer-motion';
import { PiGraduationCapLight } from 'react-icons/pi';

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-white dark:bg-[#111827] text-black dark:text-white transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h2>

        {/* Education Card */}
        <motion.div
          className="bg-gray-100 dark:bg-white/10 dark:border-white/10 border border-gray-300 
                     backdrop-blur-md rounded-xl p-6 shadow-md mb-8 flex items-start gap-4 
                     transition-colors duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PiGraduationCapLight size={36} className="text-cyan-500 dark:text-cyan-400 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">
              B.E. in Computer Engineering
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Modern Education Society’s Wadia College of Engineering, Pune  
              <br />
              2022 – 2026 &nbsp; | &nbsp; SGPA: 8.35
            </p>
          </div>
        </motion.div>

        {/* Description Card */}
        <motion.div
          className="bg-gray-100 dark:bg-white/10 dark:border-white/10 border border-gray-300 
                     backdrop-blur-md rounded-xl p-6 shadow-md transition-colors duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 leading-relaxed space-y-2 text-base md:text-lg">
            <li>I'm someone who finds joy in solving real-world problems using code.</li>
            <li>Deeply passionate about Data Science, DSA and intuitive UI design.</li>
            <li>I blend technical skills with creativity to build elegant solutions.</li>
            <li>I believe in clean code, continuous learning, and strong teamwork.</li>
            <li>Currently exploring full-stack web development and intelligent systems.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
