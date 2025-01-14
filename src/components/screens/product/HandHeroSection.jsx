import Image from "next/image";
import React from "react";

const HandHeroSection = () => {
  return (
    <div className="relative size-full flex items-center justify-center">
      {/* <div className="blur-[226.57656860351562px] absolute inset-0 h-[70%] w-[70%] z-[-1] mx-auto top-[-400px]">
        <div
          className="absolute blur-[226.57656860351562px] inset-0 -z-10 w-[50vw] h-full"
          style={{
            background: `radial-gradient(circle at 25% 25%, #CCEDFF, transparent 50%),
    radial-gradient(circle at 75% 25%, #D6CCFF, transparent 50%),
    radial-gradient(circle at 25% 75%, #FFE8F2, transparent 50%),
    radial-gradient(circle at 75% 75%, #C9E2FF, transparent 50%)`,
            backgroundSize: "200% 200%",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            animation: "gradient 10s ease infinite",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        ></div>

        <div
          className="absolute blur-[226.57656860351562px] inset-0 ml-auto -z-10 w-[50vw] h-full"
          style={{
            background: `radial-gradient(circle at 25% 25%, #CCEDFF, transparent 50%),
    radial-gradient(circle at 75% 25%, #D6CCFF, transparent 50%),
    radial-gradient(circle at 25% 75%, #FFE8F2, transparent 50%),
    radial-gradient(circle at 75% 75%, #C9E2FF, transparent 50%)`,
            backgroundSize: "200% 200%",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            animation: "gradient 10s ease infinite",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        ></div>
      </div> */}
      <Image
        src={"/assets/product/Hero/image-1.svg"}
        alt="Hand Hero"
        className="w-full h-[1100px] pl-[300px] object-fill"
        width={1075}
        height={1179}
      />
      <div className="absolute left-0 bottom-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.00)_6.07%,_#FFF_93.93%)] w-full h-[18.75rem]"></div>
    </div>
  );
};

export default HandHeroSection;
