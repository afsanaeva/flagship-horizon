"use client";

import React, { useState } from "react";
import { fadeTop } from "@/components/layout/Header";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import Minus from "@/components/icons/Minus";
import Plus from "@/components/icons/Plus";

const slides = [
  {
    text: "What is Horizon?",
    subtext:
      "Horizon is the first super engagement platform empowering enterprises to deliver customer engagement at the scale of big tech.",
  },
  {
    text: "Who is Horizon for?",
    subtext:
      "Horizon is built for enterprises across industries seeking to deepen user engagement, improve retention, and unlock new revenue opportunities.",
  },
  {
    text: "How does Horizon drive engagement?",
    subtext:
      "Horizon leverages the most effective engagement formats - Shorts, Stories, and Feeds - enhanced by intelligent content recommendations and seamless social interactions to keep your audience engaged and active.",
  },
  {
    text: "What makes Horizon different from other engagement platforms?",
    subtext:
      "Horizon stands out for its no-code console and its ability to deliver big-tech-level experiences. Our mission is to enable enterprises to achieve engagement-driven, sustained growth.",
  },
  {
    text: "How does the integration work?",
    subtext:
      "Horizon offers an SDK that integrates effortlessly into your mobile or web applications, enabling you to embed interactive, immersive Shorts that captivate and engage users.",
  },
];

const FAQDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container-lg space-y-20px text-center">
      <InfoCard2
        title="Frequently Asked Questions"
        initial={{ opacity: 0, y: 50 }}
        whileInView={fadeTop.onscreen}
        viewport={{ once: true }}
        heading="h4"
        headingClassName="font-52px font-semibold text-left pb-20 text-[#15234E]"
      />
      {slides.map((slide, index) => (
        <div
          key={index}
          className="space-y-4  text-center md:text-left"
        >
          <h3
            className="font-32px flex cursor-pointer items-center justify-between gap-20 py-3 font-normal text-[#15234E]"
            onClick={() => toggleAccordion(index)}
          >
            {slide.text}
            {activeIndex === index ? <Minus /> : <Plus />}
          </h3>
          {activeIndex === index && (
            <p className="font-24px  py-3 text-[#15234E]">{slide.subtext}</p>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FAQDetails;
