import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';

const ContactForm = () => {
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
    
    // Simulation d'envoi - En réalité, ceci nécessiterait une connexion backend
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      setIsLoading(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollAnimationWrapper animation="fade-in">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Contactez-Nous
                <span className="block gradient-text-accent">Démarrons Votre Projet</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
                Prêt à transformer vos idées en réalité numérique ? Contactez notre équipe d'experts
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <ScrollAnimationWrapper animation="slide-left" delay="200ms">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">
                    Parlons de Votre Projet
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                    Notre équipe d'experts est là pour vous accompagner dans la réalisation 
                    de vos projets web et d'intelligence d'affaires. Contactez-nous pour 
                    une consultation gratuite.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm sm:text-base">Email</div>
                      <div className="text-muted-foreground text-sm sm:text-base">contact@bidev.fr</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm sm:text-base">Téléphone</div>
                      <div className="text-muted-foreground text-sm sm:text-base">07 81 79 58 62</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm sm:text-base">Adresse</div>
                      <div className="text-muted-foreground text-sm sm:text-base">867 Av. de la République, 59700 Marcq-en-Barœul</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">Horaires</h4>
                  <div className="text-muted-foreground text-xs sm:text-sm space-y-1">
                    <p>Lundi - Vendredi: 9h - 19h</p>
                    <p>Samedi - Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Contact Form */}
            <ScrollAnimationWrapper animation="slide-right" delay="400ms">
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm sm:text-base">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                        className="mt-1 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm sm:text-base">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        required
                        className="mt-1 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm sm:text-base">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+33 1 23 45 67 89"
                        className="mt-1 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-sm sm:text-base">Sujet *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sujet de votre message"
                        required
                        className="mt-1 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm sm:text-base">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet ou votre demande..."
                      required
                      className="mt-1 min-h-24 sm:min-h-32 text-sm sm:text-base"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full text-sm sm:text-base"
                    size="lg"
                  >
                    {isLoading ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;