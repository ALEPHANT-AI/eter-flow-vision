
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

  // Debug log
  console.log('Modal state:', { isOpen, currentStep });

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
    console.log('Closing modal');
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
        <label className="block text-sm font-medium mb-2 text-white">
          Nome Completo *
        </label>
        <Input
          value={formData.nome}
          onChange={(e) => handleInputChange('nome', e.target.value)}
          onBlur={(e) => handleFieldBlur('nome', e.target.value)}
          className="w-full"
          placeholder="Seu nome completo"
        />
        {errors.nome && <p className="text-red-400 text-xs mt-1">{errors.nome}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-white">
          Email *
        </label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          onBlur={(e) => handleFieldBlur('email', e.target.value)}
          className="w-full"
          placeholder="seu@email.com"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-white">
          WhatsApp *
        </label>
        <Input
          value={formData.whatsapp}
          onChange={(e) => handleInputChange('whatsapp', e.target.value)}
          onBlur={(e) => handleFieldBlur('whatsapp', e.target.value)}
          className="w-full"
          placeholder="+55 11 99999-9999"
        />
        {errors.whatsapp && <p className="text-red-400 text-xs mt-1">{errors.whatsapp}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-white">
          Instagram
        </label>
        <Input
          value={formData.instagram}
          onChange={(e) => handleInputChange('instagram', e.target.value)}
          onBlur={(e) => handleFieldBlur('instagram', e.target.value)}
          className="w-full"
          placeholder="@seuinstagram"
        />
        {errors.instagram && <p className="text-red-400 text-xs mt-1">{errors.instagram}</p>}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2 text-white">
          Empresa *
        </label>
        <Input
          value={formData.empresa}
          onChange={(e) => handleInputChange('empresa', e.target.value)}
          className="w-full"
          placeholder="Nome da sua empresa"
        />
        {errors.empresa && <p className="text-red-400 text-xs mt-1">{errors.empresa}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-white">
          Cargo *
        </label>
        <Input
          value={formData.cargo}
          onChange={(e) => handleInputChange('cargo', e.target.value)}
          className="w-full"
          placeholder="Seu cargo na empresa"
        />
        {errors.cargo && <p className="text-red-400 text-xs mt-1">{errors.cargo}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-white">
          Faturamento Mensal *
        </label>
        <select
          value={formData.faturamento}
          onChange={(e) => handleInputChange('faturamento', e.target.value)}
          className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
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
        <label className="block text-sm font-medium mb-2 text-white">
          Principais Desafios *
        </label>
        <Textarea
          value={formData.principais_desafios}
          onChange={(e) => handleInputChange('principais_desafios', e.target.value)}
          className="min-h-[80px] w-full"
          placeholder="Descreva os principais desafios da sua marca..."
        />
        {errors.principais_desafios && <p className="text-red-400 text-xs mt-1">{errors.principais_desafios}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-white">
          Objetivos com o Movimento *
        </label>
        <Textarea
          value={formData.objetivos_movimento}
          onChange={(e) => handleInputChange('objetivos_movimento', e.target.value)}
          className="min-h-[80px] w-full"
          placeholder="O que espera alcançar com a criação do movimento?"
        />
        {errors.objetivos_movimento && <p className="text-red-400 text-xs mt-1">{errors.objetivos_movimento}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-white">
          Cronograma *
        </label>
        <select
          value={formData.cronograma}
          onChange={(e) => handleInputChange('cronograma', e.target.value)}
          className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
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
        <label className="block text-sm font-medium mb-2 text-white">
          Orçamento de Investimento *
        </label>
        <select
          value={formData.orcamento_investimento}
          onChange={(e) => handleInputChange('orcamento_investimento', e.target.value)}
          className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
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
        <label className="block text-sm font-medium mb-2 text-white">
          Experiência Anterior
        </label>
        <Textarea
          value={formData.experiencia_anterior}
          onChange={(e) => handleInputChange('experiencia_anterior', e.target.value)}
          className="min-h-[60px] w-full"
          placeholder="Já teve experiência com marketing ou criação de comunidades? (opcional)"
        />
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl w-[95vw] sm:w-full max-h-[95vh] overflow-hidden">
        <DialogTitle className="sr-only">Formulário de Aplicação</DialogTitle>
        <DialogDescription className="sr-only">
          Preencha os dados para se candidatar ao programa
        </DialogDescription>

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold">
              Quero Ser Escolhido
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Etapa {currentStep} de {totalSteps}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-accent transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-2">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
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
        <div className="p-6 border-t flex justify-between items-center">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            variant="outline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              disabled={!canProceedToNextStep()}
            >
              Próximo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !canProceedToNextStep()}
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
