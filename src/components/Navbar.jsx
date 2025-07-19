import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaProjectDiagram, FaCode, FaEnvelope, FaUser } from 'react-icons/fa';
import { PiGraduationCapLight } from 'react-icons/pi';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', to: 'home', icon: <FaHome /> },
    { name: 'About', to: 'about', icon: <FaUser /> },
    { name: 'Education', to: 'education', icon: <PiGraduationCapLight size={18} /> },
    { name: 'Projects', to: 'projects', icon: <FaProjectDiagram /> },
    { name: 'Skills', to: 'skills', icon: <FaCode /> },
    { name: 'Contact', to: 'contact', icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-black/60 backdrop-blur-xl shadow-md border-b border-gray-300 dark:border-white/10 transition duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-black dark:text-white text-2xl font-extrabold tracking-wide">
          <span className="text-cyan-500"></span>Portfolio
        </h1>

        {/* Desktop Icon Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6 font-medium text-black dark:text-white text-lg">
            {navLinks.map((link, idx) => (
              <li key={link.to} className="group relative cursor-pointer">
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hover:text-cyan-500 transition"
                >
                  <span className="text-xl">{link.icon}</span>
                  {/* Tooltip on hover */}
                  <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-cyan-500 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4 text-black dark:text-white">
          <ThemeToggle />
          <button onClick={handleMenuToggle} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/90 dark:bg-black/80 backdrop-blur-md p-4">
          <ul className="flex flex-col space-y-4 text-black dark:text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.to} className="hover:text-cyan-500 transition cursor-pointer flex items-center gap-2">
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center"
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
