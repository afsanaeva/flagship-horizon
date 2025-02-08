'use client';

import React, { useRef } from 'react';
import HeroTitle from '../common/HeroTitle';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import useDeviceSize from '@/components/hooks/useDeviceSize';

const MonetizeSection = () => {
  const sectionRef = useRef(null);
  const { isMobile } = useDeviceSize();
  const fontSizeTitle = isMobile ? '!text-[68px]' : '';
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const MatrixValue = useTransform(scrollYProgress, [0, 0.6], [142, -142]);

  return (
    <div ref={sectionRef} className="lg:container-xl">
      <HeroTitle
        MainTitle="Monetize via In-built Ad Engine."
        SecTitle="Unlock new revenue streams - either by promoting your own business </br> or by sharing sponsored contents from affiliated brands."
        styleContainer="text-[#15234E] text-center"
        styleH1Title={fontSizeTitle}
      />

      <div className="lg:mt-[100px] px-6 mt-16 flex w-full items-start justify-between gap-[6px] lg:gap-6">
        {/* First Image */}
        <motion.div>
          <Image
            src="/assets/product/MonetizeOne.svg"
            width={780}
            height={386}
            alt="interaction"
            className="object-contain"
          />
        </motion.div>

        {/* Second Image */}
        <motion.div style={{ marginTop: '142px', y: MatrixValue }}>
          <Image
            src="/assets/product/MonetizeTwo.svg"
            width={780}
            height={386}
            alt="interaction"
            className="object-contain"
          />
        </motion.div>

        {/* Third Image */}
        <motion.div>
          <Image
            src="/assets/product/MonetizeThree.svg"
            width={780}
            height={386}
            alt="interaction"
            className="object-contain"
          />
        </motion.div>

        {/* Fourth Image */}
        <motion.div style={{ marginTop: '142px', y: MatrixValue }}>
          <Image
            src="/assets/product/MonetizeFour.svg"
            width={780}
            height={386}
            alt="interaction"
            className="object-contain"
          />
        </motion.div>

        {/* Fifth Image */}
        <motion.div>
          <Image
            src="/assets/product/MonetizeFive.svg"
            width={780}
            height={386}
            alt="interaction"
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MonetizeSection;
