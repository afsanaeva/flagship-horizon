"use client";

import { useState, useEffect } from "react";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { fadeTop } from "@/components/layout/Header";

const HorizonLive = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track which number is active
  const [userCount, setUserCount] = useState(420003);
  const [interactionCount, setInteractionCount] = useState(714029);
  const [pointCount, setPointCount] = useState(102713);
  const baseDate = new Date("2025-01-01");

  useEffect(() => {
    const currentDate = new Date();
    const diffInSeconds = Math.floor((currentDate - baseDate) / 1000);
    setUserCount(420003 + diffInSeconds * 2);
    setInteractionCount(7140829 + diffInSeconds * 2);
    setPointCount(1020103 + diffInSeconds * 2);

    const userInterval = setInterval(() => {
      setUserCount((prev) => prev + 1);
      setInteractionCount((prev) => prev + 1);
      setPointCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(userInterval);
  }, [baseDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through 0, 1, 2
    }, 6000); // Change active number every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-md space-y-100px relative">
      <InfoCard2
        title="See Horizon’s magic live, experience <br class='max-md:hidden'/> what it can do for your business."
        descriptionClassName="lg:max-w-[790px] !leading-[140%] 2xl:max-w-[870px] 3xl:max-w-[1110px] mx-auto opacity-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "just",
            duration: 1,
          },
        }}
        viewport={{ once: true, amount: 0.3 }}
        headingClassName="font-100px font-semibold text-[#15234E] text-left"
      />
      <InfoCard2
        title="We’re already delivering super engagement on some of the world’s leading platforms. <br/> Explore live engagement stats from digital platforms powered by Horizon today."
        initial={{ opacity: 0, y: 50 }}
        whileInView={fadeTop.onscreen}
        viewport={{ once: true }}
        heading="h4"
        headingClassName="font-28px font-normal text-left"
      />

      <div className="relative flex flex-col gap-[100px]">
        <div className={`${activeIndex === 0 ? "visible" : ""}`}>
          <h1 className="font-300px font-semibold leading-snug">
            <span
              style={{
                background:
                  "linear-gradient(90deg, #001D7B 0%, #0032FD 50%, #10F0FC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {userCount.toLocaleString()}
            </span>
          </h1>
          <p className="font-40px text-[#15234E]">
            number of users watched Shorts in 7 days
          </p>
        </div>

        <div className={` ${activeIndex === 1 ? "visible" : ""}`}>
          <h1 className="font-300px font-semibold leading-snug">
            <span
              style={{
                background:
                  "linear-gradient(90deg, #001D7B 0%, #0032FD 50%, #10F0FC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {interactionCount.toLocaleString()}
            </span>
          </h1>
          <p className="font-40px text-[#15234E]">
            number of interactions generated in 7 days
          </p>
        </div>

        <div className={` ${activeIndex === 2 ? "visible" : ""}`}>
          <h1 className="font-300px font-semibold leading-snug">
            <span
              style={{
                background:
                  "linear-gradient(90deg, #001D7B 0%, #0032FD 50%, #10F0FC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {pointCount.toLocaleString()}
            </span>
          </h1>
          <p className="font-40px text-[#15234E]">
            number of data points created in 7 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizonLive;
