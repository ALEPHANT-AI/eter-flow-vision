
import { useToast } from './use-toast';
import { sendApplicationToSupabase } from '../services/applicationService';
import { FormData } from './useApplicationForm';

export const useFormSubmission = (
  formData: FormData,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  validateAllFields: (fields: any) => boolean
) => {
  const { toast } = useToast();

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
      console.log('Form validation failed');
      toast({
        title: "Erro na validação",
        description: "Por favor, verifique os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendApplicationToSupabase(formData);
      
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

  return { handleSubmit };
};
