import Contact from "@/components/screens/contact-us/Contact";

export const metadata = {
  title: "Flagship iXP | Get Demo",
  description: "Get in touch with Flagship to learn more about our Intelligent Experience Platform (iXP). Schedule a free demo and discover how to enhance customer engagement, drive revenue, and boost retention.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/get-demo`,
  },
};

export default function Design() {
  return (
      <section className="px-72px mt-96px mb-96px space-y-100px mx-auto max-w-[1850px]">
        <div className="space-y-20px mx-auto text-center">
          <h1 className="font-100px font-semibold">Thank you for your interest</h1>
          <p className="font-24px mx-auto font-medium">
          To get started with your free demo, please fill out the following form. Our team will be in touch shortly<br className="max-md:hidden"/> to answer any questions you might have.
          </p>
        </div>

        <Contact />
      </section>
  );
}
