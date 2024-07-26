import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize({ className }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className={`w-full ${className}`}
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/6 p-1"> 
            <div className="p-1"> 
              <Card className="p-2">
                <CardContent className="flex aspect-square items-center justify-center p-3"> {/* Adjusted padding */}
                  <span className="text-2xl font-semibold">{index + 1}</span> {/* Adjusted text size */}
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
}
