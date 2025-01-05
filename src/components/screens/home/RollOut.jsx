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
      <section className="relative h-[650px] w-full overflow-hidden">
        {/* Background Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
        linear-gradient(to right, #f4f4f4 50%, #f0f9ff 50%)
      `,
          }}
        ></div>

        {/* Content Wrapper */}
        <div className="relative flex h-full">
          {/* Old Way Section */}
          <div
            className="relative flex flex-col items-center justify-start border-r-4 border-[#ffff] bg-[#F1F4F7] py-8 pl-20"
            style={{ width: `${100 - sliderPosition}%` }}
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
            className="relative flex flex-col items-center justify-start py-8 pr-20"
            style={{
              width: `${sliderPosition}%`,
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
              className="w-full h-full object-cover rounded-r-lg"
            />
          </div>
        </div>

        {/* Slider */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center slider-container p-5 bg-[#F1F4F7] rounded-[200px] shadow-md">
          <div className="slider-container relative w-[200px] h-2 bg-[#B8C1CB] rounded-full flex items-center px-2">
            {/* Active Track */}
            <div
              className="absolute top-0 left-0 h-2 bg-[#0032FD] rounded-full"
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
      </section>
    </>
  );
};

export default RollOut;
