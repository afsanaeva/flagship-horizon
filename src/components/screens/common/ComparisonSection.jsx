"use client";

import React, { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import Image from "next/image";

const ComparisonSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50.5);

  const handleMouseDown = (e) => {
    const sliderContainer = e.currentTarget.parentElement;
    const sliderWidth = sliderContainer.offsetWidth;
    const startX = e.clientX;

    // Calculate the initial position of the slider thumb within the constrained range
    const startLeft = ((sliderPosition - 44) / (57 - 44)) * sliderWidth;

    const handleMouseMove = (e) => {
      const newLeft = startLeft + (e.clientX - startX);
      const newPosition = (newLeft / sliderWidth) * (57 - 44) + 44; // Map back to 44%-57% range

      // Constrain the position between 44% and 57%
      const constrainedPosition = Math.min(Math.max(newPosition, 44), 57);
      setSliderPosition(constrainedPosition);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="mx-auto mt-[100px] w-full">
      <div className="relative h-[706px] w-full bg-[#F1F4F7]">
        {/* Left Image */}
        <div
          className="relative z-10 flex size-full items-center justify-center bg-[#F1F4F7]"
          style={{
            clipPath: `polygon(0 0, ${Math.min(
              Math.max(sliderPosition, 44),
              57
            )}% 0, ${Math.min(
              Math.max(sliderPosition, 44),
              57
            )}% 100%, 0 100%)`,
          }}
        >
          <div className="relative right-[-37px] z-50 mt-[90px] h-full w-[483px]">
            <Image
              src="/assets/product/Transform/imageBf1.svg"
              width={500}
              height={200}
              className="absolute top-0 z-10 h-full object-cover object-top"
            />

            <Image
              src="/assets/product/Transform/phone.svg"
              width={500}
              height={200}
              className="absolute left-[-17px] top-[-20px] z-50 h-full object-cover object-top pt-[-19px]"
            />
          </div>
          <p className="font-36px absolute left-[120px] top-1/2 text-colorText-main">
            App without Horizon Shorts
          </p>
        </div>

        {/* Slider Line */}
        <div
          className={"absolute top-0 z-50 h-full w-[6px] bg-white"}
          style={{
            left: `${Math.min(Math.max(sliderPosition, 44), 57)}%`,
          }}
        ></div>

        {/* Right Image */}
        <div
          className="relative top-[-706px] z-20 flex size-full items-center justify-center"
          style={{
            clipPath: `polygon(${Math.min(
              Math.max(sliderPosition, 44),
              57
            )}% 0, 100% 0, 100% 100%, ${Math.min(
              Math.max(sliderPosition, 44),
              57
            )}% 100%)`,
            backgroundImage: "url('/assets/product/Transform/bg-after.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="relative right-[10px] z-50 mt-[80px] h-full w-[483px]">
            <Image
              src="/assets/product/Transform/imageAf1.svg"
              width={500}
              height={200}
              className="absolute top-[5px] z-10 size-full object-cover object-top"
            />

            <Image
              src="/assets/product/Transform/phone.svg"
              width={500}
              height={200}
              className="absolute left-[22px] top-[-15px] z-50 h-full object-cover object-top pt-[-19px]"
            />
          </div>
          <p className="font-36px absolute right-[120px] top-1/2 text-colorText-main">
            App with Horizon Shorts
          </p>
        </div>
      </div>

      {/* Slider */}
      <div
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="slider-container container w-[262px] items-center rounded-[200px] bg-[#F1F4F7] p-5"
        style={{ marginTop: "50px" }}
      >
        <div className="slider-container relative mx-auto flex h-2 w-[200px] items-center rounded-full bg-[#B8C1CB]">
          {/* Active Track */}
          <div
            className="absolute left-0 top-0 h-2 rounded-full bg-[#0032FD]"
            style={{ width: `${((sliderPosition - 44) / (57 - 44)) * 100}%` }}
          ></div>

          {/* Slider Button */}
          <div
            className="absolute flex size-8 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-[#0032FD] shadow-md"
            style={{ left: `${((sliderPosition - 44) / (57 - 44)) * 100}%` }}
            onMouseDown={handleMouseDown}
          >
            <ChevronsLeftRight className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
