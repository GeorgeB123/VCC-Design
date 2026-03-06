import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export default function PlanYourVisit() {
  return (
    <section className="relative bg-[#34495e] pt-24">
      {/* Diagonal top edge */}
      <div className="absolute top-0 left-0 right-0" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative lg:top-[100px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Plan Your Visit
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            We'd love to have you join us this Sunday at Victory Christian Centre in {services.location.city}
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Service Times */}
          <div className="bg-white overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image
                src="/images/church-friends.jpg"
                alt="Sunday Service"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                SUNDAY SERVICE
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Join us every Sunday for worship, teaching, and fellowship. Our services are
                designed to help you connect with God and with others.
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6b8e99]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{services.sunday.time}</span>
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6b8e99]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {services.location.city}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: What to Expect */}
          <div className="bg-white overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image
                src="/images/welcome-background.jpg"
                alt="What to Expect"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                WHAT TO EXPECT
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our services last about 90 minutes and include contemporary worship,
                practical biblical teaching, and time for prayer. Come as you are -
                we're a casual, welcoming community where everyone belongs.
              </p>
            </div>
          </div>

          {/* Card 3: Families & Kids */}
          <div className="bg-white overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image
                src="/images/small-group.jpg"
                alt="Families and Kids"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                FAMILIES & KIDS
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We have engaging programs for children of all ages during our
                Sunday services. Kids sign-in starts at {services.sunday.kidsYouthSignIn}.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated team creates a safe, fun environment where children
                can learn about God's love.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 mb-24">
          <Link
            href="#directions"
            className="inline-flex items-center bg-white text-[#34495e] px-10 py-4 text-base font-medium hover:bg-gray-100 transition-colors shadow-lg group"
          >
            GET DIRECTIONS
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
      {/* Diagonal top edge */}
      <div className="bg-transparent relative z-200" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"
            fill="#34495e"
          />
        </svg>
      </div>
    </section>
  );
}
