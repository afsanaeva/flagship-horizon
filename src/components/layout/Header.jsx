'use client';
import Nav from './Nav';
import { motion } from 'framer-motion';

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
      type: 'just',
      duration: 0.5,
    },
  },
};

const Header = () => {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: '-30px',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: 'just',
          duration: 0.5,
        },
      }}
      variants={fadeTop}
      viewport={{ once: true }}
      className="sticky top-0 z-50 w-full bg-white py-4"
    >
      <div className="container-xs">
        <Nav />
      </div>
    </motion.header>
  );
};
export default Header;
