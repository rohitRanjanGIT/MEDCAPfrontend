import React from 'react';
import logo from '../assets/medcap_logo.png';

const Header = () => {
  return (
    <header className="bg-pink-100 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="MedCap Logo" className="w-10 h-10 mr-2 rounded-full" />
          <span className="text-xl font-bold">MedCap</span>
        </div>
        <div className="space-x-9">
          <a href="#" className="text-gray-700 font-bold">Home</a>
          <a href="#" className="text-gray-700 font-bold">About</a>
          <a href="#" className="text-gray-700 font-bold">Services</a>
          <a href="#" className="text-gray-700 font-bold">Page</a>
        </div>
        <button className="bg-pink-400 text-white px-4 py-2 rounded-full font-bold">
          Log In
        </button>
      </nav>
    </header>
  );
};

export default Header;