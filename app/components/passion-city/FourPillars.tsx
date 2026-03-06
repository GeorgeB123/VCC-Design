import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Fellowship",
    subtitle: "Small Groups / Community",
    description: "Connect with others in a welcoming environment where authentic relationships are built. Our small groups provide a space to grow together, share life, and support one another in faith.",
    image: "/images/small-group.jpg",
    link: "#groups"
  },
  {
    title: "Discipleship",
    subtitle: "Courses & Growth Pathways",
    description: "Grow deeper in your faith through structured courses and discipleship programs designed to equip you with biblical knowledge and practical tools for living victoriously in Christ.",
    image: "/images/church-friends.jpg",
    link: "#courses"
  },
  {
    title: "Ministry",
    subtitle: "Serve Teams & Volunteer Opportunities",
    description: "Discover your God-given gifts and use them to serve others. Join one of our many ministry teams and experience the joy of making a difference in the lives of those around you.",
    image: "/images/serve-volunteer.jpg",
    link: "#serve"
  },
  {
    title: "Missions",
    subtitle: "Local & Global Outreach",
    description: "Be part of something bigger as we reach our community and the world with the gospel. From local outreach to global partnerships, discover how you can impact lives for Christ.",
    image: "/images/leadership.jpg",
    link: "#missions"
  }
];

export default function FourPillars() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="bg-[#f0f1ed] rounded-3xl px-6 sm:px-12">
          {/* Large Title */}
          <div className="relative lg:mb-24">
            <h2 className="text-black italic font-bold text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tighter -translate-y-10">
              Four Pillars
            </h2>
          </div>

          {/* Pillars Grid */}
          <div className="grid gap-16 py-8 xl:-translate-y-16">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="flex flex-col-reverse lg:flex-row justify-between items-start gap-7"
              >
                {/* Left: Text Content */}
                <div className="w-full lg:w-5/12">
                  <h3 className="text-black font-bold text-4xl lg:text-5xl tracking-tight leading-tight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-black text-lg lg:text-xl tracking-tight leading-none mb-5">
                    {pillar.subtitle}
                  </p>
                  <div className="prose-lg px-0 md:px-4 pb-8">
                    <p className="text-gray-700 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <Link
                    href={pillar.link}
                    className="inline-flex bg-cyan-400 text-black hover:bg-black hover:text-white py-3 px-6 font-mono leading-none uppercase text-sm rounded-full items-center justify-center transition"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Right: Image */}
                <div className="relative overflow-hidden w-full lg:w-1/2 aspect-video rounded-lg">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
