import React from 'react';
import { motion } from 'framer-motion';


function Home() {
  return (
    <div className="mt-20"> {/* Adjust the margin as needed */}
  <div className="mt-7 bg-gray-500 p-4 relative" style={{ height: '35.8rem' }}>
    <img
      src="/images/news1.jpg"
      alt="News and Updates"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 flex items-center justify-center text-white">
      <h1 className="text-4xl font-bold">News and Updates</h1>
    </div>

    <div className="absolute bottom-4 left-4 z-10">
      <button className="bg-white text-gray-800 px-4 py-2 rounded-md shadow-md">
        Read More
      </button>
    </div>
  </div>
    
     <div className="bg-gray-500 mt-4 p-4" style={{ height: '20rem' }}>
        Content Here
      </div>
      <div className="bg-gray-500 mt-4 p-4" style={{ height: '20rem' }}>
        Content Here
      </div>
      <div className="bg-gray-500 mt-4 p-4" style={{ height: '20rem' }}>
        Content Here
      </div>
    </div>
  );
}
export default Home;
