import React, { useState } from 'react';
import logo from '../assets/medcap_logo.png';
import { useNavigate,Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-pink-100 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={'/'}>
        <div className="flex items-center">
          <img src={logo} alt="MedCap Logo" className="w-10 h-10 mr-2 rounded-full" />
          <span className="text-xl font-bold">MedCap</span>
        </div>
        </Link>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className={`hidden md:flex space-x-9`}>
          <Link to={`/`}><a className="text-gray-700 font-bold">Home</a></Link>
          <Link to={`/`}><a className="text-gray-700 font-bold">About</a></Link>
          <Link to={`/`}><a className="text-gray-700 font-bold">Services</a></Link>
          <Link to={`/`}><a className="text-gray-700 font-bold">Page</a></Link>
        </div>

        {/* Log In Button */}
        <div className="hidden md:block">
          <Link to={`/login`}>
          <button className="bg-pink-400 text-white px-4 py-2 rounded-full font-bold">
            Log In
          </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-pink-100 flex flex-col items-center space-y-4 py-4 md:hidden">
            <a href="#" className="text-gray-700 font-bold">Home</a>
            <a href="#" className="text-gray-700 font-bold">About</a>
            <a href="#" className="text-gray-700 font-bold">Services</a>
            <a href="#" className="text-gray-700 font-bold">Page</a>
            <button className="bg-pink-400 text-white px-4 py-2 rounded-full font-bold">
              Log In
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
