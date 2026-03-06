"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none mt-10">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 pointer-events-auto animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Menu Content - Full height */}
      <div className="relative h-full bg-[#1a1a1a] pointer-events-auto animate-slideDown overflow-scroll">
        <div className="relative z-10 h-full overflow-y-auto pb-32">
          {/* Top Bar */}
          <div className="border-b border-gray-800">
            <div className="max-w-[1600px] mx-auto px-8 lg:px-12 py-5">
              <div className="flex items-center justify-between">
                <Link href="/v2" onClick={onClose}>
                  <Image
                    src="/images/vcc-logo.png"
                    alt="Victory Christian Centre"
                    width={50}
                    height={50}
                    className="h-10 w-auto brightness-0 invert"
                  />
                </Link>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-800 rounded-md transition-colors"
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8 lg:py-10">
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 items-start">
              {/* Right Side - Navigation */}
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                  Victory Christian Centre
                </h2>
                <p className="text-gray-400 mb-6 lg:mb-8 text-xs sm:text-sm">
                  For God. For People. For the City. For the World.
                </p>

                {/* Navigation Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-6 lg:gap-y-6">
                  {/* Column 1: Plan a Visit + Media */}
                  <div className="space-y-6 lg:space-y-8">
                    {/* Plan a Visit */}
                    <div>
                      <Link
                        href="#visit"
                        onClick={onClose}
                        className="block text-white hover:text-cyan-400 transition-colors text-base lg:text-lg font-semibold mb-2 lg:mb-3"
                      >
                        Plan a Visit
                      </Link>
                      <ul className="space-y-1.5 lg:space-y-2">
                        <li>
                          <Link
                            href="#new"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            New Here?
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#times"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Service Times & Location
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#expect"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            What to Expect
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#families"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Families & Kids
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#contact"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Media */}
                    <div>
                      <Link
                        href="#media"
                        onClick={onClose}
                        className="block text-white hover:text-cyan-400 transition-colors text-base lg:text-lg font-semibold mb-2 lg:mb-3"
                      >
                        Media
                      </Link>
                      <ul className="space-y-1.5 lg:space-y-2">
                        <li>
                          <Link
                            href="#live"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Watch Live
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#tv"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            TV Broadcasts
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#messages"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Messages
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#podcast"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Podcast
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#outlines"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Message Outlines
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2: Connect + Grow */}
                  <div className="space-y-6 lg:space-y-8">
                    {/* Connect */}
                    <div>
                      <Link
                        href="#connect"
                        onClick={onClose}
                        className="block text-white hover:text-cyan-400 transition-colors text-base lg:text-lg font-semibold mb-2 lg:mb-3"
                      >
                        Connect
                      </Link>
                      <ul className="space-y-1.5 lg:space-y-2">
                        <li>
                          <Link
                            href="#groups"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Join a Small Group
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#events"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Events Calendar
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#next-steps"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            New Believers / Next Steps
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#prayer"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Prayer
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#online-community"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Online Community
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Grow */}
                    <div>
                      <Link
                        href="#grow"
                        onClick={onClose}
                        className="block text-white hover:text-cyan-400 transition-colors text-base lg:text-lg font-semibold mb-2 lg:mb-3"
                      >
                        Grow
                      </Link>
                      <ul className="space-y-1.5 lg:space-y-2">
                        <li>
                          <Link
                            href="#courses"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Courses
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#resources"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Resources
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 3: Serve + Missions + About */}
                  <div className="space-y-6 lg:space-y-8">
                    {/* Serve */}
                    <div>
                      <Link
                        href="#serve"
                        onClick={onClose}
                        className="block text-white hover:text-cyan-400 transition-colors text-base lg:text-lg font-semibold mb-2 lg:mb-3"
                      >
                        Serve
                      </Link>
                      <ul className="space-y-1.5 lg:space-y-2">
                        <li>
                          <Link
                            href="#teams"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Serve Teams
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#ministries"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Ministries
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#volunteer"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Volunteer Interest Form
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Missions */}
                    <div>
                      <Link
                        href="#missions"
                        onClick={onClose}
                        className="block text-white hover:text-cyan-400 transition-colors text-base lg:text-lg font-semibold mb-2 lg:mb-3"
                      >
                        Missions
                      </Link>
                      <ul className="space-y-1.5 lg:space-y-2">
                        <li>
                          <Link
                            href="#local"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Local Outreach
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#global"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Global Missions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#involved"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Get Involved
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* About */}
                    <div>
                      <Link
                        href="#about"
                        onClick={onClose}
                        className="block text-white hover:text-cyan-400 transition-colors text-base lg:text-lg font-semibold mb-2 lg:mb-3"
                      >
                        About
                      </Link>
                      <ul className="space-y-1.5 lg:space-y-2">
                        <li>
                          <Link
                            href="#story"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Our Story
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#leadership"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Leadership & Staff
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#vision"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Vision & Values
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#beliefs"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            What We Believe
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#faith"
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm"
                          >
                            Statement of Faith
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 4: Donate Image */}
                  <div className="hidden lg:block">
                    <Link href="#donate" onClick={onClose} className="block group">
                      <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                        <Image
                          src="/images/community-fellowship.jpg"
                          alt="Donate to Victory"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            Give to Victory
                          </h3>
                          <span className="inline-block bg-cyan-400 hover:bg-cyan-500 text-black font-mono leading-none px-4 py-2 rounded-full transition-colors text-xs uppercase">
                            Donate Now
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-center gap-4 lg:gap-6 mt-8 lg:mt-10 pt-4 lg:pt-6 border-t border-gray-800">
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
