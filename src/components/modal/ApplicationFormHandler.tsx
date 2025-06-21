import React, { useState, useEffect } from 'react';
import { useToast } from '../../hooks/use-toast';
import useFormValidation from '../../hooks/useFormValidation';
import { formatPhoneNumber, getStepFields } from './ApplicationModalUtils';
import { supabase } from '../../integrations/supabase/client';

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  instagram: string;
  empresa: string;
  cargo: string;
  faturamento: string;
  principais_desafios: string;
  objetivos_movimento: string;
  cronograma: string;
  orcamento_investimento: string;
  experiencia_anterior: string;
}

interface ApplicationFormHandlerProps {
  children: (props: {
    formData: FormData;
    errors: { [key: string]: string };
    currentStep: number;
    isSubmitting: boolean;
    canProceedToNextStep: () => boolean;
    handleInputChange: (field: string, value: string) => void;
    nextStep: () => void;
    prevStep: () => void;
    handleSubmit: (e: React.FormEvent) => void;
    handleBackToHome: () => void;
    getFieldError: (field: string) => string;
    getFieldClassName: (field: string, baseClassName: string) => string;
    setCurrentStep: (step: number) => void;
  }) => React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const ApplicationFormHandler: React.FC<ApplicationFormHandlerProps> = ({ children, onClose, isOpen }) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
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
    if (currentStep === 0) return true;
    
    const stepFields = getStepFields(currentStep);
    console.log('Checking step', currentStep, 'fields:', stepFields);
    console.log('Current form data:', formData);
    console.log('Current errors:', errors);
    
    const hasRequiredValues = stepFields.every(field => {
      const value = formData[field as keyof typeof formData];
      
      if (field === 'instagram') {
        return true;
      }
      if (field === 'experiencia_anterior') {
        return true;
      }
      
      const hasValue = value && value.trim() !== '' && value !== '@';
      console.log(`Field ${field}: value="${value}", hasValue=${hasValue}`);
      return hasValue;
    });
    
    const hasNoErrors = stepFields.every(field => !errors[field]);
    
    console.log('Has required values:', hasRequiredValues);
    console.log('Has no errors:', hasNoErrors);
    
    return hasRequiredValues && hasNoErrors;
  };

  const nextStep = () => {
    if (currentStep === 0) {
      setCurrentStep(prev => prev + 1);
      return;
    }
    
    const stepFields = getStepFields(currentStep);
    console.log('Attempting to move from step', currentStep, 'to', currentStep + 1);
    
    stepFields.forEach(field => {
      const value = formData[field as keyof typeof formData];
      const error = validateField(field, value);
      if (error) {
        console.log(`Validation error for ${field}:`, error);
      }
    });
    
    if (canProceedToNextStep() && currentStep < 5) {
      setCurrentStep(prev => prev + 1);
      console.log('Moving to step:', currentStep + 1);
      console.log('Form data at step change:', formData);
    } else {
      console.log('Cannot proceed to next step. Can proceed:', canProceedToNextStep());
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const sendToSupabase = async (data: FormData) => {
    try {
      const { error } = await supabase
        .from('form_applications')
        .insert([
          {
            nome: data.nome,
            email: data.email,
            whatsapp: data.whatsapp,
            instagram: data.instagram === '@' ? null : data.instagram,
            empresa: data.empresa,
            cargo: data.cargo,
            faturamento: data.faturamento,
            principais_desafios: data.principais_desafios,
            objetivos_movimento: data.objetivos_movimento || null,
            cronograma: data.cronograma,
            orcamento_investimento: data.orcamento_investimento,
            experiencia_anterior: data.experiencia_anterior || null
          }
        ]);

      if (error) {
        console.error('Erro do Supabase:', error);
        throw error;
      }

      console.log('Dados enviados para Supabase com sucesso:', data);
      return true;
    } catch (error) {
      console.error('Erro ao enviar para Supabase:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
      await sendToSupabase(formData);
      
      console.log('Form submitted successfully:', formData);
      
      toast({
        title: "Aplicação enviada com sucesso!",
        description: "Seus dados foram registrados. Em breve entraremos em contato.",
      });

      setCurrentStep(5);
    } catch (error) {
      console.error('Error submitting form:', error);
      
      toast({
        title: "Erro no envio",
        description: "Houve um problema ao enviar sua aplicação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToHome = () => {
    onClose();
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

  return (
    <>
      {children({
        formData,
        errors,
        currentStep,
        isSubmitting,
        canProceedToNextStep,
        handleInputChange,
        nextStep,
        prevStep,
        handleSubmit,
        handleBackToHome,
        getFieldError,
        getFieldClassName,
        setCurrentStep
      })}
    </>
  );
};

export default ApplicationFormHandler;
