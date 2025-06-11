
import React from 'react';

const MethodologySection = () => {
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
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white leading-tight">
              A METODOLOGIA <span className="gradient-text">ETER</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Nossa abordagem única para construir marcas pessoais que lideram movimentos e geram autoridade inquestionável
            </p>
          </div>

          {/* Steps Grid */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-24 w-0.5 h-16 bg-gradient-to-b from-amber-400 to-amber-600 hidden md:block"></div>
                )}
                
                <div className="glass hover:glass-strong rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] group">
                  <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                    {/* Number */}
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 glow-amber">
                      <span className="text-white font-black text-xl">{step.number}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-black text-white mb-4 group-hover:gradient-text transition-all duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button className="btn-premium text-lg glow-amber">
              <span>QUERO SER SELECIONADO</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
