'use client';
import useDeviceSize from '@/components/hooks/useDeviceSize';
import Image from 'next/image';
import React from 'react';

const PowerfulContent = () => {
  const { isMobile } = useDeviceSize();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={'/assets/product/PowerfulContent/bgSection.svg'}
        width={150}
        height={266}
        alt="engagementPulse"
        className="absolute inset-0 z-[-1] size-full lg:block hidden"
      />

      <Image
        src={'/assets/product/PowerfulContent/bgSectionMobile.svg'}
        width={150}
        height={266}
        alt="engagementPulse"
        className="absolute inset-0 z-[-1] size-full lg:hidden block"
      />
      <div className="flex size-full items-center justify-between lg:pl-[120px] lg:flex-row flex-col lg:gap-0 gap-[50px]">
        <div className="flex lg:px-0 px-6 basis-[41%] flex-col items-start gap-[28px] lg:pr-[127px] lg:pt-0 pt-20">
          <h1
            className="font-100px font-bold leading-snug text-colorText-main"
            dangerouslySetInnerHTML={{
              __html: 'Powerful </br> Content </br> Studio.',
            }}
          ></h1>
          <p className="font-28px text-colorText-main leading-[130%]">
            Upload your videos to Horizon Console and build your own Shorts
            library. Curate them yourself or let Horizon AI tailor content to
            your audience.
          </p>
        </div>
        <div className="flex-1 self-end flex items-end">
          <Image
            src={'/assets/product/PowerfulContent/image-1.svg'}
            width={150}
            height={266}
            alt="engagementPulse"
            className="lg:w-full lg:h-full h-[380px] w-full object-contain relative lg:right-0 right-[-110px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PowerfulContent;
