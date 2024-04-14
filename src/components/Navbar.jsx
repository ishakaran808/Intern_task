import React, { useState } from 'react';
import logo from './logo.jpg'; // Import the logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white text-black p-4 md:flex md:justify-between md:items-center relative">
      {/* Left Section with Logo */}
      <div className="flex justify-start items-center">
        <img src={logo} alt="Logo" className="h-8 md:h-10 mr-2" />
        <span className="font-bold text-lg md:text-xl">Your Brand</span>
      </div>

      {/* Center Section */}
      <div className="hidden md:block">
        <ul className="flex space-x-4">
          <li><a href="#emotions">Emotions</a></li>
          <li><a href="#manifesto">Manifesto</a></li>
          <li><a href="#self-awareness-test">Self Awareness Test</a></li>
          <li><a href="#work-with-us">Work with Us</a></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex justify-end items-center">
        <button className="bg-black text-white py-2 px-4 rounded-md md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute top-16 right-0 bg-white border border-gray-200 w-48 mt-2 rounded-md shadow-md z-10">
            <ul className="py-2">
              <li><a href="#emotions" className="block px-4 py-2 text-black hover:bg-gray-200">Emotions</a></li>
              <li><a href="#manifesto" className="block px-4 py-2 text-black hover:bg-gray-200">Manifesto</a></li>
              <li><a href="#self-awareness-test" className="block px-4 py-2 text-black hover:bg-gray-200">Self Awareness Test</a></li>
              <li><a href="#work-with-us" className="block px-4 py-2 text-black hover:bg-gray-200">Work with Us</a></li>
            </ul>
          </div>
        )}
        {/* Download button for medium and larger screens */}
        <button className="hidden md:block bg-black text-white py-2 px-4 rounded-md">Download Now</button>
      </div>
    </div>
  );
};

export default Navbar;
