'use client';

import Link from 'next/link';
import LogoWhite from '../icons/LogoWhite';
import Instagram from '../icons/social/Instagram';
import Linkedin from '../icons/social/Linkedin';
import Facebook from '../icons/social/Facebook';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Thank you for subscribing!');
    }
  };

  return (
    <footer className="w-full bg-[#15234E] lg:py-[6.625rem] lg:px-[5.25rem] py-20 px-6 text-white flex flex-col md:gap-10 gap-16">
      <div className="flex flex-col gap-16 md:gap-0 md:flex-row md:justify-between">
        {/* Left Section */}
        <div className="mb-8 md:mb-0">
          <Link href="/">
            <LogoWhite className="size-14" />
          </Link>
          <p className="text-[22px] mt-12 md:mt-8 font-normal">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <form
            className="md:mt-6 mt-7 flex flex-col md:flex-row max-w-[666px] items-center gap-4"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full placeholder:[#B8C1CB] grow rounded-full h-full md:h-[58px] bg-[#FFFF] lg:px-4 lg:py-2 py-[0.8125rem] px-6 text-[#B8C1CB] focus:outline-none"
            />
            <Button
              type="submit"
              variant="default"
              className="w-full lg:min-w-[150px] text-[22px]"
            >
              Subscribe
            </Button>
          </form>

          <p className="lg:text-[16px] text-[18px] mt-6 font-normal">
            By subscribing, you agree to our{' '}
            <Link href="/privacy-policy" target="_blank" className="underline">
              Privacy Policy
            </Link>{' '}
            and provide consent to receive updates from our company.
          </p>
        </div>

        <div className="flex gap-10">
          {/* Middle Section */}
          <div className="flex flex-col lg:w-[268px] sm:w-[150px] flex-1 ">
            <h3 className="font-22px mb-[22px] font-semibold">Pages</h3>
            <ul className="space-y-5">
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
                <Link href="/solution" className="hover:underline">
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
          <div className="flex flex-col lg:w-[268px] sm:w-[150px] flex-1 ">
            <h3 className=" font-22px mb-[22px]  font-semibold">Follow Us</h3>
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
      </div>

      <div className="font-18px flex flex-col py-3 font-normal text-[#B8C1CB] md:flex-row md:justify-between">
        <p>© 2025 Horizon. All rights reserved by Flagship Technology Inc.</p>
        <div className="mt-2 space-x-4">
          <Link href="/faq" target="_blank" className="underline">
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
