import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0f172a] text-black dark:text-gray-300 py-10 px-6 md:px-20 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Name & Tagline */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-black dark:text-white">Megharaj Patil</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Developer | Data Science Enthusiast | Problem Solver
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex space-x-6 text-black dark:text-white text-lg">
          <a href="mailto:patilmegharaj90@gmail.com" className="hover:text-cyan-500 dark:hover:text-cyan-400" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/megharaj-patil" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-400" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Megharaj30" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-500 dark:hover:text-cyan-400" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="/MegharajPatil.pdf" download className="hover:text-cyan-500 dark:hover:text-cyan-400" aria-label="Download Resume">
            <FaFilePdf />
          </a>
        </div>

        {/* Right: Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Megharaj Patil. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
