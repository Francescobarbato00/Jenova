import { useEffect, useState } from "react";
import AwardWinningServices from "./components/AwardWinningServices";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";
import FundedCompaniesBanner from "./components/FundedCompaniesBanner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LatestInsight from "./components/LatestInsight";
import ScrollingLogos from "./components/ScrollingLogos";
import TeamSection from "./components/TeamSection";
import TeamShowcase from "./components/TeamShowcase";
import WhyChooseUs from "./components/WhyChooseUs";
import StickyHeader from "./components/StickyHeader";
import SelectedProjects from "./components/SelectedProjects";
import StackedCards from "./components/StackedCards";
import Chatbot from "./components/Chatbot";
import HeaderMobile from "./components/HeaderMobile";
import StickyHeaderMobile from "./components/StickyHeaderMobile";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      {isMobile ? <StickyHeaderMobile /> : <StickyHeader />}

      <Hero />
      <WhyChooseUs />
      <ScrollingLogos />
      <TeamSection />
      <AwardWinningServices />
      <SelectedProjects />
      <StackedCards />
      <FundedCompaniesBanner />
      <TeamShowcase />
      <LatestInsight />
      <ContactBanner />
      <Footer />
      <Chatbot />
    </>
  );
}
