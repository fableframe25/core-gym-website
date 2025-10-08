import AboutSection from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { MediaSection } from "./components/media-section";
import { OffersSection } from "./components/offers-section";
import { TrainersSection } from "./components/trainers-section";
import { TransformationSection } from "./components/transformation-section";
import { WhatsAppFloat } from "./components/whatsapp-float";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TransformationSection />
        <TrainersSection />
        <OffersSection />
        <MediaSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
