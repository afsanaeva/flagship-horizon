'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const slides = [
  {
    image: '/assets/aboutus/image-1.svg',
    content: {
      title: 'On a mission to democratize all forms of super engagement',
      text: 'We can’t imagine a world where businesses are still talking about emailing their customers - the future of customer engagement is much more magical.',
      btnText: 'Learn More',
    },
  },
  {
    image: '/assets/aboutus/image-2.jpg',
    content: {
      title: '2- On a mission to democratize all forms of super engagement',
      text: 'We can’t imagine a world where businesses are still talking about emailing their customers - the future of customer engagement is much more magical.',
      btnText: 'Learn More',
    },
  },
  {
    image: '/assets/aboutus/image-3.jpg',
    content: {
      title: '3- On a mission to democratize all forms of super engagement',
      text: 'We can’t imagine a world where businesses are still talking about emailing their customers - the future of customer engagement is much more magical.',
      btnText: 'Learn More',
    },
  },
];

const AnimatedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleTogglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleNavigation = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
  };

  const textVariants = {
    enter: { y: 50, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  };

  // const imageVariants = {
  //   enter: {
  //     y: 50,
  //     opacity: 0,
  //     rotateX: 30,
  //     scale: 0.9,
  //   },
  //   center: {
  //     y: 0,
  //     opacity: 1,
  //     rotateX: 0,
  //     scale: 1,
  //   },
  //   exit: {
  //     y: -200,
  //     opacity: 0,
  //     rotateX: -30,
  //     scale: 0.9,
  //   },
  // };

  const imageVariants = {
    enter: {
      y: 1000, // Comes from the bottom
      opacity: 0,
      scaleX: 1, // Top smaller
      scaleY: 1.2, // Bottom larger
    },
    center: {
      y: 0,
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
    },
    exit: {
      y: -100,
      opacity: 0,
      rotateX: -30,
      scale: 0.9,
    },
  };

  return (
    <div className="relative mx-auto mt-[140px]">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentIndex && (
              <div
                className="flex items-center justify-between space-x-[100px]"
                key={index}
              >
                <motion.div
                  key={`image-${currentIndex}`}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ perspective: '1000px' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="relative w-[752px] h-[912px] flex-1 rounded-[32px] overflow-hidden"
                >
                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
                <div className="flex-1 flex items-center justify-between h-full">
                  <motion.div
                    key={`content-${currentIndex}`}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex flex-col gap-12"
                  >
                    <h1
                      className="font-64px text-colorText-main"
                      dangerouslySetInnerHTML={{
                        __html: slide.content.title,
                      }}
                    ></h1>
                    <p
                      className="font-24px text-colorText-main leading-[130%]"
                      dangerouslySetInnerHTML={{
                        __html: slide.content.text,
                      }}
                    ></p>
                    <Button
                      size="sm"
                      asChild
                      className="w-fit font-20px min-h-[42px]"
                      variant="default"
                    >
                      <Link href="/get-demo">{slide.content.btnText}</Link>
                    </Button>
                  </motion.div>
                  {/* BARS */}
                  <div className="flex flex-col items-center gap-5 h-full">
                    <div className="flex flex-col items-center gap-[10px]">
                      {slides.map((_, idx) => (
                        <div
                          className="relative w-1 h-[80px] bg-[#F0F5FA] rounded-lg overflow-hidden cursor-pointer"
                          key={idx}
                          onClick={() => handleNavigation(idx)}
                        >
                          {idx === currentIndex && (
                            <motion.div
                              key={currentIndex}
                              initial={{ height: 0 }}
                              animate={{ height: '100%' }}
                              transition={{ duration: 5, ease: 'linear' }}
                              className={`absolute top-0 left-0 w-full bg-[#0032FD] ${
                                isPaused ? 'h-full' : ''
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    <div
                      className="size-8 bg-[#F0F5FA] flex items-center justify-center text-[#0032FD] rounded-full cursor-pointer"
                      onClick={handleTogglePause}
                    >
                      {/* eslint-disable-next-line multiline-ternary */}
                      {!isPaused ? (
                        <svg
                          fill="#0032FD"
                          width="16px"
                          height="16px"
                          viewBox="0 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {' '}
                            <title>pause</title>{' '}
                            <path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.44 0.576t-0.576 1.44v16.16zM18.016 24.096q0 0.832 0.608 1.408t1.408 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.408 0.576t-0.608 1.44v16.16z"></path>{' '}
                          </g>
                        </svg>
                      ) : (
                        <svg
                          width="14px"
                          height="14px"
                          viewBox="-0.5 0 7 7"
                          version="1.1"
                          fill="#0032FD"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke="#0032FD"
                            stroke-width="0.014000000000000002"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {' '}
                            <title>play [#1003]</title>{' '}
                            <desc>Created with Sketch.</desc> <defs> </defs>{' '}
                            <g
                              id="Page-1"
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              {' '}
                              <g
                                id="Dribbble-Light-Preview"
                                transform="translate(-347.000000, -3766.000000)"
                                fill="#0032FD"
                              >
                                {' '}
                                <g
                                  id="icons"
                                  transform="translate(56.000000, 160.000000)"
                                >
                                  {' '}
                                  <path
                                    d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
                                    id="play-[#1003]"
                                  >
                                    {' '}
                                  </path>{' '}
                                </g>{' '}
                              </g>{' '}
                            </g>{' '}
                          </g>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedSlider;
