import Link from "next/link";
import { Globe, Link2, X, Send, Mail, Leaf, HeartPulse, Shield } from "lucide-react";
import { Logo } from "./Logo";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Brain & Cognitive Health", href: "/shop?category=Brain+%26+Cognitive+Health" },
    { label: "Eye & Vision Health", href: "/shop?category=Eye+%26+Vision+Health" },
    { label: "Weight Loss & Metabolism", href: "/shop?category=Weight+Loss+%26+Metabolism" },
    { label: "Oral & Dental Health", href: "/shop?category=Oral+%26+Dental+Health" },
    { label: "Hearing Health", href: "/shop?category=Hearing+Health" },
    { label: "Women's Health", href: "/shop?category=Women%27s+Health" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Reviews", href: "/reviews" },
    { label: "Shipping Info", href: "/faq#shipping" },
    { label: "Returns Policy", href: "/faq#returns" },
    { label: "Track Order", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Mission", href: "#" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/modonest_links/?hl=en", icon: Globe },
  { label: "Facebook", href: "#", icon: Link2 },
  { label: "Twitter", href: "#", icon: X },
  { label: "YouTube", href: "#", icon: Send },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-healthy-charcoal text-white" role="contentinfo">
      <div className="container-custom py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Logo size="lg" className="inline-block" />
            <p className="font-body text-healthy-charcoal-lighter max-w-xs leading-relaxed">
              HealthyMart is your trusted source for science-backed health supplement reviews.
              We research, analyze, and recommend premium supplements to support your wellness journey.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-healthy-charcoal-lighter hover:bg-healthy-green/20 hover:text-healthy-green transition-all duration-200"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-healthy-charcoal-lighter">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:wellshoeb@gmail.com" className="hover:text-healthy-green transition-colors">
                  wellshoeb@gmail.com
                </a>
              </div>
            </div>
          </div>

          <nav aria-label="Shop navigation">
            <h3 className="font-heading text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-healthy-charcoal-lighter hover:text-healthy-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support navigation">
            <h3 className="font-heading text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-healthy-charcoal-lighter hover:text-healthy-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company navigation">
            <h3 className="font-heading text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-healthy-charcoal-lighter hover:text-healthy-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-healthy-charcoal-lighter text-center md:text-left">
              &copy; {currentYear} HealthyMart. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-healthy-charcoal-lighter flex-wrap justify-center md:justify-end">
              <span className="flex items-center gap-1">
                <Leaf className="w-3 h-3 text-healthy-green" aria-hidden="true" />
                Science-backed reviews
              </span>
              <span className="flex items-center gap-1">
                <HeartPulse className="w-3 h-3 text-healthy-green" aria-hidden="true" />
                Your wellness first
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-healthy-green" aria-hidden="true" />
                Transparent affiliate disclosure
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}