/* eslint-disable no-unused-vars */
'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button, buttonVariants } from '../ui/button';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import Logo from '../icons/Logo';

const Nav = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsSticky(currentScrollPos > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentScrollPos = window.scrollY;
    setIsSticky(currentScrollPos < 10 && null);
  }, []);

  return (
    <nav className="">
      <div className="flex justify-between space-x-4 last:items-center">
        <Link href="/">
          <Logo className="h-auto w-[130px] md:w-[120px] 2xl:w-[136px] 3xl:w-[181px]" />
        </Link>
        <div className="gap-[3.125rem] hidden md:flex">
          <Link
            href="/product"
            className={cn(
              buttonVariants({ variant: 'none', size: 'lg' }),
              `${pathname === '/product' && 'font-semibold'}`,
              "!w-fit relative after:content-[''] after:bg-primary after:absolute after:h-0.5 after:bottom-0 after:transition-all after:duration-500 after:inset-x-0 after:ease-in-out after:w-0 after:hover:w-full z-50"
            )}
          >
            Products
          </Link>
          <Link
            href="/solution"
            className={cn(
              buttonVariants({ variant: 'none', size: 'lg' }),
              `${pathname === '/solution' && 'font-semibold'}`,
              "!w-fit relative after:content-[''] after:bg-primary after:absolute after:h-0.5 after:bottom-0 after:transition-all after:duration-500 after:inset-x-0 after:ease-in-out after:w-0 after:hover:w-full z-50"
            )}
          >
            Solutions
          </Link>
          <Link
            href="/aboutus"
            className={cn(
              buttonVariants({ variant: 'none', size: 'lg' }),
              `${pathname === '/aboutus' && 'font-semibold'}`,
              "!w-fit relative after:content-[''] after:bg-primary after:absolute after:h-0.5 after:bottom-0 after:transition-all after:duration-500 after:inset-x-0 after:ease-in-out after:w-0 after:hover:w-full z-50"
            )}
          >
            About Us
          </Link>
        </div>
        <div className="md:hidden block cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M12.5714 38.8569V36.202H51.4286V38.8569H12.5714ZM12.5714 27.7967V25.1426H51.4286V27.7967H12.5714Z"
              fill="#15234E"
            />
          </svg>
        </div>
        {/* <Button variant="outline" size="lg" asChild>
          <Link href={"/login"}>Log in</Link>
        </Button> */}
        {/* eslint-disable */}
        {pathname !== '/thank-you' &&
          pathname !== '/get-demo' &&
          pathname !== '/privacy-policy' && (
            <Button
              size="lg"
              asChild
              className="!w-[132px] !h-[42px] !text-[20px] hidden md:flex items-center justify-center"
            >
              <Link href={'/get-demo'}>Get a demo</Link>
            </Button>
          )}
      </div>

      {/* <Sheet>
        <SheetTrigger className="hidden" asChild>
          <div className="flex size-10 cursor-pointer flex-col items-center justify-center gap-1 p-2.5">
            <div className="h-0.5 w-full bg-[#1C1B1F]" />
            <div className="h-0.5 w-full bg-[#1C1B1F]" />
          </div>
        </SheetTrigger>

        <SheetContent className="flex min-h-screen w-full max-w-full flex-col gap-y-12 overflow-y-auto px-6 pt-[100px] xs:gap-y-16">
          <div className="flex flex-col items-start justify-center gap-y-3">
            <SheetClose key={title} asChild>
                <Link
                  href={href}
                  className={cn("text-[7vw] xs:text-[32px] font-light", {
                    "font-medium": pathname === href,
                    "text-foreground": pathname !== href,
                  })}
                >
                  {title}
                </Link>
              </SheetClose>
          </div>

          <SheetClose></SheetClose>
        </SheetContent>
      </Sheet> */}
    </nav>
  );
};

export default Nav;
