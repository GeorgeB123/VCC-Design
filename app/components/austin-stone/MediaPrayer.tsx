"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ContentItem {
  title: string;
  description: string;
  image: string;
  buttons?: { label: string; href: string; color?: string; icon?: string }[];
  platformLogos?: boolean;
}

const contentItems: ContentItem[] = [
  {
    title: "Watch, Listen & Study",
    description:
      "Stefan and Vanessa are highly respected ministers in our city. Their practical teaching style along with their years of walking with God make each message life-changing. Our latest messages are available on our YouTube channel as well as other major podcast providers. Get the latest message outline with Bible Scripture, message notes and questions for your small group discussion.",
    image: "/images/pastors.png",
    platformLogos: true,
    buttons: [
      { label: "YouTube", href: "#youtube", icon: "youtube" },
      { label: "Podcast", href: "#podcast", icon: "podcast" },
      { label: "Spotify", href: "#spotify", icon: "spotify" },
      { label: "Apple", href: "#apple", icon: "apple" },
      { label: "Google", href: "#google", icon: "google" },
    ],
  },
  {
    title: "Online Prayer Request",
    description:
      "If you have a prayer request, click on the link which will take you to our Online form. Fill in the form and press send! Once we receive your request our dedicated team will stand in faith with you. Matthew 18:19 states, ... if two of you on earth agree about anything they ask for, it will be done for them by My Father who is in heaven.",
    image: "/images/prayer-request.jpg",
    buttons: [{ label: "Online Prayer Request", href: "#prayer", color: "bg-blue-900" }],
  },
  {
    title: "Join a Small Group",
    description:
      "Small groups are the heartbeat of our church family. Connect with others in a warm, welcoming environment where you can grow in faith, build lasting friendships, and discover your purpose. Groups meet throughout the week across various locations and times to fit your schedule.",
    image: "/images/small-group.jpg",
    buttons: [{ label: "Find a Group", href: "#small-groups", color: "bg-gray-900" }],
  },
  {
    title: "Serve & Get Involved",
    description:
      "Discover your gifts and make a difference by serving in one of our many ministry teams. Whether it's welcoming guests, leading worship, serving in kids ministry, or supporting our community outreach, there's a place for you to use your talents to impact lives.",
    image: "/images/serve-volunteer.jpg",
    buttons: [{ label: "Volunteer", href: "#volunteer", color: "bg-gray-900" }],
  },
  {
    title: "God has an abundant plan for your life",
    description:
      "At Victory Christian Centre, we believe that generous giving is an act of worship and a reflection of God's love. Your tithes and offerings support our church family, community outreach, global missions, and help us continue to spread the Gospel. When you give, you partner with us in transforming lives and advancing God's kingdom.",
    image: "/images/community-fellowship.jpg",
    buttons: [{ label: "Give Online", href: "#give", color: "bg-gray-900" }],
  },
];

const PlatformLogo = ({ platform }: { platform: string }) => {
  const logos: Record<string, JSX.Element> = {
    youtube: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    podcast: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 0 0-7 7c0 2.48 1.289 4.654 3.232 5.906l-.464 2.714h8.464l-.464-2.714A6.98 6.98 0 0 0 19 12a7 7 0 0 0-7-7zm0 3a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z"/>
      </svg>
    ),
    spotify: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
    apple: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
    google: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
  };

  return logos[platform] || null;
};

export default function MediaPrayer() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Left side - Content list */}
            <div className="lg:py-8">
              <div className="space-y-0">
                {contentItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full py-6 flex items-center justify-between text-left group"
                    >
                      <span
                        className={`text-lg md:text-xl font-semibold transition-colors ${
                          openIndex === index
                            ? "text-gray-900"
                            : "text-gray-600 group-hover:text-gray-900"
                        }`}
                      >
                        {item.title}
                      </span>
                      <span
                        className={`text-3xl transition-colors ml-4 flex-shrink-0 font-light ${
                          openIndex === index
                            ? "text-gray-900"
                            : "text-gray-600 group-hover:text-gray-900"
                        }`}
                      >
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    {/* Expandable content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index ? "max-h-96 pb-8" : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-600 leading-relaxed pr-8 mb-6">
                        {item.description}
                      </p>

                      {/* Buttons */}
                      {item.buttons && (
                        <div className="flex flex-wrap gap-3">
                          {item.platformLogos ? (
                            // Platform logos
                            item.buttons.map((button, btnIndex) => (
                              <Link
                                key={btnIndex}
                                href={button.href}
                                className="text-gray-900 hover:text-gray-600 transition-colors"
                                title={button.label}
                              >
                                {button.icon && <PlatformLogo platform={button.icon} />}
                              </Link>
                            ))
                          ) : (
                            // Regular text buttons
                            item.buttons.map((button, btnIndex) => (
                              <Link
                                key={btnIndex}
                                href={button.href}
                                className={`${
                                  button.color || "bg-gray-900"
                                } text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm hover:opacity-90 transition-all shadow-lg uppercase tracking-wide`}
                              >
                                {button.label}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spacer for the image on desktop */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* Right side - Image bleeding to edge */}
        <div className="mt-12 lg:mt-0 lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-[45%] px-4 lg:px-0">
          <div className="relative h-[500px] lg:h-full rounded-2xl lg:rounded-r-none lg:rounded-l-2xl overflow-hidden">
            {/* All images stacked, with opacity transition */}
            {contentItems.map((item, index) => (
              <Image
                key={index}
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover object-center transition-opacity duration-500 ${
                  openIndex === index ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
