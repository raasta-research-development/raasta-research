import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar fixed w-full  bg-white text-black p-8">
      <div className="container mx-auto flex flex-row items-center justify-between">
          <a href="#" className="logo text-2xl mr-5">MyLogo</a>
          <ul className="nav-links flex flex-row space-x-4">
          
          
          {/* <link href='#'><a className="block px-4 py-2 rounded hover:text-gray-600 uppercase">Home</a></link> */}

            <li><a href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">Home</a></li>
            <li><a href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">Audio</a></li>
            <li><a href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">Video</a></li>
            <li><a href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">Stories</a></li>
            <li><a href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">Live</a></li>
            <li><a href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">About</a></li>
          </ul>


          <button className="bg-lime-600 text-white py-2 px-8 rounded-full hover:bg-lime-700 transition duration-300 mr-5">
      login
    </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
