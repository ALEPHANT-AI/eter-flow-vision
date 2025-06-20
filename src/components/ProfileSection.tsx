
import React, { useEffect, useRef, useState } from 'react';
import { Star, TrendingUp, Users, Award, BookOpen } from 'lucide-react';

const ProfileSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    revenue: 0,
    people: 0,
    followers: 0,
    years: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { revenue: 72, people: 10, followers: 1000, years: 15 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        revenue: Math.floor(targets.revenue * progress),
        people: Math.floor(targets.people * progress),
        followers: Math.floor(targets.followers * progress),
        years: Math.floor(targets.years * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepTime);
  };

  const achievements = [
    {
      icon: Award,
      title: "Best Seller",
      description: "Autor de 'Marketing Ideológico'",
      badge: "🏆"
    },
    {
      icon: Users,
      title: "Fundador ETER Co",
      description: "Ecossistema Edu | Brand | Tech",
      badge: "🚀"
    },
    {
      icon: TrendingUp,
      title: "N.1 em Movimentos",
      description: "Criação de Comunidades para marcas",
      badge: "⚡"
    },
    {
      icon: BookOpen,
      title: "ETER Summit",
      description: "+1000 participantes na 1ª edição",
      badge: "🎯"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-950 via-black-900 to-black-800">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
              <span className="text-gradient">DAVI RIBAS</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              Idealista, empresário e escritor
            </p>
            <p className="text-lg text-gold-400 font-medium mt-2">
              Autor Best Seller "Marketing Ideológico"
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Section with multiple images */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative w-full h-[600px] rounded-3xl overflow-hidden mb-6">
                  {/* Glow Effect Behind Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-500/30 via-gold-400/20 to-transparent z-10" />
                  
                  <img 
                    src="/lovable-uploads/be389c35-8838-4513-8840-260759c11bd6.png" 
                    alt="Davi Ribas"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Floating Achievement Badges */}
                  <div className="absolute top-6 left-6 glass-strong px-4 py-2 rounded-xl animate-float">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-gold-400 mr-2 fill-current" />
                      <span className="text-white text-sm font-bold">N.1 em Movimentos</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-6 right-6 glass-strong px-4 py-2 rounded-xl animate-float delay-1000">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-gold-400 mr-2" />
                      <span className="text-white text-sm font-bold">Best Seller</span>
                    </div>
                  </div>
                </div>

                {/* Secondary image - thinking strategically */}
                <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img 
                    src="/lovable-uploads/c579881c-e9dc-42ab-8b69-e573f1cbd8e8.png" 
                    alt="Davi Ribas - Estratégia"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-8 -left-8 glass-strong p-6 rounded-2xl animate-float delay-500">
                  <div className="text-3xl font-black text-gradient mb-1">R$ {counters.revenue}MM+</div>
                  <div className="text-white/80 text-sm">Em receita gerada</div>
                </div>

                <div className="absolute -top-8 -right-8 glass-strong p-6 rounded-2xl animate-float delay-1500">
                  <div className="text-3xl font-black text-gradient mb-1">{counters.people}M+</div>
                  <div className="text-white/80 text-sm">Pessoas impactadas</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              {/* Description - Copy Verdadeira */}
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  Fundador da ETER Co, o ecossistema Edu |Brand | Tech que transforma marcas pessoais e institucionais em movimentos que dominam o mercado formando as referências brasileiras do futuro.
                </p>
                
                <p className="text-lg text-white/80 leading-relaxed">
                  Davi Ribas é N.1 quando o assunto é Criação de Movimentos e Comunidades para marcas
                </p>
                
                <p className="text-lg text-white/80 leading-relaxed">
                  Especialista em construção de autoridade e marcas pessoais magnéticas, já impactou mais de 10M de pessoas e gerou mais de R$ 72MM em receita para seus clientes através de sua metodologia própria.
                </p>

                <p className="text-lg text-white/80 leading-relaxed">
                  Fundador da ETER. Co, ecossistema de negócios composto pelas empresas ETER Educação, ETER Brands, ETER Scale, ETER Flow e ETER Summit, evento anual da marca que contou com mais de 1000 participantes em sua primeira edição
                </p>
              </div>

              {/* Achievement Badges */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div 
                      key={index} 
                      className="glass-strong p-4 rounded-xl hover:bg-white/[0.12] transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{achievement.badge}</div>
                        <div>
                          <h4 className="text-white font-bold text-sm group-hover:text-gradient transition-colors">
                            {achievement.title}
                          </h4>
                          <p className="text-white/70 text-xs leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="btn-premium text-lg glow-gold magnetic group hover:scale-110 transition-all duration-300">
              <span className="flex items-center">
                QUERO SER ESCOLHIDO
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
