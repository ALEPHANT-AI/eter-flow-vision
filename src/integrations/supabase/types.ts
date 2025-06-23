export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ai_agents: {
        Row: {
          allow_public: boolean | null
          channel_id: string | null
          company_id: string | null
          configuration: Json | null
          created_at: string | null
          description: string | null
          fallback_mode: string | null
          id: string
          is_active: boolean | null
          model_id: string | null
          name: string
          primary_prompt_id: string | null
          system_prompt: string | null
          updated_at: string | null
          workflow_id: string | null
        }
        Insert: {
          allow_public?: boolean | null
          channel_id?: string | null
          company_id?: string | null
          configuration?: Json | null
          created_at?: string | null
          description?: string | null
          fallback_mode?: string | null
          id?: string
          is_active?: boolean | null
          model_id?: string | null
          name: string
          primary_prompt_id?: string | null
          system_prompt?: string | null
          updated_at?: string | null
          workflow_id?: string | null
        }
        Update: {
          allow_public?: boolean | null
          channel_id?: string | null
          company_id?: string | null
          configuration?: Json | null
          created_at?: string | null
          description?: string | null
          fallback_mode?: string | null
          id?: string
          is_active?: boolean | null
          model_id?: string | null
          name?: string
          primary_prompt_id?: string | null
          system_prompt?: string | null
          updated_at?: string | null
          workflow_id?: string | null
        }
        Relationships: []
      }
      ai_models: {
        Row: {
          ai_source_id: string | null
          context_length: number | null
          created_at: string | null
          id: string
          input_cost_per_1k: number | null
          is_active: boolean | null
          name: string
          output_cost_per_1k: number | null
          parameters: Json | null
          updated_at: string | null
        }
        Insert: {
          ai_source_id?: string | null
          context_length?: number | null
          created_at?: string | null
          id?: string
          input_cost_per_1k?: number | null
          is_active?: boolean | null
          name: string
          output_cost_per_1k?: number | null
          parameters?: Json | null
          updated_at?: string | null
        }
        Update: {
          ai_source_id?: string | null
          context_length?: number | null
          created_at?: string | null
          id?: string
          input_cost_per_1k?: number | null
          is_active?: boolean | null
          name?: string
          output_cost_per_1k?: number | null
          parameters?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_prompts: {
        Row: {
          action: string | null
          company_id: string
          content: string
          created_at: string | null
          description: string | null
          id: string
          name: string
          tags: Json | null
          updated_at: string | null
        }
        Insert: {
          action?: string | null
          company_id: string
          content: string
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          tags?: Json | null
          updated_at?: string | null
        }
        Update: {
          action?: string | null
          company_id?: string
          content?: string
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          tags?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_sources: {
        Row: {
          api_key: string | null
          base_url: string | null
          configuration: Json | null
          cost_per_1k_tokens: number | null
          created_at: string | null
          id: string
          last_tested_at: string | null
          name: string
          rate_limit_per_minute: number | null
          test_error_message: string | null
          total_api_calls: number | null
          total_cost: number | null
          updated_at: string | null
        }
        Insert: {
          api_key?: string | null
          base_url?: string | null
          configuration?: Json | null
          cost_per_1k_tokens?: number | null
          created_at?: string | null
          id?: string
          last_tested_at?: string | null
          name: string
          rate_limit_per_minute?: number | null
          test_error_message?: string | null
          total_api_calls?: number | null
          total_cost?: number | null
          updated_at?: string | null
        }
        Update: {
          api_key?: string | null
          base_url?: string | null
          configuration?: Json | null
          cost_per_1k_tokens?: number | null
          created_at?: string | null
          id?: string
          last_tested_at?: string | null
          name?: string
          rate_limit_per_minute?: number | null
          test_error_message?: string | null
          total_api_calls?: number | null
          total_cost?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      channels: {
        Row: {
          company_id: string | null
          configuration: Json | null
          created_at: string | null
          credential: string | null
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          updated_at: string | null
        }
        Insert: {
          company_id?: string | null
          configuration?: Json | null
          created_at?: string | null
          credential?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          updated_at?: string | null
        }
        Update: {
          company_id?: string | null
          configuration?: Json | null
          created_at?: string | null
          credential?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      collaboration_item_comments: {
        Row: {
          comment_context: Json | null
          comment_type: string | null
          content: string
          created_at: string | null
          data_item_id: string
          highlighted_text: string | null
          id: string
          parent_comment_id: string | null
          participant_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          comment_context?: Json | null
          comment_type?: string | null
          content: string
          created_at?: string | null
          data_item_id: string
          highlighted_text?: string | null
          id?: string
          parent_comment_id?: string | null
          participant_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          comment_context?: Json | null
          comment_type?: string | null
          content?: string
          created_at?: string | null
          data_item_id?: string
          highlighted_text?: string | null
          id?: string
          parent_comment_id?: string | null
          participant_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      collaboration_item_reactions: {
        Row: {
          created_at: string | null
          data_item_id: string
          explanation: string | null
          highlighted_text: string | null
          id: string
          participant_id: string | null
          reaction_context: Json | null
          reaction_type: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          data_item_id: string
          explanation?: string | null
          highlighted_text?: string | null
          id?: string
          participant_id?: string | null
          reaction_context?: Json | null
          reaction_type: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          data_item_id?: string
          explanation?: string | null
          highlighted_text?: string | null
          id?: string
          participant_id?: string | null
          reaction_context?: Json | null
          reaction_type?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      collaboration_nps: {
        Row: {
          created_at: string
          id: string
          participant_id: string
          score: number
          session_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          participant_id: string
          score: number
          session_id: string
        }
        Update: {
          created_at?: string
          id?: string
          participant_id?: string
          score?: number
          session_id?: string
        }
        Relationships: []
      }
      collaboration_session_participants: {
        Row: {
          anonymous_identifier: string | null
          collaboration_session_id: string
          created_at: string | null
          id: string
          invitation_status: string | null
          joined_at: string | null
          last_activity_at: string | null
          participant_metadata: Json | null
          participant_role: string | null
          total_comments: number | null
          total_reactions: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          anonymous_identifier?: string | null
          collaboration_session_id: string
          created_at?: string | null
          id?: string
          invitation_status?: string | null
          joined_at?: string | null
          last_activity_at?: string | null
          participant_metadata?: Json | null
          participant_role?: string | null
          total_comments?: number | null
          total_reactions?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          anonymous_identifier?: string | null
          collaboration_session_id?: string
          created_at?: string | null
          id?: string
          invitation_status?: string | null
          joined_at?: string | null
          last_activity_at?: string | null
          participant_metadata?: Json | null
          participant_role?: string | null
          total_comments?: number | null
          total_reactions?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      collaboration_sessions: {
        Row: {
          company_id: string
          completed_at: string | null
          consensus_threshold: number | null
          created_at: string | null
          data_analysis_id: string
          description: string | null
          id: string
          minimum_participants: number | null
          session_config: Json | null
          session_name: string | null
          session_results: Json | null
          session_type: string
          shared_id: string | null
          started_at: string | null
          started_by: string
          status: string | null
          target_completion_date: string | null
          target_participants: number | null
          total_participants: number | null
          updated_at: string | null
        }
        Insert: {
          company_id: string
          completed_at?: string | null
          consensus_threshold?: number | null
          created_at?: string | null
          data_analysis_id: string
          description?: string | null
          id?: string
          minimum_participants?: number | null
          session_config?: Json | null
          session_name?: string | null
          session_results?: Json | null
          session_type: string
          shared_id?: string | null
          started_at?: string | null
          started_by: string
          status?: string | null
          target_completion_date?: string | null
          target_participants?: number | null
          total_participants?: number | null
          updated_at?: string | null
        }
        Update: {
          company_id?: string
          completed_at?: string | null
          consensus_threshold?: number | null
          created_at?: string | null
          data_analysis_id?: string
          description?: string | null
          id?: string
          minimum_participants?: number | null
          session_config?: Json | null
          session_name?: string | null
          session_results?: Json | null
          session_type?: string
          shared_id?: string | null
          started_at?: string | null
          started_by?: string
          status?: string | null
          target_completion_date?: string | null
          target_participants?: number | null
          total_participants?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      companies: {
        Row: {
          auto_transcribe_videos: boolean | null
          created_at: string | null
          created_by: string | null
          deleted_at: string | null
          description: string | null
          id: string
          industry: string | null
          name: string
          status: string | null
          transcription_enabled: boolean | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          auto_transcribe_videos?: boolean | null
          created_at?: string | null
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          industry?: string | null
          name: string
          status?: string | null
          transcription_enabled?: boolean | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          auto_transcribe_videos?: boolean | null
          created_at?: string | null
          created_by?: string | null
          deleted_at?: string | null
          description?: string | null
          id?: string
          industry?: string | null
          name?: string
          status?: string | null
          transcription_enabled?: boolean | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      conversation_groups: {
        Row: {
          created_at: string | null
          group_name: string
          groupjid: string
          id: number
          summary_active: boolean
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          group_name: string
          groupjid: string
          id?: never
          summary_active?: boolean
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          group_name?: string
          groupjid?: string
          id?: never
          summary_active?: boolean
          updated_at?: string | null
        }
        Relationships: []
      }
      conversation_memories: {
        Row: {
          conversation_history: Json | null
          created_at: string
          id: number
          remotejid: string | null
        }
        Insert: {
          conversation_history?: Json | null
          created_at?: string
          id?: never
          remotejid?: string | null
        }
        Update: {
          conversation_history?: Json | null
          created_at?: string
          id?: never
          remotejid?: string | null
        }
        Relationships: []
      }
      conversation_messages: {
        Row: {
          channel_id: string | null
          created_at: string | null
          groupjid: string | null
          id: number
          instance: string | null
          message: string
          people_id: string | null
          remotejid: string | null
          role: string | null
          timestamp: string | null
          updated_at: string | null
        }
        Insert: {
          channel_id?: string | null
          created_at?: string | null
          groupjid?: string | null
          id?: never
          instance?: string | null
          message: string
          people_id?: string | null
          remotejid?: string | null
          role?: string | null
          timestamp?: string | null
          updated_at?: string | null
        }
        Update: {
          channel_id?: string | null
          created_at?: string | null
          groupjid?: string | null
          id?: never
          instance?: string | null
          message?: string
          people_id?: string | null
          remotejid?: string | null
          role?: string | null
          timestamp?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      conversation_transcriptions: {
        Row: {
          conversation_channel: string | null
          created_at: string | null
          credential: string | null
          groupjid: string | null
          id: number
          message: string | null
          name: string | null
          people_id: string | null
          phone_number: string
          remotejid: string | null
          timestamp: string | null
          updated_at: string | null
        }
        Insert: {
          conversation_channel?: string | null
          created_at?: string | null
          credential?: string | null
          groupjid?: string | null
          id?: never
          message?: string | null
          name?: string | null
          people_id?: string | null
          phone_number: string
          remotejid?: string | null
          timestamp?: string | null
          updated_at?: string | null
        }
        Update: {
          conversation_channel?: string | null
          created_at?: string | null
          credential?: string | null
          groupjid?: string | null
          id?: never
          message?: string | null
          name?: string | null
          people_id?: string | null
          phone_number?: string
          remotejid?: string | null
          timestamp?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      data_analyses: {
        Row: {
          ai_model_used: string | null
          allow_anonymous_participation: boolean | null
          analysis_completed_at: string | null
          analysis_config: Json | null
          analysis_started_at: string | null
          analysis_type: string
          chunks_processed: number | null
          company_id: string
          content_type: string
          created_at: string | null
          data_transcription_id: string
          error_message: string | null
          id: string
          items_by_type: Json | null
          processing_cost: number | null
          processing_duration_seconds: number | null
          processing_method: string | null
          share_expires_at: string | null
          shared_id: string | null
          sharing_enabled: boolean | null
          status: string | null
          total_items: number | null
          updated_at: string | null
        }
        Insert: {
          ai_model_used?: string | null
          allow_anonymous_participation?: boolean | null
          analysis_completed_at?: string | null
          analysis_config?: Json | null
          analysis_started_at?: string | null
          analysis_type: string
          chunks_processed?: number | null
          company_id: string
          content_type: string
          created_at?: string | null
          data_transcription_id: string
          error_message?: string | null
          id?: string
          items_by_type?: Json | null
          processing_cost?: number | null
          processing_duration_seconds?: number | null
          processing_method?: string | null
          share_expires_at?: string | null
          shared_id?: string | null
          sharing_enabled?: boolean | null
          status?: string | null
          total_items?: number | null
          updated_at?: string | null
        }
        Update: {
          ai_model_used?: string | null
          allow_anonymous_participation?: boolean | null
          analysis_completed_at?: string | null
          analysis_config?: Json | null
          analysis_started_at?: string | null
          analysis_type?: string
          chunks_processed?: number | null
          company_id?: string
          content_type?: string
          created_at?: string | null
          data_transcription_id?: string
          error_message?: string | null
          id?: string
          items_by_type?: Json | null
          processing_cost?: number | null
          processing_duration_seconds?: number | null
          processing_method?: string | null
          share_expires_at?: string | null
          shared_id?: string | null
          sharing_enabled?: boolean | null
          status?: string | null
          total_items?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      data_items: {
        Row: {
          character_count: number | null
          confidence_score: number | null
          content: string
          created_at: string | null
          data_analysis_id: string
          id: string
          importance_score: number | null
          item_category: string | null
          item_type: string
          metadata: Json | null
          original_text: string | null
          parent_item_id: string | null
          sequence_order: number
          source_location: Json | null
          updated_at: string | null
          weights: Json | null
          word_count: number | null
        }
        Insert: {
          character_count?: number | null
          confidence_score?: number | null
          content: string
          created_at?: string | null
          data_analysis_id: string
          id?: string
          importance_score?: number | null
          item_category?: string | null
          item_type: string
          metadata?: Json | null
          original_text?: string | null
          parent_item_id?: string | null
          sequence_order: number
          source_location?: Json | null
          updated_at?: string | null
          weights?: Json | null
          word_count?: number | null
        }
        Update: {
          character_count?: number | null
          confidence_score?: number | null
          content?: string
          created_at?: string | null
          data_analysis_id?: string
          id?: string
          importance_score?: number | null
          item_category?: string | null
          item_type?: string
          metadata?: Json | null
          original_text?: string | null
          parent_item_id?: string | null
          sequence_order?: number
          source_location?: Json | null
          updated_at?: string | null
          weights?: Json | null
          word_count?: number | null
        }
        Relationships: []
      }
      data_transcriptions: {
        Row: {
          auto_generated: boolean | null
          character_count: number | null
          collection_id: string | null
          content: string | null
          created_at: string
          file_id: string | null
          id: string
          language: string | null
          source_audio_id: string | null
          source_metadata: Json | null
          source_reference_id: string | null
          source_type: string
          transcription_model: string | null
          transcription_service: string | null
          updated_at: string
          virtual_filename: string | null
          word_count: number | null
        }
        Insert: {
          auto_generated?: boolean | null
          character_count?: number | null
          collection_id?: string | null
          content?: string | null
          created_at?: string
          file_id?: string | null
          id?: string
          language?: string | null
          source_audio_id?: string | null
          source_metadata?: Json | null
          source_reference_id?: string | null
          source_type: string
          transcription_model?: string | null
          transcription_service?: string | null
          updated_at?: string
          virtual_filename?: string | null
          word_count?: number | null
        }
        Update: {
          auto_generated?: boolean | null
          character_count?: number | null
          collection_id?: string | null
          content?: string | null
          created_at?: string
          file_id?: string | null
          id?: string
          language?: string | null
          source_audio_id?: string | null
          source_metadata?: Json | null
          source_reference_id?: string | null
          source_type?: string
          transcription_model?: string | null
          transcription_service?: string | null
          updated_at?: string
          virtual_filename?: string | null
          word_count?: number | null
        }
        Relationships: []
      }
      events: {
        Row: {
          attendees_emails: string | null
          attendees_names: string | null
          audio_url: string | null
          companies: string | null
          company_id: string | null
          created_at: string
          email_body: string | null
          email_subject: string | null
          email_to: string | null
          emails_approved: string | null
          event_date: string | null
          event_status: string | null
          event_type: string | null
          googledrive_file: string | null
          host_email: string | null
          id: string
          new_actionitens: string | null
          new_insights: string | null
          new_keywords: string | null
          new_overview: string | null
          notetaker_url: string | null
          original_actionitens: string | null
          original_keywords: string | null
          original_overview: string | null
          original_shorthand_bullet: string | null
          original_title: string | null
          original_transcription: string | null
          people: string | null
          ps: string | null
          record_id: string | null
          source: string | null
          transcript_id: string | null
          transcript_url: string | null
          video_url: string | null
        }
        Insert: {
          attendees_emails?: string | null
          attendees_names?: string | null
          audio_url?: string | null
          companies?: string | null
          company_id?: string | null
          created_at?: string
          email_body?: string | null
          email_subject?: string | null
          email_to?: string | null
          emails_approved?: string | null
          event_date?: string | null
          event_status?: string | null
          event_type?: string | null
          googledrive_file?: string | null
          host_email?: string | null
          id?: string
          new_actionitens?: string | null
          new_insights?: string | null
          new_keywords?: string | null
          new_overview?: string | null
          notetaker_url?: string | null
          original_actionitens?: string | null
          original_keywords?: string | null
          original_overview?: string | null
          original_shorthand_bullet?: string | null
          original_title?: string | null
          original_transcription?: string | null
          people?: string | null
          ps?: string | null
          record_id?: string | null
          source?: string | null
          transcript_id?: string | null
          transcript_url?: string | null
          video_url?: string | null
        }
        Update: {
          attendees_emails?: string | null
          attendees_names?: string | null
          audio_url?: string | null
          companies?: string | null
          company_id?: string | null
          created_at?: string
          email_body?: string | null
          email_subject?: string | null
          email_to?: string | null
          emails_approved?: string | null
          event_date?: string | null
          event_status?: string | null
          event_type?: string | null
          googledrive_file?: string | null
          host_email?: string | null
          id?: string
          new_actionitens?: string | null
          new_insights?: string | null
          new_keywords?: string | null
          new_overview?: string | null
          notetaker_url?: string | null
          original_actionitens?: string | null
          original_keywords?: string | null
          original_overview?: string | null
          original_shorthand_bullet?: string | null
          original_title?: string | null
          original_transcription?: string | null
          people?: string | null
          ps?: string | null
          record_id?: string | null
          source?: string | null
          transcript_id?: string | null
          transcript_url?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      files: {
        Row: {
          company_id: string
          created_at: string | null
          error_message: string | null
          file_size: number
          file_type: string
          id: string
          mime_type: string
          notes: string | null
          original_filename: string
          processing_status: string
          public_url: string
          storage_path: string
          transcription_completed: boolean | null
          transcription_requested: boolean | null
          updated_at: string | null
          upload_status: string
          uploaded_by: string | null
        }
        Insert: {
          company_id: string
          created_at?: string | null
          error_message?: string | null
          file_size: number
          file_type: string
          id?: string
          mime_type: string
          notes?: string | null
          original_filename: string
          processing_status: string
          public_url: string
          storage_path: string
          transcription_completed?: boolean | null
          transcription_requested?: boolean | null
          updated_at?: string | null
          upload_status: string
          uploaded_by?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string | null
          error_message?: string | null
          file_size?: number
          file_type?: string
          id?: string
          mime_type?: string
          notes?: string | null
          original_filename?: string
          processing_status?: string
          public_url?: string
          storage_path?: string
          transcription_completed?: boolean | null
          transcription_requested?: boolean | null
          updated_at?: string | null
          upload_status?: string
          uploaded_by?: string | null
        }
        Relationships: []
      }
      files_audio: {
        Row: {
          audio_codec: string | null
          bitrate: number | null
          channels: number | null
          converted_text_id: string | null
          created_at: string | null
          duration: number | null
          file_id: string
          id: string
          sample_rate: number | null
          source_video_id: string | null
          updated_at: string | null
        }
        Insert: {
          audio_codec?: string | null
          bitrate?: number | null
          channels?: number | null
          converted_text_id?: string | null
          created_at?: string | null
          duration?: number | null
          file_id: string
          id?: string
          sample_rate?: number | null
          source_video_id?: string | null
          updated_at?: string | null
        }
        Update: {
          audio_codec?: string | null
          bitrate?: number | null
          channels?: number | null
          converted_text_id?: string | null
          created_at?: string | null
          duration?: number | null
          file_id?: string
          id?: string
          sample_rate?: number | null
          source_video_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      files_image: {
        Row: {
          ai_description: string | null
          analysis_completed_at: string | null
          analysis_confidence: number | null
          analysis_model: string | null
          color_depth: number | null
          created_at: string
          dominant_colors: Json | null
          extracted_text: string | null
          file_id: string
          format: string | null
          has_transparency: boolean | null
          height: number | null
          id: string
          metadata: Json | null
          ocr_completed: boolean | null
          ocr_model: string | null
          updated_at: string
          width: number | null
        }
        Insert: {
          ai_description?: string | null
          analysis_completed_at?: string | null
          analysis_confidence?: number | null
          analysis_model?: string | null
          color_depth?: number | null
          created_at?: string
          dominant_colors?: Json | null
          extracted_text?: string | null
          file_id: string
          format?: string | null
          has_transparency?: boolean | null
          height?: number | null
          id?: string
          metadata?: Json | null
          ocr_completed?: boolean | null
          ocr_model?: string | null
          updated_at?: string
          width?: number | null
        }
        Update: {
          ai_description?: string | null
          analysis_completed_at?: string | null
          analysis_confidence?: number | null
          analysis_model?: string | null
          color_depth?: number | null
          created_at?: string
          dominant_colors?: Json | null
          extracted_text?: string | null
          file_id?: string
          format?: string | null
          has_transparency?: boolean | null
          height?: number | null
          id?: string
          metadata?: Json | null
          ocr_completed?: boolean | null
          ocr_model?: string | null
          updated_at?: string
          width?: number | null
        }
        Relationships: []
      }
      files_text: {
        Row: {
          auto_generated: boolean | null
          character_count: number | null
          content: string | null
          created_at: string | null
          file_id: string
          id: string
          language: string | null
          source_audio_id: string | null
          transcription_confidence: number | null
          transcription_model: string | null
          transcription_service: string | null
          updated_at: string | null
          word_count: number | null
        }
        Insert: {
          auto_generated?: boolean | null
          character_count?: number | null
          content?: string | null
          created_at?: string | null
          file_id: string
          id?: string
          language?: string | null
          source_audio_id?: string | null
          transcription_confidence?: number | null
          transcription_model?: string | null
          transcription_service?: string | null
          updated_at?: string | null
          word_count?: number | null
        }
        Update: {
          auto_generated?: boolean | null
          character_count?: number | null
          content?: string | null
          created_at?: string | null
          file_id?: string
          id?: string
          language?: string | null
          source_audio_id?: string | null
          transcription_confidence?: number | null
          transcription_model?: string | null
          transcription_service?: string | null
          updated_at?: string | null
          word_count?: number | null
        }
        Relationships: []
      }
      files_video: {
        Row: {
          audio_codec: string | null
          bitrate: number | null
          converted_audio_id: string | null
          created_at: string | null
          duration: number | null
          file_id: string
          frame_rate: number | null
          has_audio: boolean | null
          id: string
          resolution: string | null
          thumbnail_url: string | null
          updated_at: string | null
          video_codec: string | null
        }
        Insert: {
          audio_codec?: string | null
          bitrate?: number | null
          converted_audio_id?: string | null
          created_at?: string | null
          duration?: number | null
          file_id: string
          frame_rate?: number | null
          has_audio?: boolean | null
          id?: string
          resolution?: string | null
          thumbnail_url?: string | null
          updated_at?: string | null
          video_codec?: string | null
        }
        Update: {
          audio_codec?: string | null
          bitrate?: number | null
          converted_audio_id?: string | null
          created_at?: string | null
          duration?: number | null
          file_id?: string
          frame_rate?: number | null
          has_audio?: boolean | null
          id?: string
          resolution?: string | null
          thumbnail_url?: string | null
          updated_at?: string | null
          video_codec?: string | null
        }
        Relationships: []
      }
      form_applications: {
        Row: {
          cargo: string | null
          created_at: string
          cronograma: string | null
          email: string
          empresa: string | null
          experiencia_anterior: string | null
          faturamento: string | null
          id: string
          instagram: string | null
          nome: string
          objetivos_movimento: string | null
          orcamento_investimento: string | null
          principais_desafios: string | null
          updated_at: string
          whatsapp: string
        }
        Insert: {
          cargo?: string | null
          created_at?: string
          cronograma?: string | null
          email: string
          empresa?: string | null
          experiencia_anterior?: string | null
          faturamento?: string | null
          id?: string
          instagram?: string | null
          nome: string
          objetivos_movimento?: string | null
          orcamento_investimento?: string | null
          principais_desafios?: string | null
          updated_at?: string
          whatsapp: string
        }
        Update: {
          cargo?: string | null
          created_at?: string
          cronograma?: string | null
          email?: string
          empresa?: string | null
          experiencia_anterior?: string | null
          faturamento?: string | null
          id?: string
          instagram?: string | null
          nome?: string
          objetivos_movimento?: string | null
          orcamento_investimento?: string | null
          principais_desafios?: string | null
          updated_at?: string
          whatsapp?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          channel_metadata: Json | null
          content: string
          conversation_id: string
          created_at: string | null
          id: string
          metadata: Json | null
          parent_message_id: string | null
          role: string
          sender_name: string | null
          sender_phone: string | null
          whatsapp_message_id: number | null
        }
        Insert: {
          channel_metadata?: Json | null
          content: string
          conversation_id: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          parent_message_id?: string | null
          role: string
          sender_name?: string | null
          sender_phone?: string | null
          whatsapp_message_id?: number | null
        }
        Update: {
          channel_metadata?: Json | null
          content?: string
          conversation_id?: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          parent_message_id?: string | null
          role?: string
          sender_name?: string | null
          sender_phone?: string | null
          whatsapp_message_id?: number | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          action_url: string | null
          created_at: string
          id: string
          message: string
          metadata: Json | null
          read: boolean
          title: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          action_url?: string | null
          created_at?: string
          id?: string
          message: string
          metadata?: Json | null
          read?: boolean
          title: string
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          action_url?: string | null
          created_at?: string
          id?: string
          message?: string
          metadata?: Json | null
          read?: boolean
          title?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      people: {
        Row: {
          ai_prompt_id: string | null
          avatar_url: string | null
          company_id: string | null
          created_at: string | null
          display_name: string | null
          email: string | null
          first_name: string | null
          id: string
          is_active: boolean | null
          last_name: string | null
          metadata: Json | null
          notetaker_status: boolean | null
          phone_number: string | null
          role: string | null
          token_expires: string | null
          updated_at: string | null
          web_token: string | null
        }
        Insert: {
          ai_prompt_id?: string | null
          avatar_url?: string | null
          company_id?: string | null
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          is_active?: boolean | null
          last_name?: string | null
          metadata?: Json | null
          notetaker_status?: boolean | null
          phone_number?: string | null
          role?: string | null
          token_expires?: string | null
          updated_at?: string | null
          web_token?: string | null
        }
        Update: {
          ai_prompt_id?: string | null
          avatar_url?: string | null
          company_id?: string | null
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          is_active?: boolean | null
          last_name?: string | null
          metadata?: Json | null
          notetaker_status?: boolean | null
          phone_number?: string | null
          role?: string | null
          token_expires?: string | null
          updated_at?: string | null
          web_token?: string | null
        }
        Relationships: []
      }
      people_prompts: {
        Row: {
          content: string | null
          email: string | null
          first_name: string | null
          last_name: string | null
          phone_number: string | null
        }
        Insert: {
          content?: string | null
          email?: string | null
          first_name?: string | null
          last_name?: string | null
          phone_number?: string | null
        }
        Update: {
          content?: string | null
          email?: string | null
          first_name?: string | null
          last_name?: string | null
          phone_number?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          is_admin: boolean
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          is_admin?: boolean
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          is_admin?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          company_id: string | null
          created_at: string | null
          description: string | null
          end_date: string | null
          id: string
          name: string
          responsible_id: string | null
          start_date: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name: string
          responsible_id?: string | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name?: string
          responsible_id?: string | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      roles: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: never
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: never
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_companies: {
        Row: {
          company_id: string
          created_at: string | null
          deleted_at: string | null
          id: string
          role: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          company_id: string
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          role: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          company_id?: string
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          role?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: number
          role_id: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: never
          role_id: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: never
          role_id?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      whatsapp_groups: {
        Row: {
          created_at: string | null
          group_name: string
          groupjid: string
          id: number
          summary_active: boolean
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          group_name: string
          groupjid: string
          id?: never
          summary_active?: boolean
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          group_name?: string
          groupjid?: string
          id?: never
          summary_active?: boolean
          updated_at?: string | null
        }
        Relationships: []
      }
      whatsapp_messages: {
        Row: {
          created_at: string | null
          groupjid: string
          id: number
          message: string
          name: string
          remotejid: string
          timestamp: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          groupjid: string
          id?: never
          message: string
          name: string
          remotejid: string
          timestamp: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          groupjid?: string
          id?: never
          message?: string
          name?: string
          remotejid?: string
          timestamp?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      workflow_templates: {
        Row: {
          category: string | null
          configuration_template: Json | null
          created_at: string | null
          created_by: string | null
          description: string | null
          difficulty_level: string | null
          environment_variables_template: Json | null
          id: string
          is_public: boolean | null
          n8n_workflow_json: Json | null
          name: string
          required_integrations: Json | null
          setup_steps: Json | null
          tags: Json | null
          updated_at: string | null
          usage_instructions: string | null
        }
        Insert: {
          category?: string | null
          configuration_template?: Json | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          difficulty_level?: string | null
          environment_variables_template?: Json | null
          id?: string
          is_public?: boolean | null
          n8n_workflow_json?: Json | null
          name: string
          required_integrations?: Json | null
          setup_steps?: Json | null
          tags?: Json | null
          updated_at?: string | null
          usage_instructions?: string | null
        }
        Update: {
          category?: string | null
          configuration_template?: Json | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          difficulty_level?: string | null
          environment_variables_template?: Json | null
          id?: string
          is_public?: boolean | null
          n8n_workflow_json?: Json | null
          name?: string
          required_integrations?: Json | null
          setup_steps?: Json | null
          tags?: Json | null
          updated_at?: string | null
          usage_instructions?: string | null
        }
        Relationships: []
      }
      workflows: {
        Row: {
          allowed_channels: Json | null
          category: string | null
          company_id: string
          configuration: Json | null
          created_at: string | null
          created_by: string | null
          description: string | null
          environment_variables: Json | null
          execution_mode: string | null
          id: string
          input_schema: Json | null
          is_active: boolean | null
          last_execution_at: string | null
          max_retries: number | null
          n8n_webhook_url: string
          n8n_workflow_id: string
          name: string
          output_schema: Json | null
          rate_limit_per_minute: number | null
          requires_auth: boolean | null
          retry_delay_seconds: number | null
          sample_input: Json | null
          sample_output: Json | null
          tags: Json | null
          timeout_seconds: number | null
          updated_at: string | null
          usage_count: number | null
          version: string | null
          webhook_method: string | null
          webhook_secret: string | null
        }
        Insert: {
          allowed_channels?: Json | null
          category?: string | null
          company_id: string
          configuration?: Json | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          environment_variables?: Json | null
          execution_mode?: string | null
          id?: string
          input_schema?: Json | null
          is_active?: boolean | null
          last_execution_at?: string | null
          max_retries?: number | null
          n8n_webhook_url: string
          n8n_workflow_id: string
          name: string
          output_schema?: Json | null
          rate_limit_per_minute?: number | null
          requires_auth?: boolean | null
          retry_delay_seconds?: number | null
          sample_input?: Json | null
          sample_output?: Json | null
          tags?: Json | null
          timeout_seconds?: number | null
          updated_at?: string | null
          usage_count?: number | null
          version?: string | null
          webhook_method?: string | null
          webhook_secret?: string | null
        }
        Update: {
          allowed_channels?: Json | null
          category?: string | null
          company_id?: string
          configuration?: Json | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          environment_variables?: Json | null
          execution_mode?: string | null
          id?: string
          input_schema?: Json | null
          is_active?: boolean | null
          last_execution_at?: string | null
          max_retries?: number | null
          n8n_webhook_url?: string
          n8n_workflow_id?: string
          name?: string
          output_schema?: Json | null
          rate_limit_per_minute?: number | null
          requires_auth?: boolean | null
          retry_delay_seconds?: number | null
          sample_input?: Json | null
          sample_output?: Json | null
          tags?: Json | null
          timeout_seconds?: number | null
          updated_at?: string | null
          usage_count?: number | null
          version?: string | null
          webhook_method?: string | null
          webhook_secret?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      submit_form_application: {
        Args: {
          p_nome: string
          p_email: string
          p_whatsapp: string
          p_instagram?: string
          p_empresa?: string
          p_cargo?: string
          p_faturamento?: string
          p_principais_desafios?: string
          p_objetivos_movimento?: string
          p_cronograma?: string
          p_orcamento_investimento?: string
          p_experiencia_anterior?: string
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
