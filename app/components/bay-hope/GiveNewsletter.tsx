"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GiveNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/welcome-background.jpg"
        alt="Background"
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Heavy Color Overlay */}
      <div className="absolute inset-0 bg-[#34495e]/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 bg-white/10 backdrop-blur-sm shadow-lg overflow-hidden border border-white/20">
          {/* Left Panel - Give */}
          <div className="p-12 lg:p-16 flex flex-col justify-center border-r border-white/20">
            <div className="max-w-md">
              <div className="bg-white/20 px-6 py-3 mb-8 inline-block">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  GENEROSITY
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Give Online
              </h2>

              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Your generosity helps us share the gospel, serve our community, and support
                missions around the world. Thank you for your faithful giving.
              </p>

              <Link
                href="#give"
                className="inline-flex items-center bg-white text-[#34495e] px-10 py-4 text-base font-medium hover:bg-white/90 transition-colors shadow-lg group"
              >
                GIVE NOW
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

          {/* Right Panel - Newsletter */}
          <div className="p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md">
              <div className="bg-white/20 px-6 py-3 mb-8 inline-block">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  STAY CONNECTED
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Newsletter
              </h2>

              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Get weekly updates, event announcements, and encouraging content
                delivered straight to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-6 py-4 border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center bg-white text-[#34495e] px-10 py-4 text-base font-medium hover:bg-white/90 transition-colors shadow-lg group w-full justify-center"
                >
                  SUBSCRIBE
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
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
