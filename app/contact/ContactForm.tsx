"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setStatus("loading");
    setErrors({});

    try {
      const response = await fetch("https://formspree.io/f/xljrakyb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `HealthyMart Contact: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setSubmitMessage("Thanks for reaching out! We'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Submission failed");
      }
    } catch {
      setStatus("error");
      setSubmitMessage("Something went wrong. Please try again later or email us directly at wellshoeb@gmail.com");
    }
  };

  if (status === "success") {
    return (
      <div className="card p-8 text-center bg-healthy-green/5 border border-healthy-green/20 animate-fade-in" role="status">
        <CheckCircle className="w-16 h-16 text-healthy-green mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-heading text-xl font-semibold text-healthy-charcoal mb-2">
          Message Sent Successfully!
        </h3>
        <p className="font-body text-healthy-charcoal-lighter mb-6">{submitMessage}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 lg:p-8 space-y-6">
      <div>
        <label htmlFor="contact-name" className="block font-body font-medium text-healthy-charcoal mb-2">
          Name <span className="text-red-500" aria-label="required">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`input-field ${errors.name ? "border-red-500 focus:ring-red-500" : ""}`}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          autoComplete="name"
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-sm text-red-500 font-body" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block font-body font-medium text-healthy-charcoal mb-2">
          Email <span className="text-red-500" aria-label="required">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={`input-field ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          autoComplete="email"
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-sm text-red-500 font-body" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-subject" className="block font-body font-medium text-healthy-charcoal mb-2">
          Subject <span className="text-red-500" aria-label="required">*</span>
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`input-field appearance-none bg-white ${errors.subject ? "border-red-500 focus:ring-red-500" : ""}`}
          aria-required="true"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        >
          <option value="">Select a topic</option>
          <option value="general">General Inquiry</option>
          <option value="product">Product Question</option>
          <option value="order">Order Support</option>
          <option value="return">Return / Refund</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && (
          <p id="subject-error" className="mt-2 text-sm text-red-500 font-body" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="block font-body font-medium text-healthy-charcoal mb-2">
          Message <span className="text-red-500" aria-label="required">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          placeholder="Tell us how we can help..."
          className={`input-field resize-y min-h-[120px] ${errors.message ? "border-red-500 focus:ring-red-500" : ""}`}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-500 font-body" role="alert">
            {errors.message}
          </p>
        )}
        <p className="mt-2 text-sm text-healthy-charcoal-lighter font-body">
          {formData.message.length}/500 characters
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 bg-red-50 rounded-card border border-red-200 flex items-start gap-3" role="alert">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-red-600 font-body">{submitMessage}</p>
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary text-lg px-10 py-4 w-full sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
              <span className="sr-only">Sending...</span>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" aria-hidden="true" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </div>

      <p className="font-body text-xs text-healthy-charcoal-lighter">
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-healthy-green transition-colors">Privacy Policy</a>.
        Your information will only be used to respond to your inquiry.
      </p>
    </form>
  );
}