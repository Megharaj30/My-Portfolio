import React from 'react';
import { motion } from 'framer-motion';
import { PiGraduationCapLight } from 'react-icons/pi';

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-[#111827] text-white"
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
          className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md mb-8 flex items-start gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PiGraduationCapLight size={36} className="text-cyan-400 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-cyan-300">
              B.E. in Computer Engineering
            </h3>
            <p className="text-gray-300 text-sm">
              Modern Education Society’s Wadia College of Engineering, Pune  
              <br />
              2022 – 2026 &nbsp; | &nbsp; SGPA: 8.35
            </p>
          </div>
        </motion.div>

        {/* Description Card */}
        <motion.div
          className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ul className="list-disc list-inside text-gray-200 leading-relaxed space-y-2 text-base md:text-lg">
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
