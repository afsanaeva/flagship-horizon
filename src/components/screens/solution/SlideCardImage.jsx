"use client";

import React from "react";

import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SlideCardImage = ({ index, cardImage }) => {
  console.log("🚀 ~ SlideCardImage ~ cardImage:", cardImage);
  return (
    <CarouselItem
      key={index}
      className={cn(
        "basis-[65%] md:basis-[25%] items-start flex flex-col gap-7"
      )}
      style={{ height: "100%" }}
    >
      <div className="relative w-full overflow-hidden rounded-t-3xl">
        <Image
          src={`/assets/solution/Horizon/${cardImage.image}.svg`}
          alt="slider images"
          width={458}
          height={832}
          className="zoom-in-1-035 w-full object-contain object-center"
        />
      </div>
    </CarouselItem>
  );
};

export default SlideCardImage;
