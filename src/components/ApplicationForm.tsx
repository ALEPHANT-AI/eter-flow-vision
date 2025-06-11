
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Clock, Phone, CheckCircle } from 'lucide-react';

const ApplicationForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    segment: '',
    motivation: '',
    frustration: '',
    revenue: '',
    goal: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-black-900 to-black-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
              PROCESSO <span className="text-gradient">SELETIVO</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Apenas <span className="text-gradient font-bold">8 vagas</span> disponíveis
            </p>
          </div>

          {/* Form */}
          <div className={`card-premium transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-3">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full glass-strong border border-gold-500/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-3">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full glass-strong border border-gold-500/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-3">WhatsApp</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full glass-strong border border-gold-500/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-3">Segmento de Atuação</label>
                  <input
                    type="text"
                    name="segment"
                    value={formData.segment}
                    onChange={handleInputChange}
                    className="w-full glass-strong border border-gold-500/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                    placeholder="Ex: Consultoria, Educação, Tech..."
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">Qual sua principal motivação para criar um movimento?</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full glass-strong border border-gold-500/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 resize-none"
                  placeholder="Descreva sua motivação..."
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-3">Qual sua maior frustração com sua marca pessoal atual?</label>
                <textarea
                  name="frustration"
                  value={formData.frustration}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full glass-strong border border-gold-500/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 resize-none"
                  placeholder="Descreva sua frustração..."
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-3">Faturamento Mensal</label>
                <select
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleInputChange}
                  className="w-full glass-strong border border-gold-500/20 rounded-xl px-6 py-4 text-white focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                  required
                >
                  <option value="">Selecione uma faixa</option>
                  <option value="50k-100k">R$ 50k - R$ 100k</option>
                  <option value="100k-250k">R$ 100k - R$ 250k</option>
                  <option value="250k-500k">R$ 250k - R$ 500k</option>
                  <option value="500k+">R$ 500k+</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">Meta para os próximos 12 meses</label>
                <textarea
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full glass-strong border border-gold-500/20 rounded-xl px-6 py-4 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 resize-none"
                  placeholder="Descreva suas metas..."
                  required
                />
              </div>

              <div className="text-center pt-8">
                <button
                  type="submit"
                  className="btn-premium text-lg glow-gold-strong group magnetic"
                >
                  <span className="flex items-center">
                    ENVIAR APLICAÇÃO
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </form>

            {/* Process Info */}
            <div className="grid md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-3 text-white/70">
                <Clock className="w-5 h-5 text-gold-400" />
                <span>7 dias para análise</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-5 h-5 text-gold-400" />
                <span>Entrevista pessoal</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <CheckCircle className="w-5 h-5 text-gold-400" />
                <span>Início imediato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
