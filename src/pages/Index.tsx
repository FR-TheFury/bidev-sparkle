import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServiceCards from '@/components/ServiceCards';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceCards />
      <ContactForm />
    </div>
  );
};

export default Index;