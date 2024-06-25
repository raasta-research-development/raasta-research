// video.jsx
import React from "react";

function video() {
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

         video</p>
      </div>

    </div>
  );
}

export default video;



