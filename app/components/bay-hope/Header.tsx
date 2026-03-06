"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BayHopeHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top banner */}
      <div className="bg-[#34495e] text-white text-center py-3 mt-10 text-sm overscroll-none">
        Guests and members visit the Central Hub
      </div>

      {/* Header */}
      <header className="absolute top-20 left-0 right-0 z-40">
        <div className="bg-white shadow-md border-t border-b-2 border-gray-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Left Navigation - Desktop */}
              <nav className="hidden lg:flex items-center gap-8 text-gray-700 text-sm font-medium">
                <Link href="#plan-visit" className="hover:text-[#6b8e99] transition-colors">
                  PLAN A VISIT
                </Link>
                <Link href="#media" className="hover:text-[#6b8e99] transition-colors">
                  MEDIA
                </Link>
                <Link href="#connect" className="hover:text-[#6b8e99] transition-colors">
                  CONNECT
                </Link>
                <Link href="#grow" className="hover:text-[#6b8e99] transition-colors">
                  GROW
                </Link>
              </nav>

              {/* Centered Logo */}
              <div className="flex-shrink-0">
                <div className="relative top-10 w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-[#34495e] border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/vcc-logo.png"
                    alt="Victory Christian Centre"
                    width={128}
                    height={128}
                    className="w-20 h-20 lg:w-24 lg:h-24 object-contain invert"
                    priority
                  />
                </div>
              </div>

              {/* Right Navigation - Desktop */}
              <nav className="hidden lg:flex items-center gap-8 text-gray-700 text-sm font-medium">
                <Link href="#serve" className="hover:text-[#6b8e99] transition-colors">
                  SERVE
                </Link>
                <Link href="#missions" className="hover:text-[#6b8e99] transition-colors">
                  MISSIONS
                </Link>
                <Link href="#about" className="hover:text-[#6b8e99] transition-colors">
                  ABOUT
                </Link>
                <Link
                  href="#give"
                  className="bg-[#6b8e99] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#5a7a85] transition-colors"
                >
                  GIVE
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 z-50 lg:hidden overflow-y-auto mt-6">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6">
              <Image
                src="/images/vcc-logo.png"
                alt="Victory Christian Centre"
                width={150}
                height={45}
                className="h-10 w-auto"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-6">
                <li>
                  <Link
                    href="#plan-visit"
                    className="text-white text-2xl font-semibold block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Plan a Visit
                  </Link>
                </li>
                <li>
                  <Link
                    href="#media"
                    className="text-white text-2xl font-semibold block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="#connect"
                    className="text-white text-2xl font-semibold block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Connect
                  </Link>
                </li>
                <li>
                  <Link
                    href="#grow"
                    className="text-white text-2xl font-semibold block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Grow
                  </Link>
                </li>
                <li>
                  <Link
                    href="#serve"
                    className="text-white text-2xl font-semibold block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Serve
                  </Link>
                </li>
                <li>
                  <Link
                    href="#missions"
                    className="text-white text-2xl font-semibold block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Missions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-white text-2xl font-semibold block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Give Button at Bottom */}
            <div className="p-6 pb-8">
              <Link
                href="#give"
                className="bg-[#6b8e99] text-white px-8 py-4 font-semibold text-sm hover:bg-[#5a7a85] transition-colors block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                GIVE
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
