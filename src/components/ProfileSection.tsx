
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Users, Award, TrendingUp, Target, Sparkles } from 'lucide-react';

const ProfileSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden bg-gradient-to-b from-black-900 via-black-850 to-black-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-400/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
              Quem é <span className="text-gradient">Davi Ribas</span>
            </h2>
          </div>

          {/* Profile Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Image */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-gold-600/20 blur-2xl rounded-3xl" />
                <img 
                  src="/lovable-uploads/c07a67ec-0da1-4284-94ef-cb85aab811a6.png" 
                  alt="Davi Ribas"
                  className="relative z-10 w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className={`space-y-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="space-y-4">
                <p className="text-lg text-white/90 leading-relaxed">
                  Criador de movimentos que transformam marcas em fenômenos culturais.
                </p>
                
                <p className="text-base text-white/80 leading-relaxed">
                  Responsável por estratégias que elevaram marcas a posições de liderança inquestionável em seus mercados.
                </p>
                
                <p className="text-base text-white/80 leading-relaxed">
                  Sua expertise vai além do marketing tradicional: ele cria movimentos autênticos que conectam marcas com comunidades apaixonadas.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full" />
                  <span className="text-white/80">Criador da metodologia Movement Marketing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full" />
                  <span className="text-white/80">Fundador da ETER Co</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold-400 rounded-full" />
                  <span className="text-white/80">Criador do ETER Summit</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="group btn-premium text-lg magnetic hover:scale-110 transition-all duration-300">
              <span className="flex items-center relative z-10">
                <Sparkles className="w-5 h-5 mr-2" />
                QUERO SER SELECIONADO
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
