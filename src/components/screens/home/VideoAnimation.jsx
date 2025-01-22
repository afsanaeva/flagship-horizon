"use client";

import { useEffect, useRef, useState } from "react";

const VideoAnimation = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [scrollSteps, setScrollSteps] = useState(0); // Tracks the current scroll step (0 to 5)
  const [isPlaying, setIsPlaying] = useState(true);
  const [buttonPosition, setButtonPosition] = useState(16); // State for button right position

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const maxSteps = 6; // Maximum number of steps for scaling/border-radius
      const stepThreshold = 160; // Pixels scrolled before considering a "step"
      const diff = currentScrollY - lastScrollY;

      if (Math.abs(diff) > stepThreshold) {
        // Scroll down
        if (diff > 0 && scrollSteps < maxSteps) {
          setScrollSteps((prev) => Math.min(prev + 1, maxSteps));
        // eslint-disable-next-line brace-style
        }
        // Scroll up
        else if (diff < 0 && scrollSteps > 0) {
          setScrollSteps((prev) => Math.max(prev - 1, 0));
        }

        lastScrollY = currentScrollY; // Update last scroll position
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollSteps]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const scaleValues = [1, 0.96, 0.92, 0.88, 0.85];
    const borderRadiusValues = [0, 10, 20, 30, 40];

    // Apply styles based on the current scroll step
    video.style.transform = `scale(${scaleValues[scrollSteps]})`;
    video.style.borderRadius = `${borderRadiusValues[scrollSteps]}px`;
    video.style.transition = "transform 0.5s ease, border-radius 0.5s ease";

    // Smoothly update button position
    const newButtonPosition = 16 + scrollSteps * 5 * 6;
    setButtonPosition(newButtonPosition);
  }, [scrollSteps]);

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
      className="relative h-[750px] sm:h-[500px] xl:h-[650px] 2xl:h-[735px] 3xl:h-[980px]"
      style={{ marginTop: "80px" }}
    >
      <div>
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-[-1] w-screen border-none object-cover outline-none transition-transform focus:border-none focus:outline-none"

        />
      </div>

      {/* Pause/Play Button */}
      <button
        onClick={togglePlayPause}
        style={{
          right: `${buttonPosition}px`,
          bottom: "12px",
          transition: "right 0.2s ease", // Smooth transition for button position
        }}
        className="absolute z-10 rounded-full bg-black px-3 py-2 text-white shadow-lg focus:outline-none"
      >
        {isPlaying ? "❚❚" : "▶"}
      </button>
    </div>
  );
};

export default VideoAnimation;
