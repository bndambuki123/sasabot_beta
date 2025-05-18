/*
  # Beta Signups Schema

  1. New Tables
    - `beta_signups`
      - Core fields: id, timestamps, status
      - Contact info: name, email, phone, preferred contact
      - Business details: name, industry, size, location
      - Customer info: channels, enquiries
      - Preferences: expectations, data sharing, feedback
      - Internal tracking: notes, dates, account status
  
  2. Security
    - Enable RLS
    - Public can submit signups
    - Users can read their own data
    
  3. Performance
    - Index on email
    - Updated_at trigger
*/

-- Drop existing policies if they exist
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Allow public to insert beta signups" ON beta_signups;
  DROP POLICY IF EXISTS "Users can read own signup data" ON beta_signups;
  DROP POLICY IF EXISTS "Service role has full access" ON beta_signups;
EXCEPTION
  WHEN undefined_object THEN 
    NULL;
END $$;

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

-- Create policies
CREATE POLICY "Anyone can submit beta signup"
  ON beta_signups
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read own signup data"
  ON beta_signups
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' = email);

CREATE POLICY "Service role has full access"
  ON beta_signups
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create updated_at trigger function if it doesn't exist
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