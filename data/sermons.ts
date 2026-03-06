export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  description: string;
  videoUrl?: string;
  thumbnail?: string;
}

export const latestSermon: Sermon = {
  id: "latest",
  title: "Latest Message",
  speaker: "Stefan & Vanessa",
  date: "Recent",
  description: "Experience powerful teaching that brings freedom, healing, and prosperity through God's promises.",
  thumbnail: "/images/sermons/latest.jpg",
};

export const mediaResources = [
  {
    name: "YouTube Channel",
    description: "Watch our latest sermons and special messages",
    icon: "video",
    href: "#youtube",
  },
  {
    name: "Podcast",
    description: "Listen on Spotify, Apple, or Google Podcasts",
    icon: "podcast",
    href: "#podcast",
  },
  {
    name: "Message Outlines",
    description: "Scripture references and discussion questions",
    icon: "document",
    href: "#outlines",
  },
  {
    name: "Media Library",
    description: "Access our complete archive of teachings",
    icon: "library",
    href: "#library",
  },
];
