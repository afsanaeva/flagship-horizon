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
// import { fadeTop } from "@/components/layout/Header";
// import emblaCarouselAutoScroll from "embla-carousel-auto-scroll";
// import InfoCard2 from "@/components/custom-ui/InfoCard2";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

const SuperEngagment = () => {
  return (
    <section className="container-lg mx-5">
      <div className=" space-y-40px  text-left ">
        <h1 className="font-92px font-semibold leading-snug">
          <span
            style={{
              background: "linear-gradient(90deg, #15234E 16.26% , #001D7B -21.97%, #0032FD 22.49%, #10F0FC )",

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "just",
          duration: 0.5,
          delay: 0.5, // Change this value to set the desired duration in seconds
        },
      }}
      viewport={{ once: true }}
    >
      <Carousel
        setApi={setApi}
        className="pointer-events-auto w-full"
        onMouseLeave={() => {
          setTimeout(() => {
            !api?.plugins()?.autoScroll?.isPlaying() &&
              api?.plugins()?.autoScroll?.play();
          }, 100);
        }}
        onTouchEnd={() => {
          !api?.plugins()?.autoScroll?.isPlaying() &&
            api?.plugins()?.autoScroll?.play();
        }}
        opts={{
          loop: true,
          dragFree: true,
        }}
        tabIndex={-1}
      >
        <CarouselContent className="items-center py-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <Slide
              key={index}
              index={index}
              // isSelected={selectedSlide === index}
            />
          ))}
        </CarouselContent>
      </Carousel>
       {/* Navigation Buttons */}
       <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={() => api?.scrollPrev()}
          className="flex size-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-gray-200"
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
          className="flex size-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:bg-gray-200"
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

const Slide = ({ title, image, index, isSelected }) => {
  return (
    <CarouselItem
      key={index}
      className={cn("basis-[65%] md:basis-[25%] items-center flex max-md:pl-3")}
      style={{ height: "100%" }} // Ensure consistent height
    >
      <Image
        src={`/assets/home/super-engagment/slide-${index + 1}.png`}
        alt={title}
        width={458}
        height={932}
        className={cn("rounded-40px object-contain object-center w-full", {
          // "w-full": isSelected, // Ensure the image takes full width when selected
        })}
      />
    </CarouselItem>
  );
};
