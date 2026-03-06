import Link from "next/link";

export default function AustinStoneEvents() {
  const events = [
    {
      month: "Mar",
      day: "16",
      category: "SERMON SERIES",
      title: "Faith in Action",
      link: "#sermons",
    },
    {
      month: "Mar",
      day: "23",
      category: "EVENT",
      title: "Small Groups Launch",
      link: "#events",
    },
    {
      month: "Apr",
      day: "6",
      category: "COMMUNITY",
      title: "Easter Celebration Service",
      link: "#events",
    },
    {
      month: "Apr",
      day: "20",
      category: "EVENT",
      title: "Leadership Conference",
      link: "#events",
    },
  ];

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Header */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What's Happening
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's walk with Jesus together! Check out our upcoming classes, events, and more.
            </p>
            <Link
              href="#events"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors shadow-lg uppercase tracking-wide"
            >
              GET INVOLVED
            </Link>
          </div>

          {/* Right Side - Events List */}
          <div className="space-y-6">
            {events.map((event, index) => (
              <Link
                key={index}
                href={event.link}
                className="flex items-center gap-8 group border-b border-gray-300 pb-6 last:border-b-0"
              >
                {/* Date */}
                <div className="text-center flex-shrink-0">
                  <div className="text-lg font-semibold text-gray-900">
                    {event.month}
                  </div>
                  <div className="text-4xl font-bold text-gray-900">
                    {event.day}
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <p className="text-xs font-semibold tracking-widest text-gray-500 mb-2">
                    {event.category}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                    {event.title}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-gray-900 group-hover:translate-x-2 transition-transform"
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
