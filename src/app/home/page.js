import React from 'react';

function Home() {
  return (
    <div className="mt-20">
      <div className="bg-gray-500 mt-4 p-4" style={{ height: '25rem' }}>
        Content Here
      </div>

      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 ring-gray-400 transition-all hover:border-gray-400 mt-4"
      />

      <div>
        <p>
          dsofjnodsjfno oafjnadojfnajf oadjd afjnoa
        </p>
      </div>

      <div className="flex mt-4 space-x-4">
        <div className="bg-gray-500 p-4 rounded-2xl hover:bg-[url('/images/foot.png')]  transform hover:scale-105 transition-all duration-300 relative" style={{ height: '35rem', flex: '1', marginLeft: '70px'}}>
          Content Here
          <div className="absolute rounded-2xl inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-lg font-semibold">
            Additional Text on Hover
          </div>
        </div>

        <div className="bg-gray-500 p-4 rounded-2xl  transform hover:scale-105 transition-all duration-300 relative" style={{ height: '35rem', flex: '1'}}>
          Content Here
          <div className=" bg-cover bg-center bg-no-repeat hover:bg-[url('/images/foot.png')] absolute rounded-2xl inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-lg font-semibold">
            Additional Text on Hover
          </div>
        </div>

        <div className="bg-gray-500 p-4 rounded-2xl  transform hover:scale-105 transition-all duration-300 relative" style={{ height: '35rem', flex: '1'}}>
          Content Here
          <div className=" bg-cover bg-center bg-no-repeat hover:bg-[url('/images/foot.png')] absolute rounded-2xl inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-lg font-semibold">
            Additional Text on Hover
          </div>
        </div>
        
        <div className="bg-gray-500 p-4 rounded-2xl  transform hover:scale-105 transition-all duration-300 relative" style={{ height: '35rem', flex: '1',marginRight: '70px' }}>
          Content Here
          <div className=" bg-cover bg-center bg-no-repeat hover:bg-[url('/images/foot.png')] absolute rounded-2xl inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-lg font-semibold">
            Additional Text on Hover
          </div>
        </div>
      </div>
      

      <div className="bg-white p-6 mt-6 rounded-md shadow-md w-1/3 mx-auto">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ring-gray-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 ring-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
