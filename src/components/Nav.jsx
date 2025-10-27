// src/components/Nav.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo (Left) */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Search Box (Middle - Desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center w-1/2 max-w-md space-x-2">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow px-4 py-2 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 rounded-lg bg-blue-500/70 hover:bg-blue-500/90 text-white transition shadow-md backdrop-blur-sm">
                🔍
              </button>
            </div>
          </div>

          {/* Menu Links + Auth Buttons (Desktop) */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/home" className="hover:text-gray-300">Home</Link>
            <Link to="/aboutus" className="hover:text-gray-300">About</Link>
            <Link to="/courses" className="hover:text-gray-300">Courses</Link>
            <Link to="/teachers" className="hover:text-gray-300">Teachers</Link>

            {/* Login & Sign Up Buttons */}
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-blue-500/70 hover:bg-blue-500/90 text-white rounded-lg backdrop-blur-sm transition shadow-md"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 bg-green-500/70 hover:bg-green-500/90 text-white rounded-lg backdrop-blur-sm transition shadow-md"
            >
              Sign Up
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 py-2 space-y-2">
          {/* Mobile Search Box */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow px-3 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-3 py-2 rounded-lg bg-blue-500/70 hover:bg-blue-500/90 text-white transition shadow-md backdrop-blur-sm">
              🔍
            </button>
          </div>

          <Link to="/home" className="block py-2 hover:bg-gray-600 rounded">Home</Link>
          <Link to="/about" className="block py-2 hover:bg-gray-600 rounded">About</Link>
          <Link to="/courses" className="block py-2 hover:bg-gray-600 rounded">Courses</Link>
          <Link to="/teachers" className="block py-2 hover:bg-gray-600 rounded">Teachers</Link>

          <button
            onClick={() => navigate("/login")}
            className="w-full py-2 bg-blue-500/70 hover:bg-blue-500/90 rounded-lg text-white backdrop-blur-sm transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="w-full py-2 bg-green-500/70 hover:bg-green-500/90 rounded-lg text-white backdrop-blur-sm transition"
          >
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
