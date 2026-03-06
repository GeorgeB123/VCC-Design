import StyleSwitcher from "./components/StyleSwitcher";
import AustinStoneHeader from "./components/austin-stone/Header";
import AustinStoneHero from "./components/austin-stone/Hero";
import AustinStoneWhatToExpect from "./components/austin-stone/WhatToExpect";
import AustinStonePillars from "./components/austin-stone/Pillars";
import AustinStoneEvents from "./components/austin-stone/Events";
import AustinStoneMediaPrayer from "./components/austin-stone/MediaPrayer";
import AustinStoneWelcomeSection from "./components/austin-stone/WelcomeSection";
import AustinStoneNewsletterSection from "./components/austin-stone/NewsletterSection";
import AustinStoneFooter from "./components/austin-stone/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <StyleSwitcher />
      <AustinStoneHeader />
      <AustinStoneHero />
      <AustinStoneWhatToExpect />
      <AustinStonePillars />
      <AustinStoneEvents />
      <AustinStoneMediaPrayer />
      <AustinStoneWelcomeSection />
      <AustinStoneNewsletterSection />
      <AustinStoneFooter />
    </div>
  );
}
