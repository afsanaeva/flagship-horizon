"use client";

// import { motion } from "framer-motion";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const GetAFreeDemo = () => {
  return (
    <div className="container-sm space-y-100px text-center">
      <InfoCard2
        title="Accelerate your growth. <br class='max-md:hidden'/> Experience Horizon for free."
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
        headingClassName="font-100px font-semibold text-[#15234E]"
      />

      <div className="flex flex-wrap justify-center gap-4 ">
        <Button size="lg" asChild>
          <Link href="/get-demo">Explore Horizon</Link>
        </Button>
        <Button size="lg" variant="blueOutline" asChild>
          <Link href="/get-demo">Get a demo</Link>
        </Button>
      </div>
    </div>
  );
};

export default GetAFreeDemo;
