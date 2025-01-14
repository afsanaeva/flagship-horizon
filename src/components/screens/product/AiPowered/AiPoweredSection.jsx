import React from "react";
import AccordionSection from "../../common/AccordionSection";
import CuratedForU from "./CuratedForU";

const AiPoweredSection = () => {
  const AccordionData = [
    {
      title: "Super Personalization",
      content:
        "No two users are the same, and neither are the Shorts they see. Our AI-powered recommendations ensure every experience is uniquely personalized.",
    },
    {
      title: "Intelligent Ad Targeting",
      content:
        "Deliver ads that resonate with your audience using advanced targeting based on user behavior and preferences.",
    },
    {
      title: "Sentiment Analysis",
      content:
        "Analyze user sentiment to refine recommendations and targeting, ensuring a positive and engaging experience.",
    },
  ];

  return (
    <div className="bg-[#F1F4F7]">
      <div className="py-[100px] px-[120px] space-y-100px">
        <div className="flex flex-col gap-12">
          <h1
            className="font-100px font-bold leading-snug text-text-main"
            dangerouslySetInnerHTML={{
              __html: "AI powered Super Personalization.",
            }}
          ></h1>
          <p className="font-28px font-normal text-text-main">
            Deliver tailored experiences that resonate with every user, every
            time.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <AccordionSection AccordionData={AccordionData} style="max-w-[80%]" />
          <CuratedForU />
        </div>
      </div>
    </div>
  );
};

export default AiPoweredSection;
