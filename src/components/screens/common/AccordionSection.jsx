"use client";

import Minus from "@/components/icons/Minus";
import Plus from "@/components/icons/Plus";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionSection = ({ AccordionData, style }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 flex-1">
      <div className={`${style}`}>
        {AccordionData.map((item, index) => (
          <AccordionItem
            key={index}
            isLast={index === AccordionData.length - 1}
            title={item.title}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    </section>
  );
};

const AccordionItem = ({ title, children, isOpen, onClick, isLast }) => {
  return (
    <div className={isLast ? "" : "border-b"}>
      <button
        className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-normal">{title}</span>
        <span className="text-xl">{isOpen ? <Minus /> : <Plus />}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-gray-600 text-left">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionSection;
