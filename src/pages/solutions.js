import Chatbot from './components/Chatbot';
import ConsultationSection from './components/ConsultationSection';
import Footer from './components/Footer';
import HeaderBlue from './components/HeaderBlue';
import ITServicesSection from './components/ITServicesSection';
import ServicesGrid from './components/ServicesGrid';
import ServicesSolutionsSection from './components/ServicesSolutionsSection';

// IMPORT DELLO STICKY HEADER
import StickyHeader from './components/StickyHeader';
import WhyUsSection from './components/WhyUsSection';


export default function Solution() {
  return (
    <>
      {/* Header originale (trasparente, in assoluto) */}
      <HeaderBlue />

      {/* Header "sticky" che compare dopo lo scroll */}
      <StickyHeader />

      {/* Sezione Hero a tutta pagina */}
       <ServicesSolutionsSection />
      <ITServicesSection />
      <ServicesGrid />
      <WhyUsSection />
      <ConsultationSection />
      <Footer />
      <Chatbot />
      {/* Altri componenti o contenuti della pagina */}
    </>
  );
}
