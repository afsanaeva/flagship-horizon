import React from 'react';
// import HeroTitle from "../common/HeroTitle";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const HeroSectionMobile = () => {
  const title =
    'Next gen customer engagement platform for experience led growth.';
  const intro =
    'Empower your business with immersive super engagement experiences that drive explosive engagement, retention, and growth.';

  return (
    <div
      className="relative md:hidden flex h-screen w-full items-center justify-center !mt-0 "
      style={{
        backgroundImage: 'url(/assets/solution/HeroMobile1.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 h-full w-full bg-[#0000005C]"></div>
      <div className="px-120px relative z-10 flex flex-col items-center gap-6">
        <h1
          className="font-92px font-bold leading-snug text-white text-center"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        ></h1>
        <p
          className="font-28px basis-1/5 text-center text-white"
          dangerouslySetInnerHTML={{ __html: intro }}
        ></p>
        <div className="flex flex-wrap justify-center gap-4 ">
          <Button size="lg" asChild className="!w-[200px] !h-[58px]">
            <Link href="/get-demo">Explore Horizon</Link>
          </Button>
          <Button
            size="lg"
            variant="blueOutline"
            asChild
            className="!w-[200px] !h-[58px]"
          >
            <Link href="/get-demo">Get a demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionMobile;
