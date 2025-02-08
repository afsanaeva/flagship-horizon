'use client';

import { useState, useEffect } from 'react';
import HorizontalScrollComponent from './HorizontalScrollComponent';

const HorizonLive = ({ title, intro }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Track which number is active
  const [userCount, setUserCount] = useState(420003);
  const [interactionCount, setInteractionCount] = useState(714029);
  const [pointCount, setPointCount] = useState(102713);
  const baseDate = new Date('2025-01-01');

  // Formula increments for each 2-second segment within 10 seconds
  const increments = [3, 3, 5, 5, 1, 1, 6, 6, 2, 2];

  // Smooth updates every second
  useEffect(() => {
    const userInterval = setInterval(() => {
      setUserCount((prev) => prev + 1 * 2);
      setInteractionCount((prev) => prev + 1 * 2);
      setPointCount((prev) => prev + 1 * 2);
    }, 1000);

    return () => clearInterval(userInterval);
  }, []);

  // Apply formula every 10 seconds
  useEffect(() => {
    let segment = 0;

    const formulaInterval = setInterval(() => {
      const increment = increments[segment];
      setUserCount((prev) => prev + increment);
      setInteractionCount((prev) => prev + increment);
      setPointCount((prev) => prev + increment);

      segment = (segment + 1) % increments.length; // Cycle through 0-9
    }, 2000); // Update every 2 seconds

    return () => clearInterval(formulaInterval);
  }, []);

  // Cycle through active index every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through 0, 1, 2
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="containerComponent space-y-100px relative">
      <HorizontalScrollComponent
        userCount={userCount}
        interactionCount={interactionCount}
        pointCount={pointCount}
        title={title}
        intro={intro}
      />
    </div>
  );
};

export default HorizonLive;
