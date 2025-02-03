import "./globals.css";
import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import type React from "react";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mbDevWorks - Retro-Inspired Web Development",
  description:
    "We create stunning, retro-inspired websites and web applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${vt323.className} bg-gray-900 text-green-400`}>
        {children}
      </body>
    </html>
  );
}
