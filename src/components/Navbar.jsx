import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/60 backdrop-blur-md shadow-md transition duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-black dark:text-white text-2xl font-bold tracking-wide">Portfolio</h1>

        {/* Desktop Nav + Theme Toggle */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6 text-black dark:text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.to} className="hover:text-cyan-500 transition cursor-pointer">
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center gap-4 text-black dark:text-white">
          <ThemeToggle />
          <button onClick={handleMenuToggle} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/90 dark:bg-black/70 backdrop-blur-md p-4 transition">
          <ul className="flex flex-col space-y-4 text-black dark:text-white font-medium">
            {navLinks.map((link) => (
              <li key={link.to} className="hover:text-cyan-400 transition cursor-pointer">
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsMenuOpen(false)}
                >
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
