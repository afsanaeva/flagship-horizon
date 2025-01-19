"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
// import AddIcon from "@/components/icons/AddIcon";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import SlideVideo from "./SlideVideo";
import SlideCard from "./SlideCard";
import SlideCardImage from "../solution/SlideCardImage";

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

    api?.on("select", checkBounds);
    checkBounds(); // Initial check
    return () => {
      api?.off("select", checkBounds);
    };
  }, [api]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "just",
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
        <CarouselContent className="items-center gap-6 container-xl">
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
      <div className="absolute right-4 mr-10 mt-[1.1875rem] flex gap-2">
        <button
          onClick={() => api?.scrollPrev()}
          className={cn(
            "flex size-[38px] items-center justify-center rounded-full bg-[#F0F5FA] text-gray-700 shadow-md transition hover:bg-gray-200",
            { "opacity-50 cursor-not-allowed": isStart } // Disable button styling
          )}
          disabled={isStart}
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={() => api?.scrollNext()}
          className={cn(
            "flex size-[38px] items-center justify-center rounded-full bg-[#F0F5FA] text-gray-700 shadow-md transition hover:bg-gray-200",
            { "opacity-50 cursor-not-allowed": isEnd } // Disable button styling
          )}
          disabled={isEnd}
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default CarouselCard;
