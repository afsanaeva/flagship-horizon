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
  "/assets/home/slides2/img-1.png",
  "/assets/home/slides2/img-2.png",
  "/assets/home/slides2/img-3.png",
  "/assets/home/slides2/img-4.png",
  "/assets/home/slides2/img-5.png",
  "/assets/home/slides2/img-6.png",
];

const Slides2 = () => {
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
        title="Monetize your digital<br/> assets faster."
        description="Flagship Shorts is jam-packed with intelligent Shoppable features to help businesses monetize faster."
        className={"container-lg"}
        headingClassName="max-[800px]:[&_br]:hidden"
      />

      <Carousel
        ref={carouselRef}
        setApi={setApi}
        className="mx-auto w-full max-w-[1920px] "
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
        <motion.div
          viewport={{ once: true }}
          onViewportEnter={() => {
            setIsInView(true);
          }}
          className="pl-72px "
        >
          <CarouselContent className=" ">
            {slides.map((slide, index) => (
              <Slide key={index} img={slide} />
            ))}
          </CarouselContent>
        </motion.div>
      </Carousel>
    </div>
  );
};

export default Slides2;

const Slide = ({ img, className }) => {
  return (
    <CarouselItem
      className={cn(
        "basis-[68%] sm:basis-[56%] md:basis-[40%] lg:basis-[23%] items-center flex",
        className
      )}
      style={{ height: "100%" }} // Ensure consistent height
    >
      <Image
        src={img}
        alt={"Slide"}
        width={405}
        height={877}
        className={cn("rounded-40px object-contain object-center")}
      />
    </CarouselItem>
  );
};
