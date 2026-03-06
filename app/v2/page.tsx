import StyleSwitcher from "../components/StyleSwitcher";
import PassionCityHeader from "../components/passion-city/Header";
import PassionCityHero from "../components/passion-city/Hero";
import PassionCityContent from "../components/passion-city/ContentSections";
import PassionCityFooter from "../components/passion-city/Footer";

export default function PassionStylePage() {
  return (
    <div className="min-h-screen bg-white">
      <StyleSwitcher />
      <PassionCityHeader />
      <main>
        <PassionCityHero />
        <PassionCityContent />
      </main>
      <PassionCityFooter />
    </div>
  );
}
