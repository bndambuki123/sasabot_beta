/*
  # Fix beta signups table and policies

  1. Changes
    - Safely drop and recreate policies with proper error handling
    - Ensure table structure matches requirements
    - Set up proper RLS policies
    - Add performance optimizations (indexes)
    
  2. Security
    - Enable RLS
    - Add policies for public signup, authenticated user access, and service role access
*/

-- Drop existing policies if they exist
DO $$ 
BEGIN
  -- First try to disable RLS to avoid policy conflicts
  ALTER TABLE IF EXISTS beta_signups DISABLE ROW LEVEL SECURITY;
  
  -- Then drop existing policies
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'beta_signups' AND policyname = 'Anyone can submit beta signup') THEN
    DROP POLICY "Anyone can submit beta signup" ON beta_signups;
  END IF;
  
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'beta_signups' AND policyname = 'Users can read own signup data') THEN
    DROP POLICY "Users can read own signup data" ON beta_signups;
  END IF;
  
  IF EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'beta_signups' AND policyname = 'Service role has full access') THEN
    DROP POLICY "Service role has full access" ON beta_signups;
  END IF;
EXCEPTION
  WHEN undefined_object THEN 
    NULL;
END $$;

-- Drop and recreate the table
DROP TABLE IF EXISTS beta_signups;

CREATE TABLE beta_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'onboarded')),
  
  -- Contact Information
  full_name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone_number text,
  preferred_contact text,
  
  -- Business Details
  business_name text NOT NULL,
  industry_sector text,
  company_size text,
  business_location jsonb NOT NULL DEFAULT '{}',
  customer_channels text[],
  customer_enquiries text,
  
  -- Expectations and Preferences
  expectations text,
  share_data boolean DEFAULT false,
  feedback_preference text[],
  referral_source text,
  
  -- Internal tracking
  notes text,
  onboarding_date timestamptz,
  account_status text DEFAULT 'inactive' CHECK (account_status IN ('inactive', 'active', 'suspended'))
);

-- Enable RLS
ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Create policies with new unique names
CREATE POLICY "beta_signup_insert_policy"
  ON beta_signups
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "beta_signup_select_policy"
  ON beta_signups
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' = email);

CREATE POLICY "beta_signup_service_policy"
  ON beta_signups
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create or replace updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger
DROP TRIGGER IF EXISTS update_beta_signups_updated_at ON beta_signups;
CREATE TRIGGER update_beta_signups_updated_at
  BEFORE UPDATE ON beta_signups
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS beta_signups_email_idx ON beta_signups (email);