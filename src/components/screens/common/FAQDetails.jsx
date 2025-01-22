"use client";
import React from "react";
import AccordionSection from "./AccordionSection";

const FAQDetails = ({ FAQDetailsData }) => {
  return (
    <div className="container-xl">
      <h2 className="font-52px font-normal text-colorText-main">
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
