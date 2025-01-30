'use client';

import Image from 'next/image';
import hand from '../../../../public/assets/home/dazzle/mobHand.png';
import handMobile3 from '../../../../public/assets/home/dazzle/mobScreen1.png';
import handMobile4 from '../../../../public/assets/home/dazzle/mobScreen2.png';
import handMobile2 from '../../../../public/assets/home/dazzle/mobScreen3.png';
import handMobile1 from '../../../../public/assets/home/dazzle/mobScreen4.png';
import InfoCard2 from '@/components/custom-ui/InfoCard2';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Dazzle = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // Customize how progress is calculated
  });

  // First image/text
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.35], [1, 1, 0]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0.3, 0.32, 0.4, 0.45],
    [0, 0.8, 1, 0]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0.4, 0.42, 0.5, 0.55],
    [0, 0.8, 1, 0]
  );
  const opacity4 = useTransform(
    scrollYProgress,
    [0.5, 0.52, 0.65],
    [0, 0.8, 1]
  );

  // First image/text
  const translateY1 = useTransform(
    scrollYProgress,
    [0.2, 0.25, 0.3],
    ['0%', '-80%', '-100%'] // Smooth movement up
  );
  const display1Text = useTransform(
    scrollYProgress,
    [0.2, 0.25, 0.3],
    ['none', 'block', 'none'] // Hide before the next text appears
  );

  // Second image/text
  const translateY2 = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.4],
    ['0%', '-80%', '-100%'] // Smooth movement up
  );
  const display2Text = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.4],
    ['none', 'block', 'none'] // Only visible during this range
  );

  // Third image/text
  const translateY3 = useTransform(
    scrollYProgress,
    [0.4, 0.45, 0.5],
    ['0%', '-50%', '-100%'] // Smooth movement up
  );
  const display3Text = useTransform(
    scrollYProgress,
    [0.4, 0.45, 0.5],
    ['none', 'block', 'none'] // Only visible during this range
  );

  // Fourth image/text
  const translateY4 = useTransform(
    scrollYProgress,
    [0.5, 0.65, 0.75],
    ['0%', '-80%', '-100%'] // Smooth movement up
  );
  const display4Text = useTransform(
    scrollYProgress,
    [0.5, 0.65, 0.75],
    ['none', 'block', 'none'] // Only visible during this range
  );

  return (
    <div className="space-y-40px container-xl hidden md:block">
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
        headingClassName="font-92px font-semibold text-center text-colorText-main"
      />
      <InfoCard2
        title="Short-form video redefined customer engagement. Now, the superpower is at your fingertips."
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        heading="h4"
        headingClassName="font-28px font-normal mb-[60px] text-center text-colorText-main"
      />
      {/* Sticky container */}
      <div className="!my-16 h-[300vh]" ref={ref}>
        <div className="sticky top-16 flex h-screen items-center justify-center">
          <div className="relative w-[406px] h-full">
            <motion.div
              style={{ display: display1Text, y: translateY1 }}
              className="absolute left-0 top-1/2"
            >
              <h3 className="font-32px flex cursor-pointer items-center justify-between py-3 font-semibold text-[#15234E]">
                Instantly engaging <br /> entry points
              </h3>

              <p className="font-24px py-3 text-[#15234E]">
                Integrate attention-grabbing entry points across your platform
                to engage users instantly.
              </p>
            </motion.div>
            <motion.div
              style={{ display: display3Text, y: translateY3 }}
              className="absolute left-0 top-1/2"
            >
              <h3 className="font-32px flex cursor-pointer items-center justify-between py-3 font-semibold text-[#15234E]">
                Personalized <br /> shoppable videos
              </h3>

              <p className="font-24px py-3 text-[#15234E]">
                Turn views into actions with tailored content that elevates the
                shopping experience.
              </p>
            </motion.div>
          </div>
          <div className="relative pl-[200px]">
            {/* Base Hand Image */}
            <Image
              src={hand}
              alt="Hand"
              className="h-auto w-[1000px] max-sm:w-[100px] object-fill"
            />
            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-white to-transparent " />
            {/* Overlapping Mobile Image */}
            <motion.div
              className="absolute left-1/2 3xl:translate-x-[-70%] 2xl:translate-x-[-65%] xl:translate-x-[-65%] 2xl:top-1 3xl:top-2 xl:top-4 pl-20 2xl:pt-3 xl:pt-0"
              style={{ opacity: opacity1 }}
            >
              <Image
                src={handMobile1}
                alt="Hand Mobile 1"
                className="w-fit max-sm:w-[100px] xl:h-[480px] 2xl:h-[540px] 3xl:h-[680px]  "
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              className="absolute left-1/2 3xl:translate-x-[-70%] 2xl:translate-x-[-65%] xl:translate-x-[-65%] 2xl:top-1 3xl:top-2 xl:top-4 pl-20 2xl:pt-3 xl:pt-0"
              style={{ opacity: opacity2, transform: 'translate' }}
            >
              <Image
                src={handMobile2}
                alt="Hand Mobile 2"
                className="w-fit max-sm:w-[100px] xl:h-[480px] 2xl:h-[540px] 3xl:h-[680px]  "
              />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              className="absolute left-1/2 3xl:translate-x-[-70%] 2xl:translate-x-[-65%] xl:translate-x-[-65%] 2xl:top-1 3xl:top-2 xl:top-4 pl-20 2xl:pt-3 xl:pt-0"
              style={{ opacity: opacity3 }}
            >
              <Image
                src={handMobile3}
                alt="Hand Mobile 3"
                className="w-fit max-sm:w-[100px] xl:h-[480px] 2xl:h-[540px] 3xl:h-[680px]  "
              />
            </motion.div>

            {/* Image 4 */}
            <motion.div
              className="absolute left-1/2 3xl:translate-x-[-70%] 2xl:translate-x-[-65%] xl:translate-x-[-65%] 2xl:top-1 3xl:top-2 xl:top-4 pl-20 2xl:pt-3 xl:pt-0"
              style={{ opacity: opacity4 }}
            >
              <Image
                src={handMobile4}
                alt="Hand Mobile 4"
                className="w-fit max-sm:w-[100px] xl:h-[480px] 2xl:h-[540px] 3xl:h-[680px]  "
              />
            </motion.div>
          </div>
          <div className="w-[406px] relative">
            <motion.div
              style={{ display: display2Text, y: translateY2 }}
              className=""
            >
              <h3 className="font-32px flex cursor-pointer items-center justify-between py-3 font-semibold text-[#15234E]">
                World-class <br /> streaming experience
              </h3>

              <p className="font-22px max-w-[300px] py-3 text-[#15234E]">
                Keep users hooked with seamless playback, infinite scrolling,
                and AI-driven personalization.
              </p>
            </motion.div>
            <motion.div
              style={{ display: display4Text, y: translateY4 }}
              className="absolute top-1/2 "
            >
              <h3 className="font-32px flex cursor-pointer items-center justify-between py-3 font-semibold text-[#15234E]">
                Seamless <br /> social interactions
              </h3>

              <p className="font-22px max-w-[300px] py-3 text-[#15234E]">
                Let users connect with your brand through reactions, comments,
                shares and polls.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dazzle;
