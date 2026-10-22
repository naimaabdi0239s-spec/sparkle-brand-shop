import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export type SignupSource = "homepage" | "popup" | "limited-edition";
const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
export function validateEmail(value: string) {
  const v = value.trim();
  if (!v) return "Please enter your email address.";
  if (v.length > 255 || !EMAIL.test(v)) return "Please enter a valid email address.";
  return "";
}

export function SignupForm({
  source,
  buttonLabel = "SIGN UP",
  onSuccess,
}: {
  source: SignupSource;
  buttonLabel?: string;
  onSuccess?: () => void;
}) {
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const id = `signup-${source}`;

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const email = String(new FormData(e.currentTarget).get("email") ?? "")
      .trim()
      .toLowerCase();
    const problem = validateEmail(email);
    setError(problem);
    if (problem) return;
    setStatus("sending");
    const { error: dbError } = await supabase.from("email_signups").insert({ email, source });
    if (dbError && dbError.code !== "23505") {
      setStatus("idle");
      setError("Something went wrong. Please try again in a moment.");
      return;
    }
    setStatus("done");
    onSuccess?.();
  }

  if (status === "done") {
    return (
      <p className="signup-success" role="status">
        You’re on the list. We’ll be in touch with new scents and limited-edition drops.
      </p>
    );
  }

  return (
    <form className="signup-form" onSubmit={submit} noValidate>
      <div className="signup-row">
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          maxLength={255}
        />
        <Button type="submit" className="btn btn-default" disabled={status === "sending"}>
          {status === "sending" ? "SIGNING UP…" : buttonLabel} <ArrowRight />
        </Button>
      </div>
      {error && (
        <p id={`${id}-error`} className="signup-error" role="alert">
          {error}
        </p>
      )}
      <label className="consent-label">
        <input type="checkbox" name="consent" defaultChecked />
        <span>I’d like emails about limited-edition drops and sales.</span>
      </label>
      <p className="newsletter-note">
        New scents coming soon. <Link to="/privacy">Privacy policy</Link>
      </p>
    </form>
  );
}
