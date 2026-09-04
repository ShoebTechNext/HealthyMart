import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AlertTriangle, HeartPulse, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Health & Medical Disclaimer",
  description: "HealthyMart's health disclaimer: Our content is for informational purposes only and is not medical advice. Always consult your healthcare provider before starting any supplement regimen.",
  openGraph: {
    title: "Health & Medical Disclaimer | HealthyMart",
    description: "Important health disclaimer: Content is informational only, not medical advice.",
    type: "website",
  },
};

const lastUpdated = "September 2, 2026";

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        <section className="section bg-gradient-to-b from-healthy-green/5 to-white" aria-labelledby="disclaimer-hero">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 id="disclaimer-hero" className="section-title">
                Health & Medical Disclaimer
              </h1>
              <p className="font-body text-healthy-charcoal-lighter text-center">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="disclaimer-content">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose-custom space-y-8">
              {/* Critical Disclaimer Box */}
              <article>
                <div className="card p-6 lg:p-8 border-l-4 border-red-500 bg-red-50 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 mt-0.5">
                      <AlertTriangle className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl font-bold text-red-800 mb-3">IMPORTANT: READ BEFORE USING THIS WEBSITE</h2>
                      <div className="prose-custom space-y-3 text-red-700">
                        <p className="font-bold">
                          The information on HealthyMart is for <strong>educational and informational purposes only</strong>
                          and is <strong>NOT a substitute for professional medical advice, diagnosis, or treatment</strong>.
                        </p>
                        <p>
                          <strong>Always seek the advice of your physician or other qualified healthcare provider</strong>
                          with any questions you may have regarding a medical condition, before starting any new supplement,
                          or before making changes to your diet, exercise, or health regimen.
                        </p>
                        <p>
                          <strong>Never disregard professional medical advice or delay seeking it</strong> because of something
                          you have read on this website.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article>
                <h2>1. No Medical Advice</h2>
                <p>
                  HealthyMart is a review and informational website. We are not licensed healthcare professionals,
                  physicians, nutritionists, or pharmacists. The content on this website — including product reviews,
                  ingredient analyses, comparisons, recommendations, and blog articles — is based on publicly available
                  information, manufacturer claims, and general nutritional knowledge. It does not constitute medical
                  advice, diagnosis, treatment, or prevention of any disease.
                </p>
              </article>

              <article>
                <h2>2. FDA Disclaimer</h2>
                <div className="card p-6 bg-amber-50 border-l-4 border-amber-500 my-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 text-amber-600">
                      <FileText className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="text-amber-800">
                      <p className="font-bold">
                        <strong>These statements have not been evaluated by the Food and Drug Administration.</strong>
                      </p>
                      <p className="mt-2">
                        The supplements reviewed on HealthyMart are not intended to diagnose, treat, cure, or prevent
                        any disease. The FDA regulates dietary supplements differently than pharmaceutical drugs.
                        Supplements are not approved by the FDA for safety or effectiveness before they are marketed.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article>
                <h2>3. Individual Results May Vary</h2>
                <p>
                  Every person&apos;s body chemistry, health status, genetics, lifestyle, and circumstances are different.
                  What works for one person may not work for another. The testimonials, reviews, and results mentioned
                  on this website reflect individual experiences and are <strong>not guaranteed, typical, or representative
                  of all users</strong>. We do not promise, guarantee, or imply that you will achieve the same or similar
                  results.
                </p>
              </article>

              <article>
                <h2>4. Consult Your Healthcare Provider</h2>
                <p>
                  <strong>Before starting any new supplement, we strongly recommend:</strong>
                </p>
                <ul>
                  <li>Consulting with a licensed physician, especially if you have any pre-existing medical conditions</li>
                  <li>Discussing potential interactions with any medications you are currently taking</li>
                  <li>Seeking guidance if you are pregnant, nursing, or planning to become pregnant</li>
                  <li>Getting personalized advice if you are under 18 or over 65 years of age</li>
                  <li>Informing your healthcare provider of all supplements you take</li>
                </ul>
              </article>

              <article>
                <h2>5. Supplement Safety Considerations</h2>
                <p>
                  Dietary supplements can have risks, including:
                </p>
                <ul>
                  <li>Interactions with prescription or over-the-counter medications</li>
                  <li>Allergic reactions to ingredients</li>
                  <li>Adverse effects at high doses or with long-term use</li>
                  <li>Contamination or quality issues (despite third-party testing)</li>
                  <li>Not being suitable for certain medical conditions</li>
                  <li>Potential harm during pregnancy or breastfeeding</li>
                </ul>
                <p>
                  If you experience any adverse reactions, discontinue use immediately and seek medical attention.
                </p>
              </article>

              <article>
                <h2>6. Accuracy of Information</h2>
                <p>
                  We strive to provide accurate, up-to-date information based on available research and manufacturer
                  data at the time of publication. However:
                </p>
                <ul>
                  <li>Supplement formulations may change without notice</li>
                  <li>Research findings evolve over time</li>
                  <li>Manufacturer claims may not be independently verified</li>
                  <li>We may inadvertently include errors or outdated information</li>
                </ul>
                <p>
                  Always verify current product details, ingredients, and claims on the manufacturer&apos;s official website
                  before purchasing. The &ldquo;Buy Now&rdquo; links on HealthyMart direct you to the official product pages.
                </p>
              </article>

              <article>
                <h2>7. Not a Substitute for a Healthy Lifestyle</h2>
                <p>
                  Supplements are designed to <strong>supplement</strong> — not replace — a balanced diet, regular
                  physical activity, adequate sleep, stress management, and other foundational health practices.
                  No supplement can compensate for poor lifestyle choices. We encourage a holistic approach to wellness.
                </p>
              </article>

              <article>
                <h2>8. Affiliate Relationship Disclosure</h2>
                <p>
                  HealthyMart earns commissions from purchases made through our affiliate links. This does not
                  influence our reviews, but you should be aware of this financial relationship. See our full
                  <a href="/affiliate-disclosure" className="underline hover:text-healthy-green">Affiliate Disclosure</a>
                  for details.
                </p>
              </article>

              <article>
                <h2>9. External Links</h2>
                <p>
                  Our website contains links to third-party websites (manufacturer sites, research articles, etc.).
                  We do not control these sites and are not responsible for their content, accuracy, or privacy
                  practices. Links are provided for convenience and do not constitute endorsement.
                </p>
              </article>

              <article>
                <h2>10. Limitation of Liability</h2>
                <p>
                  By using HealthyMart, you agree that we shall not be liable for any direct, indirect, incidental,
                  consequential, or special damages arising from your use of or reliance on the information provided
                  on this website, including but not limited to health outcomes, financial losses, or adverse reactions
                  to supplements purchased through our links.
                </p>
              </article>

              <article>
                <h2>11. Specific Populations</h2>
                <p>
                  <strong>The following groups should exercise extra caution and consult a healthcare provider
                  before using ANY supplement:</strong>
                </p>
                <ul>
                  <li>Pregnant or breastfeeding women</li>
                  <li>Children and adolescents under 18</li>
                  <li>Adults over 65</li>
                  <li>People with chronic medical conditions (heart disease, diabetes, kidney disease, liver disease, autoimmune disorders, etc.)</li>
                  <li>People taking prescription medications</li>
                  <li>People scheduled for surgery (stop supplements 2 weeks prior unless directed otherwise)</li>
                  <li>People with known allergies or sensitivities</li>
                </ul>
              </article>

              <article>
                <h2>12. Reporting Adverse Events</h2>
                <p>
                  If you experience a serious adverse event related to a dietary supplement, you or your healthcare
                  provider can report it to the FDA&apos;s MedWatch program:
                </p>
                <ul>
                  <li>Online: <a href="https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program" target="_blank" rel="noopener noreferrer" className="underline hover:text-healthy-green">FDA MedWatch</a></li>
                  <li>Phone: 1-800-FDA-1088</li>
                </ul>
              </article>

              <article>
                <h2>13. Changes to This Disclaimer</h2>
                <p>
                  We may update this disclaimer from time to time. The &ldquo;Last updated&rdquo; date at the top of this page
                  will reflect the most recent changes. Your continued use of the website constitutes acceptance
                  of the current disclaimer.
                </p>
              </article>

              <article>
                <h2>14. Contact Us</h2>
                <p>
                  If you have questions about this disclaimer, please contact us:
                </p>
                <ul>
                  <li>Email: <a href="mailto:wellshoeb@gmail.com" className="underline hover:text-healthy-green">wellshoeb@gmail.com</a></li>
                  <li>Contact form: <a href="/contact" className="underline hover:text-healthy-green">/contact</a></li>
                </ul>
              </article>

              {/* Final Summary Box */}
              <article>
                <div className="card p-6 lg:p-8 bg-healthy-charcoal/5 border-l-4 border-healthy-green my-8">
                  <h2 className="font-heading text-lg font-semibold text-healthy-charcoal flex items-center gap-2 mb-4">
                    <HeartPulse className="w-5 h-5 text-healthy-green" aria-hidden="true" />
                    Summary
                  </h2>
                  <div className="prose-custom space-y-2 text-healthy-charcoal-lighter">
                    <p className="font-bold text-healthy-charcoal">HealthyMart provides information, not medical advice.</p>
                    <p>Always consult your doctor before taking supplements.</p>
                    <p>Supplements are not FDA-approved to treat, cure, or prevent disease.</p>
                    <p>Results vary. Testimonials are individual experiences, not guarantees.</p>
                    <p>We earn affiliate commissions. This doesn&apos;t affect our reviews.</p>
                    <p>Your health is your responsibility. Make informed decisions with professional guidance.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}