
import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Problem Statement */}
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white leading-tight text-reveal">
            POR QUE SUA MARCA PESSOAL <span className="gradient-text">NÃO ESTÁ GERANDO</span> OS RESULTADOS QUE VOCÊ MERECE?
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-white/80 leading-relaxed mb-16 stagger-container">
            <p className="text-2xl font-light">
              <strong className="text-white">Simples.</strong>
            </p>
            
            <p>
              Porque você está fazendo <strong className="text-white">igual a todo mundo</strong>.
            </p>
            
            <p>
              Mostrando competência, cases, diferenciação técnica. <strong className="text-gold-400">Isso não basta mais.</strong>
            </p>
            
            <p>
              No mercado saturado de hoje, enquanto todos seguem os mesmos templates e fórmulas genéricas, 
              quem realmente se destaca são as marcas pessoais que <strong className="gradient-text">lideram com uma estratégia totalmente personalizada</strong>.
            </p>
            
            <p>
              Um playbook único construído especificamente para sua história, seus valores e sua visão de mercado.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card rounded-2xl p-8 md:p-12 mb-16 depth-card perspective-1000">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Mas imagine cobrar <span className="gradient-text">3x mais</span> que seus concorrentes e ainda sim ter <strong>fila de espera</strong> para seus produtos e serviços…
            </h3>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Imagine ser reconhecido como <strong className="text-white">O líder</strong> que está transformando seu mercado, 
              deixando de competir apenas por competência para <span className="gradient-text">liderar seu segmento</span> com uma marca pessoal forte.
            </p>
          </div>

          {/* Exclusivity */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-gold-400 font-medium mb-8">
              Essa é uma oportunidade exclusiva disponível para apenas <strong className="text-2xl gradient-text">8 empresários</strong>, 
              especialistas e líderes criteriosamente selecionados neste programa.
            </p>
            
            <button className="btn-premium text-lg magnetic-element">
              <span>PREENCHER APLICAÇÃO</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
