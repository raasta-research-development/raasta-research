import React from "react";
import Link from "next/link";
import Image from 'next/image'

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar fixed top-0 w-full bg-white text-black p-7 z-50 flex items-center justify-between">
        <ul className="flex flex-row space-x-4">
          <li>
            <Link href="/home" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">
              HOME
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">
              AUDIO
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">
              VIDEO
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">
              READ
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">
              LIVE
            </Link>
          </li>
          <li>
            <Link href="/about" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">
              NEWS
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 rounded hover:text-gray-600 uppercase">
              SHARE
            </Link>
          </li>
        </ul>

       
          <Image
          src="/images/raasta1.png"
          width={250}
      height={250}
      alt="Picture of the author"
    />

      </nav>
    </header>
  );
}

export default Navbar;
