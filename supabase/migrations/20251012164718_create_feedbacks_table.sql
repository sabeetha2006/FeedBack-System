/*
  # Create Feedbacks Table

  1. New Tables
    - `feedbacks`
      - `id` (uuid, primary key) - Unique identifier for each feedback
      - `name` (text) - Name of the person submitting feedback
      - `email` (text) - Email address of the submitter
      - `rating` (integer) - Rating value from 1 to 5
      - `comment` (text) - Feedback comment/message
      - `created_at` (timestamptz) - Timestamp when feedback was submitted

  2. Security
    - Enable RLS on `feedbacks` table
    - Add policy to allow anyone to submit feedback (INSERT)
    - Add policy to allow anyone to view all feedbacks (SELECT)
    - Add policy to allow anyone to delete feedbacks (DELETE) for admin functionality
    
  3. Important Notes
    - Table uses Row Level Security for data protection
    - Public access is allowed for this feedback system
    - Rating is constrained to values between 1 and 5
*/

CREATE TABLE IF NOT EXISTS feedbacks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedbacks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit feedback"
  ON feedbacks FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view feedbacks"
  ON feedbacks FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can delete feedbacks"
  ON feedbacks FOR DELETE
  TO anon
  USING (true);