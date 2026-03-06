"use client";

import Link from "next/link";
import Image from "next/image";
import { upcomingEvents } from "@/data/events";

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-8 lg:px-12 relative">
        <div className="bg-[#f0f1ed] rounded-3xl relative">
          {/* Large Title - positioned absolutely and translated up */}
          <div className="absolute top-0 inset-x-0 px-6 md:px-16 lg:px-24 -translate-y-[60%]">
            <h2 className="text-black font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-none italic">
              Upcoming Events
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col pt-16 lg:pt-24 px-4 md:px-12 lg:px-16 pb-12 lg:pb-16">
            {/* Events List */}
            <div className="flex flex-col w-full">
              {upcomingEvents.map((event) => (
                <Link
                  key={event.id}
                  href={event.link}
                  className="relative flex items-start 2xl:items-center gap-2 md:gap-6 w-full py-4 px-2 md:px-4 rounded-[2rem] focus:outline-none overflow-hidden group hover:bg-cyan-400 transition-colors duration-300"
                >
                  {/* Focus ring */}
                  <div className="absolute inset-0 border border-cyan-400 rounded-[2rem] opacity-0 group-focus-visible:opacity-100 transition"></div>

                  {/* Image with Date Badge */}
                  <div className="relative w-16 md:w-28 2xl:w-32 aspect-square rounded-xl md:rounded-3xl overflow-hidden shrink-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    {/* Date Badge Overlay */}
                    <div className="absolute top-2 right-2 bg-white rounded-lg px-2 py-1 shadow-md">
                      <div className="text-black text-lg md:text-xl font-bold leading-none">
                        {event.date.day}
                      </div>
                      <div className="text-[10px] font-mono uppercase opacity-60 leading-none mt-0.5">
                        {event.date.month}
                      </div>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="relative flex flex-col gap-2 lg:gap-0 flex-1">
                    <div className="flex flex-col lg:flex-row">
                      {/* Title and Time */}
                      <div className="relative flex flex-col flex-1 text-left">
                        <h3 className="text-black font-bold text-xl lg:text-2xl tracking-tight leading-tight mb-2">
                          {event.title}
                        </h3>
                        <p className="text-black text-lg lg:text-xl tracking-tight leading-none mb-2">
                          {event.time}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-start flex-wrap gap-3">
                          <div className="bg-white rounded-full px-2 sm:px-3 sm:py-0.5">
                            <span className="text-[11px] sm:text-xs font-mono uppercase leading-none">
                              {event.category}
                            </span>
                          </div>
                          <div className="bg-white rounded-full px-2 sm:px-3 sm:py-0.5">
                            <span className="text-[11px] sm:text-xs font-mono uppercase leading-none">
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-800 leading-normal text-base tracking-wide mt-0 mb-8 last:mb-0 hidden sm:block">
                      {event.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Events Link */}
            <div className="flex justify-center mt-8">
              <Link
                href="#events"
                className="inline-flex bg-cyan-400 text-black hover:bg-black hover:text-white py-3 px-6 font-mono leading-none uppercase text-sm rounded-full items-center justify-center transition"
              >
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
