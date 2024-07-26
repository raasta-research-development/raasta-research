import React from "react";
import Image from "next/image";
import content from "./content"; 
import Link from "next/link";

const Options = ({ option }) => {
  const selectedOption = content[option];
  const { imageUrl, title, listItems, link } = selectedOption;

  return (
    <div className="bg-new-color bg-opacity-15 h-full mb-20 w-full flex flex-col lg:flex-col lg:ml-28">
      <div className="w-full lg:w-96 mt-5 mx-auto lg:ml-28 flex flex-col items-center p-4">
        <Image
          className="h-60 w-60 lg:h-80 lg:w-80 lg:mb-0 shadow-2xl"
          src={imageUrl}
          width={500}
          height={500}
          alt={title}
        />
        <Link href={link}>
          <p className="text-center text-lg text-white font-bold mt-4 bg-new-color rounded-full px-4">
            {title}
          </p>
        </Link>
      </div>
      <div className="w-full lg:w-auto mx-auto lg:ml-10 mt-4">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <ul className="list-inside list-disc text-gray-700">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="mb-1 hover:bg-new-color hover:text-white rounded-full px-3 py-1 w-full lg:w-60 transition duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Options;
