'use client'
import * as React from "react"
import Image from 'next/image'

// import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function About() {
  const imageUrls = [
    '/images/c1.webp',
    '/images/c2.webp',
    '/images/c3.webp',
    '/images/c4.webp',
    '/images/c5.webp'
  ];


  return (
    <div className="aboutmain mt-28 overflow-x-auto">
      <div
        className="logodiv flex flex-row justify-center items-start"
        style={{ height: "220px" }}
      >
        <img
          src="/images/foot.png"
          alt="News and Updates"
          style={{ width: "75px", height: "150px" }}
        />

         <Image
        src="/images/raasta.png"
        alt="logo"
        width={300}  
        height={200}  
        layout="responsive"
        objectFit="contain" 
        className="object-cover rounded-lg w-80 h-72"
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
                    <img src={url} alt={`Image ${index + 1}`} className="object-cover h-full w-full" />
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
          Were Raasta Research and Development, embarking on an exciting journey to explore various facets of global sustainable development. In our dedicated quest, we're not only uncovering a wealth of knowledge available around the world but also ensuring it's freely accessible to everyone. Our goal is to bridge the gap in understanding nature and its resources, cultivating global awareness that encourages conscientious choices for a harmonious environment.
          
          Recognizing the intricate nature of sustainability, which varies across regions, we emphasize the need for tailored plans instead of a universal approach. This involves respecting the unique characteristics, challenges, and opportunities in each area. Our commitment extends to spotlighting the dedicated efforts of individuals and organizations worldwide tirelessly working towards sustainability.
          
          Through our platform, we aim to be a hub of information, connecting regional initiatives with global awareness. By sharing insights into sustainable development projects worldwide, we strive to contribute to a shared understanding and promotion of responsible and enduring practices.
        </span>
        <button>Know more</button>
      </div>
    </div>
  );
}

export default About;
