"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AngleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/assets/product/HorizonConsole/image-1.svg",
    "/assets/product/HorizonConsole/image-2.svg",
    "/assets/product/HorizonConsole/image-3.svg",
  ];

  // Helper function to get the previous, current, and next image indices
  const getVisibleImages = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  const [prevIndex, currIndex, nextIndex] = getVisibleImages();

  return (
    <div className="relative size-full mt-[251px]">
      <Image
        src={`/assets/product/HorizonConsole/bg.svg`}
        width={150}
        height={266}
        alt="engagementPulse"
        className="absolute top-[-320px] size-full object-cover z-[-1]"
      />
      {/* Carousel Container */}
      <div className="h-full w-full flex">
        {/* Previous Image */}
        <motion.div
          key={prevIndex}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative left-[76px] w-[100%] transform -translate-x-1/2 opacity-50 mr-[-100%]"
        >
          <Image
            src={images[prevIndex]}
            alt={`Previous Image`}
            width={400}
            height={300}
            className="rounded-lg object-contain w-full"
          />
        </motion.div>

        {/* Current Image */}
        <motion.div
          key={currIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="z-10 w-[100%] mr-[-100%]"
        >
          <Image
            src={images[currIndex]}
            alt={`Current Image`}
            width={600}
            height={400}
            className="rounded-lg object-contain w-full"
          />
        </motion.div>

        {/* Next Image */}
        <motion.div
          key={nextIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="relative right-[74px] w-[100%] transform translate-x-1/2 opacity-50 mr-[-100%]"
        >
          <Image
            src={images[nextIndex]}
            alt={`Next Image`}
            width={400}
            height={300}
            className="rounded-lg object-contain w-full"
          />
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`bg-[#15234E33] h-2 rounded-full ${
              currentIndex === index ? " w-[24px]" : "w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AngleCarousel;
