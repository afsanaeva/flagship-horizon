"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BuildDirect = () => {
  return (
    <div className="container-lg relative">
      <Image
        src={"/assets/home/hero/build.png"}
        alt="Check/Sign icon"
        className="rounded-md"
        width={1680}
        height={905}
      />
      <div className="absolute bottom-20 left-24 flex gap-4">
        <Button size="lg" asChild>
          <Link href="/faq">Learn More</Link>
        </Button>
        <Button size="lg" variant="blueOutline" asChild>
          <Link href="/get-demo">Get a demo</Link>
        </Button>
      </div>
    </div>
  );
};

export default BuildDirect;
