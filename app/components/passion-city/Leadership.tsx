"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { team } from "@/data/team";

export default function Leadership() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextLeader = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  const prevLeader = () => {
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const currentLeader = team[currentIndex];
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === team.length - 1;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="bg-[#f0f1ed] rounded-3xl px-6 xl:px-12 2xl:py-0">
          {/* Title */}
          <div className="relative">
            <h2 className="text-black italic font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-black leading-none tracking-tighter -translate-y-0 2xl:-translate-y-10 2xl:-translate-x-12 mb-8">
              Our Leadership
            </h2>
          </div>

          {/* Content Carousel */}
          <div className="flex flex-col-reverse lg:flex-row lg:items-center py-8 gap-4">
            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 lg:px-16">
              <p className="text-black font-mono uppercase text-xs leading-none opacity-50 mb-3">
                {currentLeader.role}
              </p>
              <h3 className="text-black font-bold text-2xl lg:text-3xl tracking-tight leading-tight mb-4">
                {currentLeader.name}
              </h3>
              <div className="prose max-w-none pb-12 text-lg text-gray-700 leading-relaxed">
                {currentLeader.bio}
              </div>
              <Link
                href="#leadership"
                className="inline-flex bg-cyan-400 text-black hover:bg-black hover:text-white py-3 px-6 mb-4 font-mono leading-none uppercase text-sm rounded-full items-center justify-center transition"
              >
                See Our Leadership
              </Link>
            </div>

            {/* Right: Image */}
            <div className="relative w-full lg:w-1/2 aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/leadership.jpg"
                alt={currentLeader.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
