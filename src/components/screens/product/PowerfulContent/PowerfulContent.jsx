import Image from "next/image";
import React from "react";

const PowerfulContent = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={"/assets/product/PowerfulContent/bgSection.svg"}
        width={150}
        height={266}
        alt="engagementPulse"
        className="absolute inset-0 z-[-1] size-full"
      />
      <div className="flex size-full items-center justify-between pl-[120px]">
        <div className="flex basis-2/5 flex-col items-start gap-[28px] pr-[127px]">
          <h1
            className="font-100px font-bold leading-snug text-colorText-main"
            dangerouslySetInnerHTML={{
              __html: "Powerful </br> Content </br> Studio.",
            }}
          ></h1>
          <p className="font-28px basis-1/5 text-colorText-main">
            Upload your videos to Horizon Console and build your own Shorts
            library. Curate them yourself or let Horizon AI tailor content to
            your audience.
          </p>
        </div>
        <div className="flex-1 self-end">
          <Image
            src={"/assets/product/PowerfulContent/image-1.svg"}
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
