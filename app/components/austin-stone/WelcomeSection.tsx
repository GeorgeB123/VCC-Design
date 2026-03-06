import Link from "next/link";
import Image from "next/image";

export default function AustinStoneWelcomeSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl min-h-[500px] flex items-center">
          {/* Background Image */}
          <Image
            src="/images/welcome-background.jpg"
            alt="Welcome to VCC"
            fill
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gray-900/70"></div>

          {/* Content */}
          <div className="relative z-10 w-full py-20 px-8 md:px-16 lg:px-24">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                You are welcome here.
              </h2>

              <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
                Are you new to faith? Have you been following Jesus for a while? Or are you somewhere in between? Come learn about Jesus alongside us!
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#involved"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg uppercase tracking-wide"
                >
                  GET INVOLVED
                </Link>
                <Link
                  href="#contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors uppercase tracking-wide"
                >
                  FIND US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
