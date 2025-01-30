import AnimatedSlider from '@/components/screens/aboutUs/AnimatedSlider';
import GetAFreeDemo from '@/components/screens/home/GetAFreeDemo';
import React from 'react';

const AboutUs = () => {
  return (
    <main className="space-y-200px container-xl mb-[220px]">
      <AnimatedSlider />
      <GetAFreeDemo
        title="Deliver on your growth promise. <br class='max-md:hidden'/> Try Horizon for Free."
        styleBlock="md:!mt-[220px] !mt-[160px]"
      />
    </main>
  );
};

export default AboutUs;
