import Image from 'next/image';
import React from 'react';
import VideoPlayer from './VideoPlayer';

const HandHeroSection = () => {
  return (
    <div className="relative size-full flex items-center justify-center">
      <VideoPlayer />

      {/* Animated gradient background */}
      <div className="blur-[226px] absolute top-[-100px] -z-10 w-[1228px] left-1/2 -translate-x-[60%]">
        <div
          className="absolute blur-3xl top-[150px] right-0 -z-10 w-[50vw] h-[457px]"
          style={{
            background: '#C3AEFF',
            // backgroundSize: '200% 200%',
            animation: 'gradient 10s ease infinite',
            // maskImage: 'linear-gradient(to bottom, black, transparent)',
            // WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />
        <div
          className="absolute blur-3xl top-[300px] left-0 ml-auto -z-10 w-[50vw] h-[546px]"
          style={{
            background: '#9CD5FF',
            // backgroundSize: '200% 200%',
            animation: 'gradient 10s ease infinite',
            // maskImage: 'linear-gradient(to bottom, black, transparent)',
            // WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />
        <div
          className="absolute blur-3xl bottom-0 left-0 ml-auto -z-10 w-[50vw]"
          style={{
            background: '#FF9CB4',
            // backgroundSize: '200% 200%',
            animation: 'gradient 10s ease infinite',
            // maskImage: 'linear-gradient(to bottom, black, transparent)',
            // WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />
        <div
          className="absolute blur-3xl bottom-0 right-0 ml-auto -z-10 w-[50vw]"
          style={{
            background: '#95D1FC',
            // backgroundSize: '200% 200%',
            animation: 'gradient 10s ease infinite',
            // maskImage: 'linear-gradient(to bottom, black, transparent)',
            // WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
        />

        <div
          className="absolute inset-0 -z-9"
          style={{
            background: 'linear-gradient(to left, transparent 10%, white )',
          }}
        />
      </div>

      <Image
        src={'/assets/product/Hero/image-1.svg'}
        alt="Hand Hero"
        className="w-full h-[1100px] pl-[300px] object-fill"
        width={1075}
        height={1179}
      />
      <div className="absolute left-0 bottom-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.00)_6.07%,_#FFF_93.93%)] w-full h-[18.75rem]"></div>
    </div>
  );
};

export default HandHeroSection;
