"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-green-400">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal size={24} className="text-green-400" />
            <span className="text-xl font-bold text-green-400">
              RetroDevPro
            </span>
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul
            className={`md:flex space-y-2 md:space-y-0 md:space-x-4 ${isMenuOpen ? "block" : "hidden"} absolute md:relative left-0 right-0 top-16 md:top-0 bg-gray-900 md:bg-transparent p-4 md:p-0 border-b border-green-400 md:border-none`}
          >
            <li>
              <Link
                href="#services"
                className="text-green-400 hover:text-green-300 block"
              >
                &gt; Services
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="text-green-400 hover:text-green-300 block"
              >
                &gt; Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className="text-green-400 hover:text-green-300 block"
              >
                &gt; Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-green-400 hover:text-green-300 block"
              >
                &gt; Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
