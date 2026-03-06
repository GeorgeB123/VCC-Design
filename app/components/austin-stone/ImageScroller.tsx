import Image from "next/image";

export default function AustinStoneImageScroller() {
  const images = [
    {
      url: "https://victorychristiancentre.co.nz/sites/default/files/styles/3up_350x263px_large/public/2020-06/Untitled%20design%20%287%29.png?itok=qPWQ9XG5",
      alt: "VCC Community 1",
    },
    {
      url: "https://victorychristiancentre.co.nz/sites/default/files/styles/3up_350x263px_large/public/2021-03/generic-website-600x450%20%2815%29.png?itok=UMHQqxcM",
      alt: "VCC Community 2",
    },
    {
      url: "https://victorychristiancentre.co.nz/sites/default/files/styles/3up_350x263px_large/public/2021-03/generic-website-600x450%20%2814%29.png?itok=7ufnCncS",
      alt: "VCC Community 3",
    },
    {
      url: "https://victorychristiancentre.co.nz/sites/default/files/styles/large/public/2025-10/5%20B%26S%20lunch.jpg?itok=HJ1Gb7VK",
      alt: "VCC Community 4",
    },
    {
      url: "https://victorychristiancentre.co.nz/sites/default/files/styles/large/public/2021-11/_KCP2365.1jpg.jpg?itok=sEjJLJgk",
      alt: "VCC Community 5",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="mb-6 break-inside-avoid"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
