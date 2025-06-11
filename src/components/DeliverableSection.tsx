import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, ArrowRight, Sparkles, Eye, Palette, Target, Users, Video, Calendar } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const DeliverableSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
      icon: Target,
      title: "Criação de Movimento",
      description: "Sua mensagem, promessa e sistema de crenças que farão as pessoas te seguirem apaixonadamente e se tornarem fãs compradores",
      preview: "Manifesto + Sistema de Crenças + Promessa Magnética",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Marca Pessoal",
      description: "Posicionamento único, diferenciação e autoridade que te posiciona como líder autêntico e reconhecido",
      preview: "Posicionamento + Diferenciação + Tom de Voz",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Narrativa",
      description: "Sua história magnética, mensagens-chave e storytelling que conecta emocionalmente com sua audiência",
      preview: "Storytelling + Mensagens-Chave + Jornada do Herói",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Identidade da Tribo",
      description: "Como sua comunidade pensa, fala, age e se reconhece o DNA dos seus seguidores ideais",
      preview: "Persona + Linguagem + Rituais de Comunidade",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "Identidade Visual Completa",
      description: "Símbolos, cores, fotografia, fontes, direção de arte e atmosfera visual com templates visuais prontos para usar",
      preview: "Logo + Paleta + Templates + Direção de Arte",
      gradient: "from-gold-500 to-yellow-500"
    },
    {
      icon: Calendar,
      title: "Plano de Ativação",
      description: "Cronograma detalhado, scripts de posts, estratégias de lançamento do Movimento e métricas de acompanhamento para implementar sua nova marca no mercado",
      preview: "Cronograma + Scripts + Métricas + Lançamento",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-900 to-black-950">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
              O que você <span className="text-gradient">recebe:</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Uma transformação completa da sua presença no mercado
            </p>
          </div>

          {/* Main Visual Mockup with Real Example - Full Size and Scrollable */}
          <div className={`card-premium mb-20 bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-gold-500/20 transition-all duration-1000 delay-300 hover:scale-[1.01] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Header with description */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-gold-400 mr-3" />
                <span className="text-white text-2xl font-bold">EXEMPLO REAL DE ENTREGÁVEL</span>
              </div>
              <p className="text-white/80 text-lg">Movimento • Identidade • Estratégia • Ativação</p>
              <p className="text-white/60 text-sm mt-2">Role para ver o entregável completo</p>
            </div>

            {/* Scrollable Image Container */}
            <div className="relative w-full h-[70vh] bg-gradient-to-br from-gold-500/5 to-gold-600/5 rounded-2xl border border-gold-500/20 overflow-hidden">
              <ScrollArea className="h-full w-full">
                <div className="p-4">
                  <img 
                    src="/lovable-uploads/27127402-9973-43db-a295-94ff11d38ae7.png" 
                    alt="Exemplo completo de entregável - Movimento Futuro Ancestral"
                    className="w-full h-auto object-contain mx-auto"
                  />
                </div>
              </ScrollArea>
              
              {/* Scroll Indicator */}
              <div className="absolute bottom-4 right-4 bg-black-900/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-gold-500/20">
                <div className="flex items-center text-white/70 text-xs">
                  <div className="w-3 h-3 border border-gold-400 rounded mr-2 animate-pulse" />
                  <span>Role para explorar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Deliverables Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 ${isVisible ? 'stagger-children revealed' : 'stagger-children'}`}>
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredCard === index;
              
              return (
                <div 
                  key={index} 
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`card-premium transition-all duration-500 hover:scale-105 ${
                    isHovered ? 'bg-white/[0.12] border-gold-500/30 shadow-glow-gold' : ''
                  }`}>
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                    
                    <div className="relative z-10">
                      {/* Icon with Glow */}
                      <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-all duration-500 ${
                        isHovered ? 'scale-110 glow-gold-strong' : 'scale-100'
                      }`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className={`text-xl font-bold text-white mb-4 transition-all duration-300 ${
                        isHovered ? 'text-gradient' : ''
                      }`}>
                        {item.title}
                      </h3>
                      
                      <p className="text-white/70 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      
                      {/* Preview Badge */}
                      <div className={`glass px-4 py-2 rounded-lg transition-all duration-300 ${
                        isHovered ? 'bg-gold-500/10 border-gold-500/20' : ''
                      }`}>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 text-gold-400 mr-2" />
                          <span className="text-sm text-white/80 font-medium">{item.preview}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl -z-10`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value Statement */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="card-premium bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-gold-500/20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Tudo isso por uma fração do valor de uma consultoria tradicional
              </h3>
              <p className="text-xl text-white/80 mb-8">
                Investimento total de <span className="text-gradient text-3xl font-bold">R$ 97.000</span> em 12x sem juros
              </p>
              <div className="text-lg text-gold-400 font-medium">
                💎 Exclusivo para apenas 8 selecionados
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="group btn-premium text-lg magnetic hover:scale-110 transition-all duration-300">
              <span className="flex items-center relative z-10">
                <Sparkles className="w-5 h-5 mr-2 animate-spin" />
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

export default DeliverableSection;
