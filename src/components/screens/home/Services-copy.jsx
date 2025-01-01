"use client";
import InfoCard from "@/components/custom-ui/InfoCard";

import Card from "@/components/ux/Card";
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
    <div className="container-lg space-y-40px">
      <InfoCard
        title="Accelerate time-<br/>to-market."
        description="Integrating with your website or app is super easy."
        headingClassName="max-[800px]:[&_br]:hidden"
      />

      <div className="grid md:grid-cols-2 min-[1050px]:grid-cols-4 md:max-[1049px]:w-fit gap-4">
        {services.map((service, index) => (
          <Slide
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            // className={index === 0 ? "pl-0" : "pl-4 3xl:pl-8"}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

const Slide = ({ title, description, icon, className, index }) => {
  return (
    <Card className="mx-auto space-y-52px md:max-[1049px]:w-[300px] zoom-in-1-035 max-w-[470px] !duration-700 flex size-full flex-col justify-between md:pb-5 pb-6 md:pr-6 pr-5 3xl:pb-6 3xl:pr-6">
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
          className="font-20px max-w-[300px] md:max-w-[210px] 2xl:max-w-[250px] 3xl:max-w-[296px]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <Link href={"/"} className="ml-auto block">
        <Image
          src="/assets/icons/circle-plus.png"
          width={40}
          height={40}
          alt="Plus icon"
          className="size-10 md:size-[27px] 2xl:size-[30px] 3xl:size-10"
        />
      </Link>
    </Card>
  );
};
