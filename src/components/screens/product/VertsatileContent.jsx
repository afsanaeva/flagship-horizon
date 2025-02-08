/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const VertsatileContent = () => {
  const dataVert = [
    {
      icon: '/assets/product/icons/vert-icon-1.svg',
      span: 'Choose your style.',
      text: ' Circle, rectangle, or block - choose the entry point layout that fits your brand style.',
    },
    {
      icon: '/assets/product/icons/vert-icon-2.svg',
      span: 'Curate Shorts or let AI takeover.',
      text: 'Choose the Shorts you want your audience to see or let our powerful AI engine curate them for you.',
    },
    {
      icon: '/assets/product/icons/vert-icon-3.svg',
      span: 'Control everything from console.',
      text: 'Every Shorts can be seamlessly managed through the console.',
    },
  ];

  return (
    <div className="flex flex-1 flex-col items-start space-y-16 self-start mb-24 lg:mb-0">
      {dataVert.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.2 }}
          viewport={{ once: false }}
        >
          <div className="flex flex-col items-start gap-3.5">
            <Image src={item.icon} alt={item.span} width={52} height={52} />
            <div className="flex max-w-[570px] flex-col">
              <p className="font-28px font-weight-400 text-[#67788A]">
                <span className="text-colorText-main">{item.span}</span>{' '}
                {item.text}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VertsatileContent;
