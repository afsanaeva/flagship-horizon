"use client";
import React from "react";
import { fadeTop } from "@/components/layout/Header";
import InfoCard2 from "@/components/custom-ui/InfoCard2";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="space-y-100px mt-12">
      <div className="space-y-40px flex flex-col items-center">
        <InfoCard2
          title="Skyrocket Your Customer <br/> Engagement. Grow Infinite."
          initial={{ opacity: 0, y: 50 }}
          whileInView={fadeTop.onscreen}
          viewport={{ once: true }}
          heading="h1"
          headingClassName="font-100px font-semibold"
        />
        <InfoCard2
          title="Horizon is the first customer engagement platform empowering <br/>  enterprises to deliver big-tech-level engagement at scale."
          initial={{ opacity: 0, y: 50 }}
          whileInView={fadeTop.onscreen}
          viewport={{ once: true }}
          heading="h4"
          headingClassName="font-28px font-normal"
        />
        <Button size="lg" asChild className="md:hidden">
          <Link href="/get-demo">Get a demo</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
