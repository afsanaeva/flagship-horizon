"use client";

import Image from "next/image";
import handMobile from "../../../../public/assets/home/dazzle/handMobile.png";
import handMobile2 from "../../../../public/assets/home/dazzle/handMobile2.png";
import handMobile3 from "../../../../public/assets/home/dazzle/handMobile3.png";
import handMobile4 from "../../../../public/assets/home/dazzle/handMobile4.png";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { fadeTop } from "@/components/layout/Header";
import { motion, useScroll, useTransform } from "framer-motion";

const Dazzle = () => {
  const { scrollYProgress } = useScroll();

  // Define scroll ranges for each image
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);

  return (
    <div className="space-y-40px">
      <InfoCard2
        title="Introducing Horizon Shorts <br '/> Our First Super Engagement Product."
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
        headingClassName="font-92px font-semibold"
      />
      <InfoCard2
        title="Short-form video redefined customer engagement. Now, the superpower is at your fingertips."
        initial={{ opacity: 0, y: 50 }}
        whileInView={fadeTop.onscreen}
        viewport={{ once: true }}
        heading="h4"
        headingClassName="font-28px font-normal"
      />
      {/* Sticky container for images */}
      <div className="sticky top-0 flex h-screen items-center justify-center">
        {/* Image 1 */}
        <motion.div className="absolute" style={{ opacity: opacity1 }}>
          <Image
            src={handMobile}
            alt="Hand Mobile 1"
            className="h-auto w-[400px] max-sm:w-[300px]"
          />
        </motion.div>

        {/* Image 2 */}
        <motion.div className="absolute" style={{ opacity: opacity2 }}>
          <Image
            src={handMobile2}
            alt="Hand Mobile 2"
            className="h-auto w-[400px] max-sm:w-[300px]"
          />
        </motion.div>

        {/* Image 3 */}
        <motion.div className="absolute" style={{ opacity: opacity3 }}>
          <Image
            src={handMobile3}
            alt="Hand Mobile 3"
            className="h-auto w-[400px] max-sm:w-[300px]"
          />
        </motion.div>

        {/* Image 4 */}
        <motion.div className="absolute" style={{ opacity: opacity4 }}>
          <Image
            src={handMobile4}
            alt="Hand Mobile 4"
            className="h-auto w-[400px] max-sm:w-[300px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Dazzle;