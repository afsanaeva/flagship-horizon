"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { fadeTop } from "@/components/layout/Header";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Horizon Shorts",
    img: "/assets/home/hero/slide-1.png", // Replace with your image path
    text: "Grow with short - form videos",
    subText:
      "Drive instant engagement with the world’s most consumed content format.",
  },
  {
    title: "Horizon Stories",
    img: "/assets/home/hero/slide-2.png", // Replace with your image path
    text: "Highlight what matters to your customers",
    subText:
      "Create immersive stories that captivate users and deepen connections.",
  },
  {
    title: "Horizon Feeds",
    img: "/assets/home/hero/slide-3.png", // Replace with your image path
    text: "Build an engaged community",
    subText:
      "Build infinite scrolling feeds to keep users engaged and returning.",
  },
];

const HeroSlides = ({ slides }) => {
  const [api, setApi] = useState(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!api) return;
    const updateBounds = () => {
      setIsStart(!api?.canScrollPrev());
      setIsEnd(!api?.canScrollNext());
    };

    api.on("select", updateBounds);
    updateBounds(); // Initial check
    return () => api.off("select", updateBounds);
  }, [api]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Carousel
        setApi={setApi}
        className="relative"
        opts={{
          loop: false,
          dragFree: true,
        }}
      >
        <CarouselContent className="items-center rounded-[36px] bg-[#F7FBFE]">
          {slides.map((slide, index) => (
            <Slide3
              key={index}
              title={slide.title}
              text={slide.text}
              image={slide.img}
              index={index}
              subText={slide.subText}
              isSelected={api?.selectedScrollSnap() === index}
            />
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation Buttons */}
      <div className="absolute right-4 mr-10 mt-3 flex gap-2">
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

const Slide3 = ({ title, image, text, subText, index, isSelected }) => {
  return (
    <CarouselItem
      key={index}
      className={cn(
        "flex flex-col md:flex-row items-center md:justify-between p-6 pl-20 bg-[#F7FBFE] rounded-[36px] transition-transform container",
        {
          "opacity-100 scale-100": isSelected,
          "opacity-50 scale-90": !isSelected,
        }
      )}
    >
      <div className="space-y-4 text-center md:max-w-[50%] md:text-left ">
        <h3 className="font-52px font-semibold text-[#15234E]">{title}</h3>
        <h3 className="font-32px font-semibold text-[#15234E]">{text}</h3>
        <p className="font-22px border-b border-gray-300 pb-2 text-[#15234E]">
          {subText}
        </p>
      </div>
      <Image
        src={image}
        alt={title}
        width={558}
        height={532}
        className="mt-4 rounded-[40px] md:mt-0"
      />
    </CarouselItem>
  );
};

const MeetHorizon = () => {
  return (
    <div className="container-md space-y-100px mt-0">
      <div className="space-y-40px text-left ">
        <h1 className="font-92px font-semibold leading-snug text-[#15234E]">
          Meet Horizon: the world’s first
          <span
            style={{
              background:
                "linear-gradient(90deg, #001D7B -21.97%, #0032FD 22.49%, #10F0FC 66.96%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <br className="max-sm:hidden" />
            Super Engagement Platform.
          </span>
        </h1>
        <InfoCard2
          title="Say goodbye to outdated engagement tools. Horizon is the next-gen enterprise platform that</br> transforms your apps and websites into growth engines. Connect seamlessly, drive engagement and </br> unlock monetization - all from one powerful platform."
          initial={{ opacity: 0, y: 50 }}
          whileInView={fadeTop.onscreen}
          viewport={{ once: true }}
          heading="h4"
          headingClassName="font-28px font-normal text-left"
        />
      </div>
      <HeroSlides slides={slides} />
    </div>
  );
};

export default MeetHorizon;
