import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import handleDownloadCV from "../Pages/Handledownloadcv";

const Navigationbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false); // Close menu when route changes
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/aboutme", label: "About Me!" },
    { path: "/certifications", label: "Certifications" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
        />
      )}

      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex items-center justify-between">
        {/* Logo with ring effect */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 sm:h-12 md:h-16 lg:h-20 rounded-full ring-2 ring-orange-500 hover:ring-4 transition-all duration-300"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 font-medium text-lg">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="hover:text-orange-500 transition duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/contact"
            className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-amber-500 transition"
          >
            Contact me!
          </Link>
          <button
            onClick={handleDownloadCV}
            className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-amber-500 transition"
          >
            Download CV
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col gap-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="py-2 px-3 rounded hover:bg-orange-500 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="py-2 px-3 bg-orange-500 text-white rounded hover:bg-amber-500 transition text-center"
          >
            Contact me!
          </Link>
          <button
            onClick={handleDownloadCV}
            className="py-2 px-3 bg-orange-500 text-white rounded hover:bg-amber-500 transition text-center"
          >
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
