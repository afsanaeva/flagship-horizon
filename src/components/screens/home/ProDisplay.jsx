'use client';

import React from 'react';
import { fadeTop } from '@/components/layout/Header';
import InfoCard2 from '@/components/custom-ui/InfoCard2';
import display from '../../../../public/assets/home/pro/Pro.png';
import screen1 from '../../../../public/assets/home/pro/adj-1.png';
import screen2 from '../../../../public/assets/home/pro/adj-2.png';
import screen3 from '../../../../public/assets/home/pro/adj-3.png';
import screen4 from '../../../../public/assets/home/pro/adj-4.png';
import screen5 from '../../../../public/assets/home/pro/adj-5.png';
import screen6 from '../../../../public/assets/home/pro/adj-6.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProDisplay = () => {
  const animations = {
    screen1: {
      initial: { left: '40%', top: '45%' },
      final: { left: '-85px', top: '350px' },
    },
    screen2: {
      initial: { left: '30%', bottom: '40%' },
      final: { left: '-5%', bottom: '1%' },
    },
    screen3: {
      initial: { right: '40%', bottom: '40%' },
      final: { right: '0', bottom: '0' },
    },
    screen4: {
      initial: { right: '35%', top: '35%' },
      final: { right: '1%', top: '22%' },
    },
    screen5: {
      initial: { left: '40%', top: '30%' },
      final: { left: '351px', top: '53px' },
    },
    screen6: {
      initial: { right: '35%', top: '25%' },
      final: { right: '10%', top: '0' },
    },
  };

  return (
    <>
      {/* Header Section */}
      <section className="space-y-100px mt-12">
        <div className="space-y-40px flex flex-col items-center">
          <InfoCard2
            title="Create and launch super engagements <br/> effortlessly with Horizon Console."
            initial={{ opacity: 0, y: 50 }}
            whileInView={fadeTop.onscreen}
            viewport={{ once: true }}
            heading="h1"
            headingClassName="font-100px font-semibold text-colorText-main text-center"
          />
          <InfoCard2
            title="Every super engagement is powered by a no-code control center, enabling you to <br/> seamlessly create and manage user experiences across your platforms with ease."
            initial={{ opacity: 0, y: 50 }}
            whileInView={fadeTop.onscreen}
            viewport={{ once: true }}
            heading="h4"
            headingClassName="font-28px font-normal text-colorText-main text-center"
          />
        </div>
      </section>

      <section className="container-lg h-screen relative flex items-end justify-center py-16">
        <div
          className="absolute inset-0 blur-3xl"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, #CCEDFF, transparent 50%),
              radial-gradient(circle at 75% 25%, #D6CCFF, transparent 50%),
              radial-gradient(circle at 25% 75%, #FFE8F2, transparent 50%),
              radial-gradient(circle at 75% 75%, #C9E2FF, transparent 50%)
            `,
            zIndex: -1,
          }}
        />

        {/* Animated Image Elements */}
        <motion.div
          className="absolute w-[487px]"
          initial={animations.screen1.initial}
          whileInView={animations.screen1.final}
          viewport={{ once: true, amount: 'all' }}
          transition={{ duration: 3, ease: 'easeInOut', delay: 0.3 }}
        >
          <Image src={screen1} alt="Screen 1" layout="responsive" />
        </motion.div>

        <motion.div
          className="absolute w-[644px]"
          initial={animations.screen2.initial}
          whileInView={animations.screen2.final}
          viewport={{ once: true, amount: 'all' }}
          transition={{ duration: 3, ease: 'easeInOut', delay: 0.3 }}
        >
          <Image src={screen2} alt="Screen 2" layout="responsive" />
        </motion.div>

        <motion.div
          className="absolute w-[513px]"
          initial={animations.screen3.initial}
          whileInView={animations.screen3.final}
          viewport={{ once: true, amount: 'all' }}
          transition={{ duration: 3, ease: 'easeInOut', delay: 0.3 }}
        >
          <Image src={screen3} alt="Screen 3" layout="responsive" />
        </motion.div>

        {/* Main Display */}
        <Image
          src={display}
          alt="Main Display"
          width={679}
          height={400}
          className="rounded-lg"
        />

        <motion.div
          className="absolute w-[526px]"
          initial={animations.screen4.initial}
          whileInView={animations.screen4.final}
          viewport={{ once: true, amount: 'all' }}
          transition={{ duration: 3, ease: 'easeInOut', delay: 0.3 }}
        >
          <Image src={screen4} alt="Screen 4" layout="responsive" />
        </motion.div>

        <motion.div
          className="absolute w-[491px]"
          initial={animations.screen5.initial}
          whileInView={animations.screen5.final}
          viewport={{ once: true, amount: 'all' }}
          transition={{ duration: 3, ease: 'easeInOut', delay: 0.3 }}
        >
          <Image src={screen5} alt="Screen 5" layout="responsive" />
        </motion.div>

        <motion.div
          className="absolute w-[513px]"
          initial={animations.screen6.initial}
          whileInView={animations.screen6.final}
          viewport={{ once: true, amount: 'all' }}
          transition={{ duration: 3, ease: 'easeInOut', delay: 0.3 }}
        >
          <Image src={screen6} alt="Screen 6" layout="responsive" />
        </motion.div>
      </section>
    </>
  );
};

export default ProDisplay;
