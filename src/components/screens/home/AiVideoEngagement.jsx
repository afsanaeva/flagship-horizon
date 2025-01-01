"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { useMediaQuery } from "@/components/hooks/useMediaQuery";

const slides = [
  {
    title: "app<br/>shorts",
    description:
      "Groundbreaking social media short-form experience now on your platform",
    img: "/assets/home/ai-video-engagement/img-1.png",
  },
  {
    title: "web<br/>shorts",
    description: "Turn your website into a AI powered video marketing platform",
    img: "/assets/home/ai-video-engagement/img-2.png",
  },
  {
    title: "shorts<br/>studio",
    description:
      "AI no-code control center to create, launch & manage shorts on any digital platform",
    img: "/assets/home/ai-video-engagement/img-3.png",
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

const AiVideoEngagement = () => {
  return (
    <div className="container-lg space-y-100px">
      <InfoCard2
        title="meet our first product -<br/>
flagship Shorts"
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

      <motion.ul
        initial="closed"
        whileInView="open"
        variants={variants}
        viewport={{ once: true }}
        className="list-none"
      >
        <div className="grid gap-8 xs:gap-10 min-[1030px]:grid-cols-3 min-[1030px]:gap-4 2xl:gap-5 3xl:gap-7">
          <Slide
            img={slides[0].img}
            title={slides[0].title}
            description={slides[0].description}
            imgClassName={"px-20 md:px-16"}
          />
          <Slide
            img={slides[1].img}
            title={slides[1].title}
            description={slides[1].description}
            imgClassName="pr-0 3xl:pl-5 2xl:pl-6 md:pl-12 pl-16 max-md:pt-6 ml-auto"
          />
          <Slide
            img={slides[2].img}
            title={slides[2].title}
            description={slides[2].description}
            imgClassName="pr-0 3xl:pl-5 2xl:pl-6 md:pl-12 pl-16 max-md:pt-6 ml-auto"
          />
        </div>
      </motion.ul>
    </div>
  );
};

export default AiVideoEngagement;

const Slide = ({ img, title, description, imgClassName }) => {
  return (
    <motion.li
      variants={variantsLi}
      className="mx-auto max-[1030px]:max-w-[550px]"
    >
      <div className="rounded-40px zoom-in-1-035 flex h-full flex-col justify-between overflow-hidden bg-[#EEF6FF]">
        <div className="flex items-start justify-between gap-10 p-4 xs:p-5 xs:max-lg:gap-12 sm:p-6 lg:gap-11 2xl:gap-12 2xl:p-8 3xl:gap-16 3xl:p-10">
          <h3
            className="font-64px font-semibold !leading-none"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <p
            className="font-20px mt-2 font-medium lg:mt-3 3xl:mt-4"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
        <Image
          src={img}
          alt={"Slide"}
          width={574}
          height={834}
          className={cn("object-contain object-bottom ", imgClassName)}
        />
      </div>
    </motion.li>
  );
};
