import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar fixed top-0 w-full bg-white text-black p-7 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <ul className="flex flex-row space-x-4">
            
            <Link
                href="/home"
                className="block px-4 py-2 rounded hover:text-gray-600 uppercase" >
                HOME
            </Link>
            <Link
                href="#"
                className="block px-4 py-2 rounded hover:text-gray-600 uppercase" >
                AUDIO
            </Link>
            <Link
                href="#"
                className="block px-4 py-2 rounded hover:text-gray-600 uppercase" >
                VIDEO
            </Link>
            <Link
                href="#"
                className="block px-4 py-2 rounded hover:text-gray-600 uppercase" >
                STORIES
            </Link>
            <Link
                href="/about"
                className="block px-4 py-2 rounded hover:text-gray-600 uppercase" >
                ABOUT
            </Link>
            <Link
                href="#"
                className="block px-4 py-2 rounded hover:text-gray-600 uppercase" >
                LIVE
            </Link>
            
      
          </ul>

      
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
