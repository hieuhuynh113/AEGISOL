import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-lg backdrop-blur-md"
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="AEGISOL Logo"
              className="h-32 w-32 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              Services
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md border-t border-gray-200">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
              >
                Services
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
              >
                Products
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
