"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AustinStoneHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  return (
    <header className="bg-transparent mt-12 absolute top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/vcc-logo.png"
              alt="Victory Christian Centre"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center flex-1 justify-center gap-8">
            {/* Plan a Visit Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu("visit")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="text-white font-normal text-sm transition-colors flex items-center gap-1">
                Plan a Visit
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {openMenu === "visit" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white shadow-xl rounded-2xl p-8">
                    <div className="flex">
                      <Link href="#new" className="flex flex-col items-center w-32 group transition-colors relative border-r-1 border-gray-200 px-4">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">VISIT</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">New Here?</p>
                      </Link>

                      <Link href="#service-times" className="flex flex-col items-center w-32 group transition-colors relative border-r-1 border-gray-200 px-4">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">VISIT</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 text-center">Service Times</p>
                      </Link>

                      <Link href="#what-to-expect" className="flex flex-col items-center w-32 group transition-colors relative border-r-1 border-gray-200 px-4">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">VISIT</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 text-center">What to Expect</p>
                      </Link>

                      <Link href="#families" className="flex flex-col items-center w-32 group transition-colors relative border-r-1 border-gray-200 px-4">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">VISIT</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 text-center">Families & Kids</p>
                      </Link>

                      <Link href="#contact" className="flex flex-col items-center w-32 group transition-colors relative px-4">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">VISIT</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">Contact Us</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Media Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu("media")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="text-white font-normal text-sm transition-colors flex items-center gap-1">
                Media
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {openMenu === "media" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white shadow-xl rounded-2xl p-8">
                    <div className="flex">
                      <Link href="#live" className="flex flex-col items-center w-32 group transition-colors relative px-4 border-r-1 border-gray-200">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">MEDIA</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">Watch Live</p>
                      </Link>

                      <Link href="#tv" className="flex flex-col items-center w-32 group transition-colors relative px-4 border-r-1 border-gray-200">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="2" y="7" width="20" height="15" rx="2" />
                            <polyline points="17 2 12 7 7 2" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">MEDIA</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 text-center">TV Broadcasts</p>
                      </Link>

                      <Link href="#sermons" className="flex flex-col items-center w-32 group transition-colors relative px-4 border-r-1 border-gray-200">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="4" y="4" width="6" height="6" rx="1" />
                            <rect x="14" y="4" width="6" height="6" rx="1" />
                            <rect x="4" y="14" width="6" height="6" rx="1" />
                            <rect x="14" y="14" width="6" height="6" rx="1" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">MEDIA</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">Messages</p>
                      </Link>

                      <Link href="#podcast" className="flex flex-col items-center w-32 group transition-colors relative px-4 border-r-1 border-gray-200">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">MEDIA</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">Podcast</p>
                      </Link>

                      <Link href="#outlines" className="flex flex-col items-center w-32 group transition-colors relative px-4">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">MEDIA</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 text-center">Outlines</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Connect Mega Menu */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu("connect")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="text-white font-normal text-sm transition-colors flex items-center gap-1">
                Connect
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {openMenu === "connect" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white shadow-xl rounded-2xl p-8">
                    <div className="flex">
                      <Link href="#small-groups" className="flex flex-col items-center w-32 group transition-colors relative px-4 border-r-1 border-gray-200">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">CONNECT</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 text-center">Small Groups</p>
                      </Link>

                      <Link href="#events" className="flex flex-col items-center w-32 group transition-colors relative px-4 border-r-1 border-gray-200">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">CONNECT</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">Events</p>
                      </Link>

                      <Link href="#next-steps" className="flex flex-col items-center w-32 group transition-colors relative px-4 border-r-1 border-gray-200">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">CONNECT</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 text-center">Next Steps</p>
                      </Link>

                      <Link href="#prayer" className="flex flex-col items-center w-32 group transition-colors relative px-4">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            <circle cx="12" cy="12" r="9" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">CONNECT</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">Prayer</p>
                      </Link>

                      <Link href="#community" className="flex flex-col items-center w-32 group transition-colors relative px-4">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">CONNECT</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 text-center">Online Community</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Grow */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu("grow")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="text-white font-normal text-sm transition-colors flex items-center gap-1">
                Grow
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {openMenu === "grow" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white shadow-xl rounded-2xl p-8">
                    <div className="flex">
                      <Link href="#courses" className="flex flex-col items-center w-32 group transition-colors relative px-4 border-r-1 border-gray-200">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">GROW</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">Courses</p>
                      </Link>

                      <Link href="#resources" className="flex flex-col items-center w-32 group transition-colors relative px-4">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">GROW</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">Resources</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Serve */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu("serve")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="text-white font-normal text-sm transition-colors flex items-center gap-1">
                Serve
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {openMenu === "serve" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white shadow-xl rounded-2xl p-8">
                    <div className="flex">
                      <Link href="#serve-teams" className="flex flex-col items-center w-32 group transition-colors relative px-4 border-r-1 border-gray-200">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">SERVE</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 text-center">Serve Teams</p>
                      </Link>

                      <Link href="#ministries" className="flex flex-col items-center w-32 group transition-colors relative px-4 border-r-1 border-gray-200">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">SERVE</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4">Ministries</p>
                      </Link>

                      <Link href="#volunteer" className="flex flex-col items-center w-32 group transition-colors relative px-4">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">SERVE</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 text-center">Volunteer</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Missions */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenMenu("missions")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="text-white font-normal text-sm transition-colors flex items-center gap-1">
                Missions
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {openMenu === "missions" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                  <div className="bg-white shadow-xl rounded-2xl p-8">
                    <div className="flex">
                      <Link href="#local" className="flex flex-col items-center w-32 group transition-colors relative px-4 border-r-1 border-gray-200">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">MISSIONS</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 text-center">Local Outreach</p>
                      </Link>

                      <Link href="#global" className="flex flex-col items-center w-32 group transition-colors relative px-4 border-r-1 border-gray-200">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">MISSIONS</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 text-center">Global Missions</p>
                      </Link>

                      <Link href="#missions-involved" className="flex flex-col items-center w-32 group transition-colors relative px-4-200">
                        <div className="mb-3">
                          <svg className="w-12 h-12 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">MISSIONS</p>
                        <p className="text-sm font-semibold text-gray-900 hover:underline underline-offset-4 text-center">Get Involved</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </nav>

                      {/* Give Button */}
          <div className="hidden lg:flex justify-end">
            <Link
              href="#give"
              className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-medium text-sm group transition-colors relative border border-gray-300 shadow-sm"
            >
              GIVE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 z-50 lg:hidden overflow-y-auto mt-6">
          <div className="flex flex-col h-full mt-12">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6">
              <Image
                src="/images/vcc-logo.png"
                alt="Victory Christian Centre"
                width={150}
                height={45}
                className="h-10 w-auto invert"
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
                    href="#give"
                    className="text-white text-2xl font-semibold block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Give
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

                {/* Plan a Visit with submenu */}
                <li>
                  <button
                    onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "visit" ? null : "visit")}
                    className="text-white text-2xl font-semibold flex items-center justify-between w-full py-2"
                  >
                    Plan a Visit
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === "visit" && (
                    <ul className="mt-4 ml-4 space-y-3">
                      <li><Link href="#new" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>New Here?</Link></li>
                      <li><Link href="#service-times" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Service Times</Link></li>
                      <li><Link href="#what-to-expect" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>What to Expect</Link></li>
                      <li><Link href="#families" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Families & Kids</Link></li>
                    </ul>
                  )}
                </li>

                {/* Media with submenu */}
                <li>
                  <button
                    onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "media" ? null : "media")}
                    className="text-white text-2xl font-semibold flex items-center justify-between w-full py-2"
                  >
                    Media
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === "media" && (
                    <ul className="mt-4 ml-4 space-y-3">
                      <li><Link href="#live" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Watch Live</Link></li>
                      <li><Link href="#sermons" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Messages</Link></li>
                      <li><Link href="#podcast" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Podcast</Link></li>
                    </ul>
                  )}
                </li>

                {/* Connect with submenu */}
                <li>
                  <button
                    onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "connect" ? null : "connect")}
                    className="text-white text-2xl font-semibold flex items-center justify-between w-full py-2"
                  >
                    Connect
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === "connect" && (
                    <ul className="mt-4 ml-4 space-y-3">
                      <li><Link href="#small-groups" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Small Groups</Link></li>
                      <li><Link href="#events" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Events</Link></li>
                      <li><Link href="#prayer" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Prayer</Link></li>
                    </ul>
                  )}
                </li>

                {/* Grow with submenu */}
                <li>
                  <button
                    onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "grow" ? null : "grow")}
                    className="text-white text-2xl font-semibold flex items-center justify-between w-full py-2"
                  >
                    Grow
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === "grow" && (
                    <ul className="mt-4 ml-4 space-y-3">
                      <li><Link href="#courses" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Courses</Link></li>
                      <li><Link href="#resources" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Resources</Link></li>
                    </ul>
                  )}
                </li>

                {/* Serve with submenu */}
                <li>
                  <button
                    onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "serve" ? null : "serve")}
                    className="text-white text-2xl font-semibold flex items-center justify-between w-full py-2"
                  >
                    Serve
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === "serve" && (
                    <ul className="mt-4 ml-4 space-y-3">
                      <li><Link href="#serve-teams" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Serve Teams</Link></li>
                      <li><Link href="#ministries" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Ministries</Link></li>
                      <li><Link href="#volunteer" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Volunteer</Link></li>
                    </ul>
                  )}
                </li>

                {/* Missions with submenu */}
                <li>
                  <button
                    onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === "missions" ? null : "missions")}
                    className="text-white text-2xl font-semibold flex items-center justify-between w-full py-2"
                  >
                    Missions
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {mobileSubmenuOpen === "missions" && (
                    <ul className="mt-4 ml-4 space-y-3">
                      <li><Link href="#local" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Local Outreach</Link></li>
                      <li><Link href="#global" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Global Missions</Link></li>
                      <li><Link href="#missions-involved" className="text-gray-300 text-lg block py-1" onClick={() => setMobileMenuOpen(false)}>Get Involved</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>

            {/* Visit Button at Bottom */}
            <div className="p-6 pb-8">
              <Link
                href="#visit"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg uppercase tracking-wide block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                VISIT
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
