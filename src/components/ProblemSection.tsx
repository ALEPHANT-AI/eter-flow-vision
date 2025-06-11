
import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, TrendingDown, Users, DollarSign } from 'lucide-react';

const ProblemSection = () => {
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
          }, 800);
          
          setTimeout(() => clearInterval(timer), 3200);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const problemSteps = [
    {
      icon: AlertTriangle,
      title: "Você está fazendo igual a todo mundo",
      description: "Mostrando competência, cases, diferenciação técnica...",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: TrendingDown,
      title: "Isso não basta mais",
      description: "No mercado saturado de hoje, quem realmente se destaca são as marcas que lideram",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Users,
      title: "Falta estratégia personalizada",
      description: "Um playbook único construído para sua história, valores e visão",
      color: "from-yellow-500 to-gold-500"
    },
    {
      icon: DollarSign,
      title: "Resultado: Preços baixos e commoditização",
      description: "Enquanto outros cobram 3x mais e têm fila de espera...",
      color: "from-gold-500 to-gold-400"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-black-950 to-black-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-400/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Emotional Hook */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl md:text-7xl font-black mb-12 text-white leading-tight">
              POR QUE SUA MARCA PESSOAL 
              <span className="block text-gradient mt-4">NÃO ESTÁ GERANDO</span>
              <span className="block text-white mt-4">OS RESULTADOS QUE VOCÊ MERECE?</span>
            </h2>

            <div className="text-4xl font-light text-gold-400 mb-8">
              <strong className="text-white">Simples.</strong>
            </div>
          </div>

          {/* Animated Problem Journey */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {problemSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep > index;
              
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-800 delay-${index * 200} ${
                    isActive 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-30 translate-y-8 scale-95'
                  }`}
                >
                  {/* Connection Line */}
                  {index < problemSteps.length - 1 && (
                    <div className={`absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r ${step.color} z-10 transition-all duration-500 delay-${index * 200 + 400} ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`} />
                  )}
                  
                  <div className={`card-premium group hover:scale-105 transition-all duration-500 ${
                    isActive ? 'bg-white/[0.08] border-gold-500/20' : 'bg-white/[0.02]'
                  }`}>
                    {/* Icon with Dynamic Gradient */}
                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${step.color} transition-all duration-500 ${
                      isActive ? 'glow-gold scale-110' : 'scale-100'
                    }`}>
                      <Icon className="w-8 h-8 text-black font-bold" />
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-4 transition-all duration-500 ${
                      isActive ? 'text-gradient' : 'text-white/70'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className={`text-lg leading-relaxed transition-all duration-500 ${
                      isActive ? 'text-white/90' : 'text-white/50'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vision Statement */}
          <div className={`card-premium text-center mb-16 bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-gold-500/20 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-gold-600/20 blur-xl rounded-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
                  Mas imagine cobrar <span className="text-gradient text-6xl">3x mais</span> que seus concorrentes
                </h3>
                
                <div className="text-xl md:text-2xl text-white/80 mb-8">
                  e ainda sim ter <strong className="text-gold-400 text-3xl">fila de espera</strong> para seus produtos e serviços…
                </div>
                
                <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto">
                  Imagine ser reconhecido como <strong className="text-white">O líder</strong> que está transformando seu mercado, 
                  deixando de competir apenas por competência para <span className="text-gradient">liderar seu segmento</span> com uma marca pessoal magnética.
                </p>
              </div>
            </div>
          </div>

          {/* Exclusivity Call */}
          <div className={`text-center transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="mb-8">
              <span className="text-lg md:text-xl text-gold-400 font-medium">
                Essa é uma oportunidade exclusiva disponível para apenas
              </span>
              <div className="text-6xl md:text-8xl font-black text-gradient my-4 animate-glow-pulse">
                8
              </div>
              <span className="text-lg md:text-xl text-gold-400 font-medium">
                empresários, especialistas e líderes criteriosamente selecionados
              </span>
            </div>
            
            <button className="btn-premium text-lg magnetic group hover:scale-110 transition-all duration-300">
              <span className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                PREENCHER APLICAÇÃO
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
