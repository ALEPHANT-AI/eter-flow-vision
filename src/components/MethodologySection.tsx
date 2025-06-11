
import React, { useEffect, useRef, useState } from 'react';

const MethodologySection = () => {
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

  const steps = [
    {
      number: "1",
      title: "PESQUISA & DIAGNÓSTICO ESTRATÉGICO",
      description: "Análise profunda do seu mercado, concorrência e identificação das oportunidades únicas para você se posicionar como líder de pensamento."
    },
    {
      number: "2", 
      title: "CRIAÇÃO DO MOVIMENTO",
      description: "Nosso diferencial: Não criamos apenas uma marca pessoal comum. Desenvolvemos a ideologia, narrativa e sistema de crenças que farão você liderar um movimento. Isso transforma seguidores e clientes passivos em uma comunidade engajada que compra sempre defende sua marca."
    },
    {
      number: "3",
      title: "ARQUITETURA DA MARCA PESSOAL", 
      description: "Construção completa da identidade pessoal alinhada ao movimento: posicionamento magnético, narrativa poderosa, comunicação e elementos visuais únicos."
    },
    {
      number: "4",
      title: "PROTOCOLO DE ATIVAÇÃO",
      description: "Plano detalhado de implementação: cronograma de ações, canais de comunicação, métricas de sucesso e como crescer sua influência como escala e lucro."
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
              A METODOLOGIA <span className="text-gradient">ETER</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Nossa abordagem única para construir marcas pessoais que lideram movimentos e geram autoridade inquestionável
            </p>
          </div>

          {/* Steps */}
          <div className={`stagger-children space-y-12 ${isVisible ? 'revealed' : ''}`}>
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-20 bg-gradient-to-b from-gold-400 to-gold-600 hidden lg:block opacity-30"></div>
                )}
                
                <div className="card-premium group">
                  <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                    {/* Number */}
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center flex-shrink-0 glow-gold group-hover:glow-gold-strong transition-all duration-300">
                      <span className="text-black font-black text-2xl">{step.number}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-gradient transition-all duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="btn-premium text-lg glow-gold magnetic">
              <span>QUERO SER SELECIONADO</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
