import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="absolute w-[376px] h-[814px] top-[21px] left-1/2 -translate-x-[60%] rounded-[50px] overflow-hidden">
      <video
        width="640"
        height="480"
        autoPlay
        muted
        loop
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
