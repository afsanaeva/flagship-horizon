'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Unlock = () => {
  return (
    <section className="container">
      <div className="rounded-[36px] bg-[#F1F4F7] px-20 py-10">
        <div className="flex justify-between">
          <div className="flex flex-col items-start">
            <div className="font-42px mb-2 font-semibold text-[#15234E]">
              Ready to unlock explosive <br /> growth for your digital assets?
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-10 ">
            <Button size="lg" asChild>
              <Link href="/faq">Learn More</Link>
            </Button>
            <Button size="lg" variant="blueOutline" asChild>
              <Link href="/get-demo">Get a demo</Link>
            </Button>
          </div>
        </div>
      </div>{' '}
    </section>
  );
};

export default Unlock;
