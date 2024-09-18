import { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close the dropdown if clicked outside
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center mx-5">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-24 transition-transform transform hover:scale-105"
            />
          </a>
        </div>

        {/* Menu Items */}
        <div className="flex items-center space-x-6">
          <a
            href="/"
            className="text-lg font-semibold text-[#0D4A71] hover:text-gray-700 transition duration-300"
          >
            Home
          </a>

          <div className="relative" ref={dropdownRef}>
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
                  href="/the-founder"
                  className="block px-4 py-2 text-[#0D4A71] hover:bg-[#0D4A71] hover:text-white transition duration-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  The Founder
                </a>
                <a
                  href="/elevate-your-business"
                  className="block px-4 py-2 text-[#0D4A71] hover:bg-[#0D4A71] hover:text-white transition duration-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Elevating Your Business
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
