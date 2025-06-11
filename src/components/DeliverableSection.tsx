
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const DeliverableSection = () => {
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

  const deliverables = [
    {
      title: "Criação de Movimento",
      description: "Sua mensagem, promessa e sistema de crenças que farão as pessoas te seguirem apaixonadamente e se tornarem fãs compradores"
    },
    {
      title: "Marca Pessoal",
      description: "Posicionamento único, diferenciação e autoridade que te posiciona como líder autêntico e reconhecido"
    },
    {
      title: "Narrativa",
      description: "Sua história magnética, mensagens-chave e storytelling que conecta emocionalmente com sua audiência"
    },
    {
      title: "Identidade da Tribo",
      description: "Como sua comunidade pensa, fala, age e se reconhece o DNA dos seus seguidores ideais"
    },
    {
      title: "Identidade Visual Completa",
      description: "Símbolos, cores, fotografia, fontes, direção de arte e atmosfera visual com templates visuais prontos para usar"
    },
    {
      title: "Plano de Ativação",
      description: "Cronograma detalhado, scripts de posts, estratégias de lançamento do Movimento e métricas de acompanhamento para implementar sua nova marca no mercado"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
              O que você <span className="text-gradient">recebe:</span>
            </h2>
          </div>

          {/* Mockup Visual */}
          <div className={`card-premium text-center mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="w-full h-80 bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-2xl flex items-center justify-center mb-8 border border-gold-500/20">
              <span className="text-white/60 text-lg font-medium">MOCKUP VISUAL DO ENTREGÁVEL</span>
            </div>
          </div>

          {/* Deliverables Grid */}
          <div className={`stagger-children grid md:grid-cols-2 gap-8 mb-20 ${
            isVisible ? 'revealed' : ''
          }`}>
            {deliverables.map((item, index) => (
              <div key={index} className="card-premium group">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-gold-400 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="btn-premium text-lg glow-gold group magnetic">
              <span className="flex items-center">
                QUERO SER SELECIONADO
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverableSection;
