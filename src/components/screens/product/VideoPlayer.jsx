import React from "react";

const VideoPlayer = () => {
  return (
    // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
    <div className="absolute left-1/2 top-[21px] h-[814px] w-[376px] -translate-x-[60%] overflow-hidden rounded-[50px]">
      <video
        width="640"
        height="480"
        autoPlay
        muted
        loop
        style={{ border: "none" }}
        className="size-full object-cover"
      >
        <source src="/assets/product/Hero/MPEG-4movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
