"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Img from "../../../../public/assets/home/hero/build.png";
// import ImgMobile from "../../../../public/assetsassets/home/hero/build.png";

const BuildDirect = () => {
  return (
    <div className="space-y-20px mx-10">
      <div className="container-md relative">
        <div className="zoom-in-1-035  ">
          <Image src={Img} alt="create experiences" className="max-sm:hidden" />
          <Image
            src={Img}
            alt="create experiences"
            className="hidden max-sm:block"
          />
          <div className="absolute bottom-20 left-24 flex gap-4">
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
