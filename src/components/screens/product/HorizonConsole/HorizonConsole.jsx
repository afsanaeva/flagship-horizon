import React from "react";
import AngleCarousel from "./AngleCarousel";

const HorizonConsole = () => {
  const title = "Horizon Console: Your all-in-one </br> Shorts control center.";
  const intro =
    "Effortlessly create, manage, and optimize your Shorts in one place.";
  return (
    <section className="px-[120px] w-full h-full">
      <div className="text-center flex flex-col gap-12">
        <h1
          className="font-100px font-bold leading-snug text-text-main"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <p className="font-28px">{intro}</p>
      </div>
      <AngleCarousel />
    </section>
  );
};

export default HorizonConsole;
