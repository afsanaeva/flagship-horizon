'use client';

import React, { useState } from 'react';
import { CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import ImageIcons from '../common/ImageIcons';

const SlideCard = ({ title, index, dataCard, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorstyle = isHovered ? '#FFFF' : '#15234E';

  return (
    <CarouselItem
      key={index}
      className={cn(
        `max-sm:basis-[83%] basis-[74%] lg:basis-[30%] items-start flex flex-col gap-7
        bg-[#F1F4F7] px-6 lg:px-8 pb-[1.5625rem] lg:pt-[8.625rem] pt-24 rounded-[1.75rem] 
        group hover:bg-colorText-main hover:text-white duration-300 transition-all`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-3">
        <ImageIcons src={dataCard.icon} title={title} colorstyle={colorstyle} />
        <p className="font-32px font-normal leading-[120%] tracking-tighter ">
          {dataCard.title}
        </p>
        <span className={' font-24px'}>{dataCard.subText}</span>
      </div>
    </CarouselItem>
  );
};

export default SlideCard;
