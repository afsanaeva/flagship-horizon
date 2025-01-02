"use client";

import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { fadeTop } from "@/components/layout/Header";

const HorizonLive = () => {
  return (
    <div className="container-md space-y-100px ">
      <InfoCard2
        title="See Horizon’s magic live, experience <br class='max-md:hidden'/> what it can do for your business."
        descriptionClassName="lg:max-w-[790px] !leading-[140%] 2xl:max-w-[870px] 3xl:max-w-[1110px] mx-auto opacity-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "just",
            duration: 1,
          },
        }}
        viewport={{ once: true, amount: 0.3 }}
        headingClassName="font-100px font-semibold text-[#15234E] text-left"
      />
      <InfoCard2
        title="We’re already delivering super engagement on some of the world’s leading platforms. <br/> Explore live engagement stats from digital platforms powered by Horizon today."
        initial={{ opacity: 0, y: 50 }}
        whileInView={fadeTop.onscreen}
        viewport={{ once: true }}
        heading="h4"
        headingClassName="font-28px font-normal text-left"
      />
      <div className="space-y-40px text-left">
        <h1 className="font-300px font-semibold leading-snug">
          <span
            style={{
              background:
                "linear-gradient(90deg, #15234E 16.26%, #001D7B -21.97%, #0032FD 22.49%, #10F0FC )",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
           42,000,003
          </span>
        </h1>
        <p className="font-40px text-[#15234E]">number of users watched Shorts in 7 days</p>
      </div>
    </div>
  );
};

export default HorizonLive;
