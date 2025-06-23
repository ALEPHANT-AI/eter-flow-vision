
import { supabase } from '../integrations/supabase/client';
import { FormData } from '../hooks/useApplicationForm';

export const sendApplicationToSupabase = async (data: FormData) => {
  console.log('📤 sendApplicationToSupabase called with data:', data);
  
  try {
    // Test Supabase connection first
    console.log('🔗 Testing Supabase connection...');
    const { data: testData, error: testError } = await supabase
      .from('form_applications')
      .select('count')
      .limit(1);
    
    if (testError) {
      console.error('❌ Supabase connection test failed:', testError);
      console.error('Connection error details:', {
        message: testError.message,
        details: testError.details,
        hint: testError.hint,
        code: testError.code
      });
      throw new Error(`Connection failed: ${testError.message}`);
    }
    
    console.log('✅ Supabase connection successful');
    
    // Validate required fields
    const requiredFields = ['nome', 'email', 'whatsapp'];
    const missingFields = requiredFields.filter(field => !data[field as keyof FormData]);
    
    if (missingFields.length > 0) {
      console.error('❌ Missing required fields:', missingFields);
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }
    
    console.log('✅ All required fields present');
    
    // Check current user session for debugging
    const { data: session, error: sessionError } = await supabase.auth.getSession();
    console.log('👤 Current session:', session ? 'authenticated' : 'anonymous');
    if (sessionError) {
      console.log('⚠️ Session check error (this is ok for anonymous users):', sessionError);
    }
    
    // Use the secure database function instead of direct INSERT
    console.log('🚀 Calling secure database function...');
    const { data: insertResult, error } = await supabase.rpc('submit_form_application', {
      p_nome: data.nome,
      p_email: data.email,
      p_whatsapp: data.whatsapp,
      p_instagram: data.instagram === '@' ? null : data.instagram,
      p_empresa: data.empresa || null,
      p_cargo: data.cargo || null,
      p_faturamento: data.faturamento || null,
      p_principais_desafios: data.principais_desafios || null,
      p_objetivos_movimento: data.objetivos_movimento || null,
      p_cronograma: data.cronograma || null,
      p_orcamento_investimento: data.orcamento_investimento || null,
      p_experiencia_anterior: data.experiencia_anterior || null
    });

    if (error) {
      console.error('❌ Database function error:', error);
      console.error('Detailed error information:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      
      // Provide more user-friendly error messages
      if (error.message.includes('permission denied')) {
        throw new Error('Erro de permissão: Não foi possível salvar os dados. Tente novamente.');
      } else if (error.message.includes('violates row-level security policy')) {
        throw new Error('Erro de segurança: Não foi possível processar sua solicitação. Tente novamente.');
      } else if (error.message.includes('duplicate key')) {
        throw new Error('Dados duplicados: Esta aplicação já foi enviada anteriormente.');
      } else {
        throw new Error(`Erro no banco de dados: ${error.message}`);
      }
    }

    console.log('✅ Data successfully inserted via database function:', insertResult);
    return { success: true, data: insertResult };
  } catch (error) {
    console.error('💥 sendApplicationToSupabase error:', error);
    
    // Re-throw the error to be handled by the calling function
    throw error;
  }
};
