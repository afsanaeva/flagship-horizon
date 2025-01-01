"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import InfoCard2 from "@/components/custom-ui/InfoCard2";

/* World Class Infinite Streaming - Keep your audience engaged and coming back for more with content curated to their unique tastes and preferences.
Personalized Product Recommendation - Deliver a personalized intelligent shopping experience that caters to each customer’s unique preferences.
Intelligent Advertising - Deliver the right message to the right customer at the right moment with AI-powered intelligent campaigns, maximizing your ROI.
Social Interactions - Create a space where your audience can connect, share, and engage on a deeper level through tailored content that sparks their interest.
Real Time Analytics - Make informed decisions to optimize campaign performance in real-time, ensuring maximum impact and ROI.
 */
const slides = [
  {
    title: "AI Powered Video Experience",
    description:
      "Captivate your audience with personalized video feeds, ensuring every user sees content tailored to their interests.",
    img: "/assets/home/engagement/img-1.png",
  },
  {
    title: "World Class Infinite Streaming",
    description:
      "Keep your audience engaged and coming back for more with content curated to their unique tastes and preferences.",
    img: "/assets/home/engagement/img-2.png",
  },
  {
    title: "Personalized Product Recommendation",
    description:
      "Deliver a personalized intelligent shopping experience that caters to each customer’s unique preferences.",
    img: "/assets/home/engagement/img-3.png",
  },
  {
    title: "Intelligent Advertising",
    description:
      "Deliver the right message to the right customer at the right moment with AI-powered intelligent campaigns, maximizing your ROI.",
    img: "/assets/home/engagement/img-4.png",
  },
  {
    title: "Social Interactions",
    description:
      "Create a space where your audience can connect, share, and engage on a deeper level through tailored content that sparks their interest.",
    img: "/assets/home/engagement/img-5.png",
  },

  {
    title: "Real Time Analytics",
    description:
      "Make informed decisions to optimize campaign performance in real-time, ensuring maximum impact and ROI.",
    img: "/assets/home/engagement/img-6.png",
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

const Engagement = () => {
  return (
    <div className="container-md space-y-100px">
      <InfoCard2
        title="drive unreasonbale growth<br class='max-sm:hidden'/> with Shorts"
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
        <div className="grid gap-6 gap-y-14 md:grid-cols-2 2xl:gap-8 2xl:gap-y-16 3xl:gap-x-11 3xl:gap-y-20">
          {slides.map((slide, index) => (
            <Slide
              key={index}
              img={slide.img}
              title={slide.title}
              description={slide.description}
            />
          ))}
        </div>
      </motion.ul>
    </div>
  );
};

export default Engagement;

const Slide = ({ img, title, description, imgClassName }) => {
  return (
    <motion.li variants={variantsLi}>
      <div className="rounded-40px flex flex-col justify-between space-y-5 overflow-hidden md:h-fit 2xl:space-y-6 3xl:space-y-8">
        {/* <div className="zoom-in-1-035 rounded-40px bg-[#EEF6FF]"> */}
        <div className="rounded-40px overflow-hidden">
          <Image
            src={img}
            alt={"Slide"}
            width={1700}
            height={1136}
            className={cn(
              "zoom-in-1-035 w-full object-contain object-bottom",
              imgClassName
            )}
          />
        </div>
        <div className="space-y-2 2xl:space-y-2.5 3xl:space-y-3">
          <h3
            className="font-40px text-center font-semibold !leading-none"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <p
            className="font-24px mx-auto w-[90%] text-center"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
      </div>
    </motion.li>
  );
};
