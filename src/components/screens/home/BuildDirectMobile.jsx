'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Img from '../../../../public/assets/home/hero/build.png';
import ImgMobile from '../../../../public/assets/home/hero/buildMobile.svg';
// import ImgMobile from "../../../../public/assetsassets/home/hero/build.png";

const BuildDirectMobile = () => {
  return (
    <div className="space-y-20px md:mx-10 mx-6 block md:hidden">
      <div
        className="md:container-md relative md:h-full h-[652px] rounded-3xl md:rounded-none"
        style={{
          backgroundImage: 'url(/assets/home/hero/buildMobile.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="">
          {/* <Image
            src={ImgMobile}
            alt="create experiences"
            className="max-sm:hidden object-cover rounded-3xl md:h-full"
          /> */}
          <Image
            src={Img}
            alt="create experiences"
            className="hidden md:block"
          />
          <div className="absolute px-4 top-4 flex flex-col gap-16 size-full items-center justify-center">
            <p
              className="text-[40px] leading-[100%] text-white tracking-[-1.2px]"
              dangerouslySetInnerHTML={{
                __html: `Build direct customer relationship while </br> owning 100% of user </br> data`,
              }}
            ></p>
            <div className="flex flex-col w-full gap-6">
              <p className="font-22px text-white">
                You no longer need to rely solely on big tech for growth -
                Horizon lets you bring the same technology to your digital
                assets and retain full ownership of your user data.
              </p>
              <div className="flex flex-col gap-3">
                <Button size="default" asChild>
                  <Link href="/faq">Learn More</Link>
                </Button>
                <Button size="default" variant="blueOutline" asChild>
                  <Link href="/get-demo">Get a demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildDirectMobile;
