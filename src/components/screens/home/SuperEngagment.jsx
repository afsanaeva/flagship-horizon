"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
// import AddIcon from "@/components/icons/AddIcon";
import { PlusIcon, X } from "lucide-react";
// import CrossIcon from "@/components/icons/CrossIcon";

const SuperEngagment = () => {
  return (
    <section className="container-lg mx-5">
      <div className="space-y-40px text-left">
        <h1 className="font-92px font-semibold leading-snug">
          <span
            style={{
              background:
                "linear-gradient(90deg, #15234E 16.26%, #001D7B -21.97%, #0032FD 22.49%, #10F0FC )",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            How Super Engagement Works.
          </span>
        </h1>
      </div>
      <HeroSlides />
    </section>
  );
};

export default SuperEngagment;

const HeroSlides = () => {
  const [api, setApi] = useState();
  const [blurredIndex, setBlurredIndex] = useState(null); // Track which slide is blurred
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

  const handleBlurToggle = (index) => {
    setBlurredIndex(blurredIndex === index ? null : index); // Toggle blur for the selected slide
  };

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
        <CarouselContent className="items-center py-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <Slide
              key={index}
              index={index}
              isBlurred={blurredIndex === index} // Check if this slide is blurred
              onBlurToggle={() => handleBlurToggle(index)} // Toggle blur state
            />
          ))}
        </CarouselContent>
      </Carousel>
      {/* Navigation Buttons */}
      <div className="absolute right-4 mr-10 flex gap-2">
        <button
          onClick={() => api?.scrollPrev()}
          className={cn(
            "flex size-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-gray-200",
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
            "flex size-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-gray-200",
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

const Slide = ({ title, image, index, isBlurred, onBlurToggle }) => {
  return (
    <CarouselItem
      key={index}
      className={cn("basis-[65%] md:basis-[25%] items-center flex max-md:pl-3")}
      style={{ height: "100%" }}
    >
      <div className="relative mt-8 w-full">
        {/* Conditionally render the images */}
        {isBlurred ? (
          <Image
            src={`/assets/home/super-engagment/blurImg${index + 1}.png`}
            alt={title}
            width={458}
            height={732}
            className="rounded-40px zoom-in-1-035 w-full cursor-pointer object-contain object-center"
          />
        ) : (
          <Image
            src={`/assets/home/super-engagment/slide-${index + 1}.png`}
            alt={title}
            width={458}
            height={832}
            className="rounded-40px zoom-in-1-035 w-full cursor-pointer object-contain object-center"
          />
        )}

        {/* Action Button */}
        <div
          className={`absolute bottom-6 right-6 cursor-pointer rounded-full p-[5px] ${
            isBlurred ? "bg-[#ffff] text-[#15234E]" : "bg-[#6c6a6a] text-white"
          }`}
          onClick={onBlurToggle} // Use parent handler
        >
          {isBlurred ? <X /> : <PlusIcon />}
        </div>
      </div>
    </CarouselItem>
  );
};
