import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

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
<nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md shadow-md">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
{/* Logo */}
<h1 className="text-white text-2xl font-bold tracking-wide">Portfolio</h1>
    {/* Desktop Nav */}
    <ul className="hidden md:flex space-x-8 text-white font-medium">
      {navLinks.map((link) => (
        <li key={link.to} className="hover:text-cyan-400 transition cursor-pointer">
          <Link
            to={link.to}
            smooth={true}
            duration={500}
            offset={-70} // adjust for navbar height
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>

    {/* Mobile Hamburger */}
    <div className="md:hidden">
      <button onClick={handleMenuToggle} className="text-white text-2xl">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  </div>

  {/* Mobile Nav */}
  {isMenuOpen && (
    <div className="md:hidden absolute top-20 left-0 w-full bg-black/60 backdrop-blur-md p-4">
      <ul className="flex flex-col space-y-4 text-white font-medium">
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