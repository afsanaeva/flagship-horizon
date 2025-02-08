'use client';

import useDeviceSize from '@/components/hooks/useDeviceSize';
import { useEffect, useRef, useState } from 'react';

const VideoAnimation = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollProgressButton, setScrollProgressButton] = useState(0.3);
  const [isPlaying, setIsPlaying] = useState(true);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const videoHeight = rect.height;
      const scrolled = window.scrollY;
      const scrollThreshold = videoHeight * 0.9999999; // 70% of video height

      // Progress calculation
      const progress = Math.min(1, scrolled / scrollThreshold);
      setScrollProgress(progress);
      setScrollProgressButton(0.3 + progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const insetValue = 6.25 * scrollProgress;
    const radiusValue = 40 * scrollProgress;

    video.style.clipPath = `inset(${insetValue}% round ${radiusValue}px)`;
    video.style.transition = 'clip-path 0.2s ease-out';
  }, [scrollProgress]);

  return (
    <div ref={containerRef} className="relative h-[980px] !mt-[100px]">
      <div
        style={{
          position: 'absolute',
          bottom: `${9.25 * scrollProgressButton}%`,
          right: `${9.25 * scrollProgressButton}%`,
          zIndex: 40,
          transition: 'clip-path 0.2s ease-out',
        }}
        className="flex items-start h-[calc(100%-40px)]"
      >
        <button
          onClick={togglePlayPause}
          style={{
            position: 'sticky',
            top: '85%',
            zIndex: 10,
          }}
          className="rounded-full items-center justify-center bg-black px-3 py-2 text-white 
          shadow-lg focus:outline-none hidden md:flex"
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>
      </div>

      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default VideoAnimation;
