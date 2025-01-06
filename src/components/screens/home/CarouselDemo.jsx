import * as React from "react";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo({ numbers }) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {numbers.map((number, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <span className="text-4xl font-semibold">
                {number.toLocaleString()}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
