import Link from "next/link";
import Image from "next/image";

export default function GiveSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden">
            <Image
              src="/images/community-fellowship.jpg"
              alt="Give to Victory"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            {/* Small Label */}
            <p className="text-black/60 uppercase font-mono text-sm lg:text-base tracking-wide mb-4">
              Stewardship
            </p>

            {/* Main Heading */}
            <h2 className="text-black font-bold text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight mb-6">
              Partner With Us
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
              Generosity is a reflection of God's heart. Your partnership through giving helps us reach our community,
              support global missions, and build a place where people can encounter Jesus and grow in their faith.
              Every gift makes an eternal difference.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="#give"
                className="inline-flex bg-cyan-400 hover:bg-black hover:text-white text-black py-4 px-10 font-mono leading-none uppercase text-sm rounded-full items-center justify-center transition"
              >
                Give Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
