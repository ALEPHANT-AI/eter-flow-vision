
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, ArrowRight, Sparkles, Eye, Palette, Target, Users, Video, Calendar, Expand } from 'lucide-react';
import DeliverableModal from './DeliverableModal';

const DeliverableSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Example images - you would replace these with actual deliverable images
  const deliverableImages = [
    "/lovable-uploads/e8f389e4-fe43-4df2-b475-0ea7644b61fe.png",
    "/lovable-uploads/942f15a4-0579-45b2-afe1-8343e8c0204f.png"
  ];

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

  const openModal = (index: number = 0) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % deliverableImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + deliverableImages.length) % deliverableImages.length);
  };

  const deliverables = [
    {
      icon: Target,
      title: "Criação de Movimento",
      description: "Sua mensagem, promessa e sistema de crenças que farão as pessoas te seguirem apaixonadamente.",
      preview: "Manifesto + Sistema de Crenças",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Marca Pessoal",
      description: "Posicionamento único, diferenciação clara e autoridade que te posiciona como líder autêntico.",
      preview: "Posicionamento + Diferenciação",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Narrativa",
      description: "Sua história magnética e storytelling estruturado que conecta emocionalmente com sua audiência.",
      preview: "Storytelling + Mensagens-Chave",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Identidade da Tribo",
      description: "Como sua comunidade pensa, fala, age e se reconhece. O DNA completo dos seus seguidores ideais.",
      preview: "Persona + Linguagem + Rituais",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "Identidade Visual Completa",
      description: "Símbolos, cores, fotografia, fontes e direção de arte completa com atmosfera visual única.",
      preview: "Logo + Paleta + Templates",
      gradient: "from-gold-500 to-yellow-500"
    },
    {
      icon: Calendar,
      title: "Plano de Ativação",
      description: "Cronograma detalhado, scripts de posts e estratégias de lançamento do movimento.",
      preview: "Cronograma + Scripts + Métricas",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden bg-gradient-to-b from-black-800 via-black-850 to-black-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold-400/4 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
              O que você <span className="text-gradient">recebe:</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Uma transformação completa da sua presença no mercado
            </p>
          </div>

          {/* Compact Example Preview */}
          <div className={`card-premium mb-12 bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-gold-500/20 transition-all duration-1000 delay-300 hover:scale-[1.01] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center mb-4">
              <div className="flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6 text-gold-400 mr-2" />
                <span className="text-white text-lg font-bold">EXEMPLO REAL DE ENTREGÁVEL</span>
              </div>
              <p className="text-white/60 text-sm">Clique para ver em tela cheia</p>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {deliverableImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative h-64 bg-gradient-to-br from-gold-500/5 to-gold-600/5 rounded-lg border border-gold-500/20 overflow-hidden cursor-pointer group"
                  onClick={() => openModal(index)}
                >
                  <img 
                    src={image} 
                    alt={`Deliverable preview ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black-900/20 group-hover:bg-black-900/10 transition-colors duration-300" />
                  <div className="absolute top-2 right-2 bg-black-900/80 backdrop-blur-sm rounded-lg px-2 py-1">
                    <Expand className="w-4 h-4 text-white/70" />
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black-900/80 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="text-white/70 text-xs">{index === 0 ? 'Movimento' : 'Identidade Visual'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Deliverables Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 ${isVisible ? 'stagger-children revealed' : 'stagger-children'}`}>
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredCard === index;
              
              return (
                <div 
                  key={index} 
                  className="group relative h-full"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`card-premium h-full min-h-[280px] flex flex-col transition-all duration-500 hover:scale-105 ${
                    isHovered ? 'bg-white/[0.12] border-gold-500/30 shadow-glow-gold' : ''
                  }`}>
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon with Glow */}
                      <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-all duration-500 ${
                        isHovered ? 'scale-110 glow-gold-strong' : 'scale-100'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className={`text-lg font-bold text-white mb-3 transition-all duration-300 ${
                        isHovered ? 'text-gradient' : ''
                      }`}>
                        {item.title}
                      </h3>
                      
                      {/* Description with flex-grow to take available space */}
                      <p className="text-white/70 leading-relaxed mb-4 flex-grow text-sm">
                        {item.description}
                      </p>
                      
                      {/* Preview Badge - positioned at bottom */}
                      <div className={`glass px-3 py-2 rounded-lg transition-all duration-300 mt-auto ${
                        isHovered ? 'bg-gold-500/10 border-gold-500/20' : ''
                      }`}>
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 text-gold-400 mr-2" />
                          <span className="text-xs text-white/80 font-medium">{item.preview}</span>
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

      {/* Modal */}
      <DeliverableModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={deliverableImages}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
  );
};

export default DeliverableSection;
