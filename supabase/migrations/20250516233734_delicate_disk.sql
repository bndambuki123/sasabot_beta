/*
  # Fix RLS policies for beta signups table

  1. Security Changes
    - Drop existing RLS policies that are causing issues
    - Add new policies to allow:
      - Public users to insert new signups
      - Authenticated users to read their own data
      - Service role to have full access
    
  2. Notes
    - Ensures public can submit beta signup forms
    - Maintains data privacy by limiting read access
    - Allows service role necessary access for admin functions
*/

-- Drop existing policies to clean up
DROP POLICY IF EXISTS "Allow public to insert beta signups" ON beta_signups;
DROP POLICY IF EXISTS "Service role can insert beta signups" ON beta_signups;
DROP POLICY IF EXISTS "Users can read own signup data" ON beta_signups;

-- Create new policies
CREATE POLICY "Anyone can submit beta signup"
  ON beta_signups
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read own signup data"
  ON beta_signups
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');

CREATE POLICY "Service role has full access"
  ON beta_signups
  TO service_role
  USING (true)
  WITH CHECK (true);