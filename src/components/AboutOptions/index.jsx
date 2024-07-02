"use client";
import React, { useState } from "react";
import { FirstOption, SecondOption, ThirdOption } from "./Options";

function AboutOptions() {
  const [option, setOption] = useState("firstOption");

  const renderContent = () => {
    switch (option) {
      case "firstOption":
        return <FirstOption />;
      case "secondOption":
        return <SecondOption />;
      case "thirdOption":
        return <ThirdOption />;
      default:
        return <FirstOption />;
    }
  };

  return (
    <>
      <nav className="w-full lg:w-3/5 gap-2 mx-auto lg:ml-40">
        <ul className="flex lg:flex-row text-lg lg:text-xl justify-between">
          <li
            className="cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 lg:mb-0"
            onClick={() => setOption("firstOption")}
          >
            Planet Peep
          </li>
          <li
            className="cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 mb-2 lg:mb-0"
            onClick={() => setOption("secondOption")}
          >
            Audio book
          </li>
          <li
            className="cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50"
            onClick={() => setOption("thirdOption")}
          >
            Articles & stories
          </li>
        </ul>
      </nav>
      <div className="mt-4 lg:mt-0">{renderContent()}</div>
    </>
  );
}

export default AboutOptions;
