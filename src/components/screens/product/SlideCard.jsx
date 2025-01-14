import React from "react";

import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SlideCard = ({ title, index, dataCard }) => {
  return (
    <CarouselItem
      key={index}
      className={cn(
        `basis-[65%] md:basis-[30%] items-start flex flex-col gap-7 max-md:!ml-6 ${
          index === 0 ? "bg-text-main text-white" : "bg-[#F1F4F7]"
        } px-8 pb-[1.5625rem] pt-[8.625rem] rounded-[1.75rem]`
      )}
    >
      <div className="flex flex-col gap-[0.75rem]">
        <Image src={dataCard.icon} alt={title} width={43} height={43} />
        <p className="text-[2rem] font-normal leading-[120%] tracking-tighter">
          {dataCard.title}
        </p>
        <span className="text-[#15234E] font-24px">{dataCard.subText}</span>
      </div>
    </CarouselItem>
  );
};

export default SlideCard;
