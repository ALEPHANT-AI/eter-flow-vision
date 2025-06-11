
import React, { useEffect, useRef, useState } from 'react';

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Problem Statement */}
          <h2 className={`text-5xl md:text-7xl font-black mb-16 text-white leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            POR QUE SUA MARCA PESSOAL <span className="text-gradient">NÃO ESTÁ GERANDO</span> OS RESULTADOS QUE VOCÊ MERECE?
          </h2>

          <div className={`stagger-children space-y-8 text-lg md:text-xl text-white/80 leading-relaxed mb-16 ${
            isVisible ? 'revealed' : ''
          }`}>
            <p className="text-3xl font-light">
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
              quem realmente se destaca são as marcas pessoais que <strong className="text-gradient">lideram com uma estratégia totalmente personalizada</strong>.
            </p>
            
            <p>
              Um playbook único construído especificamente para sua história, seus valores e sua visão de mercado.
            </p>
          </div>

          {/* Vision */}
          <div className={`card-premium mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Mas imagine cobrar <span className="text-gradient">3x mais</span> que seus concorrentes e ainda sim ter <strong>fila de espera</strong> para seus produtos e serviços…
            </h3>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Imagine ser reconhecido como <strong className="text-white">O líder</strong> que está transformando seu mercado, 
              deixando de competir apenas por competência para <span className="text-gradient">liderar seu segmento</span> com uma marca pessoal forte.
            </p>
          </div>

          {/* Exclusivity */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-lg md:text-xl text-gold-400 font-medium mb-8">
              Essa é uma oportunidade exclusiva disponível para apenas <strong className="text-3xl text-gradient">8 empresários</strong>, 
              especialistas e líderes criteriosamente selecionados neste programa.
            </p>
            
            <button className="btn-premium text-lg magnetic">
              <span>PREENCHER APLICAÇÃO</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
