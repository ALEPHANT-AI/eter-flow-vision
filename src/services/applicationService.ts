
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
    
    // Prepare data for insertion
    const insertData = {
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
    };
    
    console.log('📋 Prepared data for insertion:', insertData);
    
    // Validate required fields
    const requiredFields = ['nome', 'email', 'whatsapp', 'empresa', 'cargo', 'faturamento', 'principais_desafios', 'cronograma', 'orcamento_investimento'];
    const missingFields = requiredFields.filter(field => !insertData[field as keyof typeof insertData]);
    
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
    
    // Attempt insertion with detailed error logging
    console.log('🚀 Attempting to insert data into Supabase...');
    const { data: insertResult, error } = await supabase
      .from('form_applications')
      .insert([insertData])
      .select();

    if (error) {
      console.error('❌ Supabase insertion error:', error);
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

    console.log('✅ Data successfully inserted into Supabase:', insertResult);
    return { success: true, data: insertResult };
  } catch (error) {
    console.error('💥 sendApplicationToSupabase error:', error);
    
    // Re-throw the error to be handled by the calling function
    throw error;
  }
};
