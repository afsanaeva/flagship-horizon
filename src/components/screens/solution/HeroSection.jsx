import React from "react";
import HeroTitle from "../common/HeroTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const title =
    "Next gen customer engagement </br> platform for experience led growth.";
  const intro =
    "Empower your business with immersive super engagement experiences </br> that drive explosive engagement, retention, and growth.";

  return (
    <div
      className="relative w-full flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(/assets/solution/imageHero.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 w-full h-screen bg-[#0000005C]"></div>
      <div className="relative z-10 px-120px flex flex-col items-center gap-7">
        <h1
          className="font-100px font-bold leading-snug text-white"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        ></h1>
        <p
          className="text-white font-28px basis-[20%] text-center"
          dangerouslySetInnerHTML={{ __html: intro }}
        ></p>
        <div className="flex flex-wrap justify-center gap-4 ">
          <Button size="lg" asChild>
            <Link href="/get-demo">Explore Horizon</Link>
          </Button>
          <Button size="lg" variant="blueOutline" asChild>
            <Link href="/get-demo">Get a demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
