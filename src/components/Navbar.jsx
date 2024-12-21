import React, { useState } from 'react';
import logo from '../assets/logo2.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); 
  };

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-transparent text-white flex-wrap relative">
      // HOme about
      <div className="flex gap-10 order-2 sm:order-1 hidden sm:flex">
        <a href="#home" className="hover:text-gray-400 transition">Home</a>
        <a href="#about" className="hover:text-gray-400 transition">About Us</a>
      </div>

      // logo
      <div className="flex justify-center order-1 sm:order-2">
        <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
      </div>

      // right sec
      <div className="flex gap-10 order-3 sm:order-3 hidden sm:flex">
        <a href="#services" className="hover:text-gray-400 transition">Services</a>
        <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
      </div>

    // mobile view
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      // mobile menu
      <div 
        className={`sm:hidden w-full absolute top-20 left-0 bg-black bg-opacity-75 text-white ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        style={{ transition: 'all 0.3s ease-in-out' }} // Smooth transition for mobile menu
      >
        <div className="flex flex-col items-center py-4">
          <a href="#home" className="py-2 hover:text-gray-400 transition" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="py-2 hover:text-gray-400 transition" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a href="#services" className="py-2 hover:text-gray-400 transition" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#contact" className="py-2 hover:text-gray-400 transition" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
