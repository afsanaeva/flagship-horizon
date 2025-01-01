"use client";

import InfoCard from "@/components/custom-ui/InfoCard";
import Image from "next/image";
import { motion } from "framer-motion";

const CreateExperiences = () => {
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
        title="Create experiences that keep <br/>customers coming back."
        headingClassName="max-[800px]:[&_br]:hidden"
      />
      <div className="rounded-40px zoom-in-1-035 overflow-hidden">
        <Image
          src="/assets/home/bottom.webp"
          width={2000}
          height={1333}
          className="rounded-40px  h-[480px] w-full object-cover max-sm:scale-125 md:h-[400px] xl:h-[500px] 2xl:h-[570px] 3xl:h-[760px]"
          alt="create experiences"
        />
      </div>
    </motion.div>
  );
};

export default CreateExperiences;
