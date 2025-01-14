"use client";

import React, { useRef } from "react";
import HeroTitle from "../common/HeroTitle";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const MonetizeSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const MatrixValue = useTransform(scrollYProgress, [0, 0.6], [60, -60]);

  return (
    <div ref={sectionRef} className="px-[120px]">
      <HeroTitle
        MainTitle="Monetize via In-built Ad Engine."
        SecTitle="Unlock new revenue streams - either by promoting your own business </br> or by sharing sponsored contents from affiliated brands."
        styleHeroTitle=""
      />

      <div className="flex items-start justify-between w-full gap-6 mt-[100px]">
        {/* First Image */}
        <motion.div style={{ marginTop: "60px", y: MatrixValue }}>
          <Image
            src="/assets/product/MonetizeOne.svg"
            width={780}
            height={386}
            alt="interaction"
            className="max-h-[480px]"
          />
        </motion.div>

        {/* Second Image */}
        <motion.div>
          <Image
            src="/assets/product/MonetizeTwo.svg"
            width={780}
            height={386}
            alt="interaction"
            className="max-h-[480px]"
          />
        </motion.div>

        {/* Third Image */}
        <motion.div style={{ marginTop: "60px", y: MatrixValue }}>
          <Image
            src="/assets/product/MonetizeThree.svg"
            width={780}
            height={386}
            alt="interaction"
            className="max-h-[480px]"
          />
        </motion.div>

        {/* Fourth Image */}
        <motion.div>
          <Image
            src="/assets/product/MonetizeFour.svg"
            width={780}
            height={386}
            alt="interaction"
            className="max-h-[480px]"
          />
        </motion.div>

        {/* Fifth Image */}
        <motion.div style={{ marginTop: "60px", y: MatrixValue }}>
          <Image
            src="/assets/product/MonetizeFive.svg"
            width={780}
            height={386}
            alt="interaction"
            className="max-h-[480px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MonetizeSection;
