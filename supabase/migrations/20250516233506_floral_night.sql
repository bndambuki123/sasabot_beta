/*
  # Beta Signups Schema

  1. New Tables
    - `beta_signups`
      - Contact information (name, email, phone)
      - Business details (name, sector, size)
      - Preferences and expectations
      - Internal tracking fields
  
  2. Security
    - Enable RLS
    - Public insert policy
    - Authenticated read policy for own data
    
  3. Features
    - Auto-updating timestamps
    - Email uniqueness constraint
    - Status validation
    - Email indexing
*/

-- Drop existing policies and triggers
DROP POLICY IF EXISTS "Users can read own signup data" ON beta_signups;
DROP POLICY IF EXISTS "Allow public to insert beta signups" ON beta_signups;
DROP TRIGGER IF EXISTS update_beta_signups_updated_at ON beta_signups;

CREATE TABLE IF NOT EXISTS beta_signups (
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

-- Allow public access to insert new signups (no auth required)
CREATE POLICY "Allow public to insert beta signups"
  ON beta_signups
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow users to read their own data
CREATE POLICY "Users can read own signup data"
  ON beta_signups
  FOR SELECT
  TO authenticated
  USING ((auth.jwt() ->> 'email'::text) = email);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_beta_signups_updated_at
  BEFORE UPDATE ON beta_signups
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS beta_signups_email_idx ON beta_signups (email);