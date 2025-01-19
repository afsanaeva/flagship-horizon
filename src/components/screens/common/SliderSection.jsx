import React from "react";
import CarouselCard from "../product/CarouselCard";
import HeroTitle from "./HeroTitle";

const SliderSection = ({
  title,
  intro,
  dataVideo,
  dataCardImage,
  dataCard,
  styleHeroTitle,
}) => {
  return (
    <div className="">
      <HeroTitle
        MainTitle={title}
        SecTitle={intro}
        styleContainer={`mb-[100px] ${styleHeroTitle}`}
      />
      <CarouselCard
        dataVideo={dataVideo}
        dataCard={dataCard}
        dataCardImage={dataCardImage}
      />
    </div>
  );
};

export default SliderSection;
