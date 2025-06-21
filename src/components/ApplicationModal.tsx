
import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import useFormValidation from '../hooks/useFormValidation';
import { useToast } from '../hooks/use-toast';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal = ({ isOpen, onClose }: ApplicationModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { errors, validateField, validateAllFields, clearFieldError } = useFormValidation();

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    instagram: '',
    empresa: '',
    cargo: '',
    faturamento: '',
    principais_desafios: '',
    objetivos_movimento: '',
    cronograma: '',
    orcamento_investimento: '',
    experiencia_anterior: ''
  });

  const totalSteps = 3;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    clearFieldError(field);
  };

  const handleFieldBlur = (field: string, value: string) => {
    const error = validateField(field, value);
    if (error) {
      clearFieldError(field);
    }
  };

  const canProceedToNextStep = () => {
    const fieldsToValidate = getFieldsForCurrentStep();
    return fieldsToValidate.every(field => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      return !error && formData[field as keyof typeof formData].trim() !== '';
    });
  };

  const getFieldsForCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return ['nome', 'email', 'whatsapp', 'instagram'];
      case 2:
        return ['empresa', 'cargo', 'faturamento'];
      case 3:
        return ['principais_desafios', 'objetivos_movimento', 'cronograma', 'orcamento_investimento'];
      default:
        return [];
    }
  };

  const handleNext = () => {
    const fieldsToValidate = getFieldsForCurrentStep();
    const hasErrors = fieldsToValidate.some(field => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      return error || !formData[field as keyof typeof formData].trim();
    });

    if (!hasErrors && currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      console.log(`Progresso salvo - Etapa ${currentStep + 1}:`, formData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateAllFields(formData)) {
      toast({
        title: "Erro na validação",
        description: "Por favor, corrija os campos destacados.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Aplicação enviada:', formData);
      
      toast({
        title: "Aplicação enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      onClose();
      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        instagram: '',
        empresa: '',
        cargo: '',
        faturamento: '',
        principais_desafios: '',
        objetivos_movimento: '',
        cronograma: '',
        orcamento_investimento: '',
        experiencia_anterior: ''
      });
      setCurrentStep(1);
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    const hasData = Object.values(formData).some(value => value.trim() !== '');
    if (hasData) {
      if (confirm('Tem certeza que deseja fechar? Seus dados serão perdidos.')) {
        onClose();
      }
    } else {
      onClose();
    }
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Nome Completo *
        </label>
        <Input
          value={formData.nome}
          onChange={(e) => handleInputChange('nome', e.target.value)}
          onBlur={(e) => handleFieldBlur('nome', e.target.value)}
          className="bg-black-800/50 border-gold-500/20 text-white"
          placeholder="Seu nome completo"
        />
        {errors.nome && <p className="text-red-400 text-xs mt-1">{errors.nome}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Email *
        </label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          onBlur={(e) => handleFieldBlur('email', e.target.value)}
          className="bg-black-800/50 border-gold-500/20 text-white"
          placeholder="seu@email.com"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-medium mb-2">
          WhatsApp *
        </label>
        <Input
          value={formData.whatsapp}
          onChange={(e) => handleInputChange('whatsapp', e.target.value)}
          onBlur={(e) => handleFieldBlur('whatsapp', e.target.value)}
          className="bg-black-800/50 border-gold-500/20 text-white"
          placeholder="+55 11 99999-9999"
        />
        {errors.whatsapp && <p className="text-red-400 text-xs mt-1">{errors.whatsapp}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Instagram
        </label>
        <Input
          value={formData.instagram}
          onChange={(e) => handleInputChange('instagram', e.target.value)}
          onBlur={(e) => handleFieldBlur('instagram', e.target.value)}
          className="bg-black-800/50 border-gold-500/20 text-white"
          placeholder="@seuinstagram"
        />
        {errors.instagram && <p className="text-red-400 text-xs mt-1">{errors.instagram}</p>}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Empresa *
        </label>
        <Input
          value={formData.empresa}
          onChange={(e) => handleInputChange('empresa', e.target.value)}
          className="bg-black-800/50 border-gold-500/20 text-white"
          placeholder="Nome da sua empresa"
        />
        {errors.empresa && <p className="text-red-400 text-xs mt-1">{errors.empresa}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Cargo *
        </label>
        <Input
          value={formData.cargo}
          onChange={(e) => handleInputChange('cargo', e.target.value)}
          className="bg-black-800/50 border-gold-500/20 text-white"
          placeholder="Seu cargo na empresa"
        />
        {errors.cargo && <p className="text-red-400 text-xs mt-1">{errors.cargo}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Faturamento Mensal *
        </label>
        <select
          value={formData.faturamento}
          onChange={(e) => handleInputChange('faturamento', e.target.value)}
          className="w-full bg-black-800/50 border border-gold-500/20 text-white rounded-md px-3 py-2"
        >
          <option value="">Selecione uma faixa</option>
          <option value="ate-50k">Até R$ 50.000</option>
          <option value="50k-100k">R$ 50.001 - R$ 100.000</option>
          <option value="100k-500k">R$ 100.001 - R$ 500.000</option>
          <option value="500k-1m">R$ 500.001 - R$ 1.000.000</option>
          <option value="acima-1m">Acima de R$ 1.000.000</option>
        </select>
        {errors.faturamento && <p className="text-red-400 text-xs mt-1">{errors.faturamento}</p>}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Principais Desafios *
        </label>
        <Textarea
          value={formData.principais_desafios}
          onChange={(e) => handleInputChange('principais_desafios', e.target.value)}
          className="bg-black-800/50 border-gold-500/20 text-white min-h-[80px]"
          placeholder="Descreva os principais desafios da sua marca..."
        />
        {errors.principais_desafios && <p className="text-red-400 text-xs mt-1">{errors.principais_desafios}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Objetivos com o Movimento *
        </label>
        <Textarea
          value={formData.objetivos_movimento}
          onChange={(e) => handleInputChange('objetivos_movimento', e.target.value)}
          className="bg-black-800/50 border-gold-500/20 text-white min-h-[80px]"
          placeholder="O que espera alcançar com a criação do movimento?"
        />
        {errors.objetivos_movimento && <p className="text-red-400 text-xs mt-1">{errors.objetivos_movimento}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Cronograma *
        </label>
        <select
          value={formData.cronograma}
          onChange={(e) => handleInputChange('cronograma', e.target.value)}
          className="w-full bg-black-800/50 border border-gold-500/20 text-white rounded-md px-3 py-2"
        >
          <option value="">Quando quer começar?</option>
          <option value="imediato">Imediatamente</option>
          <option value="1-mes">Em até 1 mês</option>
          <option value="3-meses">Em até 3 meses</option>
          <option value="6-meses">Em até 6 meses</option>
        </select>
        {errors.cronograma && <p className="text-red-400 text-xs mt-1">{errors.cronograma}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Orçamento de Investimento *
        </label>
        <select
          value={formData.orcamento_investimento}
          onChange={(e) => handleInputChange('orcamento_investimento', e.target.value)}
          className="w-full bg-black-800/50 border border-gold-500/20 text-white rounded-md px-3 py-2"
        >
          <option value="">Selecione uma faixa</option>
          <option value="ate-50k">Até R$ 50.000</option>
          <option value="50k-100k">R$ 50.001 - R$ 100.000</option>
          <option value="100k-200k">R$ 100.001 - R$ 200.000</option>
          <option value="acima-200k">Acima de R$ 200.000</option>
        </select>
        {errors.orcamento_investimento && <p className="text-red-400 text-xs mt-1">{errors.orcamento_investimento}</p>}
      </div>

      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Experiência Anterior
        </label>
        <Textarea
          value={formData.experiencia_anterior}
          onChange={(e) => handleInputChange('experiencia_anterior', e.target.value)}
          className="bg-black-800/50 border-gold-500/20 text-white min-h-[60px]"
          placeholder="Já teve experiência com marketing ou criação de comunidades? (opcional)"
        />
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="!max-w-2xl !w-[95vw] sm:!w-full !p-0 bg-gradient-to-br from-black-950 via-black-900 to-black-800 border-gold-500/20 !max-h-[95vh] overflow-hidden">
        <DialogTitle className="sr-only">Formulário de Aplicação</DialogTitle>
        <DialogDescription className="sr-only">
          Preencha os dados para se candidatar ao programa
        </DialogDescription>

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gold-500/10">
          <div>
            <h2 className="text-2xl font-bold text-gradient">
              Quero Ser Escolhido
            </h2>
            <p className="text-white/70 text-sm mt-1">
              Etapa {currentStep} de {totalSteps}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-full bg-black-800/60 border border-gold-500/20 flex items-center justify-center text-white/70 hover:text-white hover:border-gold-500/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-2">
          <div className="w-full bg-black-800/50 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-gold-400 to-gold-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-4 flex-1 overflow-y-auto">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gold-500/10 flex justify-between items-center">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            variant="outline"
            className="bg-transparent border-gold-500/20 text-white hover:bg-gold-500/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              disabled={!canProceedToNextStep()}
              className="btn-premium"
            >
              Próximo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !canProceedToNextStep()}
              className="btn-premium"
            >
              {isSubmitting ? (
                'Enviando...'
              ) : (
                <>
                  Enviar Aplicação
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
