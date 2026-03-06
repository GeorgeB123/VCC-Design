import Link from "next/link";
import Image from "next/image";
import { latestSermon } from "@/data/sermons";

export default function LatestMessage() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="relative h-[600px] lg:h-[700px] rounded-3xl overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/sermon.png"
            alt="Latest Message"
            fill
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="px-8 lg:px-16 w-full max-w-3xl">
              {/* Small Label */}
              <p className="text-white/80 text-sm lg:text-base font-mono uppercase tracking-wider mb-4">
                Latest Message
              </p>

              {/* Main Heading */}
              <h2 className="text-white font-bold text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-tight mb-6">
                {latestSermon.title}
              </h2>

              {/* Speaker */}
              <p className="text-white/90 text-xl lg:text-2xl mb-4">
                {latestSermon.speaker}
              </p>

              {/* Description */}
              <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-2xl mb-8">
                {latestSermon.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="#watch"
                  className="inline-flex bg-cyan-400 hover:bg-white text-black py-3 px-8 font-mono leading-none uppercase text-sm rounded-full items-center justify-center transition"
                >
                  Watch
                </Link>
                <Link
                  href="#listen"
                  className="inline-flex bg-transparent border-2 border-white hover:bg-white hover:text-black text-white py-3 px-8 font-mono leading-none uppercase text-sm rounded-full items-center justify-center transition"
                >
                  Listen
                </Link>
                <Link
                  href="#outline"
                  className="inline-flex bg-transparent border-2 border-white hover:bg-white hover:text-black text-white py-3 px-8 font-mono leading-none uppercase text-sm rounded-full items-center justify-center transition"
                >
                  Message Outline
                </Link>
              </div>

              {/* Podcast Links */}
              <div className="flex flex-col gap-3">
                <p className="text-white/60 text-sm font-mono uppercase tracking-wider">
                  Listen on Your Favorite Platform
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#apple"
                    className="text-white/80 hover:text-cyan-400 transition font-mono text-sm uppercase"
                  >
                    Apple Podcasts
                  </Link>
                  <span className="text-white/40">|</span>
                  <Link
                    href="#spotify"
                    className="text-white/80 hover:text-cyan-400 transition font-mono text-sm uppercase"
                  >
                    Spotify
                  </Link>
                  <span className="text-white/40">|</span>
                  <Link
                    href="#google"
                    className="text-white/80 hover:text-cyan-400 transition font-mono text-sm uppercase"
                  >
                    Google Podcasts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
