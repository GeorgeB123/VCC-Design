"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu";

export default function PassionCityHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white mt-12 relative z-50">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between py-6">
            {/* Logo and Name */}
            <Link href="/v2" className="flex items-center gap-3">
              <Image
                src="/images/vcc-logo.png"
                alt="Victory Christian Centre"
                width={60}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Right Side Menu */}
            <div className="flex items-center gap-6">
              <Link
                href="#events"
                className="hidden md:block bg-cyan-400 hover:bg-cyan-500 text-black font-mono leading-none px-8 py-3 rounded-full transition-colors uppercase text-sm"
                >
                UPCOMING EVENTS
              </Link>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
