"use client";

import Image from "next/image";
import hand from "../../../../public/assets/home/dazzle/mobHand.png";
import handMobile from "../../../../public/assets/home/dazzle/mobScreen1.png";
import handMobile2 from "../../../../public/assets/home/dazzle/mobScreen2.png";
import handMobile3 from "../../../../public/assets/home/dazzle/mobScreen3.png";
import handMobile4 from "../../../../public/assets/home/dazzle/mobScreen4.png";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { motion, useScroll, useTransform } from "framer-motion";

const Dazzle = () => {
  const { scrollYProgress } = useScroll();

  // Scroll ranges for showing each image sequentially with faster fade-out
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.35], [1, 1, 1]); // Fade-out starts earlier and completes faster
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.4, 0.42], [0, 1, 1]); // Adjusted for faster fade-out
  const opacity3 = useTransform(scrollYProgress, [0.42, 0.45, 0.48], [0, 1, 0]); // Faster fade-out transition
  const opacity4 = useTransform(scrollYProgress, [0.48, 0.52, 0.58], [0, 1, 1]); // Holds after fade-in

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
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        heading="h4"
        headingClassName="font-28px font-normal"
      />
      {/* Sticky container */}
      <div className="my-12 h-[500vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <div>
            <motion.div style={{ opacity: opacity1 }}>
              <h3 className="font-32px flex cursor-pointer items-center justify-between py-3 font-normal text-[#15234E]">
                Instantly engaging <br /> entry points
              </h3>

              <p className="font-22px max-w-[300px] py-3 text-[#15234E]">
                Integrate attention-grabbing entry points across your platform
                to engage users instantly.
              </p>
            </motion.div>
            <motion.div style={{ opacity: opacity3 }}>
              <h3 className="font-32px flex cursor-pointer items-center justify-between py-3 font-normal text-[#15234E]">
                Personalized <br /> shoppable videos
              </h3>

              <p className="font-22px max-w-[300px] py-3 text-[#15234E]">
                Turn views into actions with tailored content that elevates the
                shopping experience.
              </p>
            </motion.div>
          </div>
          <div className="relative ">
            {/* Base Hand Image */}
            <Image
              src={hand}
              alt="Hand"
              className="h-auto w-[600px] max-sm:w-[100px]"
            />
            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-white to-transparent " />
            {/* Overlapping Mobile Image */}
            <motion.div
              className="absolute left-0 top-0 pl-20 pt-3"
              style={{ opacity: opacity1 }}
            >
              <Image
                src={handMobile}
                alt="Hand Mobile 1"
                className="h-[70%] w-[235px] max-sm:w-[100px]"
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              className="absolute left-0 top-0 pl-20 pt-3"
              style={{ opacity: opacity2, transform: "translate" }}
            >
              <Image
                src={handMobile2}
                alt="Hand Mobile 2"
                className="h-[70%] w-[235px] max-sm:w-[100px]"
              />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              className="absolute left-0 top-0 pl-20 pt-3"
              style={{ opacity: opacity3 }}
            >
              <Image
                src={handMobile3}
                alt="Hand Mobile 3"
                className="h-[70%] w-[235px] max-sm:w-[100px]"
              />
            </motion.div>

            {/* Image 4 */}
            <motion.div
              className="absolute left-0 top-0 pl-20 pt-3"
              style={{ opacity: opacity4 }}
            >
              <Image
                src={handMobile4}
                alt="Hand Mobile 4"
                className="h-[70%] w-[235px] max-sm:w-[100px]"
              />
            </motion.div>
          </div>

          <div>
            <motion.div style={{ opacity: opacity2 }}>
              <h3 className="font-32px flex cursor-pointer items-center justify-between py-3 font-normal text-[#15234E]">
                World-class <br /> streaming experience
              </h3>

              <p className="font-22px max-w-[300px] py-3 text-[#15234E]">
                Keep users hooked with seamless playback, infinite scrolling,
                and AI-driven personalization.
              </p>
            </motion.div>
            <motion.div style={{ opacity: opacity4 }}>
              <h3 className="font-32px flex cursor-pointer items-center justify-between py-3 font-normal text-[#15234E]">
                Seamless <br /> social interactions
              </h3>

              <p className="font-22px max-w-[300px] py-3 text-[#15234E]">
                Let users connect with your brand through reactions, comments,
                shares and polls.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dazzle;
