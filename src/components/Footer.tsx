import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '@/assets/logo-bidev.png';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={logo} 
                alt="BI Développement" 
                className="h-12 w-auto mr-3"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground">BI Développement</h3>
                <p className="text-sm text-muted-foreground">Agence Web Marketing</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Agence webmarketing à Marcq-en-Baroeul près de Lille. 
              Notre promesse : "vous accompagner jusqu'à l'atteinte de vos objectifs!"
            </p>
            <p className="text-sm text-muted-foreground">
              10 années d'expérience dans l'univers du digital pour votre croissance online.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Marcq-en-Baroeul</p>
                  <p>Près de Lille</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">03 XX XX XX XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">contact@bidev.fr</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Lun - Ven: 9h - 18h</p>
                  <p>Support 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Motion Design</li>
              <li>Référencement WEB</li>
              <li>Identité Graphique</li>
              <li>Communication Digitale</li>
              <li>Développement Web</li>
              <li>Accompagnement Global</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center mb-4 md:mb-0">
              <p>© 2024 BI Développement. Tous droits réservés.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;