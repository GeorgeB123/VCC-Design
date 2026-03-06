import Image from "next/image";
import Link from "next/link";

export default function AustinStonePillars() {
  const pillars = [
    {
      title: "Connecting in Community",
      description:
        "Building authentic relationships through small groups, events, and gatherings where faith comes alive in everyday life.",
      image: "https://victorychristiancentre.co.nz/sites/default/files/styles/large/public/2021-11/_KCP2365.1jpg.jpg?itok=sEjJLJgk",
      link: "#connect",
      size: "large", // Takes up more space
    },
    {
      title: "Growing in Faith",
      description:
        "Equipping believers with biblical teaching, practical courses, and resources for spiritual growth and maturity.",
      image: "https://victorychristiancentre.co.nz/sites/default/files/styles/3up_350x263px_large/public/2021-03/generic-website-600x450%20%2815%29.png?itok=UMHQqxcM",
      link: "#grow",
      size: "medium",
    },
    {
      title: "Serving Together",
      description:
        "Using our gifts and talents to serve one another, our community, and the world with the love of Christ.",
      image: "https://victorychristiancentre.co.nz/sites/default/files/styles/3up_350x263px_large/public/2020-06/Untitled%20design%20%287%29.png?itok=qPWQ9XG5",
      link: "#serve",
      size: "medium",
    },
  ];

  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <Link
              key={index}
              href={pillar.link}
              className={`relative overflow-hidden rounded-lg group ${
                pillar.size === "large" ? "md:row-span-2 min-h-[500px]" : "min-h-[400px]"
              }`}
            >
              {/* Background Image */}
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>

              {/* Text Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
