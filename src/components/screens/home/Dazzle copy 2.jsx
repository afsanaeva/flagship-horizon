"use client";

import Image from "next/image";
import Img from "../../../../public/assets/home/dazzle/img.png";
import ImgMobile from "../../../../public/assets/home/dazzle/img-mobile.png";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import MagicAi from "@/components/icons/MagicAi";

const Dazzle = () => {
  return (
    <div className="container-lg space-y-40px">
      <InfoCard2
        title="dazzle your audience with<br class='max-[1070px]:hidden'/> intelligent video experience"
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

      <div className="zoom-in-1-035">
        <Image src={Img} alt="create experiences" className="max-sm:hidden" />
        <Image
          src={ImgMobile}
          alt="create experiences"
          className="hidden max-sm:block"
        />
      </div>
    </div>
  );
};

const InfoCard2 = ({
  title,
  description,
  heading = "h2",
  className,
  headingClassName,
  descriptionClassName,
  viewport,
  whileInView,
  initial,
}) => {
  const Heading = heading || "h2";

  return (
    <motion.div
      viewport={viewport}
      whileInView={whileInView}
      initial={initial}
      className={cn("space-y-40px", className)}
    >
      <div className="space-y-40px">
        <div>
          <Heading
            className={cn(
              "font-120px w-fit mx-auto font-semibold text-center",
              headingClassName
            )}
          >
            <MagicAi className="mr-4 inline-block size-9 md:mr-6 md:size-14 2xl:size-16" />
            <span>dazzle</span> your audience with
            <br class="max-[1070px]:hidden" /> intelligent video{" "}
            <span>experience</span>
            <MagicAi className="ml-4 inline-block size-9 md:ml-6 md:size-14 2xl:size-16" />
          </Heading>
        </div>
        {description && (
          <p
            className={cn(
              "font-28px font-normal text-center",
              descriptionClassName
            )}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Dazzle;
