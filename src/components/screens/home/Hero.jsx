'use client';
import React from 'react';
import { fadeTop } from '@/components/layout/Header';
import InfoCard2 from '@/components/custom-ui/InfoCard2';
import useDeviceSize from '@/components/hooks/useDeviceSize';

const Hero = () => {
  const { isMobile } = useDeviceSize();

  const title = isMobile
    ? 'Skyrocket Your Customer Engagement. Grow Infinite.'
    : 'Skyrocket Your Customer <br/> Engagement. Grow Infinite.';
  const subText = isMobile
    ? 'Horizon is the first customer engagement platform empowering enterprises to deliver big-tech-level engagement at scale.'
    : 'Horizon is the first customer engagement platform empowering <br/>  enterprises to deliver big-tech-level engagement at scale.';
  return (
    <section className="desktop:mt-[115px] mt-20">
      <div className="flex flex-col gap-4 items-center px-6 md:px-0">
        <InfoCard2
          title={title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={fadeTop.onscreen}
          viewport={{ once: true }}
          heading="h1"
          headingClassName="fontHero-100px font-semibold text-center text-colorText-main"
        />
        <InfoCard2
          title={subText}
          initial={{ opacity: 0, y: 50 }}
          whileInView={fadeTop.onscreen}
          viewport={{ once: true }}
          heading="h4"
          headingClassName="font-28px font-normal text-center text-colorText-main"
        />
        {/* <Button
          size="lg"
          asChild
          className="hidden md:flex items-center justify-center"
        >
          <Link href="/get-demo">Get a demo</Link>
        </Button> */}
      </div>
    </section>
  );
};

export default Hero;
