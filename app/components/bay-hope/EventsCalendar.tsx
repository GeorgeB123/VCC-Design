import Image from "next/image";
import Link from "next/link";

interface Event {
  date: string;
  month: string;
  title: string;
  description: string;
  time: string;
  categories: string[];
}

const upcomingEvents: Event[] = [
  {
    date: "15",
    month: "APR",
    title: "Sunday Service",
    description: "Join us for powerful worship and biblical teaching that will strengthen your faith and inspire you to live victoriously.",
    time: "10:30a - 12:00p",
    categories: ["GENERAL", "HUTT CITY"],
  },
  {
    date: "22",
    month: "APR",
    title: "Small Group Connect Night",
    description: "Explore our small groups and find the perfect community to grow in faith and build lasting relationships.",
    time: "7:00p - 9:00p",
    categories: ["COMMUNITY", "HUTT CITY"],
  },
  {
    date: "06",
    month: "MAY",
    title: "Baptism Sunday",
    description: "Celebrate with those taking their next step of faith through water baptism.",
    time: "10:30a Service",
    categories: ["SPECIAL", "HUTT CITY"],
  },
  {
    date: "20",
    month: "MAY",
    title: "Community Serve Day",
    description: "Join us as we serve our local community through various outreach projects and make a difference together.",
    time: "9:00a - 2:00p",
    categories: ["OUTREACH", "HUTT CITY"],
  },
];

export default function EventsCalendar() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Featured Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/community-fellowship.jpg"
                alt="Upcoming Events"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Events List */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Upcoming Events
              </h2>
            </div>

            {/* Events */}
            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                  {/* Date */}
                  <div className="flex items-baseline gap-4 mb-3">
                    <div className="text-4xl font-bold text-[#6b8e99]">
                      {event.date}
                    </div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {event.month}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>

                  {/* Time */}
                  <p className="text-gray-600 mb-3">
                    {event.time}
                  </p>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2">
                    {event.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="px-4 py-1 bg-gray-100 text-gray-700 text-xs font-semibold uppercase tracking-wide"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
