'use client';
import React, { useState } from 'react';
import { fadeTop } from '@/components/layout/Header';
import InfoCard2 from '@/components/custom-ui/InfoCard2';
import { ChevronsLeftRight } from 'lucide-react';
import Image from 'next/image';
import useDeviceSize from '@/components/hooks/useDeviceSize';
import SliderCompaImg from '@/components/ui/SliderCompaImg';
// import SliderCompaImg from '@/components/ui/SliderCompaImg';

const RolloutComparisonSection = () => {
  const { isMobile } = useDeviceSize();

  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseDown = (e) => {
    const sliderContainer = e.currentTarget.parentElement;
    const sliderWidth = sliderContainer.offsetWidth;
    const startX = e.clientX;

    // Calculate the initial position of the slider thumb within the constrained range
    const startLeft = ((sliderPosition - 25) / (80 - 25)) * sliderWidth;

    const handleMouseMove = (e) => {
      const newLeft = startLeft + (e.clientX - startX);
      // const newPosition = (newLeft / sliderWidth) * (57 - 44) + 44; // Map back to 44%-57% range
      const newPosition = (newLeft / sliderWidth) * (80 - 25) + 25;

      // Constrain the position between 44% and 57%
      // const constrainedPosition = Math.min(Math.max(newPosition, 44), 57);
      const constrainedPosition = Math.min(Math.max(newPosition, 25), 80);
      setSliderPosition(constrainedPosition);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const title = isMobile
    ? 'Rollout in just a few days. Forget years of development.'
    : 'Rollout in just a few days. <br/> Forget years of development.';

  return (
    <section className="overflow-x-hidden">
      {/* Header Section */}
      <section className="space-y-100px mt-12 overflow-hidden">
        <div className="space-y-40px flex flex-col items-center">
          <InfoCard2
            title={title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={fadeTop.onscreen}
            viewport={{ once: true }}
            heading="h1"
            headingClassName="font-100px font-semibold text-colorText-main text-center"
          />
          <InfoCard2
            title="Creating super engagements from scratch requires years and significant resources. Horizon simplifies this by offering  <br/> pre-built super engagements, managed through a no-code console, and delivered via a lightweight SDK."
            initial={{ opacity: 0, y: 50 }}
            whileInView={fadeTop.onscreen}
            viewport={{ once: true }}
            heading="h4"
            headingClassName="font-28px font-normal text-colorText-main text-center hidden md:block"
          />
        </div>
      </section>

      <div className="w-full mx-auto mt-[100px]">
        <div className="w-full bg-[#F1F4F7] megaScreen:h-[706px] mobile:h-[223px] h-[550px]  relative">
          {/* Left Image */}
          <div
            className="size-full flex items-end justify-center relative z-10 bg-[#F1F4F7] md:ml-[180px] ml-0"
            style={{
              clipPath: `polygon(0 0, ${Math.min(
                Math.max(sliderPosition, 25),
                80
              )}% 0, ${Math.min(
                Math.max(sliderPosition, 25),
                80
              )}% 100%, 0 100%)`,
            }}
          >
            <div className="megaScreen:h-[550px] mobile:h-[169px] h-[400px] w-full relative z-50 md:right-[-37px] right-0 mt-[81px]">
              <Image
                src="/assets/home/roll-screen/oldWay1.png"
                width={1558}
                height={500}
                className="size-full megaScreen:object-cover object-contain object-left megaScreen:object-top"
              />
            </div>
            <p className="absolute md:top-[52px] left-0 top-5 text-colorText-main font-36px pl-5 md:pl-0">
              Traditional Way
            </p>
          </div>

          {/* Slider Line */}
          <div
            className={`absolute top-0 w-[6px] h-full bg-white z-50`}
            style={{
              left: `${Math.min(Math.max(sliderPosition, 25), 80)}%`,
            }}
          ></div>

          {/* Right Image */}
          <div
            className="relative megaScreen:top-[-706px] mobile:top-[-223px] top-[-550px] size-full flex items-end justify-center z-20"
            style={{
              clipPath: `polygon(${Math.min(
                Math.max(sliderPosition, 25),
                80
              )}% 0, 100% 0, 100% 100%, ${Math.min(
                Math.max(sliderPosition, 25),
                80
              )}% 100%)`,
              backgroundImage: "url('/assets/product/Transform/bg-after.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="megaScreen:h-[550px] mobile:h-[169px] h-[400px] w-full relative mt-[80px] z-50 md:mr-[180px] mr-0">
              {/* <Image
                src="/assets/home/roll-screen/fullMob2.png"
                width={500}
                height={200}
                className="h-full absolute object-cover object-top z-10 top-[5px] w-full"
              /> */}

              <Image
                src="/assets/home/roll-screen/newWay.png"
                width={1558}
                height={500}
                className="size-full md:object-cover object-top object-contain 3xl:object-top 2xl:object-right"
              />
            </div>
            <p className="absolute md:right-[10%] md:top-[52px] right-5 top-5 text-colorText-main font-36px">
              Horizon Way
            </p>
          </div>
        </div>

        {/* Slider */}
        <SliderCompaImg
          setSliderPosition={setSliderPosition}
          sliderPosition={sliderPosition}
        />
      </div>
    </section>
  );
};

export default RolloutComparisonSection;
