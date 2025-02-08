import React from 'react';

const VideoPlayer = () => {
  return (
    <div
      className="absolute left-[16.5%] top-[2%] h-[73.5%] w-[37%] overflow-hidden rounded-[3rem]
    4xl:left-[27%] 4xl:w-[23%]
    2xl:left-[17%] 2xl:w-[33%]
    xl:top-[3%] xl:left-[13%] xl:h-[72.5%]
    sm:left-[13%] sm:h-[58.5%] sm:top-[12%] sm:rounded-[1rem]
    xs:top-[23.5%] xs:left-[12.5%] xs:h-[40.5%] xs:rounded-[1rem]"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ border: 'none' }}
        className="size-full object-cover"
      >
        <source src="/assets/product/Hero/MPEG-4movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
