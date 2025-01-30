'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
// import AddIcon from "@/components/icons/AddIcon";
import { Carousel, CarouselContent } from '@/components/ui/carousel';
import SlideVideo from './SlideVideo';
import SlideCard from './SlideCard';
import SlideCardImage from '../solution/SlideCardImage';
import NavigationButtons from '@/components/ui/NavigationButtons';

const CarouselCard = ({ dataVideo, dataCard, dataCardImage }) => {
  const [api, setApi] = useState();
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!api) return;
    const checkBounds = () => {
      setIsStart(api?.canScrollPrev() === false);
      setIsEnd(api?.canScrollNext() === false);
    };

    api?.on('select', checkBounds);
    checkBounds(); // Initial check
    return () => {
      api?.off('select', checkBounds);
    };
  }, [api]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: 'just',
          duration: 0.5,
          delay: 0.5,
        },
      }}
      viewport={{ once: true }}
    >
      <Carousel
        setApi={setApi}
        className="pointer-events-auto w-full"
        opts={{
          loop: false, // Disable infinite scrolling
          dragFree: true,
        }}
        tabIndex={-1}
      >
        <CarouselContent className="container-xl items-center gap-7">
          {Array.from({ length: 6 }).map((_, index) => {
            const videoItem = dataVideo?.[index];
            const cardItem = dataCard?.[index];
            const cardImage = dataCardImage?.[index];

            if (cardImage) {
              return (
                <SlideCardImage
                  key={cardImage.id}
                  index={index}
                  cardImage={cardImage}
                />
              );
            }

            if (videoItem) {
              return (
                <SlideVideo
                  key={videoItem.id}
                  index={index}
                  dataVideo={videoItem}
                />
              );
            }

            if (cardItem) {
              return (
                <SlideCard
                  key={cardItem.id}
                  index={index}
                  dataCard={cardItem}
                />
              );
            }
            return null;
          })}
        </CarouselContent>
      </Carousel>
      {/* Navigation Buttons */}
      <NavigationButtons api={api} isStart={isStart} isEnd={isEnd} />
    </motion.div>
  );
};

export default CarouselCard;
