import Header from '@/components/Header';
import ServicesBanner from '@/components/ServicesBanner';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServiceCards from '@/components/ServiceCards';
import Gallery from '@/components/Gallery';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesBanner />
      <HeroSection />
      <AboutSection />
      <ServiceCards />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;