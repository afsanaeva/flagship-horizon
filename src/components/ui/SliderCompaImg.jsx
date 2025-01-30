'use client';

import { ChevronsLeftRight } from 'lucide-react';

const SliderCompaImg = ({ sliderPosition, setSliderPosition }) => {
  const min = 25;
  const max = 80;

  const handleMouseDown = (e) => {
    const sliderContainer = e.currentTarget.parentElement;
    const sliderWidth = sliderContainer.offsetWidth;
    const startX = e.clientX;

    // Calculate the initial position of the slider thumb within the constrained range
    const startLeft = ((sliderPosition - 25) / (80 - 25)) * sliderWidth;

    const handleMouseMove = (e) => {
      const newLeft = startLeft + (e.clientX - startX);
      // const newPosition = (newLeft / sliderWidth) * (57 - 44) + 44; // Map back to 44%-57% range
      const newPosition = (newLeft / sliderWidth) * (80 - 25) + 25;

      // Constrain the position between 44% and 57%
      // const constrainedPosition = Math.min(Math.max(newPosition, 44), 57);
      const constrainedPosition = Math.min(Math.max(newPosition, 25), 80);
      setSliderPosition(constrainedPosition);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const sliderPercentage = ((sliderPosition - min) / (max - min)) * 100;

  return (
    <div className="slider-container container w-[262px] items-center rounded-[200px] bg-[#F1F4F7] py-[28px] px-[27px] md:mt-[50px] mt-10">
      <div className="slider-container relative flex md:h-[6px] h-1 w-[208px] items-center rounded-full bg-[#B8C1CB] mx-auto">
        {/* Active Track */}
        <div
          className="absolute left-0 top-0 md:h-[6px] h-1 rounded-full bg-[#0032FD]"
          style={{ width: `${sliderPercentage}%` }}
        ></div>

        {/* Slider Button */}
        <div
          className="absolute flex md:size-10 size-9 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-[#0032FD] shadow-md"
          style={{ left: `${sliderPercentage}%` }}
          onMouseDown={handleMouseDown}
        >
          <ChevronsLeftRight className="text-white md:size-[33px] size-8" />
        </div>
      </div>
    </div>
  );
};

export default SliderCompaImg;
