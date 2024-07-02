"use client";
// import * as React from "react";
import React, { useState } from 'react';
import Image from 'next/image'


import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SunSnow } from "lucide-react";

const Option1 = () => (
  <div className='w-11/12 mt-8 mx-auto items-center flex flex-col-reverse lg:flex-row lg:ml-36'>
    <div className='w-full items-center lg:items-start lg:w-2/4 flex flex-col'>
      <h1 className='text-4xl lg:text-6xl font-serif'>Eyes of Planet</h1>
      <h2 className='text-lg lg:text-xl font-serif ml-1 mb-4 lg:mb-8'>
        Your Visual Guide to Sustainability
      </h2>
      <span className='text-justify'>
        Welcome to Planet Peep, Raasta&apos;s streaming platform dedicated to sustainable development. Here, we curate information from across the globe—insights, practices, and discoveries from diverse cultures, environments, economies, and geographies. Our mission is to educate the world by presenting this wealth of knowledge in an accessible and user-friendly manner. Through global collaborations with organizations and individuals, our aim is to create a comprehensive tapestry of wisdom for a sustainable future.
      </span>
      <button className='border border-black w-28 h-8 text-base lg:text-lg mt-4'>
        Know more
      </button>
    </div>
    <Image
      className='rounded-full overflow-hidden border border-gray-300 h-60 w-60 lg:h-80 lg:w-80 mb-8 lg:mb-0 lg:ml-8'
      src="/images/planetpeep.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  </div>
);

const Option2 = () => 
  <div className='w-11/12 mt-8 mx-auto items-center flex flex-col-reverse lg:flex-row lg:ml-36'>
    <div className='w-full items-center lg:items-start lg:w-2/4 flex flex-col'>
    <h className='text-4xl lg:text-6xl font-serif'>Voice of planet</h>
    <span className='text-justify'>
    Raasta Audiobook is our premier podcast and audio channel, serving as your gateway to diverse sustainability topics. Our engaging audiobooks cover sustainable living, conservation, and eco-friendly innovations, making complex subjects accessible to all.
</span>
<button className='border border-black w-28 h-8 text-base lg:text-lg mt-4'>
Know more
</button> 
    </div>
    <Image 
      className='rounded-full overflow-hidden border border-gray-300 h-60 w-60 lg:h-80 lg:w-80 mb-8 lg:mb-0 lg:ml-8'
      src="/images/voiceofp.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
  </div>;

  const Option3 = () => 
    <div className='w-11/12 mt-8 mx-auto items-center flex flex-col-reverse lg:flex-row lg:ml-36'>
    <div className='w-full items-center lg:items-start lg:w-2/4 flex flex-col'>
      <h className='text-4xl lg:text-6xl font-serif'>Stories of the Planet</h>
      <span className='text-justify'>
      This platform of Raasta acts as a comprehensive resource addressing global environmental challenges. We publish diverse content — research, news, stories, and articles — on sustainable development, spanning cultures, environments, economies, and geographies. Our primary goal is to gather scattered information worldwide, compiling it for universal accessibility. By doing so, we aim to contribute to a unified global approach to sustainable development.
      </span>
      <button className='border border-black w-28 h-8 text-base lg:text-lg mt-4'>
      Know more
</button> 
      </div>
      <Image 
      className='rounded-full overflow-hidden border border-gray-300 h-60 w-60 lg:h-80 lg:w-80 mb-8 lg:mb-0 lg:ml-8'
          src="/images/articles.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
    </div>;

function About() {
  
  const imageUrls = [
    "/images/c1.webp",
    "/images/c2.webp",
    "/images/c3.webp",
    "/images/c4.webp",
    "/images/c5.webp",
  ];

  const [option, setOption] = useState('option1');

  const renderContent = () => {
    switch (option) {
      case 'option1':
        return Option1();
      case 'option2':
        return <Option2 />;
      case 'option3':
        return <Option3 />;
      default:
        return <Option1 />;
    }
  };
  

  return (
    <div className="mt-28 overflow-hidden">
      <div className="flex flex-col justify-center items-center">
      <Image
  src="/images/aboutlogo.png"
  alt="News and Updates"
  width={170}  
  height={170} 
  className=""/>

        <Image src="/images/raasta.png" alt="logo" width="520" height="520" className=" "
 />
      </div>

      <Carousel
  plugins={[
    Autoplay({
      delay: 2000,
    }),
  ]}
  opts={{
    align: "start",
    loop: true,
  }}
  className="ml-auto mr-auto md:ml-28 md:mr-0 max-w-7xl"
>
  <CarouselContent className="max-h-96 h-96">
    {imageUrls.map((url, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1 h-full">
          <Card className="h-full">
            <CardContent className="flex aspect-square items-center justify-center p-0">
              <Image
                src={url}
                alt={`Image ${index + 1}`}
                width={800}
                height={800}
                className="object-cover h-full w-full"
              />
               

            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))} 
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

<div className="pt-6 mt-16 text-justify lg:text-center mx-auto md:ml-72 bg-white md:w-3/5 px-4 md:px-0 ">
        <span className="text-lg">
          <strong className='text-xl'>Hello Global Community,</strong>
          <br />
          Were Raasta Research and Development, embarking on an exciting journey
          to explore various facets of global sustainable development. In our
          dedicated quest, we&apos;re not only uncovering a wealth of knowledge
          available around the world but also ensuring it&apos;s freely accessible to
          everyone. Our goal is to bridge the gap in understanding nature and
          its resources, cultivating global awareness that encourages
          conscientious choices for a harmonious environment. Recognizing the
          intricate nature of sustainability, which varies across regions, we
          emphasize the need for tailored plans instead of a universal approach.
          This involves respecting the unique characteristics, challenges, and
          opportunities in each area. Our commitment extends to spotlighting the
          dedicated efforts of individuals and organizations worldwide
          tirelessly working towards sustainability. Through our platform, we
          aim to be a hub of information, connecting regional initiatives with
          global awareness. By sharing insights into sustainable development
          projects worldwide, we strive to contribute to a shared understanding
          and promotion of responsible and enduring practices.
        </span>
        <br></br>
      
</div>

<div className="relative flex flex-col lg:items-center lg:flex-row mt-10 w-full px-4 lg:ml-60">
  <Image
    src="/images/saveearth.png"
    width={450}
    height={450}
    alt="Picture of the author"
    className="md:absolute md:left-20 mb-4 md:mb-0"
  />
  
  <video className="overflow-hidden w-full md:w-[800px] h-auto md:h-[500px] lg:ml-96" autoPlay loop muted>
    <source src="/images/earthloop.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>


<div className='flex flex-col lg:flex-row'>
  <div className='w-full lg:w-4/6'>
    <nav className='w-full lg:w-3/5 gap-2 mx-auto lg:ml-40'>
      <ul className='flex lg:flex-row text-lg lg:text-xl justify-between'>
        <li
          className="cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 lg:mb-0"
          onClick={() => setOption('option1')}
        >
          Planet Peep
        </li>
        <li
          className="cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50 mb-2 lg:mb-0"
          onClick={() => setOption('option2')}
        >
          Audio book
        </li>
        <li
          className="cursor-pointer hover:text-gray-500 border border-gray-300 rounded-md p-2 hover:bg-gray-50"
          onClick={() => setOption('option3')}
        >
          Articles & stories
        </li>
      </ul>
    </nav>
    <div className='mt-4 lg:mt-0'>
      {renderContent()}
    </div>
  </div>

  <div className='mt-8 lg:mt-0 lg:ml-20 flex flex-col items-center justify-center'>
    <h1 className='text-4xl lg:text-6xl text-center'>Our Learning <br /> Platforms</h1>
    <button className='border border-black text-base lg:text-lg px-3 py-1 mt-4'>
      Know more
    </button>
  </div>
</div>

    
    <Carousel
  plugins={[
    Autoplay({
      delay: 2000,
    }),
  ]}
  opts={{
    align: "start",
    loop: true,
  }}
  className="ml-auto mt-40 mr-auto md:ml-28 md:mr-0 max-w-7xl"
>
  <CarouselContent className="max-h-96 h-96">
    {imageUrls.map((url, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1 h-full">
          <Card className="h-full">
            <CardContent className="flex aspect-square items-center justify-center p-0">
            <Image
                src={url}
                alt={`Image ${index + 1}`}
                width={800}
                height={800}
                className="object-cover h-full w-full"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>



<div className="mt-20 mb-20 flex flex-col md:flex-row items-center gap-8 md:gap-20 mx-auto md:w-3/5 md:px-4">
  <h1 className="text-3xl md:text-5xl lg:text-7xl leading-tight font-bold">
    Why Raasta?
  </h1>
  <p className="text-base text-justify md:text-lg leading-relaxed">
    In a world dealing with a range of environmental issues, it is crucial to have thorough information on sustainable development from diverse environmental, geographical, economical, and cultural perspectives. Recognizing that sustainability is not a one-size-fits-all concept. Each environment, geography, economy, and culture presents unique challenges, opportunities, and solutions. Through the exploration of global information, we gain an elaborate understanding of the diverse approaches to sustainability. This knowledge empowers us to tailor strategies that consider local contexts, ensuring the effectiveness of initiatives. Creating awareness worldwide is crucial because it fosters a collective understanding of the global interconnectedness of sustainable practices. It inspires collaboration, allowing the global population to learn from each other, adopt successful models, and collectively work towards a more sustainable and resilient future. In essence, the need to gather and share this information globally is essential for fostering a united front in the global pursuit of sustainability.
  </p>
</div>


  </div>
  );
}

export default About;
