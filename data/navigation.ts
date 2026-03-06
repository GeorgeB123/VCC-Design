export interface NavItem {
  name: string;
  href: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigationStructure = {
  planAVisit: {
    title: "Plan a Visit",
    items: [
      { name: "New Here?", href: "#new" },
      { name: "Service Times & Location", href: "#service-times" },
      { name: "What to Expect", href: "#what-to-expect" },
      { name: "Families & Kids", href: "#families" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
  media: {
    title: "Media",
    items: [
      { name: "Watch Live", href: "#live" },
      { name: "TV Broadcasts", href: "#tv" },
      { name: "Messages", href: "#sermons" },
      { name: "Podcast", href: "#podcast" },
      { name: "Message Outlines", href: "#outlines" },
    ],
  },
  connect: {
    title: "Connect",
    items: [
      { name: "Join a Small Group", href: "#small-groups" },
      { name: "Events Calendar", href: "#events" },
      { name: "New Believers / Next Steps", href: "#next-steps" },
      { name: "Prayer", href: "#prayer" },
      { name: "Online Community", href: "#community" },
    ],
  },
  grow: {
    title: "Grow",
    items: [
      { name: "Courses", href: "#courses" },
      { name: "Resources", href: "#resources" },
    ],
  },
  serve: {
    title: "Serve",
    items: [
      { name: "Serve Teams", href: "#serve-teams" },
      { name: "Ministries", href: "#ministries" },
      { name: "Volunteer Interest Form", href: "#volunteer" },
    ],
  },
  missions: {
    title: "Missions",
    items: [
      { name: "Local Outreach", href: "#local" },
      { name: "Global Missions", href: "#global" },
      { name: "Get Involved", href: "#missions-involved" },
    ],
  },
  about: {
    title: "About",
    items: [
      { name: "Our Story", href: "#story" },
      { name: "Leadership & Staff", href: "#leadership" },
      { name: "Vision & Values", href: "#vision" },
      { name: "What We Believe", href: "#beliefs" },
      { name: "Statement of Faith", href: "#faith" },
    ],
  },
};
