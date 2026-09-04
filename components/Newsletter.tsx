"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, CheckCircle, Loader2, AlertCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      // Replace with your actual Formspree endpoint or API route
      const response = await fetch("https://formspree.io/f/xljrakyb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "HealthyMart Newsletter Signup" }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks for subscribing! Check your inbox soon.");
        setEmail("");
      } else {
        throw new Error("Subscription failed");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="section bg-healthy-charcoal relative overflow-hidden" aria-labelledby="newsletter-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-healthy-green/10 via-transparent to-healthy-charcoal/20" aria-hidden="true" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-healthy-green/20" aria-hidden="true" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl bg-healthy-green/10" aria-hidden="true" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="newsletter-heading" className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Updated on Wellness
          </h2>
          <p className="font-body text-lg text-healthy-charcoal-lighter mb-8 max-w-xl mx-auto">
            Get the latest supplement research, exclusive deals, and wellness tips delivered straight to your inbox.
            No spam, unsubscribe anytime.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-healthy-charcoal-lighter" aria-hidden="true" />
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-field pl-12 bg-white/10 border-white/20 text-white placeholder-healthy-charcoal-lighter focus:bg-white/20"
                disabled={status === "loading" || status === "success"}
                autoComplete="email"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="btn-primary px-8 py-3 whitespace-nowrap"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                  <span className="sr-only">Subscribing...</span>
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle className="w-5 h-5" aria-hidden="true" />
                  <span>Subscribed!</span>
                </>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>

          {status === "success" && (
            <div className="mt-4 flex items-center justify-center gap-2 text-green-400 animate-fade-in" role="status">
              <CheckCircle className="w-5 h-5" aria-hidden="true" />
              <p className="font-body text-sm">{message}</p>
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 flex items-center justify-center gap-2 text-red-400 animate-fade-in" role="alert">
              <AlertCircle className="w-5 h-5" aria-hidden="true" />
              <p className="font-body text-sm">{message}</p>
            </div>
          )}

          <p className="mt-4 font-body text-xs text-healthy-charcoal-lighter/60">
            By subscribing, you agree to our <Link href="/privacy-policy" className="underline hover:text-healthy-green transition-colors">Privacy Policy</Link> and
            <Link href="/terms-of-service" className="underline hover:text-healthy-green transition-colors">Terms of Service</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}