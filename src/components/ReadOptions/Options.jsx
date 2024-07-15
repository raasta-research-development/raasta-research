// Options.jsx
import React from "react";
import Image from "next/image";
import content from "./content"; 

const Options = ({ option }) => {
  
  const selectedOption = content[option]; 

 const { imageUrl, title, description, listItems } = selectedOption; 

  return (
    <div className=" bg-new-color bg-opacity-15 h-11/12 mb-20  w-full flex flex-col-reverse lg:flex-col lg:ml-28">
      <div className=" w-96 mt-5 ml-28 flex flex-col items-center p-4">
      <Image
  className="h-60 w-60 lg:h-80 lg:w-80 lg:mb-0 shadow-2xl"
  src={imageUrl}
  width={500}
  height={500}
  alt={title}
/>


        <p className="text-center text-lg text-white font-bold mt-4 bg-new-color rounded-full  px-4">
          {title}
        </p>
      </div>
      <h1 className="text-xl ml-10 font-bold mt-10 mb-4">{title}</h1>
      <ul className="ml-12 list-inside text-gray-700">
        {listItems.map((item, index) => (
          <li key={index} className="mb-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;


