import { useEffect, useState } from "react";
import BetterTogetherSection from "./components/BetterTogetherSection";
import Chatbot from "./components/Chatbot";
import ConsultationSection from "./components/ConsultationSection";
import CoreValuesSection from "./components/CoreValuesSection";
import Footer from "./components/Footer";
import HeaderBlue from "./components/HeaderBlue";
import HeaderBlueMobile from "./components/HeaderBlueMobile"; // Import mobile header
import JoinUsSection from "./components/JoinUsSection";
import StickyHeader from "./components/StickyHeader";
import StickyHeaderMobile from "./components/StickyHeaderMobile"; // Import mobile sticky header
import TimelineSection from "./components/TimelineSection";
import WhyUsSection from "./components/WhyUsSection";

export default function About() {
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
      {/* Header (versione mobile o desktop in base allo schermo) */}
      {isMobile ? <HeaderBlueMobile /> : <HeaderBlue />}

      {/* Sticky Header (versione mobile o desktop in base allo schermo) */}
      {isMobile ? <StickyHeaderMobile /> : <StickyHeader />}

      {/* Sezione Hero a tutta pagina e altre sezioni */}
      <TimelineSection />
      <CoreValuesSection />
      <JoinUsSection />
      <BetterTogetherSection />
      <ConsultationSection />
      <Footer />
      <Chatbot />
    </>
  );
}
