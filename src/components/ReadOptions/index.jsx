"use client";
import React, { useState, lazy, Suspense } from "react";
import content from "./content"; 

const Options = lazy(() => import("./Options")); 

function AboutOptions() {
  const [option, setOption] = useState("option1");

  return (
    <>
      <div className="flex flex-col lg:flex-row h-full mt-10 lg:ml-20 px-4 lg:px-0">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-sm lg:text-base w-full">
          {Object.keys(content).map((key) => (
            <li
              key={key}
              className={`cursor-pointer ${
                option === key ? 'bg-new-color text-white' : 'bg-new-color bg-opacity-50'
              } p-2 hover:bg-new-color flex items-center justify-center transition duration-200`}
              onClick={() => setOption(key)}
            >
              {content[key].title}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-4 lg:mt-0">
        <Suspense fallback={<div>Loading...</div>}>
          <Options option={option} />
        </Suspense>
      </div>
    </>
  );
}

export default AboutOptions;
