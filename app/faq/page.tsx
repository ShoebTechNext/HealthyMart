import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HelpCircle, MessageSquare, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about HealthyMart supplements, shipping, returns, refunds, and our affiliate recommendations.",
  openGraph: {
    title: "Frequently Asked Questions | HealthyMart",
    description: "Find answers to common questions about HealthyMart supplements and services.",
    type: "website",
  },
};

const generalFAQs = [
  {
    question: "What is HealthyMart?",
    answer: "HealthyMart is a curated review website where we research, analyze, and recommend premium health supplements. We focus on products with science-backed formulations, transparent labeling, and positive customer feedback. When you purchase through our links, we earn a small commission at no extra cost to you.",
  },
  {
    question: "How do you choose which supplements to recommend?",
    answer: "We evaluate supplements based on ingredient quality, dosage transparency, manufacturing standards (GMP, FDA-registered facilities), clinical research support, customer reviews, and brand reputation. We only recommend products we believe offer genuine value and safety.",
  },
  {
    question: "Are your reviews unbiased?",
    answer: "Yes. While we do earn affiliate commissions from purchases made through our links, this never influences our reviews. We evaluate each product on its own merits and clearly disclose any affiliate relationships. Our goal is to provide honest, helpful information to support your wellness decisions.",
  },
  {
    question: "Can I trust the information on HealthyMart?",
    answer: "We strive for accuracy and regularly update our content. However, supplement formulations may change, so we always recommend verifying details on the official product websites (linked from our Buy Now buttons) before purchasing. We are not medical professionals — consult your healthcare provider for personalized advice.",
  },
  {
    question: "Do you sell supplements directly?",
    answer: "No. HealthyMart is a review and recommendation site. When you click 'Buy Now' on our site, you're taken to the official manufacturer's website to complete your purchase. We never handle your payment information or ship products directly.",
  },
  {
    question: "How do affiliate commissions work?",
    answer: "When you purchase a product through one of our links, the manufacturer pays us a small referral fee. This is at no additional cost to you — the price is the same whether you buy through us or directly. See our Affiliate Disclosure page for full details.",
  },
];

const productFAQs = [
  {
    question: "How long does it take to see results from supplements?",
    answer: "Results vary by product and individual. Some supplements (like energy-boosting formulas) may show effects within days, while others (like cognitive or vision supplements) may take 4-8 weeks of consistent use. Always follow the recommended usage period on the product label.",
  },
  {
    question: "Can I take multiple supplements at the same time?",
    answer: "In most cases, yes. However, some ingredients may interact with each other or with medications. We recommend spacing different supplements by 2-3 hours and consulting your healthcare provider if you're taking prescription medications.",
  },
  {
    question: "Are there side effects I should be aware of?",
    answer: "Most supplements we recommend are well-tolerated, but mild side effects like digestive adjustment can occur when starting a new supplement. Discontinue use and consult a healthcare professional if you experience any adverse reactions. Always read the full ingredient list for potential allergens.",
  },
  {
    question: "What if a supplement doesn't work for me?",
    answer: "Most products we feature come with a 60-90 day money-back guarantee. If you're unsatisfied, contact the manufacturer directly for a refund. Check the return policy on the official product website before purchasing.",
  },
  {
    question: "Are supplements FDA approved?",
    answer: "Dietary supplements are regulated differently than pharmaceutical drugs. They are not FDA approved before going to market. However, they are manufactured in FDA-registered facilities following Good Manufacturing Practices (GMP). The FDA monitors labeling and can take action against unsafe products.",
  },
];

const shoppingFAQs = [
  {
    question: "How do I place an order?",
    answer: "Click any 'Buy Now' button on HealthyMart to be taken to the official product website. From there, select your package, enter shipping and payment information, and complete your order. We never process payments — all transactions happen on the manufacturer's secure checkout.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "Payment methods vary by manufacturer. Most accept major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and some accept debit cards. Check the specific product's checkout page for available options.",
  },
  {
    question: "Is my personal information safe?",
    answer: "When you purchase through our links, your information is handled by the manufacturer's secure checkout, not by HealthyMart. We never collect or store your payment information. We encourage you to review each manufacturer's privacy policy on their website.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Shipping availability depends on the individual manufacturer. Most US-based supplement companies ship within the United States, and many offer international shipping to select countries. Check the official product website for shipping policies.",
  },
  {
    question: "How long does shipping take?",
    answer: "Domestic shipping typically takes 3-7 business days after processing, depending on your location and the shipping option selected. International orders may take 7-14 business days. You'll receive tracking information from the manufacturer after your order ships.",
  },
];

const healthFAQs = [
  {
    question: "Are these supplements safe for everyone?",
    answer: "While most supplements are safe for healthy adults, certain populations should exercise caution. Pregnant or nursing women, children, people taking prescription medications, and those with serious medical conditions should consult their healthcare provider before starting any new supplement.",
  },
  {
    question: "Should I consult a doctor before taking supplements?",
    answer: "We always recommend consulting with a healthcare professional before starting any new supplement, especially if you have pre-existing conditions, take medications, or are pregnant/nursing. This is particularly important for supplements containing ingredients that may interact with medications.",
  },
  {
    question: "Can supplements replace a healthy diet?",
    answer: "No. Supplements are designed to complement a balanced diet, not replace it. A healthy diet rich in whole foods, regular exercise, adequate sleep, and stress management are foundational to good health. Supplements can help fill nutritional gaps but should not be relied upon as a primary source of nutrition.",
  },
  {
    question: "What does 'third-party tested' mean?",
    answer: "Third-party testing means an independent laboratory has verified the product's ingredient purity, potency, and absence of contaminants like heavy metals or microbials. Look for certifications from organizations like NSF International, USP, or ConsumerLab as indicators of quality.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        <section className="section bg-gradient-to-b from-healthy-green/5 to-white" aria-labelledby="faq-hero">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 id="faq-hero" className="section-title">
                Frequently Asked Questions
              </h1>
              <p className="section-subtitle mx-auto">
                Everything you need to know about HealthyMart, our supplement recommendations, and how to make the most informed choices for your health.
              </p>
            </div>

            {/* Quick contact CTA */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="card p-6 bg-healthy-green/5 border border-healthy-green/20 text-center">
                <p className="font-body text-healthy-charcoal-lighter mb-4">
                  Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
                </p>
                <Link href="/contact" className="btn-primary gap-2">
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="general-faq">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="general-faq" className="font-heading text-2xl font-bold text-healthy-charcoal mb-6 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-healthy-green" aria-hidden="true" />
                About HealthyMart
              </h2>
              <FAQAccordion items={generalFAQs} />
            </div>
          </div>
        </section>

        <section className="section bg-healthy-charcoal/5" aria-labelledby="product-faq">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="product-faq" className="font-heading text-2xl font-bold text-healthy-charcoal mb-6 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-healthy-green" aria-hidden="true" />
                Supplements & Health
              </h2>
              <FAQAccordion items={productFAQs} />
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="shopping-faq">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="shopping-faq" className="font-heading text-2xl font-bold text-healthy-charcoal mb-6 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-healthy-green" aria-hidden="true" />
                Ordering & Shipping
              </h2>
              <FAQAccordion items={shoppingFAQs} />
            </div>
          </div>
        </section>

        <section className="section bg-healthy-charcoal/5" aria-labelledby="health-faq">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 id="health-faq" className="font-heading text-2xl font-bold text-healthy-charcoal mb-6 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-healthy-green" aria-hidden="true" />
                Health & Safety
              </h2>
              <FAQAccordion items={healthFAQs} />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section bg-healthy-charcoal" aria-labelledby="contact-cta">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="contact-cta" className="font-heading text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="font-body text-lg text-healthy-charcoal-lighter mb-8">
                Our team is happy to help. Reach out and we&apos;ll respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg gap-2">
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                  Send a Message
                </Link>
                <a href="mailto:wellshoeb@gmail.com" className="btn-secondary text-lg gap-2">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}