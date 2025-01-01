"use client";

import Link from "next/link";
import LogoWhite from "../icons/LogoWhite";
import Instagram from "../icons/social/Instagram";
import Linkedin from "../icons/social/Linkedin";
import Facebook from "../icons/social/Facebook";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert("Thank you for subscribing!");
    }
  };

  return (
    <footer className="w-full bg-[#15234E] text-white">
      <div className="container mx-auto flex flex-col px-6 py-12 md:flex-row md:justify-between lg:px-8">
        {/* Left Section */}
        <div className="mb-8 md:mb-0">
          <Link href="/">
            <LogoWhite className="size-14" />
          </Link>
          <p className="font-22px mt-4 font-semibold">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <form
            className="mt-4 flex max-w-md items-center gap-4"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="grow rounded-full bg-[#FFFF] px-4 py-2 text-[#B8C1CB] placeholder:text-gray-500 focus:outline-none"
            />
            <Button type="submit">Subscribe</Button>
          </form>

          <p className="mt-2 text-xs">
            By subscribing, you agree to our <Link href="/privacy-policy" target="_blank" className="underline">
              Privacy Policy
            </Link> and provide <br /> consent to receive updates from our company.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col  ">
          <h3 className="font-22px mb-4 font-semibold">Pages</h3>
          <ul className="space-y-2 ">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:underline">
                Product
              </Link>
            </li>
            <li>
              <Link href="/solutions" className="hover:underline">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col">
          <h3 className=" font-22px mb-4  font-semibold">Follow Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/flagshipoffficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105"
              >
                <Facebook className="size-11" />
              </Link>
              <span>Facebook</span>
            </li>
            <li className="flex items-center gap-3">
              <Link
                href="https://www.instagram.com/think_flagship/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105"
              >
                <Instagram className="size-11" />
              </Link>
              <span>Instagram</span>
            </li>
            <li className="flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/company/flagshipdxp/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105"
              >
                <Linkedin className="size-11" />
              </Link>
              <span>LinkedIn</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="font-18px container mx-auto flex flex-col px-6 py-3 font-semibold text-[#B8C1CB] md:flex-row md:justify-between lg:px-8">
        <p>© 2024 Horizon. All rights reserved by Flagship Technology Inc.</p>
        <div className="mt-2 space-x-4">
          <Link href="/privacy-policy" target="_blank" className="underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" target="_blank" className="underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
