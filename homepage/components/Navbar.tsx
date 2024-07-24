"use client";
import Link from "next/link";
import { JSX, SVGProps, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import SetTheme from "./SetTheme";
function Navbar() {
  return (
    <header>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <>
            <SetTheme>
              <Button variant="ghost" size="icon" className="rounded-full">
                <span className="sr-only">Toggle theme</span>
              </Button>
            </SetTheme>
          </>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 p-4">
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default Navbar;
