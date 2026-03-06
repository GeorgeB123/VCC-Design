import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export default function BayHopeHero() {
  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/hero-background.png"
        alt="Victory Christian Centre Community"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto pt-40 lg:pt-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
          Come As You Are
        </h1>

        <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether you're looking for a gospel-centered church near you, looking for community,
          or looking for answers, you're welcome at Victory Christian Centre in {services.location.city}.
        </p>

        <Link
          href="#visit"
          className="inline-flex items-center bg-[#6b8e99] text-white px-10 py-4 text-base font-medium hover:bg-[#5a7a85] transition-colors shadow-lg group"
        >
          JOIN US ON SUNDAY
          <svg
            className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
