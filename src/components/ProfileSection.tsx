
import React, { useEffect, useRef, useState } from 'react';
import { Star, TrendingUp, Users, Award, BookOpen, Play } from 'lucide-react';

const ProfileSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    revenue: 0,
    brands: 0,
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
    const targets = { revenue: 72, brands: 180, followers: 850, years: 15 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        revenue: Math.floor(targets.revenue * progress),
        brands: Math.floor(targets.brands * progress),
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
      title: "Best Seller Amazon",
      description: "3 livros na categoria Business",
      badge: "🏆"
    },
    {
      icon: Users,
      title: "Mentor de Elite",
      description: "Mais de 500 líderes transformados",
      badge: "👥"
    },
    {
      icon: TrendingUp,
      title: "Speaker Internacional",
      description: "Palestrante em 12 países",
      badge: "🌎"
    },
    {
      icon: BookOpen,
      title: "Metodologia Própria",
      description: "ETER Flow - Reconhecida mundialmente",
      badge: "⚡"
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
              Conheça <span className="text-gradient">DAVI RIBAS</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              O mentor por trás da transformação de centenas de marcas pessoais em movimentos poderosos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Section */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
                  {/* Glow Effect Behind Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-500/30 via-gold-400/20 to-transparent z-10" />
                  
                  <img 
                    src="/lovable-uploads/08386bc3-86ab-4be9-9b4e-aa1e5ccccdeb.png" 
                    alt="Davi Ribas"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Floating Achievement Badges */}
                  <div className="absolute top-6 left-6 glass-strong px-4 py-2 rounded-xl animate-float">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-gold-400 mr-2 fill-current" />
                      <span className="text-white text-sm font-bold">Mentor de Elite</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-6 right-6 glass-strong px-4 py-2 rounded-xl animate-float delay-1000">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-gold-400 mr-2" />
                      <span className="text-white text-sm font-bold">Best Seller</span>
                    </div>
                  </div>

                  {/* Play Button for Video */}
                  <div className="absolute bottom-6 right-6">
                    <button className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glow-gold group">
                      <Play className="w-6 h-6 text-black ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-8 -left-8 glass-strong p-6 rounded-2xl animate-float delay-500">
                  <div className="text-3xl font-black text-gradient mb-1">R$ {counters.revenue}M+</div>
                  <div className="text-white/80 text-sm">Em receita gerada</div>
                </div>

                <div className="absolute -top-8 -right-8 glass-strong p-6 rounded-2xl animate-float delay-1500">
                  <div className="text-3xl font-black text-gradient mb-1">{counters.brands}+</div>
                  <div className="text-white/80 text-sm">Marcas transformadas</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              {/* Main Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-black text-gradient mb-2">{counters.followers}K+</div>
                  <div className="text-white/80">Seguidores</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-gradient mb-2">{counters.years}+</div>
                  <div className="text-white/80">Anos de experiência</div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  O criador da metodologia que transforma especialistas em líderes de movimento
                </h3>
                
                <p className="text-lg text-white/80 leading-relaxed">
                  Davi Ribas é reconhecido como o maior especialista em Personal Branding do Brasil. 
                  Sua metodologia ETER Flow já transformou centenas de profissionais em autoridades 
                  inquestionáveis em seus mercados.
                </p>
                
                <p className="text-lg text-white/80 leading-relaxed">
                  Autor de 3 best-sellers, mentor de CEOs de empresas bilionárias e criador de movimentos 
                  que impactaram milhões de pessoas. Sua abordagem vai além do marketing pessoal tradicional: 
                  ele constrói <strong className="text-gradient">líderes que transformam mercados inteiros</strong>.
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

              {/* Quote */}
              <div className="card-premium bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-gold-500/20">
                <blockquote className="text-xl text-white/90 italic leading-relaxed">
                  "Não construo marcas pessoais. Construo <span className="text-gradient font-bold">movimentos que transformam mercados</span> 
                  e criam líderes que as pessoas seguem apaixonadamente."
                </blockquote>
                <cite className="text-gold-400 font-medium mt-4 block">— Davi Ribas</cite>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="card-premium bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-gold-500/20 mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Quer ser mentorado pessoalmente pelo Davi?
              </h3>
              <p className="text-white/80 text-lg">
                Apenas <span className="text-gradient font-bold">8 vagas</span> disponíveis para trabalhar diretamente com ele
              </p>
            </div>

            <button className="btn-premium text-lg glow-gold magnetic group hover:scale-110 transition-all duration-300">
              <span className="flex items-center">
                QUERO SER SELECIONADO
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
