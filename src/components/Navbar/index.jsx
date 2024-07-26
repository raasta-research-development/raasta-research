  'use client'
  import React, { useState } from "react";
  import Link from "next/link";
  import { FaBars, FaTimes } from 'react-icons/fa';

  function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
      <header className="header">
        <nav className="navbar fixed top-0 w-full bg-white text-black p-4 z-50 flex items-center justify-between">
          <button 
            className="md:hidden block text-3xl" 
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <ul className={`flex-col md:flex-row space-x-0 md:space-x-4 space-y-2 md:space-y-0 md:flex md:items-center ${menuOpen ? 'flex' : 'hidden'}`}>
            <li>
              <Link href="/home" className="block px-4 py-2 rounded-full hover:bg-new-color transition-colors duration-300 uppercase">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/audio" className="block px-4 py-2 rounded-full hover:bg-new-color transition-colors duration-300 uppercase">
                AUDIO
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 rounded-full hover:bg-new-color transition-colors duration-300 uppercase">
                VIDEO
              </Link>
            </li>
            <li>
              <Link href="/read" className="block px-4 py-2 rounded-full hover:bg-new-color transition-colors duration-300 uppercase">
                READ
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 rounded-full hover:bg-new-color transition-colors duration-300 uppercase">
                LIVE
              </Link>
            </li>
            <li>
              <Link href="/about" className="block px-4 py-2 rounded-full hover:bg-new-color transition-colors duration-300 uppercase">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/news" className="block px-4 py-2 rounded-full hover:bg-new-color transition-colors duration-300 uppercase">
                NEWS
              </Link>
            </li>
            <li>
              <Link href="/share" className="block px-4 py-2 rounded-full hover:bg-new-color transition-colors duration-300 uppercase">
                SHARE
              </Link>
            </li>
          </ul>

          <div className="flex-shrink-0 ">
            <video
            className="w-72  "
            autoPlay
            loop
            muted
          >
            <source src="/images/logovi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </nav>
      </header>
    );
  }

  export default Navbar;
