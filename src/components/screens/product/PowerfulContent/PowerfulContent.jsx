import Image from "next/image";
import React from "react";

const PowerfulContent = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={`/assets/product/PowerfulContent/bgSection.svg`}
        width={150}
        height={266}
        alt="engagementPulse"
        className="absolute inset-0 w-full h-full z-[-1]"
      />
      <div className="w-full h-full flex items-center justify-between pl-[120px]">
        <div className="flex flex-col items-start gap-[28px] basis-[40%] pr-[127px]">
          <h1
            className="font-100px font-bold leading-snug text-colorText-main"
            dangerouslySetInnerHTML={{
              __html: "Powerful </br> Content </br> Studio.",
            }}
          ></h1>
          <p className="text-colorText-main font-28px basis-[20%]">
            Upload your videos to Horizon Console and build your own Shorts
            library. Curate them yourself or let Horizon AI tailor content to
            your audience.
          </p>
        </div>
        <div className="flex-1 self-end">
          <Image
            src={`/assets/product/PowerfulContent/image-1.svg`}
            width={150}
            height={266}
            alt="engagementPulse"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PowerfulContent;
