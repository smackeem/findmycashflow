import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center mx-5">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-24 transition-transform transform hover:scale-105"
            />
          </Link>
        </div>

        {/* Menu Items */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-lg font-semibold text-[#0D4A71] hover:text-gray-700 transition duration-300"
          >
            Home
          </Link>

          <div className="relative">
            {/* About Menu */}
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="text-lg font-semibold text-[#0D4A71] hover:text-gray-700 transition duration-300"
            >
              About
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <a
                  href="/founder"
                  className="block px-4 py-2 text-[#0D4A71] hover:bg-gray-100 transition duration-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  The Founder
                </a>
                <a
                  href="/elevate-your-business"
                  className="block px-4 py-2 text-[#0D4A71] hover:bg-gray-100 transition duration-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Elevate Your Business
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
