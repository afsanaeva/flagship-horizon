'use client';
import React from 'react';
import { motion } from 'framer-motion';
import InfoCard2 from '@/components/custom-ui/InfoCard2';
import { fadeTop } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import useDeviceSize from '@/components/hooks/useDeviceSize';

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
  const { isMobile } = useDeviceSize();
  const subText = isMobile
    ? 'Today, 90% of global engagement takes place on big tech platforms, leaving enterprises struggling to keep up with outdated engagement tools that fail to drive sustained growth. '
    : 'Today, 90% of global engagement takes place on big tech platforms, leaving enterprises struggling <br/>  to keep up with outdated engagement tools that fail to drive sustained growth. ';

  const slides = [
    {
      plan: 'What businesses are doing',
      subText: isMobile
        ? `Emailing customers, sending SMS and notifications. It’s transactional, predictable 
    and it works - sometimes. `
        : `Emailing customers, sending SMS and </br> notifications. It’s transactional, predictable </br>
    and it works - sometimes. `,
    },
    {
      plan: 'What Big Tech is doing',
      subText: isMobile
        ? 'Big tech is winning by creating experiences that make users hooked - unlocking new engagement and revenue at scale.'
        : 'Big tech is winning by creating experiences that make users </br> hooked - unlocking new engagement and revenue at scale.',
    },
  ];

  return (
    <div className="containerComponent flex flex-col gap-20 mobile:gap-16 mt-0">
      <div className="space-y-40px text-left ">
        <h1 className="font-100px font-semibold leading-snug">
          There is a{' '}
          <span
            style={{
              background:
                'linear-gradient(270deg, #FF8A93 9.45%, #FF2C72 26.5%, #B51C40 41.84%, #7A1352 56.71%, #1A0760 71.5%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            className="desktop:p-[0.1rem]"
          >
            seismic gap
          </span>{' '}
          in {!isMobile && <br className="max-sm:hidden" />} how you engage.
        </h1>
        <InfoCard2
          title={subText}
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-9 mobile:gap-5 md:px-[20px]">
          {/* Left Slide (Smaller) */}
          <div className="md:col-span-2 col-span-3 flex md:w-[600px] max-w-full justify-center">
            <Slide2
              plan={slides[0].plan}
              subText={slides[0].subText}
              content={slides[0].content}
            />
          </div>
          {/* Right Slide (Bigger) */}
          <div className="col-span-3 flex md:w-[952px] max-w-full justify-center">
            <Slide
              plan={slides[1].plan}
              subText={slides[1].subText}
              content={slides[1].content}
            />
          </div>
        </div>
      </motion.ul>
    </div>
  );
};

export default NewWay;

const Slide = ({ plan = '', subText }) => {
  return (
    <motion.li variants={variantsLi} className="w-full">
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
        <div className="flex flex-col h-full justify-center md:gap-3 gap-6 md:px-7 px-5 md:py-9 py-10 2xl:gap-4 2xl:px-9 2xl:py-11 3xl:gap-6 3xl:px-12 3xl:py-14">
          <Link
            href={'/get-demo'}
            className="text-[18px] py-1 px-3 h-fit w-fit rounded-md bg-[linear-gradient(90deg,_#001D7B_-20.07%,_#0032FD_45.07%,_#10F0FC_110.2%)]  flex items-center justify-center text-white"
          >
            The New Way
          </Link>

          <div>
            <div className="2xl:space-y-3.5 3xl:space-y-4">
              <h3
                className="font-40px font-semibold !leading-none text-[#15234E] "
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

const Slide2 = ({ plan = '', subText }) => {
  return (
    <motion.li variants={variantsLi} className="w-full">
      <article
        className="mt-4 flex xl:h-[90%] flex-col justify-between overflow-hidden 
      rounded-[24px] bg-[#F1F4F7]"
      >
        <div
          className=" grid h-full justify-between md:gap-3 gap-4 md:px-7 px-5 
        md:py-9 py-10 2xl:gap-4 2xl:px-[37px] 2xl:py-[35px] 3xl:gap-6 3xl:py-14"
        >
          <Link
            href={'/get-demo'}
            className="font-18px px-2 py-1 w-fit rounded-md bg-[#15234E] text-white 
            flex items-center justify-center"
          >
            Traditional Way
          </Link>
          <div>
            <div className="space-y-2.5 2xl:space-y-3.5 3xl:space-y-4">
              <h3
                className="font-28px font-semibold !leading-none text-[#15234E] "
                dangerouslySetInnerHTML={{
                  __html: plan,
                }}
              />
              <p
                className="text-[18px] leading-normal pt-1 flex items-center justify-center "
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
