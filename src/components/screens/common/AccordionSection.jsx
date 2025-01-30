'use client';

import Minus from '@/components/icons/Minus';
import Plus from '@/components/icons/Plus';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionSection = ({ AccordionData, style, section, title }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const HeaderAccordion =
    section === 'faq' ? AccordionItemLastSection : AccordionItem;
  return (
    <section className=" flex-1">
      {title && (
        <h2
          className="font-48px mb-[44px] font-semibold leading-[100%] text-colorText-main"
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        ></h2>
      )}
      <div className={`${style}`}>
        {AccordionData.map((item, index) => (
          <HeaderAccordion
            key={index}
            isLast={index === AccordionData.length - 1}
            title={item.title}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? 0 : index)}
          >
            {item.content}
          </HeaderAccordion>
        ))}
      </div>
    </section>
  );
};

const AccordionItem = ({ title, children, isOpen, onClick, isLast }) => {
  return (
    <div className={isLast ? '' : 'border-b'}>
      <button
        className="mb-6 flex w-full items-center justify-between pt-10 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-28px font-semibold text-colorText-main">
          {title}
        </span>
        <span className="text-xl">{isOpen ? <Minus /> : <Plus />}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="font-22px pb-8 text-left text-[#505E6B]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AccordionItemLastSection = ({
  title,
  children,
  isOpen,
  onClick,
  isLast,
}) => {
  return (
    <div className={isLast ? '' : 'border-b '}>
      <button
        className="flex w-full items-center justify-between py-10 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-32px font-normal text-colorText-main">
          {title}
        </span>
        <span>{isOpen ? <Minus /> : <Plus />}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="md:text-[1.986rem] text-[26px] pb-4 text-left text-[#505E6B]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionSection;
