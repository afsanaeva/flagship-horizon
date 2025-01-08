"use client";
import { fadeTop } from "@/components/layout/Header";
import { motion } from "framer-motion";
import Link from "next/link";

const HeaderNotification = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: "-30px",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "just",
          duration: 0.5,
        },
      }}
      variants={fadeTop}
      viewport={{ once: true }}
      className="sticky top-0 z-50 grid h-10 w-full items-center justify-center text-center text-[#FFFFFF] max-lg:hidden 2xl:h-[46px] 3xl:h-16"
      style={{
        background: "linear-gradient(90deg, #001D7B 0%, #0032FD 50%, #10F0FC 100%), #CDF3FF",
      }}
    >
      <Link
        href="/get-demo"
        className="flex w-fit items-center justify-center gap-2"
      >
        <p className="font-18px !tracking-tight">
          Transform your apps and websites into super engagement led growth powerhouses.{" "}
          <span className="font-semibold">See Horizon in action.</span>
        </p>
        {/* <Chevron className="h-3 w-auto cursor-pointer 2xl:h-3.5 3xl:h-4" /> */}
      </Link>
    </motion.div>
  );
};

export default HeaderNotification;
