'use client';
import React from 'react';
import AccordionSection from './AccordionSection';

const FAQDetails = ({ FAQDetailsData }) => {
  return (
    <div className="containerComponent">
      <h2 className="font-52px font-normal text-colorText-main md:mb-[32px] mb-6">
        Frequently Asked Questions
      </h2>
      <AccordionSection
        AccordionData={FAQDetailsData}
        style="w-full"
        section="faq"
      />
    </div>
  );
};

export default FAQDetails;
