import Contact from "@/components/screens/contact-us/Contact";
import PlayIcon from "@/components/icons/PlayIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Horizon| Get Demo",
  description:
    "Horizon is a super engagement platform. Engage your customers with a magical experience.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/get-demo`,
  },
};

export default function GetDemo() {
  return (
    <section className="px-72px mt-96px mb-96px space-y-100px mx-auto max-w-[1850px]">
      <div className="space-y-20px mx-auto text-center">
        <h1 className="font-100px font-semibold text-[#15234E]">
          Interested to see how Horizon Shorts <br />
          will look on your digital assets?
        </h1>

        <p className="font-28px mx-auto font-normal">
          Let us create a custom example for you - see exactly what Horizon can
          do to grow your business.
        </p>
      </div>

      <Contact />
      <h1 className="font-92px font-semibold text-[#15234E]">What to expect</h1>
      <div className="rounded-[36px] bg-[#F1F4F7] px-40 py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="flex flex-col items-start">
            <div className="font-42px mb-2 font-semibold text-[#15234E]">
              Demo <br /> Request <br /> Process
            </div>
          </div>
          {/* Step 1 */}
          <div className="flex flex-col items-start">
            <div className="flex justify-between">
              <PlayIcon />
              <div>
                <div className="font-28px mb-2 font-semibold text-[#15234E]">
                  Quick Response
                </div>
                <p className="font-22px text-[#15234E]">
                  Once you request a demo, our team will contact you within 24
                  hours to schedule a session.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-start">
            <div className="flex justify-between">
              <PlayIcon />
              <div>
                <div className="font-28px mb-2 font-semibold text-[#15234E]">
                  Tailored Preparation
                </div>
                <p className="font-22px text-[#15234E]">
                  Before the session, we’ll review your business and
                  requirements to customize your demo.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-start">
            <div className="flex justify-between">
              <PlayIcon />
              <div>
                <div className="font-28px mb-2 font-semibold text-[#15234E]">
                  Looking Ahead
                </div>
                <p className="font-22px text-[#15234E]">
                  We’re excited to connect with you and help elevate your
                  business!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-20px mx-auto text-center">
        <h1 className="font-100px font-semibold text-[#15234E]">
          Become a Super Engagement
          <br />
          Pioneer. Try Horizon for Free.
        </h1>

        <div className="flex flex-wrap justify-center gap-4 pb-20 pt-10 ">
          <Button size="lg" asChild>
            <Link href="/get-demo">Explore Horizon</Link>
          </Button>
          <Button size="lg" variant="blueOutline" asChild>
            <Link href="/get-demo">Get a demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
