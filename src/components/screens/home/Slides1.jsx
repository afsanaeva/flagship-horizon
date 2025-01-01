"use client";

import InfoCard from "@/components/custom-ui/InfoCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

const slides = [
  "/assets/home/slides1/img-1.png",
  "/assets/home/slides1/img-2.png",
  "/assets/home/slides1/img-3.png",
  "/assets/home/slides1/img-4.png",
  "/assets/home/slides1/img-5.png",
  "/assets/home/slides1/img-6.png",
];

const variants = {
  open: {
    // y: 0,
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2, duration: 1 },
  },
  closed: {
    // y: 200,
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
const Slides1 = () => {
  const [api, setApi] = useState();
  const carouselRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      api?.plugins()?.autoplay?.play?.();
    }
  }, [api, isInView]);

  useEffect(() => {
    if (api) {
      api.on("pointerUp", () => {
        api?.plugins()?.autoplay?.play?.();
      });
    }
  }, [api]);

  return (
    <div className="space-y-56px">
      <InfoCard
        title="Forge an unbreakable bond<br/> with your audience. "
        description="Introducing Flagship Shorts, as part of our iXP. Keep your users engaged for longer with personalized Shorts."
        className={"container-lg"}
        headingClassName="max-[800px]:[&_br]:hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "just",
            duration: 1,
          },
        }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <div>
        <Carousel
          ref={carouselRef}
          setApi={setApi}
          className="pl-72px mx-auto w-full max-w-[1920px]"
          plugins={[
            emblaCarouselAutoplay({
              delay: 3000,
              playOnInit: false,
            }),
          ]}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <motion.ul
            initial="closed"
            whileInView="open"
            variants={variants}
            viewport={{ once: true, amount: 0.5 }}
            onViewportEnter={() => {
              setIsInView(true);
            }}
            className="list-none"
          >
            <CarouselContent className="">
              {slides.map((slide, index) => (
                <Slide key={index} img={slide} />
              ))}
            </CarouselContent>
          </motion.ul>
        </Carousel>
      </div>
    </div>
  );
};

export default Slides1;

const Slide = ({ img, className }) => {
  return (
    <CarouselItem
      className={cn(
        "basis-[68%] sm:basis-[56%] md:basis-[40%] lg:basis-[23%] items-center flex",
        className
      )}
      style={{ height: "100%" }} // Ensure consistent height
    >
      <motion.li variants={variantsLi}>
        <Image
          src={img}
          alt={"Slide"}
          width={405}
          height={877}
          className={cn("rounded-40px object-contain object-center")}
        />
      </motion.li>
    </CarouselItem>
  );
};
