import React from 'react';
import AngleCarousel from './AngleCarousel';

const HorizonConsole = () => {
  const title = 'Horizon Console: Your all-in-one </br> Shorts control center.';
  const intro =
    'Effortlessly create, manage, and optimize your Shorts in one place.';
  return (
    <section className="size-full lg:px-[120px] overflow-x-clip">
      <div className="flex flex-col gap-12 text-center px-6 lg:px-0">
        <h1
          className="font-100px font-bold leading-snug text-colorText-main"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <p className="font-28px">{intro}</p>
      </div>
      <AngleCarousel />
    </section>
  );
};

export default HorizonConsole;
