'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Img from '../../../../public/assets/home/hero/build.png';
// import ImgMobile from "../../../../public/assetsassets/home/hero/build.png";

const BuildDirect = () => {
  return (
    <div className="space-y-20px mx-10 hidden md:block containerComponent">
      <div className="relative">
        <div className="">
          <Image src={Img} alt="create experiences" className="max-sm:hidden" />
          <Image
            src={Img}
            alt="create experiences"
            className="hidden max-sm:block"
          />
          <div className="absolute xl:bottom-20 md:bottom-10 left-24 flex gap-4">
            <Button size="lg" asChild>
              <Link href="/faq">Learn More</Link>
            </Button>
            <Button size="lg" variant="blueOutline" asChild>
              <Link href="/get-demo">Get a demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildDirect;
