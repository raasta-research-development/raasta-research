// AboutOptions.jsx
'use client'
import React, { useState, lazy, Suspense } from "react";
import content from "./content"; // Importing the content object
const Options = lazy(() => import("./Options")); // Lazy load the Options component

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



// "use client";
// import React, { useState } from "react";
// import { FirstOption, SecondOption, ThirdOption } from "./Options";





// function AboutOptions() {

//   const [option, setOption] = useState("firstOption");

//   const renderContent = () => {
//     switch (option) {
//       case "firstOption":
//         return <FirstOption />;
//       case "secondOption":
//         return <SecondOption />;
//       case "thirdOption":
//         return <ThirdOption />;
//       default:
//         return <FirstOption />;
//     }
//   };

//   return (
//     <>
//       <div className="flex h-3/5 mt-10 ml-20" >
//         <ul className="grid grid-cols-2 gap-4 text-sm lg:text-base w-full">
//           <li
//             className="w-72 cursor-pointer bg-lime-600 hover:text-gray-500 border border-gray-300 p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Sustainable Development and Practices
//           </li>
//           <li
//             className="w-72 cursor-pointer bg-lime-600 hover:text-gray-500 border border-gray-300 p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Sustainable Development and Practices
//           </li>
//           <li
//             className="w-72 cursor-pointer bg-lime-600 hover:text-gray-500 border border-gray-300 p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Sustainable Development and Practices
//           </li>
//           <li
//             className="w-72 cursor-pointer bg-lime-600 hover:text-gray-500 border border-gray-300 p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Sustainable Development and Practices
//           </li>
//           <li
//             className="w-72 cursor-pointer bg-lime-700 hover:text-gray-500 border border-gray-300 p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Sustainable Development and Practices
//           </li>
//           <li
//             className="w-72 cursor-pointer bg-lime-600 hover:text-gray-500 border border-gray-300 p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Sustainable Development and Practices
//           </li>
//           <li
//             className="w-72 cursor-pointer bg-lime-600 hover:text-gray-500 border border-gray-300 p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Sustainable Development and Practices
//           </li>
//           <li
//             className="w-72 cursor-pointer bg-lime-650 hover:text-gray-500 border border-gray-300 p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Sustainable Development and Practices
//           </li>
//           <li
//             className="w-72 cursor-pointer bg-lime-600 hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Sustainable Development and Practices
//           </li>
//           <li
//             className="w-72 cursor-pointer bg-lime-600 hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Sustainable Development and Practices
//           </li>
//           <li
//             className="w-72 cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Sustainable Development and Practices
//           </li>
//           <li
//             className="w-72 cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Sustainable Development and Practices
//           </li>
//           <li
//             className="w-72 cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Planet Peep
//           </li>
//           <li
//             className="w-72 cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Planet Peep
//           </li>
//           <li
//             className="w-72 cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Planet Peep
//           </li>
//           <li
//             className="w-72 cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Planet Peep
//           </li>
//           <li
//             className="w-72 cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("firstOption")}
//           >
//             Planet Peep
//           </li>
//           <li
//             className="w-72 cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("secondOption")}
//           >
//             Audio book
//           </li>
//           <li
//             className="w-72 cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 whitespace-nowrap"
//             onClick={() => setOption("thirdOption")}
//           >
//             Articles & stories
//           </li>
//         </ul>
//       </div>

//       <div className="mt-4 lg:mt-0">{renderContent()}</div>
//     </>
//   );
// }

// export default AboutOptions;
