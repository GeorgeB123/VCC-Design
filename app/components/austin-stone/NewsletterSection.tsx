"use client";

import Image from "next/image";
import { useState } from "react";

export default function AustinStoneNewsletterSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Add your newsletter API endpoint here
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <Image
            src="/images/vcc-logo.png"
            alt="Victory Christian Centre"
            width={200}
            height={60}
            className="h-12 sm:h-14 md:h-16 w-auto mb-6"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Stay Connected
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
            Subscribe to receive weekly updates, event announcements, inspirational messages, and prayer requests directly to your inbox.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center text-gray-900 font-semibold text-lg uppercase tracking-wide">
            Thanks for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                disabled={status === "loading"}
                className="px-6 py-3 sm:py-4 rounded-full border-2 border-gray-300 focus:border-gray-900 focus:outline-none text-sm disabled:opacity-50 transition-colors"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                disabled={status === "loading"}
                className="px-6 py-3 sm:py-4 rounded-full border-2 border-gray-300 focus:border-gray-900 focus:outline-none text-sm disabled:opacity-50 transition-colors"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              disabled={status === "loading"}
              className="px-6 py-3 sm:py-4 rounded-full border-2 border-gray-300 focus:border-gray-900 focus:outline-none text-sm disabled:opacity-50 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gray-900 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors shadow-lg uppercase tracking-wide disabled:opacity-50 w-full sm:w-auto sm:mx-auto"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe to Newsletter"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
