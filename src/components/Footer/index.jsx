// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-lime-800 text-white p-4">
      <div className="flex flex-row justify-between max-w-7xl mx-auto">

        <div className="flex flex-col justify-between ">
          <p className="text-sm">&copy; 2024 Your Website. All rights reserved.</p>
          <p className="text-sm">Privacy Notice</p>
          <p className="text-sm">Cookie Policy</p>
          <p className="text-sm">Disclamer</p>
          <p className="text-sm">Security Policy</p>
          <p className="text-sm">Costomize cookies</p>
 
          </div>
          
          <div className="flex flex-col space-x-4 ">
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Terms of Service
            </a>
          </div>
       
      </div>
    </footer>
  );
};

export default Footer;
