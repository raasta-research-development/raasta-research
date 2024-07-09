import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

function Share() {
  return (
    <div className="relative mt-24 overflow-hidden">
      <video
        className="w-full h-auto"
        autoPlay
        loop
        muted
      >
        <source src="/images/share.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute ml-96 top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-10">
        <BsWhatsapp className="text-black text-5xl hover:scale-110 transition-transform duration-300" />
        <LiaFacebookMessenger className="text-black text-5xl hover:scale-110 transition-transform duration-300" />
        <FaInstagram className="text-black text-5xl hover:scale-110 transition-transform duration-300" />
        <SiGmail className="text-black text-5xl hover:scale-110 transition-transform duration-300" />
        <FaSquareXTwitter className="text-black text-5xl hover:scale-110 " />
      </div>
    </div>
  );
}

export default Share;
