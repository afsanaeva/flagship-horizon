"use client";
import React, { useState } from "react";
import { fadeTop } from "@/components/layout/Header";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import newWay from "../../../../public/assets/home/roll-screen/newWay.png";
import oldWay from "../../../../public/assets/home/roll-screen/oldWay1.png";
import { ChevronsLeftRight } from "lucide-react";

const RollOut = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // Initial slider position (%)

  // Handles the slider movement
  const handleSliderMove = (e) => {
    const slider = document.querySelector(".slider-container");
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(newPosition, 30), 70)); // Clamp values between 0 and 100
  };
  // Handles the mousedown event
  const handleMouseDown = (e) => {
    const onMouseMove = (moveEvent) => handleSliderMove(moveEvent);
    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <>
      {/* Header Section */}
      <section className="space-y-100px mt-12">
        <div className="space-y-40px flex flex-col items-center">
          <InfoCard2
            title="Rollout in just a few days. <br/> Forget years of development."
            initial={{ opacity: 0, y: 50 }}
            whileInView={fadeTop.onscreen}
            viewport={{ once: true }}
            heading="h1"
            headingClassName="font-100px font-semibold"
          />
          <InfoCard2
            title="Creating super engagements from scratch requires years and significant resources. Horizon simplifies this by offering  <br/> pre-built super engagements, managed through a no-code console, and delivered via a lightweight SDK."
            initial={{ opacity: 0, y: 50 }}
            whileInView={fadeTop.onscreen}
            viewport={{ once: true }}
            heading="h4"
            headingClassName="font-28px font-normal"
          />
        </div>
      </section>

      {/* Comparison Section */}
      <section
        className="relative h-[600px] w-full overflow-hidden"
        style={{
          marginTop: "100px",
        }}
      >
        {/* Content Wrapper */}
        <div className="relative flex h-full">
          <div
            className="relative flex flex-col items-center justify-start border-r-4 border-[#ffff] bg-[#F1F4F7] pl-20 pt-8"
            style={{
              width: `${sliderPosition}%`, // Left section size based on sliderPosition
            }}
          >
            {/* Text */}
            <div>
              <h2
                className="font-36px mb-8 font-normal text-[#15234E]"
                style={{
                  fontSize: `${35 - (sliderPosition / 100) * 16}px`, // Dynamically reduce font size
                }}
              >
                Traditional Way: Years of development
              </h2>
            </div>
            {/* Image */}
            <img
              src={oldWay.src}
              alt="Traditional Way"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>

          {/* New Way Section */}
          <div
            className="relative flex flex-col items-center justify-start pr-20 pt-8"
            style={{
              width: `${100 - sliderPosition}%`, // Right section size based on sliderPosition
              background: `
    radial-gradient(circle at 25% 25%, #CCEDFF, transparent 50%),
    radial-gradient(circle at 75% 25%, #D6CCFF, transparent 50%),
    radial-gradient(circle at 25% 75%, #FFE8F2, transparent 50%),
    radial-gradient(circle at 75% 75%, #C9E2FF, transparent 50%)
  `,
            }}
          >
            {/* Text */}
            <div>
              <h2
                className="font-36px mb-8 font-normal text-[#15234E]"
                style={{
                  fontSize: `${18 + (sliderPosition / 100) * 16}px`, // Dynamically increase font size
                }}
              >
                Horizon Way : Deploy within a few days
              </h2>
            </div>
            {/* Image */}
            <img
              src={newWay.src}
              alt="Horizon Way"
              className="h-full w-full rounded-r-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Slider */}
      <div
        className="slider-container container w-[250px] items-center rounded-[200px] bg-[#F1F4F7] p-5"
        style={{
          marginTop: "50px",
        }}
      >
        <div className="slider-container relative flex h-2 w-[200px] items-center rounded-full bg-[#B8C1CB] px-2">
          {/* Active Track */}
          <div
            className="absolute left-0 top-0 h-2 rounded-full bg-[#0032FD]"
            style={{ width: `${sliderPosition}%` }}
          ></div>

          {/* Slider Button */}
          <div
            className="absolute flex size-8 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-[#0032FD] shadow-md"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={handleMouseDown}
          >
            <ChevronsLeftRight className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RollOut;
