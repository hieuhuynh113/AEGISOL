import { Link } from "react-router-dom";
import "../hero-animations.css";

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gray-900 footer-fade-in">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="AEGISOL Logo"
                className="object-contain w-auto mb-4 h-14"
              />
            </Link>
            <p className="mb-4 leading-relaxed text-gray-400">
              Revolutionizing software testing through AI-integrated solutions.
            </p>
            <p className="text-sm italic text-yellow-400">
              "Empowering Quality, Accelerating Innovation"
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a
                  href="mailto:info@aegisol.com"
                  className="hover:text-yellow-300"
                >
                  info@aegisol.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">Phone:</span>{" "}
                <a href="tel:+84123456789" className="hover:text-yellow-300">
                  (+84) 123 456 789
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">Address:</span> Dien
                Toan Commune, Dien Khanh District, Khanh Hoa Province, Vietnam
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/help-center"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-start">
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-2 text-sm text-gray-400">
              Subscribe to get the latest news and updates.
            </p>
            <form className="flex flex-col items-center w-full gap-2 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-white transition-colors bg-blue-700 rounded-md hover:bg-blue-800 sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0">
            <div className="w-full text-sm text-center text-gray-400">
              © 2025 AEGISOL. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
