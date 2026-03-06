"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const expectations = [
  {
    title: "Welcoming Atmosphere",
    description: "From the moment you arrive, you'll experience genuine hospitality. Our team is ready to greet you, answer questions, and help you feel at home.",
    image: "/images/church-friends.jpg",
    link: "#welcome"
  },
  {
    title: "Powerful Worship",
    description: "Experience Spirit-filled worship that creates an atmosphere for God's presence. Our worship team leads us in contemporary songs of praise and adoration.",
    image: "/images/sermon.png",
    link: "#worship"
  },
  {
    title: "Biblical Teaching",
    description: "Hear practical, faith-building messages from God's Word that equip you to live victoriously. Every message is designed to strengthen your walk with Christ.",
    image: "/images/serve-volunteer.jpg",
    link: "#teaching"
  },
  {
    title: "Family Friendly",
    description: "We love families! Our dedicated kids and youth programs provide age-appropriate teaching in a safe, engaging environment while you enjoy the service.",
    image: "/images/small-group.jpg",
    link: "#families"
  },
];

export default function WhatToExpect() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 mb-16">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl text-black font-bold mb-6 tracking-tight">
              What to <span className="italic font-light">Expect</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl leading-relaxed">
              Whether you're visiting for the first time or have been with us for years, here's what you can expect when you join us at Victory Christian Centre.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 ml-8">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Cards */}
      <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 pb-8 min-w-max">
          {/* Left padding spacer */}
          <div className="ml-[max(2rem,calc((100vw-80rem)/2))]"></div>

          {expectations.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group w-[372px] flex-shrink-0"
            >
              {/* Image Card */}
              <div className="relative h-[501px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Below */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-6 text-base">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-cyan-400 font-mono leading-none text-sm group-hover:gap-3 transition-all uppercase">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}

          {/* Right padding spacer */}
          <div className="mr-[max(2rem,calc((100vw-80rem)/2))]"></div>
        </div>
      </div>
    </section>
  );
}
