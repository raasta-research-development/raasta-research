"use client";
// import * as React from "react";
import React, { useState } from 'react';

import Image from "next/image";
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

const Option1 = () => 
<div className='w-4/5 mt-8 ml-36 flex'>
  <div className='w-2/3 flex flex-col'>
  <h className='text-6xl font-serif'>Eyes of Planet</h>
  <h className='text-xl font-serif ml-1 mb-8'>Your Visual Guide to Sustainability</h>
<span>Welcome to Planet Peep, Raasta's streaming platform dedicated to sustainable development. Here, we curate information from across the globe—insights, practices, and discoveries from diverse cultures, environments, economies, and geographies. Our mission is to educate the world by presenting this wealth of knowledge in an accessible and user-friendly manner. Through global collaborations with organizations and individuals, our aim is to create a comprehensive tapestry of wisdom for a sustainable future.</span>
  </div>
  <Image className='rounded-full overflow-hidden border border-gray-300 h-80 w-80'
      src="/images/planetpeep.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
</div>;

const Option2 = () => 
  <div className=' w-4/5 mt-8 ml-36 flex'>
    <div className='w-2/3 flex flex-col'>
    <h className='text-6xl mb-8'>Voice of planet</h>
    <span>Raasta Audiobook is our premier podcast and audio channel, serving as your gateway to diverse sustainability topics. Our engaging audiobooks cover sustainable living, conservation, and eco-friendly innovations, making complex subjects accessible to all.
</span>
    </div>
    <Image className='rounded-full overflow-hidden border border-gray-300 h-80 w-80'
        src="/images/voiceofp.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
  </div>;

  const Option3 = () => 
    <div className='w-4/5 mt-8 ml-36 flex'>
      <div className='w-2/3 flex flex-col'>
      <h className='text-6xl mb-8'>Stories of the <br></br>Planet</h>
      <span>
      This platform of Raasta acts as a comprehensive resource addressing global environmental challenges. We publish diverse content — research, news, stories, and articles — on sustainable development, spanning cultures, environments, economies, and geographies. Our primary goal is to gather scattered information worldwide, compiling it for universal accessibility. By doing so, we aim to contribute to a unified global approach to sustainable development.
      </span>
      </div>
      <Image className='rounded-full overflow-hidden border border-gray-300 h-80 w-80'
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
        className="ml-28 max-w-7xl"
      >
        <CarouselContent className="max-h-96 h-96">
          {imageUrls.map((url, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full ">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <img
                      src={url}
                      alt={`Image ${index + 1}`}
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

      <div className="pr-44 pl-44 pt-6 bg-white text-center">
        <span className="text-lg">
          <strong>Hello Global Community,</strong>
          <br />
          Were Raasta Research and Development, embarking on an exciting journey
          to explore various facets of global sustainable development. In our
          dedicated quest, we're not only uncovering a wealth of knowledge
          available around the world but also ensuring it's freely accessible to
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
        <button>Know more</button>
      </div>

      <div className=" ml-72 relative flex items-center w-5/6">

  <h className="ml-20 absolute text-8xl font-bold tracking-tighter">How do we <br></br>
  <span className="text-9xl">save</span> our <br /> planet ?</h>
  
  <video className="overflow-hidden ml-40" autoPlay loop muted>
    <source src="/images/earth-loop.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

          <div className='flex'>
      <div className='w-4/6'>
      <nav className='w-3/5 gap-2  ml-40'>
        <ul className='flex text-xl justify-between'>
          <li  className="cursor-pointer hover:text-gray-500" onClick={() => setOption('option1')}>Planet Peep</li>
          <li  className="cursor-pointer hover:text-gray-500" onClick={() => setOption('option2')}>Audio book</li>
          <li  className="cursor-pointer hover:text-gray-500" onClick={() => setOption('option3')}>Articles & stories</li>
        </ul>
      </nav>
      <div>{renderContent()}</div>

    </div>

    <div className='flex flex-col items-center justify-center'>
      <h className='text-6xl '>Our Learning <br></br>Platforms</h>
<button className='border border-black text-lg px-3 py-1 mt-4'>
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
        className="ml-28 mt-20 max-w-7xl"
      >
        <CarouselContent className="max-h-96 h-96">
          {imageUrls.map((url, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full ">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <img
                      src={url}
                      alt={`Image ${index + 1}`}
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


      <div className='mt-20 flex flex-row mx-auto md:w-1/2 md:px-0.5'>
  <h1 className='text-4xl md:text-8xl font-serif'>Why <br className="md:hidden" /> Raasta ?</h1>
  <p className='text-base md:text-lg'>
    In a world dealing with a range of environmental issues, it is crucial to have thorough information on sustainable development from diverse environmental, geographical, economical, and cultural perspectives. Recognizing that sustainability is not a one-size-fits-all concept. Each environment, geography, economy, and culture presents unique challenges, opportunities, and solutions. Through the exploration of global information, we gain an elaborate understanding of the diverse approaches to sustainability. This knowledge empowers us to tailor strategies that consider local contexts, ensuring the effectiveness of initiatives. Creating awareness worldwide is crucial because it fosters a collective understanding of the global interconnectedness of sustainable practices. It inspires collaboration, allowing the global population to learn from each other, adopt successful models, and collectively work towards a more sustainable and resilient future. In essence, the need to gather and share this information globally is essential for fostering a united front in the global pursuit of sustainability.
  </p>
</div>




  </div>

  );
}

export default About;
