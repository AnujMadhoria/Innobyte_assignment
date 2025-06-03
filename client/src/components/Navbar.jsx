import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">Kingsukh</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-gray-800 text-sm font-medium">
          <li><a href="#home" className="hover:text-green-700">Home</a></li>
          <li><a href="#services" className="hover:text-green-700">Services</a></li>
          <li><a href="#rooms" className="hover:text-green-700">Rooms</a></li>
          <li><a href="#gallery" className="hover:text-green-700">Gallery</a></li>
          <li><a href="#contact" className="hover:text-green-700">Contact</a></li>
        </ul>

        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden text-green-700 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-800 text-sm font-medium">
            <li><a href="#home" onClick={closeMenu} className="hover:text-green-700">Home</a></li>
            <li><a href="#services" onClick={closeMenu} className="hover:text-green-700">Services</a></li>
            <li><a href="#rooms" onClick={closeMenu} className="hover:text-green-700">Rooms</a></li>
            <li><a href="#gallery" onClick={closeMenu} className="hover:text-green-700">Gallery</a></li>
            <li><a href="#contact" onClick={closeMenu} className="hover:text-green-700">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
