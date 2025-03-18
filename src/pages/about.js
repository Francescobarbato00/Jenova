import BetterTogetherSection from './components/BetterTogetherSection';
import ConsultationSection from './components/ConsultationSection';
import CoreValuesSection from './components/CoreValuesSection';
import Footer from './components/Footer';
import HeaderBlue from './components/HeaderBlue';
import JoinUsSection from './components/JoinUsSection';

// IMPORT DELLO STICKY HEADER
import StickyHeader from './components/StickyHeader';
import TimelineSection from './components/TimelineSection';
import WhyUsSection from './components/WhyUsSection';


export default function About() {
  return (
    <>
      {/* Header originale (trasparente, in assoluto) */}
      <HeaderBlue />

      {/* Header "sticky" che compare dopo lo scroll */}
      <StickyHeader />

      {/* Sezione Hero a tutta pagina */}
     <TimelineSection />
      <CoreValuesSection />
      <JoinUsSection />
     <BetterTogetherSection />
     <ConsultationSection />
      <Footer />
      {/* Altri componenti o contenuti della pagina */}
    </>
  );
}
