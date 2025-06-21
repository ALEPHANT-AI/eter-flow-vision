
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
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\(\)\-]/g, '');
    return cleanPhone.length >= 10 && phoneRegex.test(cleanPhone);
  };

  const validateInstagram = (instagram: string): boolean => {
    if (!instagram || instagram === '@') return true; // Optional field
    const instagramRegex = /^@[a-zA-Z0-9._]+$/;
    return instagramRegex.test(instagram);
  };

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'nome':
        return value.trim().length < 2 ? 'Nome deve ter pelo menos 2 caracteres' : '';
      case 'email':
        return !validateEmail(value) ? 'Email inválido' : '';
      case 'whatsapp':
        return !validatePhone(value) ? 'WhatsApp inválido (use formato: +55 11 99999-9999)' : '';
      case 'instagram':
        return !validateInstagram(value) ? 'Instagram deve começar com @ (ex: @usuario)' : '';
      case 'empresa':
        return value.trim().length < 2 ? 'Nome da empresa deve ter pelo menos 2 caracteres' : '';
      case 'cargo':
        return value.trim().length < 2 ? 'Cargo deve ter pelo menos 2 caracteres' : '';
      case 'faturamento':
        return !value ? 'Selecione uma faixa de faturamento' : '';
      case 'principais_desafios':
        return value.trim().length < 10 ? 'Descreva seus principais desafios (mínimo 10 caracteres)' : '';
      case 'cronograma':
        return !value ? 'Selecione um cronograma' : '';
      case 'orcamento_investimento':
        return !value ? 'Selecione uma faixa de investimento' : '';
      case 'experiencia_anterior':
        // Campo opcional - não validar se estiver vazio
        return '';
      default:
        return '';
    }
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
