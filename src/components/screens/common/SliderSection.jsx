import React from 'react';
import CarouselCard from '../product/CarouselCard';
import HeroTitle from './HeroTitle';

const SliderSection = ({
  title,
  intro,
  dataVideo,
  dataCardImage,
  dataCard,
  styleHeroTitle,
  SolutionPage,
}) => {
  return (
    <div
      className={`flex flex-col gap-16 ${
        SolutionPage ? 'lg:gap-12' : 'lg:gap-[100px]'
      }`}
    >
      <HeroTitle
        MainTitle={title}
        SecTitle={intro}
        styleContainer={`${styleHeroTitle}`}
      />
      <CarouselCard
        dataVideo={dataVideo}
        dataCard={dataCard}
        dataCardImage={dataCardImage}
        SolutionPage={SolutionPage}
      />
    </div>
  );
};

export default SliderSection;
