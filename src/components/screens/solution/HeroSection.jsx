import React from 'react';
// import HeroTitle from "../common/HeroTitle";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const title =
    'Next gen customer engagement </br> platform for experience led growth.';
  const intro =
    'Empower your business with immersive super engagement experiences </br> that drive explosive engagement, retention, and growth.';

  return (
    <div className="relative h-screen w-full items-center justify-center md:flex hidden">
      <Image
        src="/assets/solution/imageHero.svg"
        width={1920}
        height={952}
        className="absolute inset-0 size-full max-xl:object-cover"
      />
      <div className="absolute inset-0 h-full w-full bg-[#0000005C]"></div>
      <div className="px-120px relative z-10 flex flex-col items-center gap-7">
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

export default HeroSection;
