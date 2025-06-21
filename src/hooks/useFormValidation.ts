
import { useState } from 'react';

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

interface FormErrors {
  [key: string]: string;
}

const useFormValidation = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // More lenient phone validation - just check if it has at least 10 digits
    const cleanPhone = phone.replace(/[^\d]/g, '');
    return cleanPhone.length >= 10;
  };

  const validateInstagram = (instagram: string): boolean => {
    // Make Instagram validation more lenient - allow empty or just @
    if (!instagram || instagram === '@') return true;
    const instagramRegex = /^@[a-zA-Z0-9._]+$/;
    return instagramRegex.test(instagram);
  };

  const validateField = (field: string, value: string): string => {
    // Add null/undefined checks
    if (value === null || value === undefined) {
      value = '';
    }
    
    let error = '';
    
    switch (field) {
      case 'nome':
        if ((value?.trim?.()?.length || 0) < 2) {
          error = 'Nome deve ter pelo menos 2 caracteres';
        }
        break;
      case 'email':
        if (!value || !validateEmail(value)) {
          error = 'Email inválido';
        }
        break;
      case 'whatsapp':
        if (!value || !validatePhone(value)) {
          error = 'WhatsApp inválido (mínimo 10 dígitos)';
        }
        break;
      case 'instagram':
        if (!validateInstagram(value)) {
          error = 'Instagram deve começar com @ (ex: @usuario)';
        }
        break;
      case 'empresa':
        if ((value?.trim?.()?.length || 0) < 2) {
          error = 'Nome da empresa deve ter pelo menos 2 caracteres';
        }
        break;
      case 'cargo':
        if ((value?.trim?.()?.length || 0) < 2) {
          error = 'Cargo deve ter pelo menos 2 caracteres';
        }
        break;
      case 'faturamento':
        if (!value) {
          error = 'Selecione uma faixa de faturamento';
        }
        break;
      case 'principais_desafios':
        if ((value?.trim?.()?.length || 0) < 10) {
          error = 'Descreva seus principais desafios (mínimo 10 caracteres)';
        }
        break;
      case 'cronograma':
        if (!value) {
          error = 'Selecione um cronograma';
        }
        break;
      case 'orcamento_investimento':
        if (!value) {
          error = 'Selecione uma faixa de investimento';
        }
        break;
      case 'experiencia_anterior':
        // Campo opcional - não validar se estiver vazio
        break;
      default:
        break;
    }
    
    // Update errors state
    setErrors(prev => {
      const newErrors = { ...prev };
      if (error) {
        newErrors[field] = error;
      } else {
        delete newErrors[field];
      }
      return newErrors;
    });
    
    return error;
  };

  const validateAllFields = (formData: FormData): boolean => {
    const newErrors: FormErrors = {};
    
    // Definir campos obrigatórios por step
    const requiredFields = [
      'nome', 'email', 'whatsapp', // Step 1 (instagram é opcional)
      'empresa', 'cargo', 'faturamento', // Step 2
      'principais_desafios', 'cronograma', // Step 3
      'orcamento_investimento' // Step 4 (experiencia_anterior é opcional)
    ];
    
    requiredFields.forEach((field) => {
      const value = formData[field as keyof FormData];
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearFieldError = (field: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  };

  return {
    errors,
    validateField,
    validateAllFields,
    clearFieldError,
    setErrors
  };
};

export default useFormValidation;
