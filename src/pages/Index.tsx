import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceCards from '@/components/ServiceCards';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServiceCards />
    </div>
  );
};

export default Index;