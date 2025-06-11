
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const DeliverableSection = () => {
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
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white leading-tight">
              O que você <span className="gradient-text">recebe:</span>
            </h2>
          </div>

          {/* Mockup Visual */}
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-16 text-center">
            <div className="w-full h-64 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl flex items-center justify-center mb-8">
              <span className="text-white/60 text-lg font-medium">MOCKUP VISUAL DO ENTREGÁVEL</span>
            </div>
          </div>

          {/* Deliverables Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
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
          <div className="text-center">
            <button className="btn-premium text-lg glow-amber group">
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
