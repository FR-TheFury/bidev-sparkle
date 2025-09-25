import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServiceCards from '@/components/ServiceCards';
import Gallery from '@/components/Gallery';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BiDev - Agence Web Marketing | Développement & Référencement à Lille</title>
        <meta name="description" content="BiDev, agence webmarketing à Marcq-en-Barœul près de Lille. Développement web, applications mobiles, référencement SEO. 10 ans d'expérience pour votre croissance online." />
        <meta name="keywords" content="agence web, développement web, référencement SEO, applications mobiles, webmarketing, Lille, Marcq-en-Barœul, BiDev" />
        <link rel="canonical" href="https://fr-thefury.github.io/bidev-sparkle/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BiDev - BI Développement",
            "url": "https://fr-thefury.github.io/bidev-sparkle/",
            "logo": "https://fr-thefury.github.io/bidev-sparkle/logo-bidev.png",
            "description": "Agence webmarketing spécialisée en développement web, applications mobiles et référencement SEO",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "867 Av. de la République",
              "addressLocality": "Marcq-en-Barœul",
              "postalCode": "59700",
              "addressCountry": "FR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "07 81 79 58 62",
              "contactType": "customer service",
              "areaServed": "FR"
            },
            "sameAs": [
              "https://twitter.com/bidev_fr"
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServiceCards />
          <Gallery />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;