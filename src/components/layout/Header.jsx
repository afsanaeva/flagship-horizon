"use client";
import Nav from "./Nav";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../icons/Logo";
// import Image from "next/image";

export const fadeTop = {
  offscreen: {
    opacity: 0,
    y: -50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "just",
      duration: 0.5,
    },
  },
};

const Header = () => {
  return (
    <motion.header
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
      className="w-full py-5 2xl:pb-6 3xl:pb-8"
    >
      <div className="container-lg flex items-center justify-between">
        <Link href="/">
          <Logo className="h-auto w-[130px] md:w-[120px] 2xl:w-[136px] 3xl:w-[181px]"/>
          {/* <Image
            src={"/assets/logo.png"}
            alt="Blitz.js"
            width={181.5}
            height={52}
            className="w-[130px] md:w-[120px] 2xl:w-[136px] 3xl:w-[181px]"
          /> */}
        </Link>

        <Nav />
      </div>
    </motion.header>
  );
};
export default Header;
