import { Code, Smartphone } from 'lucide-react';
import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';

const ServicesBanner = () => {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Sites internet modernes et performants"
    },
    {
      icon: Smartphone,
      title: "Développement Application",
      description: "Applications mobiles sur mesure"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ScrollAnimationWrapper key={index} animation="fade-in" delay={`${index * 200}ms`}>
              <div className="flex items-center p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 rounded-lg bg-primary/10 mr-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;