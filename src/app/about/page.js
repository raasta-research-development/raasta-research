// About.jsx
import React from "react";

function About() {
  return (

    <div className="aboutmain mt-28">
      <div className="logodiv flex flex-row justify-center items-start h-screen"
      style={{height: "220px"}} 
      >
        
        <img
          src="/images/raasta.png"
          alt="News and Updates"
          className="max-w-full max-h-full object-contain"
        />

        <img
          src="/images/foot.png"
          alt="News and Updates"
          className=""
          style={{ width: "100px", height: "200px"}} />
      </div>

      <div className="pr-20 pl-20 pt-6 bg-white"  >
        <p className="text-center">
          Hello Global Community,

          We're Raasta Research and Development, embarking on an exciting journey to explore various facets of global sustainable development. In our dedicated quest, we're not only uncovering a wealth of knowledge available around the world but also ensuring it's freely accessible to everyone. Our goal is to bridge the gap in understanding nature and its resources, cultivating global awareness that encourages conscientious choices for a harmonious environment.

          Recognizing the intricate nature of sustainability, which varies across regions, we emphasize the need for tailored plans instead of a universal approach. This involves respecting the unique characteristics, challenges, and opportunities in each area. Our commitment extends to spotlighting the dedicated efforts of individuals and organizations worldwide tirelessly working towards sustainability.

          Through our platform, we aim to be a hub of information, connecting regional initiatives with global awareness. By sharing insights into sustainable development projects worldwide, we strive to contribute to a shared understanding and promotion of responsible and enduring practices.
        </p>
      </div>

    </div>
  );
}

export default About;



