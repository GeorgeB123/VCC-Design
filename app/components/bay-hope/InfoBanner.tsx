import { services } from "@/data/services";
import Link from "next/link";

export default function InfoBanner() {
  return (
    <div className="relative bg-[#34495e] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
          {/* Service Times */}
          <Link
            href="#service-times"
            className="hover:opacity-80 transition-opacity flex items-center gap-3"
          >
            <span className="text-sm font-medium tracking-wide">
              SUNDAYS AT {services.sunday.time.split(' - ')[0].toUpperCase()}
            </span>
          </Link>

          {/* Diamond Separator */}
          <span className="hidden md:block text-white opacity-50">◆</span>

          {/* Get Directions */}
          <Link
            href="#directions"
            className="hover:opacity-80 transition-opacity flex items-center gap-3"
          >
            <span className="text-sm font-medium tracking-wide">
              GET DIRECTIONS
            </span>
          </Link>

          {/* Diamond Separator */}
          <span className="hidden md:block text-white opacity-50">◆</span>

          {/* How Can We Help */}
          <Link
            href="#contact"
            className="hover:opacity-80 transition-opacity flex items-center gap-3"
          >
            <span className="text-sm font-medium tracking-wide">
              HOW CAN WE HELP?
            </span>
          </Link>
        </div>
      </div>

      {/* Arrow pointing down */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full">
        <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#34495e]"></div>
      </div>
    </div>
  );
}
