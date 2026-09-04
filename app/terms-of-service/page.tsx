import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "HealthyMart's terms of service governing the use of our website and services.",
  openGraph: {
    title: "Terms of Service | HealthyMart",
    description: "Terms and conditions for using HealthyMart.",
    type: "website",
  },
};

const lastUpdated = "September 2, 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        <section className="section bg-gradient-to-b from-healthy-green/5 to-white" aria-labelledby="terms-hero">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 id="terms-hero" className="section-title">
                Terms of Service
              </h1>
              <p className="font-body text-healthy-charcoal-lighter text-center">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="terms-content">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose-custom space-y-8">
              <article>
                <h2>1. Agreement to Terms</h2>
                <p>
                  By accessing and using HealthyMart (&ldquo;the Website&rdquo;), you accept and agree to be bound by
                  the terms and provision of this agreement. If you do not agree to abide by these terms,
                  please do not use the Website.
                </p>
              </article>

              <article>
                <h2>2. Use of the Website</h2>
                <p>The Website is provided for informational and educational purposes only. You agree to:</p>
                <ul>
                  <li>Use the Website only for lawful purposes</li>
                  <li>Not reproduce, distribute, or create derivative works without permission</li>
                  <li>Not use automated systems to scrape or extract content</li>
                  <li>Not interfere with the security or operation of the Website</li>
                  <li>Not post or transmit harmful, defamatory, or illegal content</li>
                </ul>
              </article>

              <article>
                <h2>3. Content and Intellectual Property</h2>
                <p>
                  All content on the Website, including text, graphics, logos, images, and software,
                  is the property of HealthyMart or its content suppliers and is protected by copyright laws.
                  You may not modify, copy, distribute, transmit, display, perform, reproduce, publish,
                  license, create derivative works from, transfer, or sell any content without our prior
                  written consent.
                </p>
              </article>

              <article>
                <h2>4. Affiliate Disclosure</h2>
                <p>
                  HealthyMart participates in affiliate marketing programs. This means we may earn a commission
                  when you click on links to products and make purchases. These commissions help support the
                  operation of this website at no additional cost to you. Our affiliate relationships do not
                  influence our reviews, ratings, or recommendations.
                </p>
                <p>
                  See our full <a href="/affiliate-disclosure" className="underline hover:text-healthy-green">Affiliate Disclosure</a> for details.
                </p>
              </article>

              <article>
                <h2>5. Health Disclaimer</h2>
                <p>
                  <strong>The content on this Website is for informational purposes only and is not a substitute
                  for professional medical advice, diagnosis, or treatment.</strong> Always seek the advice of
                  your physician or other qualified health provider with any questions you may have regarding
                  a medical condition or before starting any new supplement regimen.
                </p>
                <p>
                  The supplements reviewed on this Website are not intended to diagnose, treat, cure, or prevent
                  any disease. The FDA has not evaluated the statements made about these products. Individual
                  results may vary.
                </p>
                <p>
                  See our full <a href="/disclaimer" className="underline hover:text-healthy-green">Disclaimer</a> for details.
                </p>
              </article>

              <article>
                <h2>6. Third-Party Links</h2>
                <p>
                  The Website contains links to third-party websites. These links are provided for your convenience
                  only. We have no control over the content, privacy policies, or practices of third-party sites
                  and assume no responsibility for them. Your use of third-party websites is at your own risk.
                </p>
              </article>

              <article>
                <h2>7. No Warranties</h2>
                <p>
                  THE WEBSITE AND ITS CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF
                  ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED,
                  ERROR-FREE, OR FREE OF VIRUSES OR HARMFUL COMPONENTS. WE MAKE NO WARRANTIES REGARDING THE
                  ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY CONTENT.
                </p>
              </article>

              <article>
                <h2>8. Limitation of Liability</h2>
                <p>
                  IN NO EVENT SHALL HEALTHYMART, ITS OWNERS, EMPLOYEES, OR AFFILIATES BE LIABLE FOR ANY
                  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM
                  YOUR USE OF OR INABILITY TO USE THE WEBSITE, INCLUDING BUT NOT LIMITED TO LOSS OF DATA,
                  REVENUE, OR PROFITS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </article>

              <article>
                <h2>9. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless HealthyMart and its owners, employees,
                  and affiliates from any claims, damages, losses, liabilities, and expenses (including
                  reasonable attorneys&apos; fees) arising from your use of the Website, violation of these Terms,
                  or violation of any third-party rights.
                </p>
              </article>

              <article>
                <h2>10. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the United States
                  and the State of [Your State], without regard to its conflict of law principles.
                </p>
              </article>

              <article>
                <h2>11. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately
                  upon posting to this page with an updated &ldquo;Last updated&rdquo; date. Your continued use of the
                  Website after changes constitutes acceptance of the new Terms.
                </p>
              </article>

              <article>
                <h2>12. Termination</h2>
                <p>
                  We may terminate or suspend your access to the Website at any time, with or without cause,
                  including for breach of these Terms. Upon termination, your right to use the Website
                  immediately ceases.
                </p>
              </article>

              <article>
                <h2>13. Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will
                  be limited or eliminated to the minimum extent necessary so that the remaining provisions
                  remain in full force and effect.
                </p>
              </article>

              <article>
                <h2>14. Contact Us</h2>
                <p>If you have questions about these Terms, please contact us:</p>
                <ul>
                  <li>Email: <a href="mailto:wellshoeb@gmail.com" className="underline hover:text-healthy-green">wellshoeb@gmail.com</a></li>
                  <li>Contact form: <a href="/contact" className="underline hover:text-healthy-green">/contact</a></li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}