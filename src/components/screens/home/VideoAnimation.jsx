"use client";

import { useEffect, useRef, useState } from "react";

const VideoAnimation = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      if (!video) return;

      const rect = video.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate the scale factor based on scroll position
      if (rect.top >= 0 && rect.bottom <= viewportHeight) {
        // Fully visible in the viewport; reset to original size
        video.style.transform = "scale(1)";
      } else if (rect.top < viewportHeight) {
        // Partially visible; scale dynamically
        const scale = Math.max(0.95, rect.top / viewportHeight);
        video.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-[-1] size-full rounded-[30px] border-none object-cover outline-none transition-transform"
      />
      {/* Pause/Play Button */}
      <button
        onClick={togglePlayPause}
        className="z-13 absolute bottom-12 right-12 flex size-8 mr-5 items-center justify-center rounded-full bg-black bg-opacity-60 text-white"
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>
    </div>
  );
};

export default VideoAnimation;
