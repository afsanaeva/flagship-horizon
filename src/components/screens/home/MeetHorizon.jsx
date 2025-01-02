"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { fadeTop } from "@/components/layout/Header";
import Image from "next/image";
import Minus from "@/components/icons/Minus";
import Plus from "@/components/icons/Plus";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Horizon Shorts",
    img: "/assets/home/hero/slide-1.png",
    text1: "Grow with short - form videos",
    subText1:
      "Drive instant engagement with the world’s most consumed content format.",
    text2: "Personalized infinity scrolls",
    subText2:
      "Deliver endless streams of personalized short videos for every user.",
    text3: "Shoppable Shorts",
    subText3: "Shorts come equipped with advanced monetization tools.",
  },
  {
    title: "Horizon Stories",
    img: "/assets/home/hero/slide-2.png",
    text1: "Highlight what matters to your customers",
    subText1:
      "Create immersive stories that captivate users and deepen connections.",
    text2: "Deeper interaction with users",
    subText2:
      "Enable features like reactions, comments, and sharing to enhance value.",
    text3: "Dynamic monetization",
    subText3:
      "Deliver multi-format ads and e-commerce capabilities within Stories.",
  },
  {
    title: "Horizon Feeds",
    img: "/assets/home/hero/slide-3.png",
    text1: "Build an engaged community",
    subText1:
      "Build infinite scrolling feeds to keep users engaged and returning.",
    text2: "Drive a loyal community",
    subText2:
      "Foster strong user loyalty with personalized feeds and targeted content.",
    text3: "New ways to monetize ",
    subText3:
      "Unlock revenue opportunities with targeted ads and integrated shops.",
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
              text1={slide.text1}
              subText1={slide.subText1}
              text2={slide.text2}
              subText2={slide.subText2}
              text3={slide.text3}
              subText3={slide.subText3}
              image={slide.img}
              index={index}
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

const Slide3 = ({
  title,
  image,
  text1,
  subText1,
  text2,
  subText2,
  text3,
  subText3,
  index,
  isSelected,
}) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <CarouselItem
      key={index}
      className={cn(
        "flex flex-col md:flex-row items-center md:justify-around p-6 bg-[#F7FBFE] rounded-[36px] transition-transform container",
        {
          "opacity-100 scale-100": isSelected,
          "opacity-50 scale-90": !isSelected,
        }
      )}
    >
      {/* Left Content (Accordion Section) */}
      <div className="space-y-4 text-center md:max-w-[50%] md:text-left">
        <h3 className="font-52px mb-20 cursor-pointer font-semibold text-[#15234E]">
          {title}
        </h3>

        {/* First Section */}
        <h3
          className="font-32px flex cursor-pointer items-center justify-between py-3 font-normal text-[#15234E]"
          onClick={() => toggleAccordion(1)}
          // dangerouslySetInnerHTML={{ __html: text1 }}
        >
          {text1}
          {activeIndex === 1 ? <Minus /> : <Plus />}
        </h3>
        {activeIndex === 1 && (
          <p className="font-22px max-w-[300px] py-3 text-[#15234E]">
            {subText1}
          </p>
        )}
        <hr />

        {/* Second Section */}
        <h3
          className="font-32px flex cursor-pointer items-center justify-between py-3 font-normal text-[#15234E]"
          onClick={() => toggleAccordion(2)}
        >
          {text2}
          {activeIndex === 2 ? <Minus /> : <Plus />}
        </h3>
        {activeIndex === 2 && (
          <p className="font-22px max-w-[300px] py-3 text-[#15234E]">
            {subText2}
          </p>
        )}
        <hr />

        {/* Third Section */}
        <h3
          className="font-32px flex cursor-pointer items-center justify-between py-3 font-normal text-[#15234E] "
          onClick={() => toggleAccordion(3)}
        >
          {text3}
          {activeIndex === 3 ? <Minus /> : <Plus />}
        </h3>
        {activeIndex === 3 && (
          <p className="font-22px max-w-[300px] py-3 text-[#15234E]">
            {subText3}
          </p>
        )}
      </div>

      {/* Right Content (Image with Blurred Background) */}
      <div className="relative flex items-center justify-center">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 rounded-[40px] blur-xl"
          style={{
            background: `
            radial-gradient(circle at 25% 25%, #CCEDFF, transparent 50%),
            radial-gradient(circle at 75% 25%, #D6CCFF, transparent 50%),
            radial-gradient(circle at 25% 75%, #FFE8F2, transparent 50%),
            radial-gradient(circle at 75% 75%, #C9E2FF, transparent 50%)
          `,
            zIndex: -1, // Keeps it behind the image
          }}
        ></div>

        {/* Image */}
        <Image
          src={image}
          alt={title}
          width={558}
          height={532}
          className="rounded-[40px]" // Keep the image rounded
        />
      </div>
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
