import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Lucide icons for hamburger menu

const Navigationbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/aboutme', label: 'About Me!' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' }, // fixed typo
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="h-[15vh] max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="h-full flex items-center rounded-full bg-yellow-500">
          <div className="h-full flex items-center">
          <img src={logo} alt="Company logo" className="h-full rounded-full" />
        </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium items-center">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className="hover:bg-orange-500 px-2 py-1 rounded hover:text-white duration-150 ease-out"
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex gap-4">
          <button className="px-3 py-1.5 bg-orange-500 rounded-lg text-white hover:bg-amber-500 hover:text-black transition">
            Contact Me!
          </button>
          <button className="px-3 py-1.5 bg-orange-500 rounded-lg text-white hover:bg-amber-500 hover:text-black transition">
            Download CV
          </button>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          <ul className="flex flex-col gap-4 font-medium mt-4">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="hover:bg-orange-500 px-3 py-2 rounded hover:text-white duration-150 ease-out"
              >
                <Link to={item.path} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <button className="w-full px-3 py-2 bg-orange-500 rounded-lg text-white hover:bg-amber-500 hover:text-black transition">
              Contact Me!
            </button>
            <button className="w-full px-3 py-2 bg-orange-500 rounded-lg text-white hover:bg-amber-500 hover:text-black transition">
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigationbar;
