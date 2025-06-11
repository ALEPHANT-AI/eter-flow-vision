
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

          {/* Main Visual Mockup with High Quality Image */}
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

            {/* Dual Image Layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* First Image - High Quality Image Container with Privacy Blur */}
              <div className="relative w-full h-[80vh] bg-gradient-to-br from-gold-500/5 to-gold-600/5 rounded-2xl border border-gold-500/20 overflow-hidden">
                <ScrollArea className="h-full w-full">
                  <div className="p-8 relative">
                    {/* High Quality Image */}
                    <img 
                      src="/lovable-uploads/e8f389e4-fe43-4df2-b475-0ea7644b61fe.png" 
                      alt="Exemplo completo de entregável - Movimento Futuro Ancestral"
                      className="w-full h-auto object-contain mx-auto max-w-none"
                      style={{
                        imageRendering: 'crisp-edges',
                        filter: 'contrast(1.1) saturate(1.05) brightness(1.02)',
                        maxWidth: 'none',
                        minHeight: '100%'
                      }}
                      loading="eager"
                      decoding="sync"
                    />
                    
                    {/* Privacy Blur Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black-900/30 via-transparent to-black-900/20 backdrop-blur-[2px] rounded-2xl">
                      {/* Selective blur areas for sensitive information */}
                      <div className="absolute top-[15%] left-[10%] w-[35%] h-[8%] bg-black-900/40 backdrop-blur-md rounded-lg" />
                      <div className="absolute top-[25%] right-[10%] w-[30%] h-[6%] bg-black-900/40 backdrop-blur-md rounded-lg" />
                      <div className="absolute bottom-[20%] left-[15%] w-[40%] h-[10%] bg-black-900/40 backdrop-blur-md rounded-lg" />
                      <div className="absolute bottom-[35%] right-[15%] w-[25%] h-[8%] bg-black-900/40 backdrop-blur-md rounded-lg" />
                    </div>
                    
                    {/* Privacy Notice */}
                    <div className="absolute top-4 right-4 bg-black-900/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-gold-500/20">
                      <div className="flex items-center text-white/70 text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        <span>Informações pessoais protegidas</span>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-4 left-4 bg-black-900/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-gold-500/20">
                  <div className="flex items-center text-white/70 text-xs">
                    <div className="w-3 h-3 border border-gold-400 rounded mr-2 animate-pulse" />
                    <span>Role para explorar</span>
                  </div>
                </div>
              </div>

              {/* Second Image - Visual Identity */}
              <div className="relative w-full h-[80vh] bg-gradient-to-br from-gold-500/5 to-gold-600/5 rounded-2xl border border-gold-500/20 overflow-hidden">
                <ScrollArea className="h-full w-full">
                  <div className="p-8 relative">
                    {/* Visual Identity Image */}
                    <img 
                      src="/lovable-uploads/942f15a4-0579-45b2-afe1-8343e8c0204f.png" 
                      alt="Identidade Visual - Cores, Fontes e Elementos Visuais"
                      className="w-full h-auto object-contain mx-auto max-w-none"
                      style={{
                        imageRendering: 'crisp-edges',
                        filter: 'contrast(1.1) saturate(1.05) brightness(1.02)',
                        maxWidth: 'none',
                        minHeight: '100%'
                      }}
                      loading="eager"
                      decoding="sync"
                    />
                    
                    {/* Privacy Blur Overlay for Visual Identity */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black-900/25 via-transparent to-black-900/15 backdrop-blur-[1px] rounded-2xl">
                      {/* Selective blur areas for sensitive information */}
                      <div className="absolute top-[10%] left-[10%] w-[30%] h-[6%] bg-black-900/35 backdrop-blur-sm rounded-lg" />
                      <div className="absolute top-[20%] right-[15%] w-[25%] h-[5%] bg-black-900/35 backdrop-blur-sm rounded-lg" />
                      <div className="absolute bottom-[15%] left-[20%] w-[35%] h-[8%] bg-black-900/35 backdrop-blur-sm rounded-lg" />
                    </div>
                    
                    {/* Visual Identity Notice */}
                    <div className="absolute top-4 right-4 bg-black-900/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-gold-500/20">
                      <div className="flex items-center text-white/70 text-xs">
                        <Palette className="w-3 h-3 mr-1" />
                        <span>Identidade Visual Completa</span>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
                
                {/* Visual Identity Scroll Indicator */}
                <div className="absolute bottom-4 left-4 bg-black-900/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-gold-500/20">
                  <div className="flex items-center text-white/70 text-xs">
                    <div className="w-3 h-3 border border-gold-400 rounded mr-2 animate-pulse" />
                    <span>Cores • Fontes • Elementos</span>
                  </div>
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
