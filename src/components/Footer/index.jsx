import React from 'react';
import Image from 'next/image'; // Import Image component for Next.js

const Footer = () => {
  return (
    <footer className="bg-lime-800 text-white p-4">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
        
        {/* Left Section */}
        <div className="flex flex-col">
          <p className="text-sm">&copy; 2024 Your Website. All rights reserved.</p>
          <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Notice</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm">Cookie Policy</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm">Disclaimer</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm">Security Policy</a>
          <a href="#" className="text-gray-300 hover:text-white text-sm">Customize Cookies</a>
        </div>
        
        {/* Center Section */}
        <div className="flex justify-center items-center">
          <Image src="/images/LOGO PNG.png" alt="Logo" width={100} height={100} />
        </div>
        
        {/* Right Section */}
        <div className="flex flex-col ">
          <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
          <a href="#" className="text-gray-300 hover:text-white">About Us</a>
          <a href="#" className="text-gray-300 hover:text-white">Help Center</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
