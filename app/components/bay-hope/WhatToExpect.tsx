"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AccordionItem {
  title: string;
  content: string;
}

const accordionItems: AccordionItem[] = [
  {
    title: "Arrive",
    content: "Service starts at 10:30am. We recommend arriving 15 minutes early to find parking, grab a coffee, and get settled. Our welcome team will be ready to greet you and answer any questions.",
  },
  {
    title: "Bring Your Kids",
    content: "Kids sign-in starts at 10:00am. We have engaging, age-appropriate programs for children during the service. Our dedicated team creates a safe, fun environment where kids can learn about God's love.",
  },
  {
    title: "Singing",
    content: "We worship together through contemporary music that connects us with God. Our worship team leads us in songs that are both uplifting and meaningful, creating space for authentic worship.",
  },
  {
    title: "Bible Teaching",
    content: "Our teaching is practical, relevant, and centered on the gospel. Expect about 30-40 minutes of biblical teaching that applies to everyday life and helps you grow in your faith journey.",
  },
  {
    title: "Stay and Chat",
    content: "After the service, stick around for coffee and conversation. It's a great time to meet new people, connect with our pastoral team, and get to know the Victory Christian Centre family.",
  },
];

export default function WhatToExpect() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gray-900 mt-[-40px] sm:mt-[-60px] md:mt-[-80px] lg:mt-[-100px] xl:mt-[-140px]">
      {/* Background Image */}
      <Image
        src="/images/church-friends.jpg"
        alt="Sunday Service"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pt-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            What You Can Expect on Sundays
          </h2>
          <p className="text-xl text-white/90">
            Whether in person or online, we'll save a place for you!
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {accordionItems.map((item, index) => (
            <div key={index} className="border-b border-white/30">
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-xl lg:text-2xl font-semibold text-white">
                  {item.title}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    // Minus icon when open
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    // Checkmark icon when closed
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </button>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-white/90 leading-relaxed text-lg">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="#new-here"
            className="inline-flex items-center bg-[#6b8e99] text-white px-10 py-4 text-base font-medium hover:bg-[#5a7a85] transition-colors shadow-lg group"
          >
            LEARN MORE
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
    </section>
  );
}
