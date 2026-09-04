import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "./ContactForm";
import { Mail, Globe, MessageSquare, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with HealthyMart. We're happy to answer your questions about supplements, orders, partnerships, or anything else within 24 hours.",
  openGraph: {
    title: "Contact Us | HealthyMart",
    description: "Get in touch with the HealthyMart team.",
    type: "website",
  },
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "wellshoeb@gmail.com",
    href: "mailto:wellshoeb@gmail.com",
    description: "For general inquiries and support",
  },
  {
    icon: Globe,
    title: "Instagram",
    value: "@modonest_links",
    href: "https://www.instagram.com/modonest_links/?hl=en",
    external: true,
    description: "Follow us for wellness tips and updates",
  },
  {
    icon: MessageSquare,
    title: "Contact Form",
    value: "Send us a message",
    href: "#contact-form",
    description: "We typically respond within 24 hours",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "24 hours",
    href: "#",
    description: "Monday through Friday, 9am - 6pm ET",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        <section className="section bg-gradient-to-b from-healthy-green/5 to-white" aria-labelledby="contact-hero">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 id="contact-hero" className="section-title">
                Contact Us
              </h1>
              <p className="section-subtitle mx-auto">
                Questions about supplements, orders, or partnerships? We&apos;re here to help.
                Send us a message and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card p-6 text-center hover:translate-y-0"
                >
                  <div className="w-12 h-12 rounded-full bg-healthy-green/10 flex items-center justify-center mx-auto mb-4 text-healthy-green">
                    <method.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h2 className="font-heading font-semibold text-healthy-charcoal mb-1">{method.title}</h2>
                  <p className="font-body text-healthy-green font-medium text-sm mb-2 break-all">{method.value}</p>
                  <p className="font-body text-sm text-healthy-charcoal-lighter">{method.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section className="section bg-white" aria-labelledby="contact-form-heading">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 id="contact-form-heading" className="section-title">
                  Send Us a Message
                </h2>
                <p className="section-subtitle mx-auto">
                  We&apos;d love to hear from you. Fill out the form below and we&apos;ll respond as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}