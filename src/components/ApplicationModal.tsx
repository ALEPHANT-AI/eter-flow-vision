import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, User, Building, Target, DollarSign, Sparkles, Instagram, X, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from './ui/dialog';
import { useApplicationModal } from '../contexts/ApplicationModalContext';
import useFormValidation from '../hooks/useFormValidation';

const ApplicationModal = () => {
  const { isOpen, closeModal } = useApplicationModal();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    instagram: '@',
    empresa: '',
    cargo: '',
    faturamento: '',
    principais_desafios: '',
    objetivos_movimento: '',
    cronograma: '',
    orcamento_investimento: '',
    experiencia_anterior: ''
  });

  const { errors, validateField, validateAllFields, clearFieldError } = useFormValidation();
  const totalSteps = 6; // Updated to include success screen

  const formatPhoneNumber = (value: string) => {
    // If empty, return empty
    if (!value) return '';
    
    // Remove all non-digit characters except +
    const cleaned = value.replace(/[^\d+]/g, '');
    
    // If it doesn't start with +, add + if there are digits
    if (cleaned && !cleaned.startsWith('+')) {
      return '+' + cleaned;
    }
    
    // If it starts with +55 (Brazil), apply Brazilian formatting
    if (cleaned.startsWith('+55')) {
      const numbers = cleaned.slice(3); // Remove +55
      
      if (numbers.length === 0) {
        return '+55 ';
      } else if (numbers.length <= 2) {
        return `+55 (${numbers}`;
      } else if (numbers.length <= 7) {
        return `+55 (${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      } else {
        return `+55 (${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
      }
    }
    
    // For other country codes, just return as is
    return cleaned;
  };

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;
    
    if (field === 'whatsapp') {
      formattedValue = formatPhoneNumber(value);
    } else if (field === 'instagram' && !value.startsWith('@')) {
      formattedValue = '@' + value.replace('@', '');
    }
    
    setFormData(prev => ({ ...prev, [field]: formattedValue }));
    
    if (errors[field]) {
      clearFieldError(field);
    }
    
    validateField(field, formattedValue);
  };

  const canProceedToNextStep = () => {
    const stepFields = getStepFields(currentStep);
    return stepFields.every(field => {
      const value = formData[field as keyof typeof formData];
      return value && value.trim() !== '' && value !== '@' && !errors[field];
    });
  };

  const getStepFields = (step: number) => {
    switch (step) {
      case 1: return ['nome', 'email', 'whatsapp', 'instagram'];
      case 2: return ['empresa', 'cargo', 'faturamento'];
      case 3: return ['principais_desafios', 'cronograma'];
      case 4: return ['orcamento_investimento', 'experiencia_anterior'];
      default: return [];
    }
  };

  const nextStep = () => {
    if (currentStep === 0) {
      setCurrentStep(prev => prev + 1);
      return;
    }
    
    const stepFields = getStepFields(currentStep);
    const stepData = Object.fromEntries(
      stepFields.map(field => [field, formData[field as keyof typeof formData]])
    );
    
    const isStepValid = validateAllFields(stepData as any);
    
    if (isStepValid && currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
      console.log('Moving to step:', currentStep + 1);
      console.log('Saving form data:', formData);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isFormValid = validateAllFields(formData as any);
    
    if (isFormValid) {
      console.log('Form submitted:', formData);
      // Move to success screen instead of closing modal
      setCurrentStep(5);
    }
  };

  const handleBackToHome = () => {
    closeModal();
    // Reset form when going back to home
    setCurrentStep(0);
    setFormData({
      nome: '',
      email: '',
      whatsapp: '',
      instagram: '@',
      empresa: '',
      cargo: '',
      faturamento: '',
      principais_desafios: '',
      objetivos_movimento: '',
      cronograma: '',
      orcamento_investimento: '',
      experiencia_anterior: ''
    });
  };

  // Progress calculation should not include success screen
  const progressPercentage = currentStep === 0 ? 0 : currentStep >= 5 ? 100 : ((currentStep) / 4) * 100;
  const stepIcons = [User, Building, Target, DollarSign];

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        instagram: '@',
        empresa: '',
        cargo: '',
        faturamento: '',
        principais_desafios: '',
        objetivos_movimento: '',
        cronograma: '',
        orcamento_investimento: '',
        experiencia_anterior: ''
      });
    }
  }, [isOpen]);

  const getFieldError = (field: string) => errors[field];
  
  const getFieldClassName = (field: string, baseClassName: string) => {
    const hasError = errors[field];
    return `${baseClassName} ${hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'focus:border-gold-500 focus:ring-gold-500/20'}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogOverlay className="fixed inset-0 bg-black/80 z-50" />
      <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[90vh] bg-gradient-to-b from-black-900 to-black-950 border border-white/10 rounded-2xl p-0 z-50 overflow-hidden">
        <button
          onClick={closeModal}
          className="absolute right-6 top-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="h-full flex flex-col">
          {currentStep === 0 && (
            <div className="text-center p-8 pb-6">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white leading-tight">
                APLICAÇÃO PARA O <span className="text-gradient">THE EIGHT®</span>
              </h2>
              <p className="text-base text-white/70 max-w-2xl mx-auto mb-4">
                Este processo é altamente seletivo. Apenas candidatos que demonstrarem potencial real de liderança serão aceitos.
              </p>
              
              <div className="inline-flex items-center glass px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-gold-400 mr-2 animate-pulse" />
                <span className="text-gold-400 text-sm font-medium">8 vagas restantes</span>
              </div>
            </div>
          )}

          {currentStep > 0 && currentStep < 5 && (
            <div className="px-8 pt-8 pb-6">
              <div className="flex justify-between items-center mb-4">
                {Array.from({ length: 4 }, (_, index) => {
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
              
              <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-700 ease-out glow-gold"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          )}

          <div className="flex-1 px-8 pb-8 overflow-hidden">
            <div className="card-premium h-full">
              <form onSubmit={handleSubmit} className="h-full flex flex-col">
                {currentStep === 0 && (
                  <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8 animate-fade-in">
                    <div className="space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        Você está pronto para se tornar um dos 8 líderes selecionados?
                      </h3>
                      
                      <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Esta é sua oportunidade de ter sua marca pessoal, movimento e narrativa criados pessoalmente por <strong className="text-gradient">Davi Ribas</strong>.
                      </p>
                      
                      <p className="text-base text-white/70 max-w-xl mx-auto">
                        O processo de seleção é rigoroso e apenas os candidatos mais promissores serão aceitos para esta transformação exclusiva.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-8 text-white/60">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-sm">Processo Seletivo</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-sm">Apenas 8 Vagas</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-sm">Resposta em 48h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <label className="block text-white/80 text-sm font-medium mb-2">Nome Completo *</label>
                        <input
                          type="text"
                          value={formData.nome}
                          onChange={(e) => handleInputChange('nome', e.target.value)}
                          className={getFieldClassName('nome', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/50 transition-all duration-300")}
                          placeholder="Seu nome completo"
                        />
                        {getFieldError('nome') && (
                          <p className="text-red-400 text-xs mt-1">{getFieldError('nome')}</p>
                        )}
                      </div>
                      
                      <div className="relative">
                        <label className="block text-white/80 text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={getFieldClassName('email', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/50 transition-all duration-300")}
                          placeholder="seu@email.com"
                        />
                        {getFieldError('email') && (
                          <p className="text-red-400 text-xs mt-1">{getFieldError('email')}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <label className="block text-white/80 text-sm font-medium mb-2">WhatsApp *</label>
                        <input
                          type="tel"
                          value={formData.whatsapp}
                          onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                          className={getFieldClassName('whatsapp', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/50 transition-all duration-300")}
                          placeholder="+55 (11) 99999-9999"
                        />
                        {getFieldError('whatsapp') && (
                          <p className="text-red-400 text-xs mt-1">{getFieldError('whatsapp')}</p>
                        )}
                      </div>
                      
                      <div className="relative">
                        <label className="block text-white/80 text-sm font-medium mb-2">Instagram *</label>
                        <div className="relative">
                          <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                          <input
                            type="text"
                            value={formData.instagram}
                            onChange={(e) => handleInputChange('instagram', e.target.value)}
                            className={getFieldClassName('instagram', "w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-2.5 text-white placeholder-white/50 transition-all duration-300")}
                            placeholder="@seuinstagram"
                          />
                        </div>
                        {getFieldError('instagram') && (
                          <p className="text-red-400 text-xs mt-1">{getFieldError('instagram')}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <label className="block text-white/80 text-sm font-medium mb-2">Empresa/Negócio *</label>
                        <input
                          type="text"
                          value={formData.empresa}
                          onChange={(e) => handleInputChange('empresa', e.target.value)}
                          className={getFieldClassName('empresa', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/50 transition-all duration-300")}
                          placeholder="Nome da sua empresa"
                        />
                        {getFieldError('empresa') && (
                          <p className="text-red-400 text-xs mt-1">{getFieldError('empresa')}</p>
                        )}
                      </div>
                      
                      <div className="relative">
                        <label className="block text-white/80 text-sm font-medium mb-2">Cargo/Função *</label>
                        <input
                          type="text"
                          value={formData.cargo}
                          onChange={(e) => handleInputChange('cargo', e.target.value)}
                          className={getFieldClassName('cargo', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/50 transition-all duration-300")}
                          placeholder="CEO, Fundador, Especialista..."
                        />
                        {getFieldError('cargo') && (
                          <p className="text-red-400 text-xs mt-1">{getFieldError('cargo')}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-white/80 text-sm font-medium mb-2">Faturamento Mensal *</label>
                      <select
                        value={formData.faturamento}
                        onChange={(e) => handleInputChange('faturamento', e.target.value)}
                        className={getFieldClassName('faturamento', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white transition-all duration-300")}
                      >
                        <option value="">Selecione sua faixa de faturamento</option>
                        <option value="50k-100k">R$ 50K - R$ 100K</option>
                        <option value="100k-300k">R$ 100K - R$ 300K</option>
                        <option value="300k-500k">R$ 300K - R$ 500K</option>
                        <option value="500k+">R$ 500K+</option>
                      </select>
                      {getFieldError('faturamento') && (
                        <p className="text-red-400 text-xs mt-1">{getFieldError('faturamento')}</p>
                      )}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="relative">
                      <label className="block text-white/80 text-sm font-medium mb-2">Principais desafios da sua marca pessoal *</label>
                      <textarea
                        value={formData.principais_desafios}
                        onChange={(e) => handleInputChange('principais_desafios', e.target.value)}
                        rows={3}
                        className={getFieldClassName('principais_desafios', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/50 transition-all duration-300 resize-none")}
                        placeholder="Descreva os principais desafios que enfrenta..."
                      />
                      {getFieldError('principais_desafios') && (
                        <p className="text-red-400 text-xs mt-1">{getFieldError('principais_desafios')}</p>
                      )}
                    </div>
                    
                    <div className="relative">
                      <label className="block text-white/80 text-sm font-medium mb-2">Cronograma para alcançar objetivos *</label>
                      <select
                        value={formData.cronograma}
                        onChange={(e) => handleInputChange('cronograma', e.target.value)}
                        className={getFieldClassName('cronograma', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white transition-all duration-300")}
                      >
                        <option value="">Selecione o cronograma</option>
                        <option value="6meses">6 meses</option>
                        <option value="1ano">1 ano</option>
                        <option value="2anos">2 anos</option>
                        <option value="3anos+">3+ anos</option>
                      </select>
                      {getFieldError('cronograma') && (
                        <p className="text-red-400 text-xs mt-1">{getFieldError('cronograma')}</p>
                      )}
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="relative">
                      <label className="block text-white/80 text-sm font-medium mb-2">Orçamento de investimento *</label>
                      <select
                        value={formData.orcamento_investimento}
                        onChange={(e) => handleInputChange('orcamento_investimento', e.target.value)}
                        className={getFieldClassName('orcamento_investimento', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white transition-all duration-300")}
                      >
                        <option value="">Selecione sua faixa de investimento</option>
                        <option value="50k-100k">R$ 50K - R$ 100K</option>
                        <option value="100k-300k">R$ 100K - R$ 300K</option>
                        <option value="300k+">R$ 300K+</option>
                      </select>
                      {getFieldError('orcamento_investimento') && (
                        <p className="text-red-400 text-xs mt-1">{getFieldError('orcamento_investimento')}</p>
                      )}
                    </div>
                    
                    <div className="relative">
                      <label className="block text-white/80 text-sm font-medium mb-2">Experiência anterior com consultoria/mentoria</label>
                      <textarea
                        value={formData.experiencia_anterior}
                        onChange={(e) => handleInputChange('experiencia_anterior', e.target.value)}
                        rows={4}
                        className={getFieldClassName('experiencia_anterior', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/50 transition-all duration-300 resize-none")}
                        placeholder="Conte sobre suas experiências anteriores com consultoria ou mentoria..."
                      />
                      {getFieldError('experiencia_anterior') && (
                        <p className="text-red-400 text-xs mt-1">{getFieldError('experiencia_anterior')}</p>
                      )}
                    </div>
                    
                    <div className="card-premium bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-gold-500/20 p-4">
                      <h4 className="text-lg font-bold text-white mb-2">Investimento</h4>
                      <div className="text-2xl font-black text-gradient mb-1">R$ 97.000</div>
                      <div className="text-white/80 mb-2">12x de R$ 8.083 sem juros</div>
                      <div className="text-xs text-gold-400">
                        ✓ Metodologia ETER completa • ✓ Mentoria com Davi Ribas • ✓ 11 semanas de transformação
                      </div>
                    </div>
                  </div>
                )}

                {/* Success Screen */}
                {currentStep === 5 && (
                  <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8 animate-fade-in">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center glow-green">
                      <Check className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                        APLICAÇÃO ENVIADA
                      </h3>
                      
                      <p className="text-xl text-white/80 max-w-md mx-auto">
                        Entraremos em contato brevemente...
                      </p>
                      
                      <p className="text-base text-white/60 max-w-lg mx-auto">
                        Sua aplicação foi recebida com sucesso. Nossa equipe analisará seu perfil e retornará em até 48 horas com os próximos passos.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-6 text-white/50 text-sm">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span>Aplicação Recebida</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          <span>Análise em Andamento</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                {currentStep < 5 && (
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                    {currentStep > 0 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep === 0 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-premium group text-xl"
                      >
                        <span className="flex items-center">
                          <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                          APLICAR
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                      </button>
                    ) : currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!canProceedToNextStep()}
                        className={`btn-premium group ${!canProceedToNextStep() ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <span className="flex items-center">
                          Próximo
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!canProceedToNextStep()}
                        className={`btn-premium text-lg group glow-gold-strong ${!canProceedToNextStep() ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <span className="flex items-center">
                          <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                          ENVIAR APLICAÇÃO
                        </span>
                      </button>
                    )}
                  </div>
                )}

                {/* Success Screen Button */}
                {currentStep === 5 && (
                  <div className="flex justify-center mt-8">
                    <button
                      type="button"
                      onClick={handleBackToHome}
                      className="btn-premium text-lg group glow-gold-strong"
                    >
                      <span className="flex items-center">
                        Voltar à página principal
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </span>
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
