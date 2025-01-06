"use client";

import { useState, useEffect } from "react";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { fadeTop } from "@/components/layout/Header";

const HorizonLive = () => {
  const [userCount, setUserCount] = useState(42000003); // Base value on launch day
  const [interactionCount, setInteractionCount] = useState(71400829); // Base value on launch day
  const [pointCount, setPointCount] = useState(102067103); // Base value on launch day
  const baseDate = new Date("2025-01-01"); // Set the base date when the count started

  useEffect(() => {
    const currentDate = new Date();
    const diffInSeconds = Math.floor((currentDate - baseDate) / 1000); // Calculate difference in seconds
    const initialUserCount = 42000003 + diffInSeconds * 2; // Calculate the initial count
    setUserCount(initialUserCount); // Set the initial user count

    const userInterval = setInterval(() => {
      setUserCount((prevCount) => prevCount + 1); // Increment user count every second
    }, 1000);

    return () => clearInterval(userInterval); // Clean up on component unmount
  }, [baseDate]);

  useEffect(() => {
    const currentDate = new Date();
    const diffInSeconds = Math.floor((currentDate - baseDate) / 1000); // Calculate difference in seconds
    const initialInteractionCount = 71400829 + diffInSeconds * 2; // Initial interaction count
    setInteractionCount(initialInteractionCount);

    const interactionInterval = setInterval(() => {
      setInteractionCount((prevCount) => prevCount + 1); // Increment interaction count every second
    }, 1000);

    return () => clearInterval(interactionInterval); // Clean up on component unmount
  }, [baseDate]);

  useEffect(() => {
    const currentDate = new Date();
    const diffInSeconds = Math.floor((currentDate - baseDate) / 1000); // Calculate difference in seconds
    const initialPointCount = 102067103 + diffInSeconds * 2; // Initial point count
    setPointCount(initialPointCount);

    const pointInterval = setInterval(() => {
      setPointCount((prevCount) => prevCount + 1); // Increment point count every second
    }, 1000);

    return () => clearInterval(pointInterval); // Clean up on component unmount
  }, [baseDate]);
  return (
    <div className="container-md space-y-100px">
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
      <div className="space-y-40px text-left">
        <h1 className="font-300px font-semibold leading-snug">
          <span
            style={{
              background:
                "linear-gradient(90deg, #15234E 26.26%, #001D7B -21.97%, #0032FD 22.49%, #10F0FC )",
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
      <div className="space-y-40px text-left">
        <h1 className="font-300px font-semibold leading-snug">
          <span
            style={{
              background:
                "linear-gradient(90deg, #15234E 26.26%, #001D7B -21.97%, #0032FD 22.49%, #10F0FC )",
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
      <div className="space-y-40px text-left">
        <h1 className="font-300px font-semibold leading-snug">
          <span
            style={{
              background:
                "linear-gradient(90deg, #15234E 26.26%, #001D7B -21.97%, #0032FD 22.49%, #10F0FC )",
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
  );
};

export default HorizonLive;
