import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar fixed top-0 w-full bg-white text-black p-7 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <ul className="flex flex-row space-x-4">
            <Link href="@/src/app/component/About.jsx">Home2</Link>

            <li><a href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">Home</a></li>
            <li><a href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">Audio</a></li>
            <li><a href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">Video</a></li>
            <li><a href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">Stories</a></li>
            <li><a href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">Live</a></li>
            <li><a href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">About</a></li>
          </ul>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 ring-gray-400 transition-all hover:border-gray-400"
          />

          {/* Login Button */}
          <button className="bg-lime-600 text-white py-2 px-8 rounded-full hover:bg-lime-700 transition duration-300 ml-5">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
