'use client';
import React, { useState } from 'react';
import { fadeTop } from '@/components/layout/Header';
import InfoCard2 from '@/components/custom-ui/InfoCard2';
import { ChevronsLeftRight } from 'lucide-react';
import Image from 'next/image';

const RollOut = () => {
  const [sliderPosition, setSliderPosition] = useState(50.5);

  const handleMouseDown = (e) => {
    const sliderContainer = e.currentTarget.parentElement;
    const sliderWidth = sliderContainer.offsetWidth;
    const startX = e.clientX;

    // Calculate the initial position of the slider thumb within the constrained range
    const startLeft = ((sliderPosition - 44) / (57 - 44)) * sliderWidth;

    const handleMouseMove = (e) => {
      const newLeft = startLeft + (e.clientX - startX);
      const newPosition = (newLeft / sliderWidth) * (57 - 44) + 44; // Map back to 44%-57% range

      // Constrain the position between 44% and 57%
      const constrainedPosition = Math.min(Math.max(newPosition, 44), 57);
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
    <>
      {/* Header Section */}
      <section className="space-y-100px mt-12">
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

      <div className="mx-auto mt-[100px] w-full">
        <div className="relative h-[706px] w-full bg-[#F1F4F7]">
          {/* Left Image */}
          <div
            className="relative z-10 flex size-full items-center justify-center bg-[#F1F4F7]"
            style={{
              clipPath: `polygon(0 0, ${Math.min(
                Math.max(sliderPosition, 44),
                57
              )}% 0, ${Math.min(
                Math.max(sliderPosition, 44),
                57
              )}% 100%, 0 100%)`,
            }}
          >
            <div className="relative right-[-37px] z-40 mt-[90px] h-full w-[1107px]">
              <Image
                src="/assets/home/roll-screen/oldWay.png"
                width={700}
                height={200}
                className="object-fit absolute top-0 z-10 h-full object-top"
              />

              {/* <Image
                src="/assets/home/roll-screen/oldWay.png"
                width={700}
                height={200}
                className="h-full absolute top-[-20px] left-[-17px] pt-[-19px] z-50 object-fit object-top"
              /> */}
            </div>
            {/* <p className="absolute left-[120px] top-1/2 text-colorText-main font-36px">
              App without Horizon Shorts
            </p> */}
          </div>

          {/* Slider Line */}
          <div
            className={'absolute top-0 z-50 h-full w-[6px] bg-white'}
            style={{
              left: `${Math.min(Math.max(sliderPosition, 44), 57)}%`,
            }}
          ></div>

          {/* Right Image */}
          <div
            className="relative top-[-706px] z-20 flex size-full items-center justify-center"
            style={{
              clipPath: `polygon(${Math.min(
                Math.max(sliderPosition, 44),
                57
              )}% 0, 100% 0, 100% 100%, ${Math.min(
                Math.max(sliderPosition, 44),
                57
              )}% 100%)`,
              backgroundImage: "url('/assets/product/Transform/bg-after.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="relative right-[10px] z-40 mt-[80px] h-full w-[1107px]">
              <Image
                src="/assets/home/roll-screen/newWay.png"
                width={700}
                height={200}
                className="object-fit absolute top-[5px] z-10 size-full object-top"
              />

              {/* <Image
               src="/assets/home/roll-screen/newWay.png"
                width={700}
                height={200}
                className="h-full absolute top-[-15px] left-[22px] pt-[-19px] z-[50] object-fit object-top"
              /> */}
            </div>
            {/* <p className="absolute right-[120px] top-1/2 text-colorText-main font-36px">
              App with Horizon Shorts
            </p> */}
          </div>
        </div>

        {/* Slider */}
        <div
          className="slider-container container w-[262px] items-center rounded-[200px] bg-[#F1F4F7] p-5"
          style={{ marginTop: '50px' }}
        >
          <div className="slider-container relative mx-auto flex h-2 w-[200px] items-center rounded-full bg-[#B8C1CB]">
            {/* Active Track */}
            <div
              className="absolute left-0 top-0 h-2 rounded-full bg-[#0032FD]"
              style={{ width: `${((sliderPosition - 44) / (57 - 44)) * 100}%` }}
            ></div>

            {/* Slider Button */}
            <div
              className="absolute flex size-8 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-[#0032FD] shadow-md"
              style={{ left: `${((sliderPosition - 44) / (57 - 44)) * 100}%` }}
              onMouseDown={handleMouseDown}
            >
              <ChevronsLeftRight className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RollOut;
