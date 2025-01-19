import React from "react";
import HeroTitle from "../common/HeroTitle";
import Image from "next/image";
import VertsatileContent from "./VertsatileContent";

const VersatileSection = () => {
  return (
    <div className="w-full h-full bg-[#F1F4F7]">
      <HeroTitle
        MainTitle="Versatile Entry Points."
        SecTitle="Social media inspired layouts that your audience can’t resist clicking."
        styleContainer="pt-[6.25rem] text-[#15234E]"
      />
      <div className="flex items-center justify-between w-full h-full mt-[6.25rem] gap-[8.75rem] container-xl">
        <div className="relative size-full flex-1">
          <Image
            src={`/assets/product/Infinity/bg.svg`}
            alt={`Versatile Entry Points`}
            width={458}
            height={832}
            className="absolute z-10 size-full top-[-200px] object-cover overflow-visible"
          />
          <Image
            src={`/assets/product/Infinity/bg.svg`}
            alt={`Versatile Entry Points`}
            width={458}
            height={832}
            className="absolute z-10 size-full left-[-250px] object-cover overflow-visible"
          />

          <Image
            src={`/assets/product/Versatil/instaPage.svg`}
            alt={`Versatile Entry Points`}
            width={458}
            height={832}
            className="h-full w-full object-contain relative z-10"
          />
        </div>

        <VertsatileContent />
      </div>
    </div>
  );
};

export default VersatileSection;
