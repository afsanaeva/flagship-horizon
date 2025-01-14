"use client";

import React from "react";

import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SlideVideo = ({ title, index, dataVideo }) => {
  return (
    <CarouselItem
      key={index}
      className={cn(
        "basis-[65%] md:basis-[25%] items-start flex flex-col gap-7"
      )}
      style={{ height: "100%" }}
    >
      <div className="relative w-full rounded-tl-[1.5rem] rounded-tr-[1.5rem] overflow-hidden">
        <Image
          src={`/assets/product/slider-videos/slide-${index + 1}.png`}
          alt={title}
          width={458}
          height={832}
          className="zoom-in-1-035 w-full cursor-pointer object-contain object-center"
        />
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p
            className="font-64px font-normal leading-[100%]"
            style={{
              background:
                "linear-gradient(90deg, #001D7B -20.46%, #0032FD -10.49%, #10F0FC 62.47%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {dataVideo.percent}
          </p>
          <span className="text-[#15234E] font-24px">{dataVideo.spanText}</span>
        </div>
        <span className="text-[#67788A] font-24px leading-[120%]">
          {dataVideo.intro}
        </span>
      </div>
    </CarouselItem>
  );
};

export default SlideVideo;
