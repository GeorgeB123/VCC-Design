export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  location?: string;
}

export interface UpcomingEvent {
  id: number;
  title: string;
  date: {
    day: string;
    month: string;
  };
  time: string;
  description: string;
  category: string;
  location: string;
  image: string;
  link: string;
}

export const events: Event[] = [
  {
    id: "sunday-service",
    title: "Sunday Service",
    date: "Every Sunday",
    time: "10:30am - 12:00 noon",
    description: "Join us for worship, teaching, and fellowship. Kids and youth programs available.",
    location: "Victory Christian Centre, Hutt City",
  },
  {
    id: "small-groups",
    title: "Small Groups",
    date: "Weekly",
    time: "Various times",
    description: "Connect with others in intimate settings throughout the week.",
  },
  {
    id: "growth-courses",
    title: "Growth Courses",
    date: "Ongoing",
    time: "TBA",
    description: "Structured courses to deepen your faith and understanding.",
  },
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 1,
    title: "Sunday Service",
    date: {
      day: "09",
      month: "Mar"
    },
    time: "9:30a - 11:00a",
    description: "Join us for powerful worship and biblical teaching that will strengthen your faith and inspire you to live victoriously.",
    category: "General",
    location: "Wellington",
    image: "/images/sermon.png",
    link: "#service"
  },
  {
    id: 2,
    title: "Small Group Connect Night",
    date: {
      day: "12",
      month: "Mar"
    },
    time: "7:00p - 9:00p",
    description: "Explore our small groups and find the perfect community to grow in faith and build lasting relationships.",
    category: "Community",
    location: "Wellington",
    image: "/images/small-group.jpg",
    link: "#groups"
  },
  {
    id: 3,
    title: "Youth Night",
    date: {
      day: "14",
      month: "Mar"
    },
    time: "6:30p - 8:30p",
    description: "Dynamic youth gathering with worship, teaching, and connection for students to encounter God and build friendships.",
    category: "Youth",
    location: "Wellington",
    image: "/images/church-friends.jpg",
    link: "#youth"
  }
];
