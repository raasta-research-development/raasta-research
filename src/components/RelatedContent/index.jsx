import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const RelatedContents = () => {
  const items = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <h2 className="text-3xl text-[#98a31f] font-bold text-center mb-8">
        Related Contents
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item) => (
            <CarouselItem
              key={item}
              className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                <Image
                  src="/cards.jpg"
                  alt={`Related content ${item}`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                  <h3 className="text-white text-lg font-semibold">
                    Content {item}
                  </h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-12" />
        <CarouselNext className="hidden sm:flex -right-12" />
      </Carousel>
    </div>
  );
};

export default RelatedContents;
