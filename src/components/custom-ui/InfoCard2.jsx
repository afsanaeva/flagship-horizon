import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const InfoCard2 = ({
  title,
  description,
  heading = "h2",
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
      <div className="space-y-40px">
        <Heading
          className={cn("font-120px font-semibold text-center", headingClassName)}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {description && (
          <p
            className={cn(
              "font-28px text-[18px] xs:text-[20px] font-normal text-center",
              descriptionClassName
            )}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default InfoCard2;
