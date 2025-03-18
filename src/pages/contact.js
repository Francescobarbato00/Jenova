import ConsultationSection from './components/ConsultationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HeaderBlue from './components/HeaderBlue';
import OfficeLocations from './components/OfficeLocations';
// IMPORT DELLO STICKY HEADER
import StickyHeader from './components/StickyHeader';


export default function Contact() {
  return (
    <>
      {/* Header originale (trasparente, in assoluto) */}
      <HeaderBlue />

      {/* Header "sticky" che compare dopo lo scroll */}
      <StickyHeader />

      {/* Sezione Hero a tutta pagina */}
      <ContactSection />
      <OfficeLocations />
      <ConsultationSection />
      <Footer />
      {/* Altri componenti o contenuti della pagina */}
    </>
  );
}
