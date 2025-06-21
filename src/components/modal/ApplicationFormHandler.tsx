
import React from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import { useApplicationForm } from '../../hooks/useApplicationForm';
import { useFormInputHandler } from '../../hooks/useFormInputHandler';
import { useStepNavigation } from '../../hooks/useStepNavigation';
import { useFormSubmission } from '../../hooks/useFormSubmission';

interface ApplicationFormHandlerProps {
  children: (props: {
    formData: any;
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
  const { errors, validateField, validateAllFields, clearFieldError } = useFormValidation();
  
  const {
    currentStep,
    setCurrentStep,
    isSubmitting,
    setIsSubmitting,
    formData,
    setFormData,
    resetForm
  } = useApplicationForm(isOpen);

  const { handleInputChange } = useFormInputHandler(
    formData,
    setFormData,
    errors,
    clearFieldError,
    validateField
  );

  const { canProceedToNextStep, nextStep, prevStep } = useStepNavigation(
    currentStep,
    setCurrentStep,
    formData,
    errors,
    validateField
  );

  const { handleSubmit } = useFormSubmission(
    formData,
    setCurrentStep,
    setIsSubmitting,
    validateAllFields
  );

  const handleBackToHome = () => {
    onClose();
    resetForm();
  };

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
