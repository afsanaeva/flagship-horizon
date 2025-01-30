'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Unlock = () => {
  return (
    <section className="container">
      <div className="rounded-[36px] bg-[#F1F4F7] md:px-20 px-6 py-10 md:py-10">
        <div className="flex justify-between flex-col md:flex-row w-full md:items-center">
          <div className="flex flex-col items-start">
            <div className="font-42px mb-2 font-semibold text-[#15234E]">
              Ready to unlock explosive <br /> growth for your digital assets?
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 pt-10 md:pt-0 md:justify-end ">
            <Button size="default" asChild>
              <Link href="/faq">Learn More</Link>
            </Button>
            <Button size="default" variant="blueOutline" asChild>
              <Link href="/get-demo">Get a demo</Link>
            </Button>
          </div>
        </div>
      </div>{' '}
    </section>
  );
};

export default Unlock;
