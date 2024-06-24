"use client";
import React, { useRef } from "react";

function About() {
  const images = [
    '/images/news1.jpg',
    '/images/foot.png',
    '/images/LOGO PNG.png',
    '/images/news1.jpg',
    '/images/LOGO PNG.png',
    '/images/news1.jpg'
  ];

  const boxRef = useRef(null);

  const btnpressprev = () => {
    if (boxRef.current) {
      boxRef.current.scrollLeft -= 200; // Adjust this value based on your scroll width
    }
  };

  const btnpressnext = () => {
    if (boxRef.current) {
      boxRef.current.scrollLeft += 200; // Adjust this value based on your scroll width
    }
  };

  return (
    <div className="aboutmain mt-28 overflow-x-auto">
      <div
        className="logodiv flex flex-row justify-center items-start"
        style={{ height: "220px" }}
      >
        <img
          src="/images/foot.png"
          alt="News and Updates"
          style={{ width: "100px", height: "200px" }}
        />
        <img
          src="/images/raasta.png"
          alt="News and Updates"
          className="mt-6 max-w-full max-h-full object-contain"
        />
      </div>

      <div
        className="imageslider1 bg-gray-500 mt-4 p-4"
        style={{ height: '25rem', overflowX: 'auto', scrollBehavior: 'smooth' }}
      >
        <button
          className="pre-btn absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded"
          // onClick={btnpressprev}
          onClick={() => btnpressprev}
        >
          <p>&lt;</p>
        </button>
        <button
          className="next-btn absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={btnpressnext}
        >
          <p>&gt;</p>
        </button>

        <div className="product-container flex space-x-4" ref={boxRef}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className="m-2"
              style={{ width: "600px", height: "300px", objectFit: "cover" }}
            />
          ))}
        </div>
      </div>

      <div className="pr-44 pl-44 pt-6 bg-white">
        <p className="text-center">
          Hello Global Community,
          <br /><br />
          We're Raasta Research and Development, embarking on an exciting journey to explore various facets of global sustainable development. In our dedicated quest, we're not only uncovering a wealth of knowledge available around the world but also ensuring it's freely accessible to everyone. Our goal is to bridge the gap in understanding nature and its resources, cultivating global awareness that encourages conscientious choices for a harmonious environment.
          
          Recognizing the intricate nature of sustainability, which varies across regions, we emphasize the need for tailored plans instead of a universal approach. This involves respecting the unique characteristics, challenges, and opportunities in each area. Our commitment extends to spotlighting the dedicated efforts of individuals and organizations worldwide tirelessly working towards sustainability.
          
          Through our platform, we aim to be a hub of information, connecting regional initiatives with global awareness. By sharing insights into sustainable development projects worldwide, we strive to contribute to a shared understanding and promotion of responsible and enduring practices.
        </p>
        <button>Know more</button>
      </div>
    </div>
  );
}

export default About;
