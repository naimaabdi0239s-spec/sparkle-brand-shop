CREATE TABLE public.email_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE CHECK (char_length(email) BETWEEN 5 AND 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  source text NOT NULL DEFAULT 'homepage' CHECK (source IN ('homepage','popup','limited-edition')),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.email_signups TO anon, authenticated;
GRANT ALL ON public.email_signups TO service_role;
ALTER TABLE public.email_signups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can sign up" ON public.email_signups FOR INSERT TO anon, authenticated WITH CHECK (true);