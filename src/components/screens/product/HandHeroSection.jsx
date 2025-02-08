import Image from 'next/image';
import React from 'react';
import VideoPlayer from './VideoPlayer';

const HandHeroSection = () => {
  return (
    <div className="relative flex size-full items-center justify-center max-lg:!mt-10">
      {/* <VideoPlayer /> */}

      {/* Animated gradient background */}
      {/* <div className="absolute left-1/2 top-[-100px] -z-10 w-[1228px] -translate-x-[60%] blur-[226px]">
        <div
          className="absolute right-0 top-[150px] -z-10 h-[457px] w-[50vw] blur-3xl"
          style={{
            background: '#C3AEFF',
            // backgroundSize: '200% 200%',
            animation: 'gradient 10s ease infinite',
            // maskImage: 'linear-gradient(to bottom, black, transparent)',
            // WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />
        <div
          className="absolute left-0 top-[300px] -z-10 ml-auto h-[546px] w-[50vw] blur-3xl"
          style={{
            background: '#9CD5FF',
            // backgroundSize: '200% 200%',
            animation: 'gradient 10s ease infinite',
            // maskImage: 'linear-gradient(to bottom, black, transparent)',
            // WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 -z-10 ml-auto w-[50vw] blur-3xl"
          style={{
            background: '#FF9CB4',
            // backgroundSize: '200% 200%',
            animation: 'gradient 10s ease infinite',
            // maskImage: 'linear-gradient(to bottom, black, transparent)',
            // WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 -z-10 ml-auto w-[50vw] blur-3xl"
          style={{
            background: '#95D1FC',
            // backgroundSize: '200% 200%',
            animation: 'gradient 10s ease infinite',
            // maskImage: 'linear-gradient(to bottom, black, transparent)',
            // WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />

        <div
          className="-z-9 absolute inset-0"
          style={{
            background: 'linear-gradient(to left, transparent 10%, white )',
          }}
        />
      </div> */}

      <div className="relative lg:ml-[300px] ml-[85px] lg:h-[1100px] h-[550px] w-full">
        {/* <VideoPlayer /> */}
        {/* <Image
          src={'/assets/product/Hero/image-1.svg'}
          alt="Hand Hero"
          className="size-full object-contain"
          width={1075}
          height={1179}
          priority
        /> */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ border: 'none' }}
          className="size-full object-contain"
        >
          <source src="/assets/product/Hero/1test.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute bottom-0 left-0 lg:h-[18.75rem] h-[132.851px] w-full bg-[linear-gradient(180deg,_rgba(255,255,255,0.00)_6.07%,_#FFF_93.93%)]" />
    </div>
  );
};

export default HandHeroSection;
