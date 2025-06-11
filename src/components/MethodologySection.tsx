
import React, { useEffect, useRef, useState } from 'react';
import { Search, Lightbulb, Brush, Rocket } from 'lucide-react';

const MethodologySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger step animation sequence
          const timer = setInterval(() => {
            setCurrentStep(prev => prev < 4 ? prev + 1 : prev);
          }, 1000);
          
          setTimeout(() => clearInterval(timer), 4000);
        }
      },
      { threshold: 0.2 }
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
      description: "Análise profunda do seu mercado, concorrência e identificação das oportunidades únicas para você se posicionar como líder de pensamento."
    },
    {
      number: "2",
      icon: Lightbulb,
      title: "CRIAÇÃO DO MOVIMENTO",
      description: "Nosso diferencial: Não criamos apenas uma marca pessoal comum. Desenvolvemos a ideologia, narrativa e sistema de crenças que farão você liderar um movimento.",
      highlight: "Isso transforma seguidores e clientes passivos em uma comunidade engajada que compra sempre defende sua marca."
    },
    {
      number: "3",
      icon: Brush,
      title: "ARQUITETURA DA MARCA PESSOAL",
      description: "Construção completa da identidade pessoal alinhada ao movimento: posicionamento magnético, narrativa poderosa, comunicação e elementos visuais únicos."
    },
    {
      number: "4",
      icon: Rocket,
      title: "PROTOCOLO DE ATIVAÇÃO",
      description: "Plano detalhado de implementação: cronograma de ações, canais de comunicação, métricas de sucesso e como crescer sua influência como escala e lucro."
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-950 via-black-900 to-black-800">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gold-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
              A METODOLOGIA <span className="text-gradient">ETER</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              Nossa abordagem única para construir marcas pessoais que lideram movimentos e geram autoridade inquestionável
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left side - Davi's professional portrait */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="relative">
                <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-500/20 via-transparent to-transparent z-10" />
                  
                  <img 
                    src="/lovable-uploads/1f7ea051-c13f-4696-999f-fbeb8e872b2b.png" 
                    alt="Davi Ribas - Metodologia ETER"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 glass-strong px-6 py-3 rounded-xl animate-float">
                    <div className="text-gold-400 text-sm font-bold mb-1">METODOLOGIA EXCLUSIVA</div>
                    <div className="text-white text-lg font-black">ETER Flow</div>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -top-8 -right-8 glass-strong p-6 rounded-2xl animate-float delay-1000">
                  <div className="text-3xl font-black text-gradient mb-1">100%</div>
                  <div className="text-white/80 text-sm">Metodologia Própria</div>
                </div>
              </div>
            </div>

            {/* Right side - Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep > index;
                
                return (
                  <div 
                    key={index}
                    className={`relative transition-all duration-1000 delay-${(index + 1) * 200} ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                  >
                    <div className={`card-premium p-8 transition-all duration-700 ${
                      isActive ? 'bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-gold-500/30 scale-105' : 'bg-gradient-to-br from-white/5 to-white/2 border-white/10'
                    }`}>
                      <div className="flex items-start space-x-6">
                        {/* Step Number */}
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          isActive ? 'bg-gradient-to-br from-gold-500 to-gold-600 scale-110' : 'bg-white/10'
                        }`}>
                          <span className={`text-2xl font-black ${
                            isActive ? 'text-black' : 'text-white/70'
                          }`}>
                            {step.number}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <Icon className={`w-6 h-6 mr-3 transition-colors duration-500 ${
                              isActive ? 'text-gold-400' : 'text-white/50'
                            }`} />
                            <h3 className={`text-xl font-bold transition-colors duration-500 ${
                              isActive ? 'text-white' : 'text-white/70'
                            }`}>
                              {step.title}
                            </h3>
                          </div>
                          
                          <p className={`text-base leading-relaxed mb-3 transition-colors duration-500 ${
                            isActive ? 'text-white/80' : 'text-white/60'
                          }`}>
                            {step.description}
                          </p>
                          
                          {step.highlight && (
                            <p className={`text-sm font-medium transition-colors duration-500 ${
                              isActive ? 'text-gold-400' : 'text-white/50'
                            }`}>
                              {step.highlight}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Progress Line */}
                      {index < steps.length - 1 && (
                        <div className="absolute left-16 top-24 w-0.5 h-16 bg-gradient-to-b from-gold-400/50 to-transparent" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="btn-premium text-lg magnetic group hover:scale-110 transition-all duration-300">
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

export default MethodologySection;
