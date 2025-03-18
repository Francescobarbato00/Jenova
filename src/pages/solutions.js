import { useEffect, useState } from "react";

import Chatbot from "./components/Chatbot";
import ConsultationSection from "./components/ConsultationSection";
import Footer from "./components/Footer";
import HeaderBlue from "./components/HeaderBlue";
import HeaderBlueMobile from "./components/HeaderBlueMobile"; // Import mobile
import ITServicesSection from "./components/ITServicesSection";
import ServicesGrid from "./components/ServicesGrid";
import ServicesSolutionsSection from "./components/ServicesSolutionsSection";
import StickyHeader from "./components/StickyHeader";
import StickyHeaderMobile from "./components/StickyHeaderMobile"; // Import mobile
import WhyUsSection from "./components/WhyUsSection";

export default function Solution() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Controlla la dimensione allo start
    checkScreenSize();

    // Event listener su resize
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {/* Header desktop o mobile */}
      {isMobile ? <HeaderBlueMobile /> : <HeaderBlue />}

      {/* Sticky Header desktop o mobile */}
      {isMobile ? <StickyHeaderMobile /> : <StickyHeader />}

      {/* Sezione Hero a tutta pagina */}
      <ServicesSolutionsSection />
      <ITServicesSection />
      <ServicesGrid />
      <WhyUsSection />
      <ConsultationSection />

      <Footer />
      <Chatbot />
    </>
  );
}
