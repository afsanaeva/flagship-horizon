'use client';

import useDeviceSize from '@/components/hooks/useDeviceSize';
import Image from 'next/image';
import React from 'react';

const InfinityScrollSection = () => {
  const { isMobile } = useDeviceSize();
  const textOne = isMobile
    ? 'Shorts are the ultimate online obsession. Capture attention and turn it into loyalty with our infinite scrolling technology.'
    : 'Shorts are the ultimate online obsession. Capture attention and turn it into loyalty </br> with our infinite scrolling technology.';
  return (
    <div className="py-220px px-200px container-xl flex items-center justify-between lg:flex-row flex-col gap-16 lg:gap-10 overflow-hidden">
      <div className="flex flex-1 flex-col items-start gap-6 lg:gap-[3.75rem] lg:pl-[80px]">
        <h1
          className="font-100px font-bold leading-snug text-colorText-main"
          dangerouslySetInnerHTML={{
            __html: 'Infinity Scroll </br> Video Experience.',
          }}
        ></h1>
        <div className="flex lg:max-w-[55%] flex-col gap-10 lg:gap-11">
          <p
            className="font-28px basis-1/5 text-[#67788A]"
            dangerouslySetInnerHTML={{ __html: textOne }}
          />
          <p className="font-28px text-[#67788A]">
            Our{' '}
            <span className="text-colorText-main font-semibold">
              intelligent streaming engine{' '}
            </span>{' '}
            {!isMobile && <br />}
            guarantees uninterrupted playback, {!isMobile && <br />} adjusting
            video quality in real-time for a seamless experience, no matter the
            connection.
          </p>

          <p className="font-32px text-colorText-main font-semibold">
            Infinite Streaming.{!isMobile && <br />}
            Unstoppable Engagement.
          </p>
        </div>
      </div>
      <div className="relative max-h-[840px] basis-[33.33%]">
        <Image
          src="/assets/product/Infinity/bg.svg"
          alt=""
          width={916}
          height={778}
          className="absolute inset-0 left-[118px] z-[-1] size-full overflow-visible object-cover"
        />
        <Image
          src="/assets/product/Infinity/bg.svg"
          alt=""
          width={916}
          height={778}
          className="absolute lg:block hidden inset-0 left-[-150px] z-[-1] size-full overflow-visible object-cover"
        />

        <Image
          src={'/assets/product/Infinity/HomeScreeniPhone.png'}
          alt={'Versatile Entry Points'}
          width={458}
          height={840}
          className="h-[revert-layer] w-full object-contain lg:block hidden"
        />

        <Image
          src={'/assets/product/Infinity/HomeScreeniPhone.png'}
          alt={'Versatile Entry Points'}
          width={458}
          height={549}
          className="h-[revert-layer] w-full object-contain lg:hidden block"
        />
      </div>
    </div>
  );
};

export default InfinityScrollSection;
