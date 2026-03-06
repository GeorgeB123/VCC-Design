import { services } from "@/data/services";
import Image from "next/image";

export default function AustinStoneHero() {
  return (
    <div className="relative lg:min-h-[100vh] bg-gray-900">
      {/* Background Image */}
      <Image
        src="/images/church-friends.jpg"
        alt="Victory Christian Centre Community"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full lg:min-h-[100vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:min-h-[100vh]">
            {/* Left Column - Main Text */}
            <div className="lg:col-span-2 text-white mt-12 flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-bold leading-tight mb-8">
                We Are
                <br />
                Victory Christian Centre
              </h1>

              <p className="text-xl md:text-2xl mb-12 max-w-2xl">
                You're invited to join us this Sunday in {services.location.city}.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#visit"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg uppercase tracking-wide"
                >
                  VISIT
                </a>
                <a
                  href="#involved"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors uppercase tracking-wide"
                >
                  GET INVOLVED
                </a>
              </div>
            </div>

            {/* Right Column - Sermon Card */}
            <div className="lg:col-span-1 lg:flex-1 flex items-end justify-end">
              <a href="#sermons" className="block w-full max-w-sm group">
                <h6 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
                  Watch the latest sermon
                </h6>
                <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  {/* Sermon Image */}
                  <Image
                    src="/images/sermon.png"
                    alt="Latest Sermon"
                    fill
                    className="object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Pulsing circle background */}
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>

                      {/* Main play button */}
                      <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-teal-700 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
