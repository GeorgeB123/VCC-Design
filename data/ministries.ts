export interface Ministry {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export const ministries: Ministry[] = [
  {
    id: "kids",
    name: "Kids Ministry",
    description: "Engaging programs for children on Sundays and throughout the week, helping young ones grow in faith.",
  },
  {
    id: "youth",
    name: "Youth Ministry",
    description: "Dynamic youth programs designed to inspire and equip the next generation for Christ.",
  },
  {
    id: "small-groups",
    name: "Small Groups",
    description: "Connect with others in intimate settings for fellowship, prayer, and spiritual growth.",
  },
  {
    id: "adults",
    name: "Adult Ministry",
    description: "Teaching and discipleship for adults through Sunday services and special programs.",
  },
  {
    id: "courses",
    name: "Growth Courses",
    description: "Structured courses designed to deepen your understanding and strengthen your faith journey.",
  },
];

export const ministriesCategories = {
  austinStone: {
    media: [
      { name: "Sermons", href: "#sermons" },
      { name: "Live Stream", href: "#live" },
      { name: "YouTube", href: "#youtube" },
      { name: "Podcast", href: "#podcast" },
      { name: "Message Outlines", href: "#outlines" },
      { name: "Media Library", href: "#library" },
    ],
    ministries: [
      { name: "Kids Ministry", href: "#kids" },
      { name: "Youth Ministry", href: "#youth" },
      { name: "Adult Ministry", href: "#adults" },
      { name: "Small Groups", href: "#groups" },
      { name: "Families", href: "#families" },
    ],
    community: [
      { name: "Serve", href: "#serve" },
      { name: "Missions", href: "#missions" },
      { name: "Growth Courses", href: "#courses" },
    ],
    getInvolved: [
      { name: "Sunday Services", href: "#sunday" },
      { name: "New Here", href: "#new" },
      { name: "Events", href: "#events" },
    ],
  },
  passionCity: [
    { name: "Kids Ministry", href: "#kids" },
    { name: "Youth Ministry", href: "#youth" },
    { name: "Adult Ministry", href: "#adults" },
    { name: "Small Groups", href: "#groups" },
    { name: "Growth Courses", href: "#courses" },
  ],
  bayHope: [
    { name: "Kids", href: "#kids", color: "bg-blue-500" },
    { name: "Students", href: "#youth", color: "bg-green-500" },
    { name: "Adults", href: "#adults", color: "bg-purple-500" },
    { name: "Small Groups", href: "#groups", color: "bg-orange-500" },
    { name: "Special Programs", href: "#special", color: "bg-pink-500" },
  ],
};
