import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "HealthyMart's privacy policy explaining how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | HealthyMart",
    description: "How we collect, use, and protect your personal information.",
    type: "website",
  },
};

const lastUpdated = "September 2, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        <section className="section bg-gradient-to-b from-healthy-green/5 to-white" aria-labelledby="privacy-hero">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 id="privacy-hero" className="section-title">
                Privacy Policy
              </h1>
              <p className="font-body text-healthy-charcoal-lighter text-center">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="privacy-content">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose-custom space-y-8">
              <article>
                <h2>1. Introduction</h2>
                <p>
                  Welcome to HealthyMart (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your personal
                  information and your right to privacy. If you have any questions or concerns about this privacy
                  notice or our practices with regard to your personal information, please contact us at
                  <a href="mailto:wellshoeb@gmail.com" className="underline hover:text-healthy-green">wellshoeb@gmail.com</a>.
                </p>
              </article>

              <article>
                <h2>2. Information We Collect</h2>
                <h3>Personal Information You Provide to Us</h3>
                <p>We collect personal information that you voluntarily provide when you:</p>
                <ul>
                  <li>Subscribe to our newsletter</li>
                  <li>Fill out our contact form</li>
                  <li>Participate in surveys or feedback</li>
                </ul>
                <p>This may include your name, email address, and message content.</p>

                <h3>Automatically Collected Information</h3>
                <p>When you visit our website, we automatically collect certain information about your device,
                including your IP address, browser type, operating system, referral URLs, and information about
                how you interact with our site (pages viewed, time spent, clicks). We use cookies and similar
                tracking technologies for this purpose.</p>
              </article>

              <article>
                <h2>3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our website</li>
                  <li>Send newsletter emails (only with your consent)</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Prevent fraud and ensure website security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </article>

              <article>
                <h2>4. Affiliate Links and Third-Party Websites</h2>
                <p>
                  HealthyMart contains affiliate links to third-party supplement manufacturers. When you click
                  these links and make a purchase, you are leaving our website and entering the manufacturer&apos;s
                  website. We are not responsible for the privacy practices of these third-party sites.
                </p>
                <p>
                  We encourage you to review the privacy policies of any third-party websites you visit through
                  our affiliate links. Your interactions with those sites are governed by their privacy policies,
                  not ours.
                </p>
              </article>

              <article>
                <h2>5. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies, web beacons, and similar technologies to collect information about your
                  browsing activity. This helps us understand how visitors use our site and improve the user
                  experience. You can control cookies through your browser settings, though disabling them may
                  affect site functionality.
                </p>
              </article>

              <article>
                <h2>6. Data Sharing and Disclosure</h2>
                <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                <ul>
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or legal process</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>With service providers who help us operate our website (hosting, analytics, email services)</li>
                </ul>
              </article>

              <article>
                <h2>7. Data Retention</h2>
                <p>
                  We retain your personal information only as long as necessary for the purposes outlined in
                  this policy, unless a longer retention period is required by law. Contact form submissions are
                  retained for 12 months. Newsletter subscription data is retained until you unsubscribe.
                </p>
              </article>

              <article>
                <h2>8. Your Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul>
                  <li>Right to access your personal data</li>
                  <li>Right to request correction of inaccurate data</li>
                  <li>Right to request deletion of your data</li>
                  <li>Right to object to or restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent (for newsletter)</li>
                </ul>
                <p>To exercise these rights, contact us at <a href="mailto:wellshoeb@gmail.com" className="underline hover:text-healthy-green">wellshoeb@gmail.com</a>.</p>
              </article>

              <article>
                <h2>9. Children&apos;s Privacy</h2>
                <p>
                  Our website is not directed to children under 13. We do not knowingly collect personal
                  information from children under 13. If you believe we have inadvertently collected such
                  information, please contact us and we will delete it promptly.
                </p>
              </article>

              <article>
                <h2>10. Security</h2>
                <p>
                  We implement reasonable technical and organizational measures to protect your personal
                  information from unauthorized access, alteration, disclosure, or destruction. However, no
                  method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </article>

              <article>
                <h2>11. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. The updated version will be indicated
                  by an updated &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this
                  policy periodically.
                </p>
              </article>

              <article>
                <h2>12. Contact Us</h2>
                <p>
                  If you have questions or comments about this privacy policy, please contact us:
                </p>
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