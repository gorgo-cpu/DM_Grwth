/*
  # Create leads table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text, not null) - Lead's full name
      - `email` (text, not null) - Lead's email address
      - `company` (text, not null) - Company or organization name
      - `message` (text, not null) - Project details and message
      - `created_at` (timestamptz, default now()) - Timestamp when lead was created
      - `status` (text, default 'new') - Lead status for tracking
  
  2. Security
    - Enable RLS on `leads` table
    - Add policy for service role to insert leads (API endpoint access)
    - Add policy for authenticated admin users to read leads
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert leads"
  ON leads
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);