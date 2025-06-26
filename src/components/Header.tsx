import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSmoothScrollToSection } from "../hooks/useSmoothScrollToSection";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useSmoothScrollToSection();

  const handleMenuClick = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-[#042940]`}
    >
      <nav className="w-full px-0 sm:px-2 lg:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center pl-2 space-x-2">
            {/* <img
              className="h-16 w-auto drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]"
              src="/images/logo.png"
              alt="AEGISOL Logo"
            /> */}
            {/* Wrapper div để tạo huy hiệu */}
            {/* <div className="flex items-center justify-center w-16 h-16 p-1 rounded-full shadow-lg bg-slate-100">
              <img
                className="w-12 h-auto" // Kích thước logo nhỏ hơn để nằm gọn trong huy hiệu
                src="/images/logo.png"
                alt="AEGISOL Logo"
              />
            </div> */}
            <Link
              to="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  // Nếu muốn reload lại dữ liệu, có thể thêm window.location.reload() sau khi scroll
                }
              }}
            >
              <img
                className="h-24 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                src="/images/logo.png"
                alt="AEGISOL Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden pr-2 space-x-8 md:flex">
            <button
              onClick={() => scrollToSection("home")}
              className="font-medium text-white transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer hover:text-yellow-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="font-medium text-white transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer hover:text-yellow-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="font-medium text-white transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer hover:text-yellow-300"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-medium text-white transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer hover:text-yellow-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 ml-4 font-semibold text-blue-800 transition-all duration-200 bg-transparent bg-white border-2 border-blue-700 border-none rounded-lg shadow-lg outline-none cursor-pointer hover:bg-blue-800 hover:text-white"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 transition-colors duration-200 hover:text-blue-700"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 sm:px-3 bg-white/80 backdrop-blur-md">
              <button
                onClick={() => handleMenuClick("home")}
                className="block w-full px-3 py-2 font-medium text-left text-gray-700 transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer hover:text-blue-700"
              >
                Home
              </button>
              <button
                onClick={() => handleMenuClick("services")}
                className="block w-full px-3 py-2 font-medium text-left text-gray-700 transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer hover:text-blue-700"
              >
                Services
              </button>
              <button
                onClick={() => handleMenuClick("products")}
                className="block w-full px-3 py-2 font-medium text-left text-gray-700 transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer hover:text-blue-700"
              >
                Products
              </button>
              <button
                onClick={() => handleMenuClick("about")}
                className="block w-full px-3 py-2 font-medium text-left text-gray-700 transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer hover:text-blue-700"
              >
                About
              </button>
              <button
                onClick={() => handleMenuClick("contact")}
                className="block w-full px-3 py-2 font-medium text-center text-white transition-colors duration-200 bg-transparent bg-blue-700 border-none rounded-lg outline-none cursor-pointer hover:bg-blue-800"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
