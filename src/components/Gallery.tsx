import { ScrollAnimationWrapper } from '@/hooks/use-scroll-animation';

const Gallery = () => {
  // Placeholder images - replace with actual project images
  const projects = [
    {
      id: 1,
      title: "Site E-commerce",
      category: "Développement Web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Application Mobile",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Site Responsive",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Référencement SEO",
      category: "Marketing Digital",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Site Vitrine",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Dashboard Analytics",
      category: "Intelligence d'Affaires",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollAnimationWrapper animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos
              <span className="block gradient-text-accent">Réalisations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez quelques-uns de nos projets qui illustrent notre expertise 
              et notre engagement envers l'excellence
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimationWrapper key={project.id} animation="fade-in" delay={`${index * 150}ms`}>
              <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-white/80 mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>

                {/* Overlay for non-hover state */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <div className="text-white">
                    <div className="text-xs text-white/80 mb-1">{project.category}</div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;