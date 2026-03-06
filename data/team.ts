export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const team: TeamMember[] = [
  {
    name: "Stefan & Vanessa",
    role: "Lead Pastors",
    bio: "Highly respected ministers leading Victory Christian Centre with a heart for the community and a passion for seeing lives transformed through God's love.",
    image: "/images/team/stefan-vanessa.jpg",
  },
];
