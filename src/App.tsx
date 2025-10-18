import { Routes, Route } from "react-router-dom";
import AboutSection from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import HeroSection from "./components/hero-section";
import { MediaSection } from "./components/media-section";
import { TrainersSection } from "./components/trainers-section";
import { TransformationSection } from "./components/transformation-section";
import { WhatsAppFloat } from "./components/whatsapp-float";

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TransformationSection />
        <TrainersSection />
        {/* <OffersSection /> removed */}
        <MediaSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* PrivacyPage and TermsPage routes removed */}
    </Routes>
  );
}
