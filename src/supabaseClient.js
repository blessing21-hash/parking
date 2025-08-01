import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kcuddbmmccypakasljtm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjdWRkYm1tY2N5cGFrYXNsanRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MzI0NDgsImV4cCI6MjA2ODQwODQ0OH0.stA29Tm_eeBMb8GKzglP2pDOSHBi_qM8sOwEtjlRbP0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)




