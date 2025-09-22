import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

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
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-Nous
              <span className="block gradient-text-accent">Démarrons Votre Projet</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prêt à transformer vos idées en réalité numérique ? Contactez notre équipe d'experts
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Parlons de Votre Projet
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Notre équipe d'experts est là pour vous accompagner dans la réalisation 
                  de vos projets web et d'intelligence d'affaires. Contactez-nous pour 
                  une consultation gratuite.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">contact@bidev-solutions.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Téléphone</div>
                    <div className="text-muted-foreground">+33 1 23 45 67 89</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Adresse</div>
                    <div className="text-muted-foreground">Paris, France</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-3">Temps de réponse</h4>
                <p className="text-muted-foreground text-sm">
                  Nous nous engageons à vous répondre dans les 24h ouvrées. 
                  Pour les urgences, n'hésitez pas à nous appeler directement.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+33 1 23 45 67 89"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre demande..."
                    required
                    className="mt-1 min-h-32"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;