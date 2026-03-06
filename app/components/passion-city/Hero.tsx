"use client";

import { mission } from "@/data/missions";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function PassionCityHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="bg-white px-8 lg:px-12 pb-12">
      {/* Hero Section with Rounded Container */}
      <div className="max-w-[1600px] mx-auto">
        <div className="relative h-[85vh] rounded-3xl overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/church-background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="px-6 sm:px-12 lg:px-20 w-full">
              <div className="max-w-3xl">
                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
                  {mission.passionCityHero.headline}
                </h1>

                {/* Mission Statement */}
                <p className="text-lg sm:text-xl lg:text-3xl text-white/95 mb-3 sm:mb-4 leading-snug sm:leading-tight font-light">
                  {mission.passionCityHero.mission}
                </p>

                {/* Invitation Line */}
                <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-10 leading-relaxed">
                  {mission.passionCityHero.invitation}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    href="#live"
                    className="inline-flex bg-cyan-400 hover:bg-cyan-500 text-black font-mono leading-none px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-colors text-sm sm:text-base uppercase items-center justify-center"
                  >
                    Watch Live
                  </Link>
                  <Link
                    href="#visit"
                    className="inline-flex bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-mono leading-none px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-colors text-sm sm:text-base uppercase items-center justify-center"
                  >
                    Plan a Visit
                  </Link>
                  <Link
                    href="#connect"
                    className="inline-flex bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-mono leading-none px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-colors text-sm sm:text-base uppercase items-center justify-center"
                  >
                    Connect With Us
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
