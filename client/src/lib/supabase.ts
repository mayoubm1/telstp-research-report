import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types (extend as needed based on your 70+ tables)
export interface Hub {
  id: string;
  name: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ResearchUpdate {
  id: string;
  title: string;
  content: string;
  category: string;
  published_at: string;
  author: string;
}

// Real-time subscription helper
export const subscribeToUpdates = (callback: (payload: any) => void) => {
  return supabase
    .channel('research-updates')
    .on('postgres_changes', 
      { event: '*', schema: 'public', table: 'research_updates' },
      callback
    )
    .subscribe();
};
