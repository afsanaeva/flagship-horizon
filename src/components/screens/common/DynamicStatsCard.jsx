import React from "react";
import AccordionSection from "./AccordionSection";
import Image from "next/image";

const DynamicStatsCard = ({ DynamicData, index }) => {
  return (
    <div className={`container-xs ${index > 0 ? "pt-[120px]" : ""} `}>
      <div className="flex items-start justify-between pb-[54px] pt-[32px]">
        <AccordionSection
          AccordionData={DynamicData.AccordionData}
          style="max-w-[60%]"
          title={DynamicData.title}
        />
        <div className="flex-1">
          <Image
            src={DynamicData.image}
            width={150}
            height={266}
            alt="engagementPulse"
            className="size-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicStatsCard;
