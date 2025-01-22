import React from "react";
import HeroTitle from "../common/HeroTitle";
import Image from "next/image";
import VertsatileContent from "./VertsatileContent";

const VersatileSection = () => {
  return (
    <div className="size-full bg-[#F1F4F7]">
      <HeroTitle
        MainTitle="Versatile Entry Points."
        SecTitle="Social media inspired layouts that your audience can’t resist clicking."
        styleContainer="pt-[6.25rem] text-[#15234E]"
      />
      <div className="container-xl mt-[6.25rem] flex size-full items-center justify-between gap-[8.75rem]">
        <div className="relative size-full flex-1">
          <Image
            src={"/assets/product/Infinity/bg.svg"}
            alt={"Versatile Entry Points"}
            width={458}
            height={832}
            className="absolute top-[-200px] z-10 size-full overflow-visible object-cover"
          />
          <Image
            src={"/assets/product/Infinity/bg.svg"}
            alt={"Versatile Entry Points"}
            width={458}
            height={832}
            className="absolute left-[-250px] z-10 size-full overflow-visible object-cover"
          />

          <Image
            src={"/assets/product/Versatil/instaPage.svg"}
            alt={"Versatile Entry Points"}
            width={458}
            height={832}
            className="relative z-10 size-full object-contain"
          />
        </div>

        <VertsatileContent />
      </div>
    </div>
  );
};

export default VersatileSection;
