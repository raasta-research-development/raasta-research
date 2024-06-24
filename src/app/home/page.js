import React from 'react';

function Home() {
  return (
    <div className="mt-10 md:mt-20">
      <div className="bg-gray-500 mt-4 p-4 md:p-6" style={{ height: '25rem' }}>
        Content Here
      </div>

      <div className="flex justify-center items-center mt-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-auto px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 ring-gray-400 transition-all hover:border-gray-400"
        />
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="text-center px-4 md:px-8">
          <p className="text-sm md:text-lg">“Don't try to be perfect. Just try to be better than you were yesterday.”</p>
        </div>
      </div>

      <div className="flex flex-col ml-24 mr-24 md:flex-row mt-4 md:mt-8 space-y-4 md:space-y-0 md:space-x-4 justify-center">
        <div
          className="bg-[url('/images/musicbackground.jpg')] p-4 md:p-6  rounded-2xl transform hover:scale-105 transition-all duration-300 relative flex flex-col items-center justify-center group"
          style={{ height: '35rem', flex: '1' }}
        >
          <p className="text-white text-lg font-semibold mb-4 group-hover:hidden">Audio</p>
          <div className="absolute rounded-2xl inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex items-center justify-center">
            Additional Text on Hover
          </div>
        </div>

        <div
          className="bg-[url('/images/videoback.jpg')] p-4 md:p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 relative flex flex-col items-center justify-center group"
          style={{ height: '35rem', flex: '1' }}
        >
          <p className="text-white text-lg font-semibold mb-4 group-hover:hidden">Video</p>
          <div className="absolute rounded-2xl inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex items-center justify-center">
            Additional Text on Hover
          </div>
        </div>

        <div
          className="bg-[url('/images/readback.jpg')] p-4 md:p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 relative flex flex-col items-center justify-center group"
          style={{ height: '35rem', flex: '1' }}
        >
          <p className="text-white text-lg font-semibold mb-4 group-hover:hidden">Read</p>
          <div className="absolute rounded-2xl inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex items-center justify-center">
            Additional Text on Hover
          </div>
        </div>

        <div
          className="bg-[url('/images/liveback.jpg')] p-4 md:p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 relative flex flex-col items-center justify-center group"
          style={{ height: '35rem', flex: '1' }}
        >
          <p className="text-white text-lg font-semibold mb-4 group-hover:hidden">Live</p>
          <div className="absolute rounded-2xl inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex items-center justify-center">
            Additional Text on Hover
          </div>
        </div>
      </div>

      <div className="bg-lime-100 p-4 md:p-6 mt-12 mb-10 rounded-md shadow-md mx-4 md:w-1/3 md:mx-auto">
        <form>
          <div className="mb-2 md:mb-4">
            <label className="block text-sm md:text-base text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ring-gray-400"
            />
          </div>
          <div className="mb-2 md:mb-4">
            <label className="block text-sm md:text-base text-gray-700">Password</label>
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
        <p className="text-sm text-center mt-4">Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
}

export default Home;
