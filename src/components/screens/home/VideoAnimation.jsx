"use client";

import { useEffect, useRef, useState } from "react";

const VideoAnimation = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const video = videoRef.current;
      if (!video) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY <= lastScrollY) {
        // Scrolling up; do nothing
        lastScrollY = currentScrollY;
        return;
      }

      const rect = video.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Apply scaling only when scrolling down
      if (rect.top >= 0 && rect.bottom <= viewportHeight) {
        video.style.transform = "scale(1)";
        video.style.transition = "transform 0.5s ease";
      } else if (rect.top < viewportHeight) {
        let scale;
        if (rect.top > viewportHeight * 0.6) {
          scale = 0.95;
        } else if (rect.top > viewportHeight * 0.5) {
          scale = 0.9;
        } else if (rect.top > viewportHeight * 0.4) {
          scale = 0.85;
        } else if (rect.top > viewportHeight * 0.3) {
          scale = 0.8;
        } else if (rect.top > viewportHeight * 0.2) {
          scale = 0.75;
        } else {
          scale = 0.7;
        }
        video.style.transform = `scale(${scale})`;
        video.style.transition = "transform 1s ease , border-radius 30px"; // Smooth scaling
      }

      lastScrollY = currentScrollY;
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
    <div
      className="relative h-screen overflow-hidden"
      style={{ marginTop: "80px" }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-[-1] w-full border-none object-cover outline-none transition-transform"
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
