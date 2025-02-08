import Contact from '@/components/screens/contact-us/Contact';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ExpectSection from '@/components/screens/Demo/expectSection';
import GetAFreeDemo from '@/components/screens/home/GetAFreeDemo';

export const metadata = {
  title: 'Horizon| Get Demo',
  description:
    'Horizon is a super engagement platform. Engage your customers with a magical experience.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/get-demo`,
  },
};

export default function GetDemo() {
  return (
    <section className="px-72px mt-96px md:mb-[220px] mb-[160px] space-y-100px mx-auto max-w-[1850px] ">
      <div className="space-y-40px mx-auto text-center">
        <h1 className="font-100px font-semibold text-[#15234E] text-left md:text-center">
          Interested to see how Horizon Shorts <br />
          will look on your digital assets?
        </h1>

        <p className="md:container-lg font-28px mx-auto font-normal text-left md:text-center">
          Let us create a custom example for you - see exactly what Horizon can
          do to grow your business.
        </p>
      </div>

      <Contact />
      <h1 className="font-92px font-semibold text-[#15234E] !mt-[160px]">
        What to expect
      </h1>
      <ExpectSection />

      <GetAFreeDemo
        title=" Become a Super Engagement <br />
          Pioneer. Try Horizon for Free."
        styleBlock="md:!mt-[220px] !mt-[160px]"
      />
    </section>
  );
}
