import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle scroll effect for the sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-6">
        {/* Logo */}
        <Link to="/">
          <img src={logoImg} alt="logo" className="h-16 md:h-24" />
        </Link>

        {/* Nav Items */}
        <ul className="flex items-center space-x-8">
          {/* Home Link */}
          <li>
            <Link
              to="/"
              className="text-lg text-[#0D4A71] font-medium hover:text-[#1B263B] transition-colors"
            >
              Home
            </Link>
          </li>

          {/* About Dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-lg text-[#0D4A71] font-medium hover:text-[#1B263B] transition-colors focus:outline-none"
            >
              About
            </button>

            {/* Dropdown Menu */}
            <ul
              className={`absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-56 transition-transform duration-300 ${
                isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
              }`}
            >
              <li>
                <Link
                  to="/founder"
                  className="block px-4 py-2 text-[#0D4A71] hover:bg-gray-100 transition-colors"
                >
                  The Founder
                </Link>
              </li>
              <li>
                <Link
                  to="/elevating-business"
                  className="block px-4 py-2 text-[#0D4A71] hover:bg-gray-100 transition-colors"
                >
                  Elevating Your Business
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
