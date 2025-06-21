
import { supabase } from '../integrations/supabase/client';
import { FormData } from '../hooks/useApplicationForm';

export const sendApplicationToSupabase = async (data: FormData) => {
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
