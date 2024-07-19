// AboutOptions.jsx
'use client'
import React, { useState, lazy} from "react";
import content from "./content"; 
const Options = lazy(() => import("./Options")); 
function AboutOptions() {
  const [option, setOption] = useState("option1");
  return (
    <>
        <div className="flex h-3/5 mt-10 ml-20">
        <ul className="grid grid-cols-2 gap-4 text-sm lg:text-base w-full">
          {Object.keys(content).map((key) => (
            <li
              key={key}
              className={`w-72  cursor-pointer ${
                option === key ? 'bg-new-color text-white' : 'bg-new-color bg-opacity-50'
              }  p-2 hover:bg-new-color flex items-center justify-center`}
              onClick={() => setOption(key)}
            >
              {content[key].title}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-4 lg:mt-0">
          <Options option={option} /> 
      </div>
    </>
  );
}

export default AboutOptions;



