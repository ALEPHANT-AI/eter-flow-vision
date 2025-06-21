
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, User, Building, Target, DollarSign, Sparkles, Instagram, X } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from './ui/dialog';
import { useApplicationModal } from '../contexts/ApplicationModalContext';

const ApplicationModal = () => {
  const { isOpen, closeModal } = useApplicationModal();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '@',
    company: '',
    role: '',
    industry: '',
    currentRevenue: '',
    goals: '',
    timeline: '',
    investment: '',
    motivation: ''
  });

  const totalSteps = 4;

  const handleInputChange = (field: string, value: string) => {
    if (field === 'instagram' && !value.startsWith('@')) {
      value = '@' + value;
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      console.log('Saving form data:', formData);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    closeModal();
  };

  const progressPercentage = (currentStep / totalSteps) * 100;
  const stepIcons = [User, Building, Target, DollarSign];

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        instagram: '@',
        company: '',
        role: '',
        industry: '',
        currentRevenue: '',
        goals: '',
        timeline: '',
        investment: '',
        motivation: ''
      });
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogOverlay className="fixed inset-0 bg-black/80 z-50" />
      <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-black-900 to-black-950 border border-white/10 rounded-2xl p-0 z-50">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute right-6 top-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
              APLICAÇÃO PARA O <span className="text-gradient">THE EIGHT®</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-6">
              Este processo é altamente seletivo. Apenas candidatos que demonstrarem potencial real de liderança serão aceitos.
            </p>
            
            {/* Exclusivity Badge */}
            <div className="inline-flex items-center glass px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-gold-400 mr-2 animate-pulse" />
              <span className="text-gold-400 text-sm font-medium">8 vagas restantes</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {Array.from({ length: totalSteps }, (_, index) => {
                const StepIcon = stepIcons[index];
                const isActive = currentStep === index + 1;
                const isCompleted = currentStep > index + 1;
                
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-br from-gold-500 to-gold-600 scale-110 glow-gold' 
                        : isCompleted 
                          ? 'bg-gradient-to-br from-green-500 to-green-600' 
                          : 'bg-white/10'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : (
                        <StepIcon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-white/70'}`} />
                      )}
                    </div>
                    <span className={`text-xs mt-2 transition-colors duration-300 ${
                      isActive ? 'text-gold-400' : isCompleted ? 'text-green-400' : 'text-white/50'
                    }`}>
                      Etapa {index + 1}
                    </span>
                  </div>
                );
              })}
            </div>
            
            {/* Progress Line */}
            <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-700 ease-out glow-gold"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Form */}
          <div className="card-premium">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white mb-6">Informações Pessoais</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-white/80 text-sm font-medium mb-2">Nome Completo *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div className="relative">
                      <label className="block text-white/80 text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-white/80 text-sm font-medium mb-2">WhatsApp *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    
                    <div className="relative">
                      <label className="block text-white/80 text-sm font-medium mb-2">Instagram *</label>
                      <div className="relative">
                        <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                        <input
                          type="text"
                          value={formData.instagram}
                          onChange={(e) => handleInputChange('instagram', e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/50 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                          placeholder="@seuinstagram"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Professional Info */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white mb-6">Informações Profissionais</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-white/80 text-sm font-medium mb-2">Empresa/Negócio *</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                    
                    <div className="relative">
                      <label className="block text-white/80 text-sm font-medium mb-2">Cargo/Função *</label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => handleInputChange('role', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                        placeholder="CEO, Fundador, Especialista..."
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-white/80 text-sm font-medium mb-2">Segmento/Indústria *</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                    >
                      <option value="">Selecione seu segmento</option>
                      <option value="tecnologia">Tecnologia</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="marketing">Marketing</option>
                      <option value="financas">Finanças</option>
                      <option value="saude">Saúde</option>
                      <option value="educacao">Educação</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Goals & Vision */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white mb-6">Objetivos e Visão</h3>
                  
                  <div className="relative">
                    <label className="block text-white/80 text-sm font-medium mb-2">Principais objetivos com sua marca pessoal *</label>
                    <textarea
                      value={formData.goals}
                      onChange={(e) => handleInputChange('goals', e.target.value)}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                      placeholder="Descreva onde você quer chegar com sua marca pessoal..."
                    />
                  </div>
                  
                  <div className="relative">
                    <label className="block text-white/80 text-sm font-medium mb-2">Prazo para alcançar esses objetivos *</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                    >
                      <option value="">Selecione o prazo</option>
                      <option value="6meses">6 meses</option>
                      <option value="1ano">1 ano</option>
                      <option value="2anos">2 anos</option>
                      <option value="3anos+">3+ anos</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 4: Investment & Commitment */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-2xl font-bold text-white mb-6">Investimento e Comprometimento</h3>
                  
                  <div className="relative">
                    <label className="block text-white/80 text-sm font-medium mb-2">Faturamento atual mensal *</label>
                    <select
                      value={formData.currentRevenue}
                      onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                    >
                      <option value="">Selecione sua faixa de faturamento</option>
                      <option value="50k-100k">R$ 50K - R$ 100K</option>
                      <option value="100k-300k">R$ 100K - R$ 300K</option>
                      <option value="300k-500k">R$ 300K - R$ 500K</option>
                      <option value="500k+">R$ 500K+</option>
                    </select>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-white/80 text-sm font-medium mb-2">Por que você deveria ser um dos 8 escolhidos? *</label>
                    <textarea
                      value={formData.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all duration-300"
                      placeholder="Conte sua história, seus diferenciais e por que você está pronto para liderar um movimento..."
                    />
                  </div>
                  
                  {/* Investment Info */}
                  <div className="card-premium bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-gold-500/20">
                    <h4 className="text-xl font-bold text-white mb-4">Investimento</h4>
                    <div className="text-3xl font-black text-gradient mb-2">R$ 97.000</div>
                    <div className="text-white/80 mb-4">12x de R$ 8.083 sem juros</div>
                    <div className="text-sm text-gold-400">
                      ✓ Inclui toda a metodologia ETER<br/>
                      ✓ Mentoria pessoal com Davi Ribas<br/>
                      ✓ Entregáveis completos<br/>
                      ✓ 11 semanas de transformação
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-premium group"
                  >
                    <span className="flex items-center">
                      Próximo
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-premium text-lg group glow-gold-strong"
                  >
                    <span className="flex items-center">
                      <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                      ENVIAR APLICAÇÃO
                    </span>
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-8">
            <div className="flex justify-center items-center space-x-8 text-white/60">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-sm">100% Seguro</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-sm">Processo Seletivo</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-sm">Resposta em 48h</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
