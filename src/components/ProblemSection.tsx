
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

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-black-950 to-black-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-400/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
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

          {/* Problem Content */}
          <div className={`text-center mb-20 space-y-8 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              Porque você está fazendo igual a todo mundo.
            </p>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Mostrando competência, cases, diferenciação técnica. Isso não basta mais.
            </p>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              No mercado saturado de hoje, enquanto todos seguem os mesmos templates e fórmulas genéricas, quem realmente se destaca são as marcas pessoais que lideram com uma estratégia totalmente personalizada.
            </p>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Um playbook único construído especificamente para sua história, seus valores e sua visão de mercado.
            </p>
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
                
                <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto mb-8">
                  Imagine ser reconhecido como <strong className="text-white">O líder</strong> que está transformando seu mercado, 
                  deixando de competir apenas por competência para <span className="text-gradient">liderar seu segmento</span> com uma marca pessoal forte.
                </p>
                
                <p className="text-lg md:text-xl text-gold-400 font-medium">
                  Essa é uma oportunidade exclusiva disponível para apenas <strong className="text-white text-2xl">8</strong> empresários, especialistas e líderes criteriosamente selecionados neste programa.
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
            <div className="mx-8 text-gold-400 font-bold text-xl">—————</div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="btn-premium text-lg magnetic group hover:scale-110 transition-all duration-300">
              <span className="flex items-center">
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
