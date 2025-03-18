import { useEffect, useState } from "react";
import Chatbot from "./components/Chatbot";
import ConsultationSection from "./components/ConsultationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeaderBlue from "./components/HeaderBlue";
import HeaderBlueMobile from "./components/HeaderBlueMobile"; // Import versione mobile
import OfficeLocations from "./components/OfficeLocations";
import StickyHeader from "./components/StickyHeader";
import StickyHeaderMobile from "./components/StickyHeaderMobile"; // Import versione mobile

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Verifica iniziale e su resize
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {/* Header: mobile o desktop */}
      {isMobile ? <HeaderBlueMobile /> : <HeaderBlue />}

      {/* Sticky Header: mobile o desktop */}
      {isMobile ? <StickyHeaderMobile /> : <StickyHeader />}

      {/* Contenuto della pagina */}
      <ContactSection />
      <OfficeLocations />
      <ConsultationSection />
      <Footer />
      <Chatbot />
    </>
  );
}
