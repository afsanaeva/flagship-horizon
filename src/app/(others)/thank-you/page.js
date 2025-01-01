import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// add metadata

export const metadata = {
  title: "Flagship iXP | Thank You",
  description:
    "Your request has been submitted. You will hear from us shortly.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/thank-you`,
  },
};
const ThankYouPage = () => {
  return (
    <div className="my-auto">
      <main className="mt-48px mb-96px space-y-56px mx-auto flex h-full flex-col items-center">
        <Image
          src={"/assets/icons/check_circle.png"}
          alt="Check/Sign icon"
          className=" size-20 xs:size-[94px] 2xl:size-[110px] 3xl:size-[140px]"
          width={286}
          height={286}
        />
        <section className="space-y-4 text-center 3xl:space-y-5">
          <p className="font-28px font-medium">MESSAGE RECEIVED</p>
          <div className="space-y-6 3xl:space-y-10">
            <h1 className="font-100px font-semibold">
              Thank you for your interest!
            </h1>

            <p className="font-24px font-medium">
              Your request has been submitted. You will hear from us shortly.
            </p>
          </div>
        </section>
        <Button asChild size="lg">
          <Link href={"/"}>Back To Home</Link>
        </Button>
      </main>
    </div>
  );
};

export default ThankYouPage;
