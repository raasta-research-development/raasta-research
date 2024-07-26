  // import React from 'react';
  import Link from "next/link";
  import * as React from "react";
  import { HiOutlineSearch } from "react-icons/hi";
  import { Input } from "@/components/ui/input";

  function Home() {

    return (
      <div className="mt-10 md:mt-20">
        <div className="bg-gray-500 mt-4 p-4 md:p-6" style={{ height: "25rem" }}>
          Content Here
        </div>

        <div className="flex items-center border border-black bg-white rounded-md w-full px-2 gap-2">
      <HiOutlineSearch className="scale-125" />
      <Input
        type="text"
        placeholder="Search Raasta Research"
        className="flex-grow text-gray-900 border-none placeholder:text-gray-500"
      />
    </div>

        

        <div className="flex flex-col ml-40 mr-40 md:flex-row mt-4 md:mt-8 space-y-4 md:space-y-0 md:space-x-4 justify-center">
        
          
          <div
    className="bg-[url('/images/audio.png')] bg-cover bg-center md:p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 relative flex flex-col items-center justify-center group"
    style={{ height: "35rem", flex: "1" }}
  >
            <Link href="/about">
              <div className="absolute rounded-2xl inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex items-center justify-center">
                Additional Text on Hover
              </div>
            </Link>
          </div>

          <div
    className="bg-[url('/images/video.png')] bg-cover bg-center md:p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 relative flex flex-col items-center justify-center group"
    style={{ height: "35rem", flex: "1" }}
  >
            <Link href="/about">
              <div className="absolute rounded-2xl inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex items-center justify-center">
                Additional Text on Hover
              </div>
            </Link>
          </div>

          <div
    className="bg-[url('/images/read.png')] bg-cover bg-center md:p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 relative flex flex-col items-center justify-center group"
    style={{ height: "35rem", flex: "1" }}
  >
            <Link href="/about">
              <div className="absolute rounded-2xl inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex items-center justify-center">
                Additional Text on Hover
              </div>
            </Link>
          </div>

          <div
    className="bg-[url('/images/live.png')] bg-cover bg-center md:p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 relative flex flex-col items-center justify-center group"
    style={{ height: "35rem", flex: "1" }}
  >
            <Link href="/about">
              <div className="absolute rounded-2xl inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex items-center justify-center">
                Additional Text on Hover
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-lime-100 p-4 md:p-6 mt-12 mb-10 rounded-md shadow-md mx-4 md:w-1/3 md:mx-auto">
          <form>
            <div className="mb-2 md:mb-4">
              <label className="block text-sm md:text-base text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ring-gray-400"
              />
            </div>
            <div className="mb-2 md:mb-4">
              <label className="block text-sm md:text-base text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ring-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-lime-700 text-white px-4 py-2 rounded-md hover:bg-lime-800 transition-all"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Don&apos;t have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    );
  }
  export default Home;