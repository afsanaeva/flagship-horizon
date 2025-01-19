import Image from 'next/image';
import React from 'react';

const InfinityScrollSection = () => {
  return (
    <div className="flex items-center justify-between gap-10 py-220px px-200px container-xl overflow-hidden">
      <div className="flex flex-col items-start gap-[3.75rem] flex-1 pl-[80px]">
        <h1
          className="font-100px font-bold leading-snug text-colorText-main"
          dangerouslySetInnerHTML={{
            __html: 'Infinity Scroll </br> Video Experience.',
          }}
        ></h1>
        <div className="flex flex-col gap-[2.75rem] max-w-[55%]">
          <p className="text-[#67788A] font-28px basis-[20%]">
            Shorts are the ultimate online obsession. Capture attention and turn
            it into loyalty with our infinite scrolling technology.
          </p>
          <p className="text-[#67788A] font-28px">
            Our{' '}
            <span className="text-colorText-main">
              intelligent streaming engine{' '}
            </span>{' '}
            guarantees uninterrupted playback, adjusting video quality in
            real-time for a seamless experience, no matter the connection.
          </p>

          <p className="text-colorText-main font-32px">
            Infinite Streaming. <br />
            Unstoppable Engagement.
          </p>
        </div>
      </div>
      <div className="relative basis-[33.33%] max-h-[840px]">
        <Image
          src="/assets/product/Infinity/bg.svg"
          alt=""
          width={916}
          height={778}
          className="absolute inset-0 size-full object-cover z-[-1] overflow-visible left-[118px]"
        />
        <Image
          src="/assets/product/Infinity/bg.svg"
          alt=""
          width={916}
          height={778}
          className="absolute inset-0 size-full object-cover z-[-1] overflow-visible left-[-150px]"
        />

        <Image
          src={`/assets/product/Infinity/HomeScreeniPhone.png`}
          alt={`Versatile Entry Points`}
          width={458}
          height={840}
          className="object-contain w-full h-[revert-layer]"
        />
      </div>
    </div>
  );
};

export default InfinityScrollSection;
