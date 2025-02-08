'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AngleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/assets/product/HorizonConsole/image-1.svg',
    '/assets/product/HorizonConsole/image-2.svg',
    '/assets/product/HorizonConsole/image-3.svg',
  ];

  // Helper function to get the previous, current, and next image indices
  const getVisibleImages = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  const [prevIndex, currIndex, nextIndex] = getVisibleImages();

  return (
    <div className="relative mt-16 lg:mt-[251px] size-full">
      <Image
        src={'/assets/product/HorizonConsole/bg.svg'}
        width={150}
        height={266}
        alt="engagementPulse"
        className="absolute lg:top-[-320px] top-[-100px] z-[-1] size-full object-cover"
      />
      {/* Carousel Container */}
      <div className="flex size-full container-xl">
        {/* Previous Image */}
        <motion.div
          key={prevIndex}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative left-[76px] lg:mr-[-100%] mr-[-90%] w-full -translate-x-1/2 opacity-50"
        >
          <Image
            src={images[prevIndex]}
            alt={'Previous Image'}
            width={400}
            height={300}
            className="lg:w-full w-[80%] rounded-lg object-contain"
          />
        </motion.div>

        {/* Current Image */}
        <motion.div
          key={currIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="z-10 lg:mr-[-100%] mr-[-90%] w-full"
        >
          <Image
            src={images[currIndex]}
            alt={'Current Image'}
            width={600}
            height={400}
            className="lg:w-full w-[80%] rounded-lg object-contain"
          />
        </motion.div>

        {/* Next Image */}
        <motion.div
          key={nextIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="relative right-[74px] lg:mr-[-100%] mr-[-90%] w-full translate-x-1/2 opacity-50"
        >
          <Image
            src={images[nextIndex]}
            alt={'Next Image'}
            width={400}
            height={300}
            className="lg:w-full w-[80%] rounded-lg object-contain"
          />
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <div className="lg:mt-6 mt-[6px] flex justify-center lg:space-x-1 space-x-[1px]">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`lg:h-2 h-[2.012px] rounded-full bg-[#15234E33] ${
              currentIndex === index
                ? ' lg:w-[24px] w-[6px]'
                : 'lg:w-2 w-[2.012px]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AngleCarousel;
