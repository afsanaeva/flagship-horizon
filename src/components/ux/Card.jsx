import { cn } from "@/lib/utils";
import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-40px md:px-5 md:py-10 2xl:px-6 2xl:py-11 px-6 py-12 xs:px-8 xs:py-[60px] 3xl:px-8 3xl:py-[60px] shadow-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
