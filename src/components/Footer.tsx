import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '@/assets/logo-bidev.png';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <img 
                src={logo} 
                alt="BI Développement" 
                className="h-10 sm:h-12 w-auto mr-2 sm:mr-3"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">BI Développement</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Agence Web Marketing</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Agence webmarketing à Marcq-en-Baroeul près de Lille. 
              Notre promesse : "vous accompagner jusqu'à l'atteinte de vos objectifs!"
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              10 années d'expérience dans l'univers du digital pour votre croissance online.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-muted-foreground">
                  <p>867 Av. de la République</p>
                  <p>59700 Marcq-en-Barœul</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-muted-foreground">07 81 79 58 62</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-muted-foreground">contact@bidev.fr</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-muted-foreground">
                  <p>Lun - Ven: 9h - 19h</p>
                  <p>Samedi - Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
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
        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-muted-foreground space-y-4 sm:space-y-0">
            <div className="flex items-center">
              <p>© 2024 BI Développement. Tous droits réservés.</p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
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