import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom'; // ✅ useLocation for active links
import logo from "../../assets/logo/Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // ✅ Get current path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Helper: check active route
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-20 z-30 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#428c99CC] backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto relative">
        {/* Navbar Row */}
        <div className="flex items-center justify-between h-20 px-4">
          {/* LEFT SIDE - MENU BUTTON */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden rounded-full p-2 shadow-md transition-all duration-300 transform hover:scale-105 ${isScrolled ? 'bg-white/90 hover:bg-white/100' : 'bg-white/90 hover:bg-white/100'
                }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <HiMenu
                  className={`absolute inset-0 w-5 h-5 text-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                    }`}
                />
                <HiX
                  className={`absolute inset-0 w-5 h-5 text-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                    }`}
                />
              </div>
            </button>

            {/* Desktop Menu Button */}
            <button
              onClick={toggleMenu}
              className={`hidden lg:flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 transition-all duration-300 group shadow-lg ${isScrolled ? 'bg-white' : 'bg-white'
                }`}
            >
              <div className="relative w-5 h-5">
                <HiMenu
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                    }`}
                />
                <HiX
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                    }`}
                />
              </div>
              <span
                className={`font-medium transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                  }`}
              >
                Menu
              </span>
            </button>
          </div>

          {/* CENTER - LOGO */}
          <div className="transition-transform duration-200 hover:scale-105">
            <img src={logo} alt="Narpavi Logo" className="w-20 h-20" />
          </div>

          {/* RIGHT SIDE - LINKS (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/contact"
              className={`relative font-medium transition-all duration-200 hover:scale-105 ${isActive('/contact') ? 'text-blue-300' : 'text-white hover:text-blue-200'
                }`}
            >
              Contact Us
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-200 transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
              />
            </Link>
            <Link
              to="/about"
              className={`relative font-medium transition-all duration-200 hover:scale-105 ${isActive('/about') ? 'text-blue-300' : 'text-white hover:text-blue-200'
                }`}
            >
              About Us
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-200 transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
              />
            </Link>
          </div>
        </div>

        {/* SIDE MENU */}
        <div
          className={`absolute top-20 left-4 lg:left-8 lg:w-80 w-64 bg-white rounded-xl shadow-2xl z-50 p-2  overflow-hidden transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
            }`}
        >
          <div className="pb-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/project', label: 'Portfolio' },
              { path: '/contact', label: 'Contact Us' },
              { path: '/about', label: 'About Us' },
              { path: '/blog', label: 'Blog' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-6 py-4 font-medium transition-colors mb-2 duration-200 ${isActive(path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                onClick={toggleMenu}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black md:bg-transparent z-40 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
        onClick={toggleMenu}
      />
    </div>
  );
}
