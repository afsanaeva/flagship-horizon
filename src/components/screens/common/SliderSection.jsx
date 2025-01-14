import React from "react";
import CarouselCard from "../product/CarouselCard";

const SliderSection = ({ title, intro, dataVideo, dataCard }) => {
  return (
    <div className="container-lg">
      <div
        className={` mb-[100px] ${dataVideo ? "text-left" : "text-center"} `}
      >
        <h1
          className="font-100px font-bold leading-snug !text-text-main"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <p className="font-28px">{intro}</p>
      </div>
      <CarouselCard dataVideo={dataVideo} dataCard={dataCard} />
    </div>
  );
};

export default SliderSection;
