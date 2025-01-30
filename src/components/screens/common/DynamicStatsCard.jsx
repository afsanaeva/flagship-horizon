import React from 'react';
import AccordionSection from './AccordionSection';
import Image from 'next/image';

const DynamicStatsCard = ({ DynamicData, index }) => {
  return (
    <>
      <div
        className={`${
          index > 0 ? 'pt-[220px]' : ''
        } flex items-start justify-between pb-[54px] pt-[32px] px-[120px]`}
      >
        <AccordionSection
          AccordionData={DynamicData.AccordionData}
          style="max-w-[71%]"
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
    </>
  );
};

export default DynamicStatsCard;
