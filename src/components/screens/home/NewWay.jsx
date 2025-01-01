"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { fadeTop } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
// import emblaCarouselAutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

const slides = [
  {
    plan: "What businesses are doing",
    subText: `Emailing customers, sending SMS and notifications. It’s transactional, predictable 
and it works - sometimes. `,
  },
  {
    plan: "What Big Tech is doing",
    subText:
      "Big tech is winning by creating experiences that make users hooked - unlocking new engagement and revenue at scale.",
  },
];

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 1 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0, staggerDirection: -1 },
  },
};
const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NewWay = () => {
  return (
    <div className="container-md space-y-100px mt-0">
      <div className="space-y-40px text-left ">
        <h1 className="font-100px font-semibold leading-snug">
          There is a{" "}
          <span
            style={{
              background:
                "linear-gradient(270deg, #FF8A93 9.45%, #FF2C72 26.5%, #B51C40 41.84%, #7A1352 56.71%, #1A0760 71.5%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            seismic gap
          </span>{" "}
          in <br className="max-sm:hidden" /> how you engage.
        </h1>
        <InfoCard2
          title="Today, 90% of global engagement takes place on big tech platforms, leaving enterprises struggling <br/>  to keep up with outdated engagement tools that fail to drive sustained growth. "
          initial={{ opacity: 0, y: 50 }}
          whileInView={fadeTop.onscreen}
          viewport={{ once: true }}
          heading="h4"
          headingClassName="font-28px font-normal text-left"
        />
      </div>

      <motion.ul
        initial="closed"
        whileInView="open"
        variants={variants}
        viewport={{ once: true }}
        className="list-none"
      >
        <div className="container grid grid-cols-5 gap-5">
          {/* Left Slide (Smaller) */}
          <div className="col-span-2 flex max-w-[600px] justify-center">
            <Slide2
              img={slides[0].img}
              plan={slides[0].plan}
              subText={slides[0].subText}
              content={slides[0].content}
            />
          </div>
          {/* Right Slide (Bigger) */}
          <div className="col-span-3 flex max-w-[900px] justify-center">
            <Slide
              img={slides[1].img}
              plan={slides[1].plan}
              subText={slides[1].subText}
              content={slides[1].content}
              imgClassName="pr-0 ml-auto"
            />
          </div>
        </div>
      </motion.ul>

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

      <HeroSlides />
    </div>
  );
};

export default NewWay;

const Slide = ({ plan = "", subText }) => {
  return (
    <motion.li variants={variantsLi}>
      <article
        className="flex h-full flex-col justify-between overflow-hidden rounded-[28px]"
        style={{
          background: `
      radial-gradient(circle at 25% 25%, #CCEDFF, transparent 50%),
      radial-gradient(circle at 75% 25%, #D6CCFF, transparent 50%),
      radial-gradient(circle at 25% 75%, #FFE8F2, transparent 50%),
      radial-gradient(circle at 75% 75%, #C9E2FF, transparent 50%)
    `,
        }}
      >
        <div className=" grid h-full justify-between gap-3 px-7 py-9 2xl:gap-4 2xl:px-9 2xl:py-11 3xl:gap-4 3xl:px-12 3xl:py-14">
          <Button
            asChild
            size="lg"
            className="font-24px w-fit rounded-md bg-gradient-to-r from-[#001D7B] via-[#0032FD] to-[#10F0FC]"
          >
            <Link href={"/get-demo"}>The New Ways</Link>
          </Button>
          <div>
            <div className="mb-5 space-y-2.5 2xl:mb-6 2xl:space-y-3.5 3xl:mb-8 3xl:space-y-4">
              <h3
                className="font-40px font-normal !leading-none text-[#15234E] "
                dangerouslySetInnerHTML={{
                  __html: plan,
                }}
              />
              <p
                className="font-28px"
                dangerouslySetInnerHTML={{
                  __html: subText,
                }}
              />
            </div>
          </div>
        </div>
      </article>
    </motion.li>
  );
};

const Slide2 = ({ plan = "", subText }) => {
  return (
    <motion.li variants={variantsLi}>
      <article className="mt-4 flex h-[90%] flex-col justify-between overflow-hidden rounded-[24px] bg-[#F1F4F7]">
        <div className=" grid h-full justify-between gap-3 px-7 py-9 2xl:gap-4 2xl:px-9 2xl:py-11 3xl:gap-4 3xl:px-12 3xl:py-14">
          <Button
            asChild
            size="lg"
            className=" font-18px w-fit rounded-md bg-[#15234E]"
          >
            <Link href={"/get-demo"}>Traditional Way</Link>
          </Button>
          <div>
            <div className="mb-5 space-y-2.5 2xl:mb-6 2xl:space-y-3.5 3xl:mb-8 3xl:space-y-4">
              <h3
                className="font-28px font-normal !leading-none text-[#15234E] "
                dangerouslySetInnerHTML={{
                  __html: plan,
                }}
              />
              <p
                className="font-24px "
                dangerouslySetInnerHTML={{
                  __html: subText,
                }}
              />
            </div>
          </div>
        </div>
      </article>
    </motion.li>
  );
};

const Slide3 = ({ title, image, index, isSelected }) => {
  return (
    <CarouselItem
      key={index}
      className={cn("basis-[65%] md:basis-[25%] items-center flex max-md:pl-3")}
      style={{ height: "100%" }} // Ensure consistent height
    >
      {/* <div className="col-span-3 flex max-w-[900px] justify-center">
        <Slide
          img={slides[1].img}
          plan={slides[1].plan}
          subText={slides[1].subText}
          content={slides[1].content}
          imgClassName="pr-0 ml-auto"
        />
      </div> */}
      <Image
        src={`/assets/home/hero/slide-${index + 1}.png`}
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

const HeroSlides = () => {
  const [api, setApi] = useState();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="relative mx-auto w-full max-w-screen-4xl"
    >
      {/* Carousel */}
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
          {Array.from({ length: 6 }).map((_, index) => (
            <Slide3
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
