"use client";
import React from "react";
import { fadeTop } from "@/components/layout/Header";
import InfoCard2 from "@/components/custom-ui/InfoCard2";

const HeroTitle = ({ MainTitle, SecTitle, styleContainer }) => {
  return (
    <section className={`space-y-100px mt-12 container-xl `}>
      <div
        className={`space-y-40px flex flex-col items-center ${styleContainer}`}
      >
        <InfoCard2
          title={MainTitle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={fadeTop.onscreen}
          viewport={{ once: true }}
          heading="h1"
          headingClassName={`font-100px`}
        />
        {SecTitle && (
          <InfoCard2
            title={SecTitle}
            initial={{ opacity: 0, y: 50 }}
            whileInView={fadeTop.onscreen}
            viewport={{ once: true }}
            heading="h4"
            headingClassName="font-28px font-normal leading-[130%]"
          />
        )}
      </div>
    </section>
  );
};

export default HeroTitle;
