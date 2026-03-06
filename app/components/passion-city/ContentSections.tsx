import { team } from "@/data/team";
import { services } from "@/data/services";
import { latestSermon } from "@/data/sermons";
import { mission } from "@/data/missions";
import FourPillars from "./FourPillars";
import WhatToExpect from "./WhatToExpect";
import UpcomingEvents from "./UpcomingEvents";
import LatestMessage from "./LatestMessage";
import GiveSection from "./GiveSection";
import Leadership from "./Leadership";

export default function PassionCityContent() {
  return (
    <div className="bg-white">
      {/* Four Pillars */}
      <FourPillars />

      {/* What to Expect */}
      <WhatToExpect />

      {/* Upcoming Events */}
      <div className="hidden md:block">
        <UpcomingEvents />
      </div>

      {/* Latest Message */}
      <LatestMessage />

      {/* Give Section */}
      <GiveSection />

      {/* Leadership Section */}
      <Leadership />

    </div>
  );
}
