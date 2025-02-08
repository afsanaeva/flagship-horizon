'use client';

import Image from 'next/image';
import handMobile3 from '../../../../public/assets/home/dazzle/mobScreen1.png';
import handMobile4 from '../../../../public/assets/home/dazzle/mobScreen2.png';
import handMobile2 from '../../../../public/assets/home/dazzle/mobScreen3.png';
import handMobile1 from '../../../../public/assets/home/dazzle/mobScreen4.png';
import InfoCard2 from '@/components/custom-ui/InfoCard2';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const DazzleMobile = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end start'],
  });

  // Screen transitions with adjusted timing
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.45], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.35, 0.45, 0.65], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.65, 0.7, 0.75], [0, 1, 1]);

  // Text animations with adjusted timing
  const slideLeft1 = useTransform(scrollYProgress, [0, 0.15], [-100, 0]);
  const slideRight2 = useTransform(scrollYProgress, [0.15, 0.25], [100, 0]);
  const slideLeft3 = useTransform(scrollYProgress, [0.35, 0.45], [-100, 0]);
  const slideRight4 = useTransform(scrollYProgress, [0.65, 0.7], [100, 0]);

  return (
    <div className="relative w-full lg:hidden flex flex-col gap-16 overflow-x-clip">
      <div className="px-6 text-colorText-main text-center flex flex-col gap-6">
        <InfoCard2
          title="Introducing Horizon Shorts <br '/> Our First Super Engagement Product."
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: 'just',
              duration: 1,
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
          headingClassName="font-92px font-semibold"
        />
        <InfoCard2
          title="Short-form video redefined customer engagement. Now, the superpower is at your fingertips."
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          heading="h4"
          headingClassName="font-28px font-normal mb-[60px]"
        />
      </div>
      <div className="min-h-[400vh]" ref={ref}>
        <div className="sticky top-0 flex min-h-full w-full items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center gap-10 px-4">
            {/* Phone Frame */}
            <div className="relative w-[304px] h-[619px]">
              <Image
                src="/assets/home/dazzle/PhoneMobile.svg"
                alt="Phone Frame"
                fill
                className="object-contain"
              />
              {/* Screen Content */}
              <div className="absolute top-[14px] left-[16px] w-[273px] h-[591px] overflow-hidden rounded-[2rem]">
                <motion.div
                  style={{ opacity: opacity1 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={handMobile1}
                    alt="Screen 1"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  style={{ opacity: opacity2 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={handMobile2}
                    alt="Screen 2"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  style={{ opacity: opacity3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={handMobile3}
                    alt="Screen 3"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  style={{ opacity: opacity4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={handMobile4}
                    alt="Screen 4"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Text Cards */}
            <div className="relative w-full max-w-md text-center h-[176px]">
              {/* First text card remains unchanged */}
              <motion.div
                style={{ opacity: opacity1, x: slideLeft1 }}
                className="absolute right-0 w-full flex flex-col gap-6"
              >
                <h3 className="text-[36px] flex items-center justify-between font-semibold text-[#15234E]">
                  Instantly engaging entry points
                </h3>
                <p className="text-[22px] text-[#15234E]">
                  Integrate attention-grabbing entry points across your platform
                  to engage users instantly.
                </p>
              </motion.div>

              <motion.div
                style={{ opacity: opacity2, x: slideRight2 }}
                className="absolute right-0 w-full flex flex-col gap-6"
              >
                <h3 className="text-[36px] flex items-center justify-between font-semibold text-[#15234E]">
                  World-class streaming experience
                </h3>
                <p className="text-[22px] text-[#15234E]">
                  Keep users hooked with seamless playback, infinite scrolling,
                  and AI-driven personalization.
                </p>
              </motion.div>

              <motion.div
                style={{ opacity: opacity3, x: slideLeft3 }}
                className="absolute left-0 w-full flex flex-col gap-6"
              >
                <h3 className="text-[36px] flex items-center justify-between font-semibold text-[#15234E]">
                  Personalized shoppable videos
                </h3>
                <p className="text-[22px] text-[#15234E]">
                  Turn views into actions with tailored content that elevates
                  the shopping experience.
                </p>
              </motion.div>

              <motion.div
                style={{ opacity: opacity4, x: slideRight4 }}
                className="absolute right-0 w-full flex flex-col gap-6"
              >
                <h3 className="text-[36px] flex items-center justify-between font-semibold text-[#15234E]">
                  Seamless social interactions
                </h3>
                <p className="text-[22px] text-[#15234E]">
                  Let users connect with your brand through reactions, comments,
                  shares and polls.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DazzleMobile;
