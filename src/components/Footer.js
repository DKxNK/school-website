import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left - Logo and Name */}
        <div className="flex items-start space-x-4">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="School Logo"
            className="h-16 w-auto"
          />
          <div>
            <h3 className="text-xl font-bold font-poppins">Methodist Primary School</h3>
            <p className="text-sm text-gray-300 mt-1">Empowering Future Leaders</p>
          </div>
        </div>

        {/* Center - Quick Links (row style) */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3 text-yellow-300">Quick Links</h4>
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <a href="#hero" className="hover:text-yellow-300 transition">Home</a>
            <a href="#about" className="hover:text-yellow-300 transition">About</a>
            <a href="#mission" className="hover:text-yellow-300 transition">Mission</a>
            <a href="#news" className="hover:text-yellow-300 transition">News</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </div>
        </div>


        {/* Right - Social Media */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="font-semibold mb-2 text-yellow-300">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/" aria-label="Facebook" className="hover:text-yellow-300 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram" className="hover:text-yellow-300 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Methodist Primary School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
