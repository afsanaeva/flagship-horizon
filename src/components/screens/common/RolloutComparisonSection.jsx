'use client';
import React, { useState } from 'react';
import { fadeTop } from '@/components/layout/Header';
import InfoCard2 from '@/components/custom-ui/InfoCard2';
import { ChevronsLeftRight } from 'lucide-react';
import Image from 'next/image';

const RolloutComparisonSection = () => {
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

  return (
    <section className="overflow-x-hidden">
      {/* Header Section */}
      <section className="space-y-100px mt-12 overflow-hidden">
        <div className="space-y-40px flex flex-col items-center">
          <InfoCard2
            title="Rollout in just a few days. <br/> Forget years of development."
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
            headingClassName="font-28px font-normal text-colorText-main text-center"
          />
        </div>
      </section>

      <div className="w-full mx-auto mt-[100px]">
        <div className="w-full bg-[#F1F4F7] h-[706px] relative">
          {/* Left Image */}
          <div
            className="size-full flex items-end justify-center relative z-10 bg-[#F1F4F7] ml-[180px]"
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
            <div className="h-[550px] w-full relative z-50 right-[-37px] mt-[81px]">
              <Image
                src="/assets/home/roll-screen/oldWay1.png"
                width={1558}
                height={500}
                className="size-full object-cover object-top"
              />
            </div>
            <p className="absolute left-0 top-[52px] text-colorText-main font-36px">
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
            className="relative top-[-706px] size-full flex items-end justify-center z-20"
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
            <div className="h-[550px] w-full relative mt-[80px] z-50 mr-[180px]">
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
                className="size-full object-cover object-top"
              />
            </div>
            <p className="absolute right-[10%] top-[52px] text-colorText-main font-36px">
              Horizon Way
            </p>
          </div>
        </div>

        {/* Slider */}
        <div
          className="slider-container container w-[262px] items-center rounded-[200px] bg-[#F1F4F7] p-5"
          style={{ marginTop: '50px' }}
        >
          <div className="slider-container relative flex h-2 w-[200px] items-center rounded-full bg-[#B8C1CB] mx-auto">
            {/* Active Track */}
            <div
              className="absolute left-0 top-0 h-2 rounded-full bg-[#0032FD]"
              style={{ width: `${((sliderPosition - 25) / (80 - 25)) * 100}%` }}
            ></div>

            {/* Slider Button */}
            <div
              className="absolute flex size-8 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-[#0032FD] shadow-md"
              style={{ left: `${((sliderPosition - 25) / (80 - 25)) * 100}%` }}
              onMouseDown={handleMouseDown}
            >
              <ChevronsLeftRight className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolloutComparisonSection;
