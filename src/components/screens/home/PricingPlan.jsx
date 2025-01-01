"use client";

import { motion } from "framer-motion";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    plan: "Free",
    subText: "Up to 1,000 monthly active users",
    content: `<p>Web Shorts</p>
    <p>1 Workspace</p>`,
  },
  {
    plan: "Pro",
    subText: "Up to 100,000 monthly active users",
    content: `<p>Web Shorts</p>
    <p>App Shorts</p>
    <p>3 Workspaces</p>`,
  },
  {
    plan: "Enterprise",
    subText: "Above 100,000 monthly active users",
    content: `<p>Web Shorts</p>
    <p>App Shorts</p>
    <p>Custom Workspaces</p>
    <p>Enterprise Grade Privacy & Security</p>`,
  },
];

const variants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 1 },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0, staggerDirection: -1 },
  },
};
const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const PricingPlan = () => {
  return (
    <div className="container-sm space-y-100px">
      <InfoCard2
        title="super engagement for all"
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
      />

      <motion.ul
        initial="closed"
        whileInView="open"
        variants={variants}
        viewport={{ once: true }}
        className="list-none"
      >
        <div className="grid gap-10 xs:gap-12 md:grid-cols-3 md:gap-3 lg:gap-8 xl:gap-12 2xl:gap-14 3xl:gap-20">
          <Slide
            img={slides[0].img}
            plan={slides[0].plan}
            subText={slides[0].subText}
            content={slides[0].content}
          />
          <Slide
            img={slides[1].img}
            plan={slides[1].plan}
            subText={slides[1].subText}
            content={slides[1].content}
            imgClassName="pr-0 ml-auto"
          />
          <Slide
            img={slides[2].img}
            plan={slides[2].plan}
            subText={slides[2].subText}
            content={slides[2].content}
            imgClassName="pr-0 ml-auto"
          />
        </div>
      </motion.ul>
    </div>
  );
};

export default PricingPlan;

const Slide = ({
  img,
  plan = "",
  content = "",
  description,
  imgClassName,
  price,
  subText,
}) => {
  return (
    <motion.li variants={variantsLi}>
      <article className="rounded-40px flex h-full flex-col justify-between overflow-hidden bg-[#EEF6FF]">
        <div className=" grid h-full justify-between gap-12 px-7 py-9 2xl:gap-14 2xl:px-9 2xl:py-11 3xl:gap-16 3xl:px-12 3xl:py-14">
          <div>
            <div className="mb-5 space-y-2.5 2xl:mb-6 2xl:space-y-3.5 3xl:mb-8 3xl:space-y-4">
              <h3
                className="font-42px  font-semibold !leading-none text-[#005AFF] "
                dangerouslySetInnerHTML={{
                  __html: plan,
                }}
              />
              <p
                className="font-20px"
                dangerouslySetInnerHTML={{
                  __html: subText,
                }}
              />
            </div>

            <h4 className="font-28px mb-5 font-semibold 2xl:mb-6 3xl:mb-8">
              Includes:
            </h4>

            <div
              className="font-24px space-y-2.5 2xl:space-y-3.5 3xl:space-y-4"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>

          <Button asChild size="lg" className="mt-auto w-fit">
            <Link href={"/get-demo"}>Contact Us</Link>
          </Button>
        </div>
      </article>
    </motion.li>
  );
};
