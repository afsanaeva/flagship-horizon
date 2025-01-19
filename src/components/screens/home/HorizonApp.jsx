"use client";
import React, { useState } from "react";
import { fadeTop } from "@/components/layout/Header";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { ChevronsLeftRight } from "lucide-react";
import Image from "next/image";

const HorizonApp = () => {
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
    <>
      {/* Header Section */}
      <section className="space-y-100px mt-12">
        <div className="space-y-40px flex flex-col items-center">
          <InfoCard2
            title="Turn your apps and websites into hubs <br/> of unforgettable engagement. "
            initial={{ opacity: 0, y: 50 }}
            whileInView={fadeTop.onscreen}
            viewport={{ once: true }}
            heading="h1"
            headingClassName="font-100px font-semibold"
          />
          <InfoCard2
            title="Traditional engagement relies on mostly static contents, with Horizon it looks a bit different."
            initial={{ opacity: 0, y: 50 }}
            whileInView={fadeTop.onscreen}
            viewport={{ once: true }}
            heading="h4"
            headingClassName="font-28px font-normal"
          />
        </div>
      </section>

      <div className="w-full mx-auto mt-[100px]">
        <div className="w-full bg-[#F1F4F7] h-[706px] relative">
          {/* Left Image */}
          <div
            className="size-full flex items-center justify-center relative z-10 bg-[#F1F4F7]"
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
            <div className="h-full w-[483px] relative z-50 right-[-37px] mt-[90px]">
              <Image
                src="/assets/home/roll-screen/fullMob.png"
                width={500}
                height={200}
                className="h-full absolute object-cover object-top z-10 top-[0px]"
              />

              <Image
                src="/assets/home/roll-screen/fullMob.png"
                width={500}
                height={200}
                className="h-full absolute top-[-20px] left-[-17px] pt-[-19px] z-50 object-cover object-top"
              />
            </div>
            <p className="absolute left-[120px] top-1/2 text-colorText-main font-36px">
              App without Horizon Shorts
            </p>
          </div>

          {/* Slider Line */}
          <div
            className={`absolute top-0 w-[6px] h-full bg-white z-50`}
            style={{
              left: `${Math.min(Math.max(sliderPosition, 44), 57)}%`,
            }}
          ></div>

          {/* Right Image */}
          <div
            className="relative top-[-706px] size-full flex items-center justify-center z-20"
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
            <div className="h-full w-[483px] relative mt-[80px] z-50 right-[10px]">
              <Image
               src="/assets/home/roll-screen/fullMob2.png"
                width={500}
                height={200}
                className="h-full absolute object-cover object-top z-10 top-[5px] w-full"
              />

              <Image
               src="/assets/home/roll-screen/fullMob2.png"
                width={500}
                height={200}
                className="h-full absolute top-[-15px] left-[22px] pt-[-19px] z-[50] object-cover object-top"
              />
            </div>
            <p className="absolute right-[120px] top-1/2 text-colorText-main font-36px">
              App with Horizon Shorts
            </p>
          </div>
        </div>

        {/* Slider */}
        <div
          className="slider-container container w-[262px] items-center rounded-[200px] bg-[#F1F4F7] p-5"
          style={{ marginTop: "50px" }}
        >
          <div className="slider-container relative flex h-2 w-[200px] items-center rounded-full bg-[#B8C1CB] mx-auto">
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
    </>
  );
};

export default HorizonApp;
