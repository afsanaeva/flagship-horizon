"use client";
import React from "react";
import AccordionSection from "./AccordionSection";

const slides = [
  {
    title: "What is Horizon?",
    content:
      "Horizon is the first super engagement platform empowering enterprises to deliver customer engagement at the scale of big tech.",
  },
  {
    title: "Who is Horizon for?",
    content:
      "Horizon is built for enterprises across industries seeking to deepen user engagement, improve retention, and unlock new revenue opportunities.",
  },
  {
    title: "How does Horizon drive engagement?",
    content:
      "Horizon leverages the most effective engagement formats - Shorts, Stories, and Feeds - enhanced by intelligent content recommendations and seamless social interactions to keep your audience engaged and active.",
  },
  {
    title: "What makes Horizon different from other engagement platforms?",
    content:
      "Horizon stands out for its no-code console and its ability to deliver big-tech-level experiences. Our mission is to enable enterprises to achieve engagement-driven, sustained growth.",
  },
  {
    title: "How does the integration work?",
    content:
      "Horizon offers an SDK that integrates effortlessly into your mobile or web applications, enabling you to embed interactive, immersive Shorts that captivate and engage users.",
  },
];

const FAQDetails = () => {
  return (
    <div className="container-lg">
      <h2 className="text-text-main font-52px font-normal">
        Frequently Asked Questions
      </h2>
      <AccordionSection AccordionData={slides} style="w-full" />
    </div>
  );
};

export default FAQDetails;
