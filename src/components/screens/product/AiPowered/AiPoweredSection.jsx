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
        "Ads are dynamically personalized based on user activity, behavior, and interests, ensuring they reach the right audience at the perfect moment.",
    },
    {
      title: "Sentiment Analysis",
      content:
        "Each Short is analyzed and classified as positive, negative, or neutral, giving you actionable insights into what truly connects with your audience.",
    },
  ];

  return (
    <div className="bg-[#F1F4F7]">
      <div className="container-xl space-y-100px py-[100px]">
        <div className="flex flex-col gap-12">
          <h1
            className="font-100px font-bold leading-snug text-colorText-main"
            dangerouslySetInnerHTML={{
              __html: "AI powered Super Personalization.",
            }}
          ></h1>
          <p className="font-28px font-normal text-colorText-main">
            Deliver tailored experiences that resonate with every user, every
            time.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <AccordionSection AccordionData={AccordionData} style="max-w-[50%]" />
          <CuratedForU />
        </div>
      </div>
    </div>
  );
};

export default AiPoweredSection;
