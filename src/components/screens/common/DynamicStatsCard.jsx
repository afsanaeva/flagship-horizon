import React from 'react';
import AccordionSection from './AccordionSection';
import Image from 'next/image';

const DynamicStatsCard = ({ DynamicData, index }) => {
  return (
    <>
      <div
        className={`${
          index > 0 ? 'pt-[220px]' : ''
        } flex items-start justify-between lg:flex-row flex-col-reverse lg:gap-0 gap-16 pb-[54px] pt-[32px] lg:px-[120px]`}
      >
        <AccordionSection
          AccordionData={DynamicData.AccordionData}
          style="lg:max-w-[71%] max-w-full"
          title={DynamicData.title}
        />
        <div className="flex-1 lg:self-center">
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
