
import React, { useEffect, useRef, useState } from 'react';
import { Search, Lightbulb, Palette, Rocket, ArrowRight } from 'lucide-react';

const MethodologySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Auto-progress through steps
          const interval = setInterval(() => {
            setCurrentStep(prev => (prev + 1) % 4);
          }, 3000);
          
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "1",
      icon: Search,
      title: "PESQUISA & DIAGNÓSTICO ESTRATÉGICO",
      description: "Análise profunda do seu mercado, concorrência e identificação das oportunidades únicas para você se posicionar como líder de pensamento.",
      duration: "2 semanas",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "2", 
      icon: Lightbulb,
      title: "CRIAÇÃO DO MOVIMENTO",
      description: "Nosso diferencial: Não criamos apenas uma marca pessoal comum. Desenvolvemos a ideologia, narrativa e sistema de crenças que farão você liderar um movimento. Isso transforma seguidores e clientes passivos em uma comunidade engajada que compra sempre defende sua marca.",
      duration: "3 semanas",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: "3",
      icon: Palette,
      title: "ARQUITETURA DA MARCA PESSOAL", 
      description: "Construção completa da identidade pessoal alinhada ao movimento: posicionamento magnético, narrativa poderosa, comunicação e elementos visuais únicos.",
      duration: "4 semanas",
      gradient: "from-orange-500 to-red-500"
    },
    {
      number: "4",
      icon: Rocket,
      title: "PROTOCOLO DE ATIVAÇÃO",
      description: "Plano detalhado de implementação: cronograma de ações, canais de comunicação, métricas de sucesso e como crescer sua influência como escala e lucro.",
      duration: "2 semanas",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-900 to-black-950">
        {/* Animated Orbs */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`absolute w-64 h-64 rounded-full blur-3xl transition-all duration-1000 ${
              currentStep === index ? 'opacity-20 scale-125' : 'opacity-5 scale-100'
            }`}
            style={{
              background: `linear-gradient(135deg, ${step.gradient.split(' ')[1]}, ${step.gradient.split(' ')[3]})`,
              left: `${20 + index * 20}%`,
              top: `${30 + (index % 2) * 40}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
              A METODOLOGIA <span className="text-gradient">ETER</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Nossa abordagem única para construir marcas pessoais que lideram movimentos e geram autoridade inquestionável
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 via-gold-500 to-gold-600 transform -translate-x-1/2 hidden lg:block">
              {/* Animated Progress */}
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold-300 to-gold-400 transition-all duration-1000 glow-gold"
                style={{ height: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-16 lg:space-y-24">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === index;
                const isPast = currentStep > index;
                const isLeft = index % 2 === 0;

                return (
                  <div 
                    key={index} 
                    className={`relative transition-all duration-1000 delay-${index * 200} ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                      isLeft ? '' : 'lg:grid-flow-col-dense'
                    }`}>
                      {/* Content */}
                      <div className={`${isLeft ? '' : 'lg:col-start-2'} ${
                        isActive ? 'scale-105' : 'scale-100'
                      } transition-all duration-500`}>
                        <div className={`card-premium group hover:scale-105 transition-all duration-500 ${
                          isActive 
                            ? 'bg-white/[0.12] border-gold-500/30 shadow-glow-gold-strong' 
                            : isPast 
                              ? 'bg-white/[0.08] border-gold-500/20' 
                              : 'bg-white/[0.04]'
                        }`}>
                          {/* Step Number & Duration */}
                          <div className="flex items-center justify-between mb-6">
                            <div className={`text-6xl font-black transition-all duration-500 ${
                              isActive ? 'text-gradient scale-110' : isPast ? 'text-gold-400' : 'text-white/30'
                            }`}>
                              {step.number}
                            </div>
                            <div className={`glass px-4 py-2 rounded-lg transition-all duration-300 ${
                              isActive ? 'bg-gold-500/20 border-gold-500/30' : ''
                            }`}>
                              <span className="text-gold-400 text-sm font-medium">{step.duration}</span>
                            </div>
                          </div>

                          <h3 className={`text-2xl md:text-3xl font-black mb-6 transition-all duration-500 ${
                            isActive ? 'text-gradient' : isPast ? 'text-white' : 'text-white/70'
                          }`}>
                            {step.title}
                          </h3>
                          
                          <p className={`text-lg leading-relaxed transition-all duration-500 ${
                            isActive ? 'text-white/90' : isPast ? 'text-white/80' : 'text-white/60'
                          }`}>
                            {step.description}
                          </p>

                          {/* Progress Indicator */}
                          {isActive && (
                            <div className="mt-6 flex items-center text-gold-400">
                              <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse mr-3" />
                              <span className="text-sm font-medium">Em andamento</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Central Icon */}
                      <div className={`${isLeft ? 'lg:order-2' : 'lg:order-1'} flex justify-center lg:justify-center`}>
                        <div className="relative">
                          {/* Icon Container */}
                          <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center transition-all duration-500 ${
                            isActive 
                              ? 'scale-125 glow-gold-strong shadow-glow-gold-strong' 
                              : isPast 
                                ? 'scale-110 glow-gold' 
                                : 'scale-100'
                          }`}>
                            <Icon className={`w-12 h-12 text-white transition-all duration-500 ${
                              isActive ? 'scale-110' : 'scale-100'
                            }`} />
                          </div>

                          {/* Connecting Lines for Mobile */}
                          {index < steps.length - 1 && (
                            <div className="absolute top-full left-1/2 w-0.5 h-16 bg-gradient-to-b from-gold-400 to-gold-600 transform -translate-x-1/2 lg:hidden" />
                          )}

                          {/* Floating Particles */}
                          {isActive && (
                            <>
                              <div className="absolute -top-2 -left-2 w-1 h-1 bg-gold-300 rounded-full animate-float" />
                              <div className="absolute -top-1 -right-3 w-0.5 h-0.5 bg-gold-400 rounded-full animate-float delay-500" />
                              <div className="absolute -bottom-3 -left-1 w-1.5 h-1.5 bg-gold-500 rounded-full animate-float delay-1000" />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="card-premium bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-gold-500/20 mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Pronto para liderar seu próprio movimento?
              </h3>
              <p className="text-white/80 text-lg mb-6">
                Todo o processo leva apenas <span className="text-gradient font-bold">11 semanas</span> para transformar completamente sua presença no mercado
              </p>
            </div>

            <button className="btn-premium text-lg glow-gold magnetic group hover:scale-110 transition-all duration-300">
              <span className="flex items-center">
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

export default MethodologySection;
