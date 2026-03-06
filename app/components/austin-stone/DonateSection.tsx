import Link from "next/link";
import Image from "next/image";

export default function AustinStoneDonateSection() {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row sm:items-center justify-center md:justify-between gap-6 sm:gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/vcc-logo.png"
            alt="Victory Christian Centre"
            width={200}
            height={60}
            className="h-12 sm:h-14 md:h-16 w-auto"
          />
        </div>

        {/* Button */}
        <div className="flex sm:items-center w-full md:w-auto md:justify-end">
          <Link
            href="#give"
            className="bg-gray-900 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors shadow-lg uppercase tracking-wide whitespace-nowrap sm:w-auto text-center"
          >
            GIVE NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
