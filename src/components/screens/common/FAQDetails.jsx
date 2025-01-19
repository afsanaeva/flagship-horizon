"use client";
import React from "react";
import AccordionSection from "./AccordionSection";

const FAQDetails = ({ FAQDetailsData }) => {
  return (
    <div className="container-xl">
      <h2 className="text-colorText-main font-52px font-normal">
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
