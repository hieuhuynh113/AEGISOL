import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-[#042940]`}
    >
      <nav className="w-full px-0 sm:px-2 lg:px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 pl-2">
            {/* <img
              className="h-16 w-auto drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]"
              src="/images/logo.png"
              alt="AEGISOL Logo"
            /> */}
            {/* Wrapper div để tạo huy hiệu */}
            {/* <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 p-1 shadow-lg">
              <img
                className="h-auto w-12" // Kích thước logo nhỏ hơn để nằm gọn trong huy hiệu
                src="/images/logo.png"
                alt="AEGISOL Logo"
              />
            </div> */}
            <a href="#home">
              <img
                className="h-16 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" // Màu trắng với 70% opacity
                src="/images/logo.png"
                alt="AEGISOL Logo"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 pr-2">
            <a
              href="#home"
              className="transition-colors duration-200 font-medium text-white hover:text-yellow-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="transition-colors duration-200 font-medium text-white hover:text-yellow-300"
            >
              Services
            </a>
            <a
              href="#products"
              className="transition-colors duration-200 font-medium text-white hover:text-yellow-300"
            >
              Products
            </a>
            <a
              href="#about"
              className="transition-colors duration-200 font-medium text-white hover:text-yellow-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="ml-4 px-6 py-2 rounded-lg font-semibold bg-white text-blue-800 border-2 border-blue-700 hover:bg-blue-800 hover:text-white transition-all duration-200 shadow-lg"
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
