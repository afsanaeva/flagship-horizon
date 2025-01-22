'use client';
import React from 'react';
import { motion } from 'framer-motion';
import InfoCard2 from '@/components/custom-ui/InfoCard2';
import { fadeTop } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const slides = [
  {
    plan: 'What businesses are doing',
    subText: `Emailing customers, sending SMS and notifications. It’s transactional, predictable 
and it works - sometimes. `,
  },
  {
    plan: 'What Big Tech is doing',
    subText:
      'Big tech is winning by creating experiences that make users hooked - unlocking new engagement and revenue at scale.',
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
          There is a{' '}
          <span
            style={{
              background:
                'linear-gradient(270deg, #FF8A93 9.45%, #FF2C72 26.5%, #B51C40 41.84%, #7A1352 56.71%, #1A0760 71.5%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            seismic gap
          </span>{' '}
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
              plan={slides[0].plan}
              subText={slides[0].subText}
              content={slides[0].content}
            />
          </div>
          {/* Right Slide (Bigger) */}
          <div className="col-span-3 flex max-w-[900px] justify-center">
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
            className="font-24px w-fit rounded-md bg-gradient-to-r from-[#001D7B] via-[#0032FD] to-[#10F0FC] !h-[45px]"
          >
            <Link href={'/get-demo'}>The New Ways</Link>
          </Button>
          <div>
            <div className="mb-5 space-y-2.5 2xl:mb-6 2xl:space-y-3.5 3xl:mb-8 3xl:space-y-4">
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
    <motion.li variants={variantsLi}>
      <article className="mt-4 flex h-[90%] flex-col justify-between overflow-hidden rounded-[24px] bg-[#F1F4F7]">
        <div className=" grid h-full justify-between gap-3 px-7 py-9 2xl:gap-4 2xl:px-9 2xl:py-11 3xl:gap-4 3xl:px-12 3xl:py-14">
          <Button
            asChild
            size="lg"
            className="font-18px w-fit rounded-md bg-[#15234E] !h-[32px]"
          >
            <Link href={'/get-demo'}>Traditional Way</Link>
          </Button>
          <div>
            <div className="mb-5 space-y-2.5 2xl:mb-6 2xl:space-y-3.5 3xl:mb-8 3xl:space-y-4">
              <h3
                className="font-28px font-semibold !leading-none text-[#15234E] "
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
