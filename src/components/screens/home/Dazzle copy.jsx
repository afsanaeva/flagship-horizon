"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
// import { motion } from "framer-motion";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import Img from "../../../../public/assets/home/dazzle/img.png";
import ImgMobile from "../../../../public/assets/home/dazzle/img-mobile.png";

const slides = [
  {
    img: "/assets/home/dazzle/1.png",
  },
  {
    img: "/assets/home/dazzle/2.png",
  },
  {
    img: "/assets/home/dazzle/3.png",
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

const Dazzle = () => {
  return (
    <div className="container-lg space-y-40px">
      <InfoCard2
        title="dazzle your audience with<br/> intelligent video experience"
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
        headingClassName="gradient-text"
      />

      <div className="zoom-in-1-035">
        <Image src={Img} alt="create experiences" className="max-sm:hidden" />
        <Image
          src={Img}
          alt="create experiences"
          className="hidden max-sm:block"
        />
      </div>
    </div>
  );
};

export default Dazzle;

const Slide = ({ img, title, description, imgClassName, className }) => {
  return (
    <div
      className={cn(
        "rounded-40px  flex h-full flex-col justify-between overflow-hidden"
      )}
    >
      <Image
        src={img}
        alt={"Slide"}
        width={1172}
        height={1068}
        className={cn("object-contain object-bottom", imgClassName)}
      />
    </div>
  );
};
