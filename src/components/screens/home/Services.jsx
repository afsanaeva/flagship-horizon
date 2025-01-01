"use client";

import InfoCard from "@/components/custom-ui/InfoCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Card from "@/components/ux/Card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Mobile SDK",
    description: "We have native SDKs for iOS and Android in Swift & Kotlin.",
    icon: "/assets/icons/services/Phone.png",
  },
  {
    title: "Web SDK",
    description:
      "We have web SDK with support for React, NextJS, Vue, and NuxtJS.",
    icon: "/assets/icons/services/laptop.png",
  },
  {
    title: "Shopify",
    description: "We have support for Shopify ecommerce stores.",
    icon: "/assets/icons/services/Bag.png",
  },
  {
    title: "Integration Support",
    description:
      "We offer robust documentation and support for implementation.",
    icon: "/assets/icons/services/Document.png",
  },
];

const Services = () => {
  return (
    <div className="space-y-56px">
      <InfoCard
        title="Accelerate time-<br/>to-market."
        description="Integrating with your website or app is super easy."
        headingClassName="max-[800px]:[&_br]:hidden"
        className="container-lg"
      />
      <div className="mx-auto max-w-[1920px]">
        <Carousel
          opts={{
            align: "start",
            active: false,
            breakpoints: {
              "(max-width: 1200px)": { active: true },
            },
          }}
          className="-mt-4 max-w-fit"
        >
          <CarouselContent className="pl-72px ml-0 grid grid-flow-col gap-4 py-4 pr-4 max-xs:auto-cols-[90%] 2xl:gap-5 3xl:max-[1780px]:gap-3">
            {services.map((service, index) => (
              <Slide
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                // className={index === 0 ? "pl-0" : "pl-4 "}
                index={index}
              />
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Services;

const Slide = ({ title, description, icon, className, index }) => {
  return (
    <CarouselItem
      className={cn(
        "w-full xs:w-[380px] md:w-[275px] 2xl:w-[320px] 3xl:w-[405px] pl-0 items-center flex",
        className
      )}
    >
      <Card className="space-y-52px zoom-in-1-035 flex size-full flex-col justify-between pb-6 pr-5 !duration-700 xs:pb-8 md:pb-5 md:pr-6 2xl:pb-5 3xl:pb-6 3xl:pr-6">
        <div className="space-y-28px">
          <Image
            src={icon}
            alt={title}
            width={36}
            height={36}
            className="size-9 md:size-7 2xl:size-8 3xl:size-9"
          />

          <h3
            className="font-28px font-semibold"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <p
            className="font-20px max-w-[296px] md:max-w-[210px] 2xl:max-w-[250px] 3xl:max-w-[296px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <Link href={"/get-demo"} className="ml-auto block">
          <Image
            src="/assets/icons/circle-plus.png"
            width={40}
            height={40}
            alt="Plus icon"
            className="size-10 md:size-[27px] 2xl:size-[30px] 3xl:size-10"
          />
        </Link>
      </Card>
    </CarouselItem>
  );
};
