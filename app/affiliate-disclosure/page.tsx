import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Heart, Sparkles, Link as LinkIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "HealthyMart's affiliate disclosure explaining our participation in affiliate marketing programs and how it affects our content.",
  openGraph: {
    title: "Affiliate Disclosure | HealthyMart",
    description: "Transparency about our affiliate relationships and how we earn commissions.",
    type: "website",
  },
};

const lastUpdated = "September 2, 2026";

export default function AffiliateDisclosurePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        <section className="section bg-gradient-to-b from-healthy-green/5 to-white" aria-labelledby="affiliate-hero">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 id="affiliate-hero" className="section-title">
                Affiliate Disclosure
              </h1>
              <p className="font-body text-healthy-charcoal-lighter text-center">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="affiliate-content">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose-custom space-y-8">
              <article>
                <div className="card p-6 bg-healthy-green/5 border border-healthy-green/20 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-healthy-green/10 flex items-center justify-center flex-shrink-0 text-healthy-green">
                      <Shield className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="font-heading text-lg font-semibold text-healthy-charcoal mb-2">Transparency First</h2>
                      <p className="font-body text-healthy-charcoal-lighter">
                        We believe in complete transparency. This page explains how HealthyMart earns revenue
                        and how it does (and doesn&apos;t) affect our content.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <article>
                <h2>What Is an Affiliate Relationship?</h2>
                <p>
                  An affiliate relationship means that when we link to a product or service, we may receive a
                  commission if you make a purchase through that link. The product price is the same for you
                  whether you use our link or go directly to the manufacturer&apos;s website.
                </p>
                <p>
                  Think of it like a referral fee &mdash; the manufacturer pays us for sending a customer their way.
                  This is a standard practice in online publishing and helps support the creation of free content.
                </p>
              </article>

              <article>
                <h2>Our Affiliate Partners</h2>
                <p>HealthyMart participates in affiliate programs with various supplement manufacturers, including:</p>
                <ul>
                  <li>ClickBank (primary platform for supplement vendors)</li>
                  <li>Direct manufacturer affiliate programs</li>
                  <li>Other reputable supplement retailers</li>
                </ul>
                <p>
                  The specific affiliate link for each product is embedded in the &ldquo;Buy Now&rdquo; buttons throughout
                  our website. You can identify affiliate links by their URL structure (often containing
                  tracking parameters like &ldquo;hop.clickbank.net&rdquo; or &ldquo;?shield=&rdquo;).
                </p>
              </article>

              <article>
                <h2>How This Affects Our Content</h2>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="card p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <Heart className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading font-semibold text-healthy-charcoal">What We DO</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-healthy-charcoal-lighter">
                        <Sparkles className="w-4 h-4 text-healthy-green flex-shrink-0" aria-hidden="true" />
                        Research products thoroughly before recommending
                      </li>
                      <li className="flex items-center gap-2 text-healthy-charcoal-lighter">
                        <Sparkles className="w-4 h-4 text-healthy-green flex-shrink-0" aria-hidden="true" />
                        Evaluate ingredients, dosages, and manufacturing standards
                      </li>
                      <li className="flex items-center gap-2 text-healthy-charcoal-lighter">
                        <Sparkles className="w-4 h-4 text-healthy-green flex-shrink-0" aria-hidden="true" />
                        Consider customer reviews and brand reputation
                      </li>
                      <li className="flex items-center gap-2 text-healthy-charcoal-lighter">
                        <Sparkles className="w-4 h-4 text-healthy-green flex-shrink-0" aria-hidden="true" />
                        Disclose both pros and cons honestly
                      </li>
                      <li className="flex items-center gap-2 text-healthy-charcoal-lighter">
                        <Sparkles className="w-4 h-4 text-healthy-green flex-shrink-0" aria-hidden="true" />
                        Update content when new information emerges
                      </li>
                    </ul>
                  </div>
                  <div className="card p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                        <LinkIcon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading font-semibold text-healthy-charcoal">What We DON&apos;T Do</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-healthy-charcoal-lighter">
                        <span className="w-4 h-4 text-red-500 flex-shrink-0">✕</span>
                        Recommend products solely for commission
                      </li>
                      <li className="flex items-center gap-2 text-healthy-charcoal-lighter">
                        <span className="w-4 h-4 text-red-500 flex-shrink-0">✕</span>
                        Hide negative aspects of a product
                      </li>
                      <li className="flex items-center gap-2 text-healthy-charcoal-lighter">
                        <span className="w-4 h-4 text-red-500 flex-shrink-0">✕</span>
                        Create fake reviews or testimonials
                      </li>
                      <li className="flex items-center gap-2 text-healthy-charcoal-lighter">
                        <span className="w-4 h-4 text-red-500 flex-shrink-0">✕</span>
                        Accept payment for favorable coverage
                      </li>
                      <li className="flex items-center gap-2 text-healthy-charcoal-lighter">
                        <span className="w-4 h-4 text-red-500 flex-shrink-0">✕</span>
                        Let manufacturers edit our reviews
                      </li>
                    </ul>
                  </div>
                </div>
              </article>

              <article>
                <h2>FTC Compliance</h2>
                <p>
                  In accordance with the Federal Trade Commission (FTC) guidelines on endorsements and
                  testimonials, we are required to disclose our material connections with advertisers.
                  This page serves as that disclosure.
                </p>
                <p>
                  The FTC requires that if there is a connection between an endorser and the marketer of a
                  product that consumers would not expect and that would affect how they evaluate the endorsement,
                  that connection must be disclosed. Our affiliate relationships constitute such a connection.
                </p>
              </article>

              <article>
                <h2>Why We Use Affiliate Links</h2>
                <p>
                  Running a quality review website requires significant time and resources:
                </p>
                <ul>
                  <li>Researching and analyzing supplement formulations</li>
                  <li>Writing detailed, honest reviews</li>
                  <li>Maintaining and updating website content</li>
                  <li>Technical infrastructure and hosting</li>
                  <li>Staying current with nutritional science and regulations</li>
                </ul>
                <p>
                  Affiliate commissions allow us to provide this content for free without charging subscription
                  fees or accepting sponsored content that could compromise our editorial independence.
                </p>
              </article>

              <article>
                <h2>Your Price Is Not Affected</h2>
                <p>
                  <strong>You never pay more when using our affiliate links.</strong> The price you see on the
                  manufacturer&apos;s website is the same whether you click our link or type the URL directly.
                  In some cases, our links may even provide exclusive discounts or bonuses not available elsewhere.
                </p>
              </article>

              <article>
                <h2>How to Support Us</h2>
                <p>
                  If you find our reviews helpful and decide to purchase a supplement we recommend, using our
                  &ldquo;Buy Now&rdquo; links is a great way to support our work at no extra cost to you. We genuinely
                  appreciate it!
                </p>
                <p>
                  Even if you choose not to use our links, we hope our content helps you make more informed
                  decisions about your health. That&apos;s our primary goal.
                </p>
              </article>

              <article>
                <h2>Questions?</h2>
                <p>
                  If you have any questions about our affiliate relationships or this disclosure, please don&apos;t
                  hesitate to contact us at <a href="mailto:wellshoeb@gmail.com" className="underline hover:text-healthy-green">wellshoeb@gmail.com</a>
                  or through our <a href="/contact" className="underline hover:text-healthy-green">contact form</a>.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}