import React, { useState } from 'react';
import Minus from '@/components/icons/Minus';
import Plus from '@/components/icons/Plus';
import Image from 'next/image';

const MeetHorizonMobile = ({ slides }) => {
  return (
    <div className="flex flex-col gap-6 md:hidden">
      {slides.map((slide, index) => (
        <Slides3
          key={index}
          title={slide.title}
          text1={slide.text1}
          subText1={slide.subText1}
          text2={slide.text2}
          subText2={slide.subText2}
          text3={slide.text3}
          subText3={slide.subText3}
          image={slide.img}
          index={index}
        />
      ))}
    </div>
  );
};

const Slides3 = ({
  title,
  image,
  text1,
  subText1,
  text2,
  subText2,
  text3,
  subText3,
  index,
}) => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to the first section

  const toggleAccordion = (index) => {
    // Keep at least one section open
    setActiveIndex(activeIndex === index ? activeIndex : index);
  };

  return (
    <div className="flex flex-col gap-[4.3125rem] mx-4 bg-[#F7FBFE] py-11 px-6 rounded-3xl">
      <h3 className="font-52px cursor-pointer font-semibold text-[#15234E] text-center">
        {title}
      </h3>
      <div className="flex flex-col gap-[5.75rem]">
        {/* Right Content (Image with Blurred Background) */}
        <div className="relative flex items-center justify-center flex-1">
          {/* Blurred Background */}
          <div
            className="absolute inset-0 blur-xl"
            style={{
              background: `
              radial-gradient(circle at 25% 25%, #CCEDFF, transparent 50%),
              radial-gradient(circle at 75% 25%, #D6CCFF, transparent 50%),
              radial-gradient(circle at 25% 75%, #FFE8F2, transparent 50%),
              radial-gradient(circle at 75% 75%, #C9E2FF, transparent 50%)
            `,
              zIndex: -1, // Keeps it behind the image
            }}
          ></div>

          {/* Image */}
          <Image
            src={image}
            alt={title}
            width={558}
            height={532}
            className="rounded-[40px]" // Keep the image rounded
          />
        </div>

        {/* Left Content (Accordion Section) */}
        <div className="space-y-4 text-left flex-1">
          {/* First Section */}
          <h3
            className="font-32px flex cursor-pointer items-center justify-between py-3 font-normal text-[#15234E]"
            onClick={() => toggleAccordion(1)}
          >
            {text1}
            {activeIndex === 1 ? <Minus /> : <Plus />}
          </h3>
          {activeIndex === 1 && (
            <p className="font-22px max-w-[500px] py-3 text-[#15234E]">
              {subText1}
            </p>
          )}
          <hr />

          {/* Second Section */}
          <h3
            className="font-32px flex cursor-pointer items-center justify-between py-3 font-normal text-[#15234E]"
            onClick={() => toggleAccordion(2)}
          >
            {text2}
            {activeIndex === 2 ? <Minus /> : <Plus />}
          </h3>
          {activeIndex === 2 && (
            <p className="font-22px max-w-[500px] py-3 text-[#15234E]">
              {subText2}
            </p>
          )}
          <hr />

          {/* Third Section */}
          <h3
            className="font-32px flex cursor-pointer items-center justify-between py-3 font-normal text-[#15234E]"
            onClick={() => toggleAccordion(3)}
          >
            {text3}
            {activeIndex === 3 ? <Minus /> : <Plus />}
          </h3>
          {activeIndex === 3 && (
            <p className="font-22px max-w-[500px] py-3 text-[#15234E]">
              {subText3}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetHorizonMobile;
