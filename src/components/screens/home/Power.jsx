"use client";
import InfoCard from "@/components/custom-ui/InfoCard";
import Image from "next/image";
import { motion } from "framer-motion";

const Power = () => {
  return (
    <motion.div
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
      className="space-y-56px container-lg"
    >
      <InfoCard
        title="Experience the power<br/> of deep engagement."
        description="Flagship iXP helps businesses take advantage of the most popular types of intelligent digital experiences."
        headingClassName="max-[800px]:[&_br]:hidden"
      />

      <Image
        src="/assets/home/top.webp"
        width={2000}
        height={1055}
        className="rounded-40px zoom-in-1-035 h-[480px] w-full object-cover md:h-[400px] xl:h-[500px] 2xl:h-[570px] 3xl:h-[760px]"
        alt="Power"
      />
    </motion.div>
  );
};

export default Power;
