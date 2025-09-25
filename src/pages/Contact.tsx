import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsLoading(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      info: "contact@bidev.fr",
      description: "Écrivez-nous pour toute question"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Téléphone",
      info: "07 81 79 58 62",
      description: "Du lundi au vendredi, 9h-19h"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Adresse",
      info: "867 Av. de la République, 59700 Marcq-en-Barœul",
      description: "Visitez-nous sur rendez-vous"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Horaires",
      info: "Lun-Ven: 9h-19h",
      description: "Samedi - Dimanche: Fermé"
    }
  ];

  const faqs = [
    {
      question: "Combien coûte un site web ?",
      answer: "Le prix dépend de vos besoins spécifiques. Nos tarifs commencent à partir de 1 500€ pour un site vitrine simple. Contactez-nous pour un devis personnalisé gratuit."
    },
    {
      question: "Combien de temps faut-il pour développer un site ?",
      answer: "En moyenne, un site vitrine prend 2-4 semaines, tandis qu'un site e-commerce ou une application web complexe peut prendre 6-12 semaines. Nous vous donnerons un planning précis après analyse de votre projet."
    },
    {
      question: "Proposez-vous de la maintenance ?",
      answer: "Oui, nous offrons des services de maintenance pour assurer la sécurité, les mises à jour et la performance optimale de votre site web."
    },
    {
      question: "Travaillez-vous avec des entreprises de toutes tailles ?",
      answer: "Absolument ! Nous accompagnons aussi bien les startups que les PME et grandes entreprises, en adaptant nos solutions à leurs besoins et budgets."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact BiDev | Agence Web Lille - Devis Gratuit Développement & SEO</title>
        <meta name="description" content="Contactez BiDev pour votre projet web. Devis gratuit, consultation offerte. Agence située à Marcq-en-Barœul près de Lille. Tel: 07 81 79 58 62" />
        <meta name="keywords" content="contact BiDev, devis gratuit web, agence Lille, consultation développement web, Marcq-en-Barœul, contact agence" />
        <link rel="canonical" href="https://fr-thefury.github.io/bidev-sparkle/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact BiDev",
            "description": "Page de contact pour demander un devis ou obtenir des informations sur nos services",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "BiDev",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "867 Av. de la République",
                "addressLocality": "Marcq-en-Barœul",
                "postalCode": "59700",
                "addressCountry": "FR"
              },
              "telephone": "07 81 79 58 62",
              "email": "contact@bidev.fr",
              "openingHours": "Mo-Fr 09:00-19:00"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-accent to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimationWrapper animation="fade-in">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Link>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="slide-up" delay="200ms">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Contactez-Nous
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Prêt à démarrer votre projet ? Parlons-en ensemble et donnons vie à vos idées digitales.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Entrons en Contact
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Plusieurs moyens de nous joindre pour discuter de votre projet
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <ScrollAnimationWrapper key={index} animation="slide-up" delay={`${index * 150}ms`}>
                <div className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-2">
                    {info.info}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {info.description}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollAnimationWrapper animation="slide-left">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Envoyez-nous un Message
                </h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  Décrivez-nous votre projet et nous vous répondrons rapidement avec des conseils personnalisés et un devis adapté à vos besoins.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium text-foreground">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 h-12"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base font-medium text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 h-12"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium text-foreground">
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 h-12"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-base font-medium text-foreground">
                        Sujet *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-2 h-12"
                        placeholder="Objet de votre message"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-base font-medium text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-[150px]"
                      placeholder="Décrivez votre projet, vos besoins, votre budget approximatif..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right" delay="300ms">
              <div className="bg-muted/30 p-8 rounded-2xl">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Questions Fréquentes
                </h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-6 last:border-b-0">
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        {faq.question}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Consultation Gratuite
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Planifiez un appel gratuit de 30 minutes pour discuter de votre projet sans engagement.
                  </p>
                  <Button variant="outline" className="w-full">
                    Réserver un créneau
                  </Button>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Démarrons Votre Projet Ensemble
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Chaque grand projet commence par une conversation. Parlons de vos ambitions digitales.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Commencer maintenant
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;