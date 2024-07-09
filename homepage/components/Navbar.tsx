"use client";
import Link from "next/link";
import { JSX, SVGProps, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background transition-colors ${
        isDarkMode ? "dark" : ""
      }`}
    >
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
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="rounded-full"
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
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

function MoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SunIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

export default Navbar;
