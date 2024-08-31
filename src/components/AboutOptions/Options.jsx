import React from "react";
import Image from "next/image";

export const FirstOption = () => (
  <div className="w-11/12 mt-8 mb-8 mx-auto items-center flex flex-col-reverse lg:flex-row lg:ml-36">
    <div className="w-full items-center lg:items-start lg:w-2/4 flex flex-col">
      <h1 className="text-4xl lg:text-6xl font-serif">Eyes of Planet</h1>
      <h2 className="text-lg lg:text-xl font-serif ml-1 mb-4 lg:mb-8">
        Your Visual Guide to Sustainability
      </h2>
      <span className="text-justify">
        Welcome to Planet Peep, Raasta&apos;s streaming platform dedicated to
        sustainable development. Here, we curate information from across the
        globe—insights, practices, and discoveries from diverse cultures,
        environments, economies, and geographies. Our mission is to educate the
        world by presenting this wealth of knowledge in an accessible and
        user-friendly manner. Through global collaborations with organizations
        and individuals, our aim is to create a comprehensive tapestry of wisdom
        for a sustainable future.
      </span>
      <button className="border border-black w-28 h-8 text-base lg:text-lg mt-4">
        Know more
      </button>
    </div>
    <Image
      className="rounded-full overflow-hidden border border-gray-300 h-60 w-60 lg:h-80 lg:w-80 mb-8 lg:mb-0 lg:ml-8"
      src="/images/planetpeep.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  </div>
);

export const SecondOption = () => (
  <div className="w-11/12 mt-8 mb-8 mx-auto items-center flex flex-col-reverse lg:flex-row lg:ml-36">
    <div className="w-full items-center lg:items-start lg:w-2/4 flex flex-col">
      <h className="text-4xl lg:text-6xl font-serif">Voice of planet</h>
      <span className="text-justify">
        Raasta Audiobook is our premier podcast and audio channel, serving as
        your gateway to diverse sustainability topics. Our engaging audiobooks
        cover sustainable living, conservation, and eco-friendly innovations,
        making complex subjects accessible to all.
      </span>
      <button className="border border-black w-28 h-8 text-base lg:text-lg mt-4">
        Know more
      </button>
    </div>
    <Image
      className="rounded-full overflow-hidden border border-gray-300 h-60 w-60 lg:h-80 lg:w-80 mb-8 lg:mb-0 lg:ml-8"
      src="/images/voiceofp.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  </div>
);

export const ThirdOption = () => (
  <div className="w-11/12 mt-8 mb-8 mx-auto items-center flex flex-col-reverse lg:flex-row lg:ml-36">
    <div className="w-full items-center lg:items-start lg:w-2/4 flex flex-col">
      <h className="text-4xl lg:text-6xl font-serif">Stories of the Planet</h>
      <span className="text-justify">
        This platform of Raasta acts as a comprehensive resource addressing
        global environmental challenges. We publish diverse content — research,
        news, stories, and articles — on sustainable development, spanning
        cultures, environments, economies, and geographies. Our primary goal is
        to gather scattered information worldwide, compiling it for universal
        accessibility. By doing so, we aim to contribute to a unified global
        approach to sustainable development.
      </span>
      <button className="border border-black w-28 h-8 text-base lg:text-lg mt-4">
        Know more
      </button>
    </div>
    <Image
      className="rounded-full overflow-hidden border border-gray-300 h-60 w-60 lg:h-80 lg:w-80 mb-8 lg:mb-0 lg:ml-8"
      src="/images/articles.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  </div>
);
