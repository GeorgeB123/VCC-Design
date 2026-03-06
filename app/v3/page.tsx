import StyleSwitcher from "../components/StyleSwitcher";
import BayHopeHeader from "../components/bay-hope/Header";
import BayHopeHero from "../components/bay-hope/Hero";
import InfoBanner from "../components/bay-hope/InfoBanner";
import GetToKnow from "../components/bay-hope/GetToKnow";
import LatestSermon from "../components/bay-hope/LatestSermon";
import PlanYourVisit from "../components/bay-hope/PlanYourVisit";
import WhatToExpect from "../components/bay-hope/WhatToExpect";
import EventsCalendar from "../components/bay-hope/EventsCalendar";
import OnlineMedia from "../components/bay-hope/OnlineMedia";
import GiveNewsletter from "../components/bay-hope/GiveNewsletter";
import BayHopeContent from "../components/bay-hope/ContentSections";
import BayHopeFooter from "../components/bay-hope/Footer";

export default function BayHopeStylePage() {
  return (
    <div className="min-h-screen bg-white">
      <StyleSwitcher />
      <BayHopeHeader />
      <BayHopeHero />
      <InfoBanner />
      <GetToKnow />
      <LatestSermon />
      <PlanYourVisit />
      <WhatToExpect />
      <EventsCalendar />
      <OnlineMedia />
      <GiveNewsletter />
      <BayHopeFooter />
    </div>
  );
}
