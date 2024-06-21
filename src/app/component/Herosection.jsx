import React from 'react';


function Herosection() {
  return (
    <div>
      <div className="flex justify-center pt-20">
      <input
  type="text"
  placeholder="Search"
  className="mt-7 px-40 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 ring-gray-400 transition-all hover:px-48 "
/>


      </div>

      <div className="mt-3 bg-gray-500" style={{ height: '35.8rem' }}>News and dailyupdate</div>
      <div className="mt-3 bg-gray-500" style={{ height: '20rem' }}>Content Here</div>
      <div className="mt-3 bg-gray-500" style={{ height: '20rem' }}>Content Here</div>
      <div className="mt-3 bg-gray-500" style={{ height: '20rem' }}>Content Here</div>

    </div>
  );
}

export default Herosection;
