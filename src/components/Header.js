import React, { useState } from "react";
import { FaBars, FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Spacer */}
      <div className="h-10 md:h-20"></div>

      {/* Header */}
      <header
        className="fixed top-0 left-1/2 transform -translate-x-1/2
      bg-cyan-100/60 backdrop-blur-md text-black shadow-xl drop-shadow-md z-50
        rounded-full w-11/12 max-w-7xl px-6 md:py-4 flex items-center justify-between mt-6"

        style={{ maxWidth: "1300px" }}
      >
        {/* Left - School Name (desktop) */}
        <div className="hidden md:block flex-1 text-left text-md xl:text-lg select-none font-poppins font-bold tracking-widest">
          Methodist Primary School
        </div>

        {/* Left - Mobile Logo + Name */}
        <div className="md:hidden flex items-center space-x-2">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Logo"
            className="h-16 w-auto"
          />
          <span className="text-sm font-semibold font-poppins tracking-wide leading-tight">
            Methodist Primary School
          </span>
        </div>


        {/* Center - Logo */}
        <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="School Logo"
            className="h-32 w-auto"
          />
        </div>

        {/* Right - Desktop Nav or Burger Icon */}
        <div className="flex-1 flex justify-end items-center">
          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-6 px-6 text-md xl:text-lg font-semibold font-nav tracking-wide">
            <a href="#hero" className="hover:text-blue-700">Home</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#mission" className="hover:text-blue-700">Mission</a>
            <a href="#news" className="hover:text-blue-700">News</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>

          {/* Burger Icon (mobile only) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden ml-4 text-2xl"
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Sidebar Menu (from Left) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-50 flex flex-col animate-slideIn">
            {/* Close Icon */}
            <div className="flex justify-end mb-4">
              <button onClick={() => setMenuOpen(false)}>
                <FaTimes className="text-2xl text-gray-700 hover:text-red-600 transition" />
              </button>
            </div>

            {/* Logo and Name */}
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="Logo"
                className="h-16 w-auto"
              />
              <div className="text-sm font-bold leading-tight tracking-wider font-heading">
                <p>Methodist</p>
                <p>Primary School</p>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-4 font-medium text-gray-800">
              <a href="#hero" onClick={() => setMenuOpen(false)} className="border-b pb-2 hover:text-blue-700">Home</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="border-b pb-2 hover:text-blue-700">About</a>
              <a href="#mission" onClick={() => setMenuOpen(false)} className="border-b pb-2 hover:text-blue-700">Mission</a>
              <a href="#news" onClick={() => setMenuOpen(false)} className="border-b pb-2 hover:text-blue-700">News</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="border-b pb-2 hover:text-blue-700">Contact</a>
            </nav>

            {/* Social Icons */}
            <div className="mt-auto pt-8 border-t flex space-x-4 text-xl text-blue-800">
              <a href="https://www.facebook.com/" className="hover:text-blue-600"><FaFacebookF /></a>
              <a href="https://www.instagram.com/" className="hover:text-pink-600"><FaInstagram /></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
