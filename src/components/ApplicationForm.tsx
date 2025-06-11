
import React, { useState, useEffect, useRef } from 'react';
import { Send, Clock, Phone, CheckCircle } from 'lucide-react';

const ApplicationForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    segment: '',
    motivation: '',
    frustration: '',
    currentRevenue: '',
    revenueGoal: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
  };

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
              <span className="text-gradient">PROCESSO SELETIVO</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Apenas <strong className="text-gold-400">8 vagas</strong> disponíveis e o processo seletivo é rigoroso porque trabalhamos apenas com pessoas alinhadas aos nossos valores e dispostas a construir marcas pessoais verdadeiramente poderosas.
            </p>
          </div>

          {/* Form */}
          <div className={`card-premium transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              FORMULÁRIO DE APLICAÇÃO
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Seu nome completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Seu melhor e-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-white font-medium mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>

              {/* Segment */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Qual seu segmento de atuação? *
                </label>
                <input
                  type="text"
                  name="segment"
                  value={formData.segment}
                  onChange={handleInputChange}
                  className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                  placeholder="Ex: Consultoria, Marketing Digital, Coaching..."
                  required
                />
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Por que você quer construir uma marca pessoal mais poderosa? Que resultado quer gerar? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 resize-none"
                  placeholder="Descreva seus objetivos e resultados esperados..."
                  required
                />
              </div>

              {/* Frustration */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Qual sua principal frustração com sua marca pessoal atual? *
                </label>
                <textarea
                  name="frustration"
                  value={formData.frustration}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 resize-none"
                  placeholder="Conte sobre suas dificuldades atuais..."
                  required
                />
              </div>

              {/* Current Revenue */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Qual seu faturamento mensal atual? *
                </label>
                <select
                  name="currentRevenue"
                  value={formData.currentRevenue}
                  onChange={handleInputChange}
                  className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                  required
                >
                  <option value="" className="bg-black-900">Selecione uma faixa</option>
                  <option value="0-10k" className="bg-black-900">R$ 0 - R$ 10.000</option>
                  <option value="10k-30k" className="bg-black-900">R$ 10.000 - R$ 30.000</option>
                  <option value="30k-50k" className="bg-black-900">R$ 30.000 - R$ 50.000</option>
                  <option value="50k-100k" className="bg-black-900">R$ 50.000 - R$ 100.000</option>
                  <option value="100k+" className="bg-black-900">R$ 100.000+</option>
                </select>
              </div>

              {/* Revenue Goal */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Qual sua meta de faturamento para os próximos 12 meses? *
                </label>
                <input
                  type="text"
                  name="revenueGoal"
                  value={formData.revenueGoal}
                  onChange={handleInputChange}
                  className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                  placeholder="Ex: R$ 500.000, R$ 1.000.000..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full btn-premium text-lg glow-gold-strong group"
                >
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 w-5 h-5" />
                    ENVIAR APLICAÇÃO
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Process Info */}
          <div className={`stagger-children mt-16 grid md:grid-cols-3 gap-6 text-center ${
            isVisible ? 'revealed' : ''
          }`}>
            <div className="glass rounded-xl p-6 border border-gold-500/10">
              <Clock className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Prazo para aplicações</h4>
              <p className="text-white/70">7 dias</p>
            </div>
            
            <div className="glass rounded-xl p-6 border border-gold-500/10">
              <Phone className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Entrevista estratégica</h4>
              <p className="text-white/70">com aprovados</p>
            </div>
            
            <div className="glass rounded-xl p-6 border border-gold-500/10">
              <CheckCircle className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Início imediato</h4>
              <p className="text-white/70">para selecionados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
