import { Link } from "react-router-dom";
import "../hero-animations.css";

const Footer = () => {
  return (
    <footer className="py-16 text-white bg-gray-900 footer-fade-in">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 mb-12 md:grid-cols-3">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="AEGISOL Logo"
                className="object-contain w-auto mb-4 h-14"
              />
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6 ml-[2%] max-w-md">
              Revolutionizing software testing through AI-integrated solutions.
              We help businesses automate their testing processes and optimize
              vendor supply chains.
            </p>
          </div>

          {/* Quick Links */}
          <div>
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
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0">
            <div className="w-full text-sm text-center text-gray-400">
              © 2025 AEGISOL. All rights reserved.
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
