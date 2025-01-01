import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const InfoCard = ({
  title,
  description,
  href,
  label = "Get a demo for free",
  heading = "h3",
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
      <div className="space-y-20px">
        <Heading
          className={cn("font-96px font-medium", headingClassName)}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {description && (
          <p
            className={cn(
              "font-24px font-medium",
              descriptionClassName
            )}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>

      {href && (
        <Button size="lg" asChild>
          <Link href={href}>{label}</Link>
        </Button>
      )}
    </motion.div>
  );
};

export default InfoCard;
