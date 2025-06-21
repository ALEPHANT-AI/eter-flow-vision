
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from './ui/dialog';
import { useApplicationModal } from '../contexts/ApplicationModalContext';
import { useToast } from '../hooks/use-toast';
import useFormValidation from '../hooks/useFormValidation';
import ApplicationModalHeader from './modal/ApplicationModalHeader';
import WelcomeScreen from './modal/WelcomeScreen';
import PersonalInfoStep from './modal/PersonalInfoStep';
import BusinessInfoStep from './modal/BusinessInfoStep';
import ChallengesStep from './modal/ChallengesStep';
import InvestmentStep from './modal/InvestmentStep';
import SuccessScreen from './modal/SuccessScreen';
import FormNavigation from './modal/FormNavigation';

const ApplicationModal = () => {
  const { isOpen, closeModal } = useApplicationModal();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  const totalSteps = 6;

  const formatPhoneNumber = (value: string) => {
    if (!value) return '';
    
    const cleaned = value.replace(/[^\d+]/g, '');
    
    if (cleaned && !cleaned.startsWith('+')) {
      return '+' + cleaned;
    }
    
    if (cleaned.startsWith('+55')) {
      const numbers = cleaned.slice(3);
      
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
      // Instagram é opcional, então se estiver apenas '@', considerar válido
      if (field === 'instagram') {
        return !errors[field];
      }
      // experiencia_anterior é opcional
      if (field === 'experiencia_anterior') {
        return !errors[field];
      }
      return value && value.trim() !== '' && !errors[field];
    });
  };

  const getStepFields = (step: number) => {
    switch (step) {
      case 1: return ['nome', 'email', 'whatsapp', 'instagram'];
      case 2: return ['empresa', 'cargo', 'faturamento'];
      case 3: return ['principais_desafios', 'cronograma'];
      case 4: return ['orcamento_investimento']; // Removido experiencia_anterior pois é opcional
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

  const sendToGoogleSheets = async (data: typeof formData) => {
    // Substitua esta URL pela URL do seu Google Apps Script
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Necessário para Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...data
        })
      });

      // Com no-cors, não podemos ler a resposta, então assumimos sucesso se não houver erro
      console.log('Dados enviados para Google Sheets:', data);
      return true;
    } catch (error) {
      console.error('Erro ao enviar para Google Sheets:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar apenas campos obrigatórios para o envio final
    const requiredFieldsForSubmission = {
      nome: formData.nome,
      email: formData.email,
      whatsapp: formData.whatsapp,
      empresa: formData.empresa,
      cargo: formData.cargo,
      faturamento: formData.faturamento,
      principais_desafios: formData.principais_desafios,
      cronograma: formData.cronograma,
      orcamento_investimento: formData.orcamento_investimento
    };
    
    const isFormValid = validateAllFields(requiredFieldsForSubmission as any);
    
    if (!isFormValid) {
      console.log('Form validation failed:', errors);
      toast({
        title: "Erro na validação",
        description: "Por favor, verifique os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar dados para Google Sheets
      await sendToGoogleSheets(formData);
      
      console.log('Form submitted successfully:', formData);
      
      toast({
        title: "Aplicação enviada com sucesso!",
        description: "Seus dados foram registrados. Em breve entraremos em contato.",
      });

      setCurrentStep(5); // Ir para tela de sucesso
    } catch (error) {
      console.error('Error submitting form:', error);
      
      toast({
        title: "Erro no envio",
        description: "Houve um problema ao enviar sua aplicação. Tente novamente.",
        variant: "destructive",
      });

      // Mesmo com erro, permitir continuar para não bloquear o usuário
      // Em produção, você pode decidir se quer bloquear ou não
      setTimeout(() => {
        setCurrentStep(5);
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToHome = () => {
    closeModal();
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeScreen />;
      case 1:
        return (
          <PersonalInfoStep
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
            getFieldClassName={getFieldClassName}
            getFieldError={getFieldError}
          />
        );
      case 2:
        return (
          <BusinessInfoStep
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
            getFieldClassName={getFieldClassName}
            getFieldError={getFieldError}
          />
        );
      case 3:
        return (
          <ChallengesStep
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
            getFieldClassName={getFieldClassName}
            getFieldError={getFieldError}
          />
        );
      case 4:
        return (
          <InvestmentStep
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
            getFieldClassName={getFieldClassName}
            getFieldError={getFieldError}
          />
        );
      case 5:
        return <SuccessScreen />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogOverlay className="fixed inset-0 bg-black/80 z-50" />
      <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-4xl h-[95vh] sm:h-[90vh] bg-gradient-to-b from-black-900 to-black-950 border border-white/10 rounded-2xl p-0 z-50 overflow-hidden [&>button]:hidden">
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 sm:right-6 sm:top-6 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>

        <div className="h-full flex flex-col">
          <ApplicationModalHeader currentStep={currentStep} />

          <div className="flex-1 px-4 sm:px-8 pb-4 sm:pb-8 overflow-hidden">
            <div className="card-premium h-full">
              <form onSubmit={handleSubmit} className="h-full flex flex-col">
                <div className="flex-1 overflow-y-auto px-2 sm:px-0">
                  {renderStepContent()}
                </div>

                <FormNavigation
                  currentStep={currentStep}
                  totalSteps={totalSteps}
                  canProceedToNextStep={canProceedToNextStep}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleSubmit={handleSubmit}
                  handleBackToHome={handleBackToHome}
                  isSubmitting={isSubmitting}
                />
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
