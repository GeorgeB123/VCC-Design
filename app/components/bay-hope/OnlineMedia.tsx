import Image from "next/image";
import Link from "next/link";

interface MediaCard {
  type: string;
  title: string;
  description: string;
  image: string;
  link: string;
  icon: "video" | "audio" | "article" | "live";
}

const mediaCards: MediaCard[] = [
  {
    type: "WATCH",
    title: "Latest Sermons",
    description: "Watch our most recent messages and sermon series on demand. Catch up on what you missed or revisit your favorites.",
    image: "/images/sermon.png",
    link: "#watch",
    icon: "video",
  },
  {
    type: "LISTEN",
    title: "Podcast",
    description: "Listen to teaching and conversations on the go. Available on all major podcast platforms.",
    image: "/images/church-friends.jpg",
    link: "#podcast",
    icon: "audio",
  },
  {
    type: "READ",
    title: "Blog & Resources",
    description: "Dive deeper into biblical truth with articles, devotionals, and study guides from our team.",
    image: "/images/welcome-background.jpg",
    link: "#blog",
    icon: "article",
  },
  {
    type: "LIVE",
    title: "Live Stream",
    description: "Join us live every Sunday at 10:30am. Experience church from anywhere in real-time.",
    image: "/images/small-group.jpg",
    link: "#live",
    icon: "live",
  },
];

const MediaIcon = ({ type }: { type: MediaCard["icon"] }) => {
  switch (type) {
    case "video":
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      );
    case "audio":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      );
    case "article":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case "live":
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3" />
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
      );
  }
};

export default function OnlineMedia() {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="bg-[#6b8e99] px-6 py-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              CONNECT ONLINE
            </span>
          </div>
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Experience Church Anywhere
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Whether you're at home, on the go, or can't make it in person, stay connected with Victory Christian Centre through our online platforms. Watch, listen, and engage with content that helps you grow in your faith.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-6 lg:px-8 pb-8 min-w-max">
          <div className="ml-[max(1rem,calc((100vw-80rem)/2))]"></div>

          {mediaCards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="group relative w-[372px] h-[501px] overflow-hidden flex-shrink-0 p-6 flex items-end transition-transform hover:scale-[1.02]"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="372px"
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Content Card */}
              <div className="relative bg-white p-6 flex-1 flex flex-col gap-6 z-10 shadow-xl">
                {/* Icon & Type */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#6b8e99] flex items-center justify-center text-white">
                    <MediaIcon type={card.icon} />
                  </div>
                  <span className="text-xs font-bold text-[#34495e] uppercase tracking-wider">
                    {card.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#6b8e99] transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-sm flex-1">
                  {card.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-[#6b8e99] font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
              </div>
            </Link>
          ))}

          <div className="mr-[max(1rem,calc((100vw-80rem)/2))]"></div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="text-end mt-8 max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
          Scroll to explore →
        </p>
      </div>
    </section>
  );
}
