"use client";
import React, { useState } from "react";
import { fadeTop } from "@/components/layout/Header";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import newWay from "../../../../public/assets/home/roll-screen/newWay.png";
import oldWay from "../../../../public/assets/home/roll-screen/oldWay.png";
import { ChevronsLeftRight } from "lucide-react";

const RollOut = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // Initial slider position (%)

  const handleSliderMove = (e) => {
    const container = e.target.closest(".slider-container");
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100)); // Clamp values between 0 and 100
  };

  return (
    <>
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
      <section className=" relative h-[500px] w-full overflow-hidden">
        {/* new Way Image */}
        <div className="absolute inset-0">
          {/* <p className="font-36px">Horizon Way: Deploy within a few days</p> */}
          <div
            className="absolute inset-0 blur-xl"
            style={{
              background: `
            radial-gradient(circle at 25% 25%, #CCEDFF, transparent 50%),
            radial-gradient(circle at 75% 25%, #D6CCFF, transparent 50%),
            radial-gradient(circle at 25% 75%, #FFE8F2, transparent 50%),
            radial-gradient(circle at 75% 75%, #C9E2FF, transparent 50%)
          `,
              zIndex: -1, // Keeps it behind the image
            }}
          ></div>
          <img
            src={newWay.src}
            alt="New Way"
            className="w-full h-full container-lg mt-12 object-cover rounded-r-lg"
          />
        </div>

        {/* old Way Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* <p className="font-36px">Traditional Way: Years of development</p> */}

          <img
            src={oldWay.src}
            alt="Old Way"
            className="w-full h-full container-lg mt-12 w-full rounded-l-lg object-cover"
          />
        </div>

        <div className="flex items-center justify-center h-screen bg-[#F1F4F7]">
          <div className="slider-container relative w-[300px] h-2 bg-gray-200 rounded-full flex items-center px-2">
            {/* Active Track */}
            <div
              className="absolute top-0 left-0 h-2 bg-[#0032FD] rounded-full"
              style={{ width: `${sliderPosition}%` }}
            ></div>

            {/* Slider Button */}
            <div
              className="absolute flex size-10 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-[#0032FD] shadow-md"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={(e) => {
                const onMouseMove = (moveEvent) => handleSliderMove(moveEvent);
                const onMouseUp = () => {
                  window.removeEventListener("mousemove", onMouseMove);
                  window.removeEventListener("mouseup", onMouseUp);
                };

                window.addEventListener("mousemove", onMouseMove);
                window.addEventListener("mouseup", onMouseUp);
              }}
            >
              <ChevronsLeftRight className="text-[#ffff]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RollOut;
