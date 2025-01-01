"use client";

import InfoCard from "@/components/custom-ui/InfoCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  "/assets/home/slides3/img-1.png",
  "/assets/home/slides3/img-2.png",
  "/assets/home/slides3/img-3.png",
];

const variants = {
  open: {
    // y: 0,
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 1 },
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

const Slides3 = () => {
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
        title="No code. <br/>
No product<br class='lg:hidden'/> development cost. "
        description="Control every part of the customer experience from one simple to use no code control panel."
        className={"container-lg"}
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

      <Carousel
        ref={carouselRef}
        setApi={setApi}
        plugins={[
          emblaCarouselAutoplay({
            delay: 3000,
            playOnInit: false,
          }),
        ]}
        opts={{
          active: false,
          breakpoints: {
            "(max-width: 768px)": { active: true },
          },
        }}
        className="mx-auto -mt-4 w-full max-w-[1920px]"
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
          <CarouselContent className="pl-72px md:px-72px  py-4">
            {slides.map((slide, index) => (
              <Slide key={index} img={slide} />
            ))}
          </CarouselContent>
        </motion.ul>
      </Carousel>
    </div>
  );
};

export default Slides3;

const Slide = ({ img, className }) => {
  return (
    <CarouselItem
      className={cn("basis-[68%] sm:basis-[40%] md:basis-1/3", className)}
    >
      <motion.li variants={variantsLi}>
        <Image
          src={img}
          alt={"Slide"}
          width={574}
          height={834}
          className={cn(
            "rounded-40px zoom-in-1-035 object-contain object-center"
          )}
        />
      </motion.li>
    </CarouselItem>
  );
};
