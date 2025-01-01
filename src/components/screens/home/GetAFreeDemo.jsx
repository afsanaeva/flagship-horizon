"use client";

import { motion } from "framer-motion";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { Button } from "@/components/ui/button";
import Arrow from "@/components/icons/Arrow";
import Link from "next/link";

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 1 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0, staggerDirection: -1 },
  },
};
const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const GetAFreeDemo = () => {
  return (
    <div className="container-sm space-y-100px text-center">
      <InfoCard2
        title="shorts is only the beginning -<br class='max-md:hidden'/> new products coming soon"
        // description="Create screens directly in Laurent or add your images from Sketch or Figma. You can even sync designs from your cloud storage!"
        descriptionClassName="lg:max-w-[790px] !leading-[140%] 2xl:max-w-[870px] 3xl:max-w-[1110px] mx-auto opacity-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "just",
            duration: 1,
          },
        }}
        viewport={{ once: true, amount: 0.3 }}
      />

      <Button
        size="2xl"
        className="w-full max-w-[400px] space-x-2 sm:max-w-[340px] xl:max-w-[384px] 3xl:max-w-[512px]"
        asChild
      >
        <Link href="/get-demo">
          <span>Get a demo</span>{" "}
          <Arrow className="size-4 md:size-5 3xl:size-6" />
        </Link>
      </Button>
    </div>
  );
};

export default GetAFreeDemo;
