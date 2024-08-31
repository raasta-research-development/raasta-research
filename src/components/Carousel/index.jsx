"use client";
import React from "react";
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

const ImageCarousel = ({ imageUrls }) => {
  return (
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
      className="ml-0 mr-auto md:ml-auto md:mr-auto max-w-7xl"
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
  );
};

export default ImageCarousel;
