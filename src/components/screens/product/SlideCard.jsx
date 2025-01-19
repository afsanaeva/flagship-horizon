"use client";

import React, { useState } from "react";
import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import ImageIcons from "../common/ImageIcons";

const SlideCard = ({ title, index, dataCard }) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorstyle = isHovered ? "#FFFF" : "#15234E";

  return (
    <CarouselItem
      key={index}
      className={cn(
        `basis-[65%] md:basis-[30%] items-start flex flex-col gap-7 max-md:!ml-6 
        bg-[#F1F4F7] px-8 pb-[1.5625rem] pt-[8.625rem] rounded-[1.75rem] 
        group hover:bg-colorText-main hover:text-white duration-300 transition-all`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-[0.75rem]">
        <ImageIcons src={dataCard.icon} title={title} colorstyle={colorstyle} />
        <p className="text-[2rem] font-normal leading-[120%] tracking-tighter ">
          {dataCard.title}
        </p>
        <span className={` font-24px`}>{dataCard.subText}</span>
      </div>
    </CarouselItem>
  );
};

export default SlideCard;
