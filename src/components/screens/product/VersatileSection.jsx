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
        styleHeroTitle="pt-[6.25rem]"
      />
      <div className="flex items-center justify-between w-full h-full mt-[6.25rem] gap-[8.75rem] container-lg">
        <div className="relative w-full h-full flex-1">
          <Image
            src={`/assets/product/instaPage.png`}
            alt={`Versatile Entry Points`}
            width={458}
            height={832}
            className="h-full w-full object-contain"
          />
        </div>

        <VertsatileContent />
      </div>
    </div>
  );
};

export default VersatileSection;
