'use client';

import InfoCard2 from '@/components/custom-ui/InfoCard2';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { fadeTop } from '@/components/layout/Header';

const HorizontalScrollComponent = ({
  userCount,
  interactionCount,
  pointCount,
  title,
  intro,
}) => {
  return (
    <HorizontalScrollCarousel
      userCount={userCount}
      interactionCount={interactionCount}
      pointCount={pointCount}
      title={title}
      intro={intro}
    />
  );
};

const HorizontalScrollCarousel = ({
  userCount,
  interactionCount,
  pointCount,
  title,
  intro,
}) => {
  const targetRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Define the x positions for each div
  const xPositions = ['0%', '-100vw', '-200vw'];
  const x = xPositions[activeIndex]; // Use activeIndex to determine x position

  // Handle scroll progress to update activeIndex
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      if (progress < 0.33) {
        setActiveIndex(0); // First div
      } else if (progress < 0.66) {
        setActiveIndex(1); // Second div
      } else {
        setActiveIndex(2); // Third div
      }
    });

    return () => unsubscribe(); // Cleanup the listener
  }, [scrollYProgress]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="space-y-100px sticky top-20 desktop:top-[80px] 3xl:top-[87px] flex h-screen flex-col overflow-hidden">
        <div className="flex flex-col megaScreen:gap-[48px] desktop:gap-5 gap-6">
          <InfoCard2
            title={title}
            descriptionClassName="lg:max-w-[790px] !leading-[140%] 2xl:max-w-[870px] 3xl:max-w-[1110px] mx-auto opacity-50"
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
            headingClassName="font-100px font-semibold text-[#15234E] text-left"
          />
          <InfoCard2
            title={intro}
            initial={{ opacity: 0, y: 50 }}
            whileInView={fadeTop.onscreen}
            viewport={{ once: true }}
            heading="h4"
            headingClassName="font-28px font-normal text-left"
          />
        </div>
        <motion.div
          style={{ x }}
          className="flex gap-4 transition-transform duration-500 ease-in-out"
        >
          <div className="3xl:min-w-[100vw] desktop:min-w-[99vw] min-w-[97vw]">
            <h1 className="font-300px font-semibold !leading-normal">
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #001D7B 0%, #0032FD 50%, #10F0FC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {userCount.toLocaleString()}
              </span>
            </h1>
            <p className="font-40px text-[#15234E] mt-2">
              number of users watched Shorts in 7 days
            </p>
          </div>

          <div className="3xl:min-w-[100vw] desktop:min-w-[99vw] min-w-[97vw]">
            <h1 className="font-300px font-semibold !leading-normal">
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #001D7B 0%, #0032FD 50%, #10F0FC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {interactionCount.toLocaleString()}
              </span>
            </h1>
            <p className="font-40px text-[#15234E] mt-2">
              number of interactions generated in 7 days
            </p>
          </div>

          <div className="md:min-w-[100vw] min-w-[97vw]">
            <h1 className="font-300px font-semibold !leading-normal">
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #001D7B 0%, #0032FD 50%, #10F0FC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {pointCount.toLocaleString()}
              </span>
            </h1>
            <p className="font-40px text-[#15234E] mt-2">
              number of data points created in 7 days
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollComponent;
