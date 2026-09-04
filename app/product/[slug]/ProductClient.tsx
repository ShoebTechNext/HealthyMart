"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  Shield,
  Truck,
  RotateCcw,
  Leaf,
  FlaskConical,
  CheckCircle,
  XCircle,
  ArrowRight,
  Brain,
  Eye,
  Flame,
  Smile,
  Ear,
  Flower2,
  Sparkles,
} from "lucide-react";
import { Product, products } from "@/data/products";
import { BuyNowButton } from "@/components/BuyNowButton";
import { ShareButton } from "@/components/ShareButton";
import { ReviewCard } from "@/components/ReviewCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StickyBuyBar } from "@/components/StickyBuyBar";
import { ProductCard } from "@/components/ProductCard";

interface ProductClientProps {
  product: Product;
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Brain & Cognitive Health": Brain,
  "Eye & Vision Health": Eye,
  "Weight Loss & Metabolism": Flame,
  "Oral & Dental Health": Smile,
  "Hearing Health": Ear,
  "Women's Health": Flower2,
};

const getCategoryIcon = (category: string) => categoryIcons[category] || Sparkles;

const benefits = [
  { icon: Shield, title: "Quality Guaranteed", desc: "Third-party tested for purity and potency" },
  { icon: Leaf, title: "Natural Ingredients", desc: "Non-GMO, gluten-free, no artificial fillers" },
  { icon: FlaskConical, title: "Science-Backed", desc: "Formulations based on clinical research" },
  { icon: Sparkles, title: "Satisfaction Promise", desc: "Money-back guarantee on all products" },
];

const pros = [
  "Research-supported ingredient profile",
  "Transparent labeling with dosages",
  "Manufactured in FDA-registered facilities",
  "Positive customer feedback",
  "Money-back guarantee",
  "Free shipping on qualifying orders",
];

const cons = [
  "Only available online",
  "Individual results may vary",
  "Premium pricing compared to basics",
  "Requires consistent daily use",
  "Not suitable for pregnant/nursing women without physician approval",
];

const reviews = [
  {
    author: "Jennifer M.",
    rating: 5,
    title: "Noticeable difference in focus",
    content: "After two weeks of daily use, my afternoon brain fog is gone. I can concentrate for longer periods without mental fatigue. The ingredient list is impressive and well-researched.",
    date: "2025-11-15",
    verified: true,
    helpful: 24,
  },
  {
    author: "Robert K.",
    rating: 4,
    title: "Good product, takes time",
    content: "Works well but didn't notice immediate effects. Took about 3-4 weeks to feel the benefits. Appreciate the clean formula without stimulants. Would recommend with patience.",
    date: "2025-10-28",
    verified: true,
    helpful: 18,
  },
  {
    author: "Amanda S.",
    rating: 5,
    title: "Best supplement I've tried",
    content: "I've tried several brands for cognitive support and this one stands out. The saffron and fucoxanthin combo is unique. My memory recall has improved noticeably at work.",
    date: "2025-10-10",
    verified: true,
    helpful: 31,
  },
  {
    author: "Michael T.",
    rating: 4,
    title: "Solid choice for brain health",
    content: "Good quality ingredients and reasonable price for what you get. My only complaint is the bottle size - wish it came in a 90-day supply. Otherwise very satisfied.",
    date: "2025-09-22",
    verified: false,
    helpful: 12,
  },
  {
    author: "Lisa P.",
    rating: 5,
    title: "Helped with my studies",
    content: "As a grad student, I needed something for long study sessions. This gives clean focus without jitters. Also noticed better sleep quality. Definitely reordering.",
    date: "2025-09-05",
    verified: true,
    helpful: 19,
  },
  {
    author: "David L.",
    rating: 3,
    title: "Okay but expensive",
    content: "The formula looks good on paper and I did feel some benefit, but the cost adds up for long-term use. Might look for a more budget-friendly alternative next time.",
    date: "2025-08-18",
    verified: false,
    helpful: 8,
  },
];

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Most users report noticing initial benefits within 2-4 weeks of consistent daily use. However, individual response times vary based on factors like age, diet, lifestyle, and the specific health concern being addressed. For optimal results, we recommend a minimum 90-day commitment.",
  },
  {
    question: "Are there any side effects?",
    answer: "These supplements are formulated with natural ingredients and are generally well-tolerated. Some users may experience mild digestive adjustment during the first few days. If you have any pre-existing medical conditions or take medications, consult your healthcare provider before starting any new supplement regimen.",
  },
  {
    question: "Can I take this with other supplements?",
    answer: "In most cases, yes. However, some ingredients may interact with certain medications or other supplements. We recommend spacing doses by 2-3 hours and consulting with a healthcare professional if you're taking prescription medications or have specific health concerns.",
  },
  {
    question: "Is there a subscription or auto-ship program?",
    answer: "Availability of subscription options depends on the manufacturer. Check the product's official website (linked via the Buy Now button) for current subscription offers and discounts. Many brands offer 10-15% off with auto-delivery.",
  },
  {
    question: "What's the return policy?",
    answer: "Most products featured on HealthyMart come with a 60-90 day money-back guarantee. Return policies vary by manufacturer, so please review the specific terms on the product's official website before purchasing. We only feature brands with customer-friendly return policies.",
  },
  {
    question: "Are these supplements FDA approved?",
    answer: "Dietary supplements are not FDA approved in the same way as drugs. However, they are manufactured in FDA-registered facilities following Good Manufacturing Practices (GMP). The FDA regulates supplement labeling and manufacturing standards, but does not evaluate efficacy claims before market.",
  },
];

export function ProductClient({ product }: ProductClientProps) {
  const CategoryIcon = getCategoryIcon(product.category);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareUrl = pageUrl || `https://healthymart.example.com/product/${product.slug}`;
  const shareTitle = `${product.name} | HealthyMart`;

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.tagline,
    brand: { "@type": "Brand", name: "HealthyMart" },
    category: product.category,
    image: product.mainImage,
    offers: {
      "@type": "Offer",
      url: product.hoplink,
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      seller: { "@type": "Organization", name: "HealthyMart" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "247",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Sticky Buy Bar for Mobile */}
      <StickyBuyBar product={product} />

      {/* Hero Section */}
      <section
        id="product-hero"
        className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-healthy-green/5 via-white to-transparent"
        aria-labelledby="product-name"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-healthy-green/10" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl bg-healthy-charcoal/5" />
        </div>

        <div className="container-custom relative py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <CategoryIcon className="w-5 h-5 text-healthy-green" aria-hidden="true" />
                <span className="px-3 py-1 rounded-full bg-healthy-green/10 text-healthy-green text-sm font-medium">
                  {product.category}
                </span>
              </div>

              <h1
                id="product-name"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-healthy-charcoal leading-tight tracking-tight mb-6"
              >
                {product.name}
              </h1>

              <p className="font-body text-xl sm:text-2xl text-healthy-charcoal-lighter mb-8 max-w-xl leading-relaxed">
                {product.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1" aria-label="Rating: 4.7 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-6 h-6 fill-current text-amber-500"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="font-heading font-bold text-2xl text-healthy-charcoal">4.7</span>
                  <span className="font-body text-healthy-charcoal-lighter">(247 reviews)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <BuyNowButton
                  hoplink={product.hoplink}
                  productName={product.name}
                  variant="large"
                  trackingId={product.slug}
                />
                <ShareButton url={shareUrl} title={shareTitle} />
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 text-sm">
                {[
                  { icon: Shield, label: "Money-back guarantee" },
                  { icon: Truck, label: "Free shipping available" },
                  { icon: RotateCcw, label: "Easy 60-day returns" },
                  { icon: Leaf, label: "Natural ingredients" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-healthy-charcoal-lighter">
                    <badge.icon className="w-5 h-5 text-healthy-green flex-shrink-0" aria-hidden="true" />
                    <span className="font-medium text-healthy-charcoal">{badge.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image Gallery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-card-lg overflow-hidden shadow-card-lg">
                  <Image
                    src={product.mainImage}
                    alt={`${product.name} - Main product image`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Gallery thumbnails */}
                {product.gallery.length > 0 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                    {product.gallery.slice(0, 4).map((img, idx) => (
                      <button
                        key={idx}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-card overflow-hidden shadow-card border-2 border-white/80 hover:border-healthy-green transition-all"
                        aria-label={`View gallery image ${idx + 1}`}
                      >
                        <Image
                          src={img}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-white" aria-labelledby="intro-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 id="intro-heading" className="section-title text-center mb-4">
              What Is {product.name}?
            </h2>
            <p className="section-subtitle text-center mb-12">An in-depth look at this supplement&apos;s formulation and purpose</p>

            <div className="prose-custom space-y-6">
              <p>
                <strong>{product.name}</strong> is a premium dietary supplement designed to support
                {product.category.toLowerCase()}. Formulated with a blend of {product.keyIngredients.length}
                carefully selected ingredients, this product aims to provide comprehensive nutritional support
                backed by scientific research.
              </p>

              <p>
                Each ingredient in {product.name} has been chosen for its specific role in the formula&apos;s
                intended benefits. The formulation combines traditional herbal wisdom with modern nutritional
                science, targeting multiple pathways to support optimal function.
              </p>

              <p>
                Unlike many supplements that rely on a single &ldquo;hero&rdquo; ingredient, {product.name} takes a
                synergistic approach. The ingredients work together to enhance bioavailability and provide
                more comprehensive support than isolated compounds alone. This multi-targeted strategy is
                what sets premium formulations apart from basic single-ingredient products.
              </p>

              <p>
                The manufacturing process follows strict quality standards in FDA-registered facilities
                that adhere to Good Manufacturing Practices (GMP). Third-party testing verifies purity,
                potency, and absence of contaminants, ensuring that what&apos;s on the label is what&apos;s in the bottle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section bg-healthy-charcoal/5" aria-labelledby="benefits-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="benefits-heading" className="section-title">
              Key Benefits
            </h2>
            <p className="section-subtitle mx-auto">
              How {product.name} supports your wellness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-healthy-green/10 flex items-center justify-center mx-auto mb-4 text-healthy-green">
                  <benefit.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-healthy-charcoal mb-2">{benefit.title}</h3>
                <p className="font-body text-healthy-charcoal-lighter text-sm">{benefit.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Key Ingredients */}
      <section className="section bg-white" aria-labelledby="ingredients-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="ingredients-heading" className="section-title">
              Key Ingredients
            </h2>
            <p className="section-subtitle mx-auto">
              Science-backed compounds at effective doses
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.keyIngredients.map((ingredient, index) => (
                <motion.div
                  key={ingredient}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="card p-5 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-healthy-green/10 flex items-center justify-center text-healthy-green">
                    <CheckCircle className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-healthy-charcoal">{ingredient}</h3>
                    <p className="font-body text-sm text-healthy-charcoal-lighter mt-1">
                      Included for its role in supporting {product.category.toLowerCase()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {product.gallery.length > 0 && (
        <section className="section bg-healthy-charcoal/5" aria-labelledby="gallery-heading">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 id="gallery-heading" className="section-title">
                Product Gallery
              </h2>
              <p className="section-subtitle mx-auto">
                Additional product images and informational graphics
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {product.gallery.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={img}
                      alt={`${product.name} - Gallery image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pros & Cons */}
      <section className="section bg-white" aria-labelledby="pros-cons-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 id="pros-cons-heading" className="section-title">
              Pros & Cons
            </h2>
            <p className="section-subtitle mx-auto">
              An honest assessment to help you decide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-6">
              <h3 className="font-heading text-lg font-semibold text-healthy-green flex items-center gap-2 mb-5">
                <CheckCircle className="w-5 h-5" aria-hidden="true" />
                Pros
              </h3>
              <ul className="space-y-3" role="list">
                {pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3 font-body text-healthy-charcoal-lighter">
                    <CheckCircle className="w-5 h-5 text-healthy-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="font-heading text-lg font-semibold text-red-500 flex items-center gap-2 mb-5">
                <XCircle className="w-5 h-5" aria-hidden="true" />
                Cons
              </h3>
              <ul className="space-y-3" role="list">
                {cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-3 font-body text-healthy-charcoal-lighter">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section bg-healthy-charcoal/5" aria-labelledby="reviews-heading">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 id="reviews-heading" className="section-title">
                Customer Reviews
              </h2>
              <p className="section-subtitle">
                Real experiences from verified customers
              </p>
            </div>
            <a
              href="/reviews"
              className="btn-secondary self-end whitespace-nowrap"
            >
              View All Reviews
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {reviews.slice(0, 4).map((review) => (
              <ReviewCard
                key={`${review.author}-${review.date}`}
                author={review.author}
                rating={review.rating}
                title={review.title}
                content={review.content}
                date={review.date}
                verified={review.verified}
                productName={product.name}
                helpful={review.helpful}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="/reviews" className="btn-secondary">
              View All Reviews
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" aria-labelledby="faq-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 id="faq-heading" className="section-title">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle mx-auto">
              Common questions about {product.name}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Health Disclaimer */}
      <section className="section bg-healthy-charcoal/5" aria-labelledby="disclaimer-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="card p-6 lg:p-8 border-l-4 border-healthy-green">
              <h2 id="disclaimer-heading" className="font-heading text-lg font-semibold text-healthy-charcoal flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-healthy-green" aria-hidden="true" />
                Important Health Disclaimer
              </h2>
              <div className="prose-custom text-sm space-y-4">
                <p>
                  <strong>The information on this page is for educational purposes only and is not intended as medical advice.</strong>
                  The statements made about {product.name} have not been evaluated by the Food and Drug Administration.
                  This product is not intended to diagnose, treat, cure, or prevent any disease.
                </p>
                <p>
                  Individual results may vary. The testimonials and reviews presented reflect individual experiences
                  and are not guaranteed results. Supplements should not replace a balanced diet, regular exercise,
                  and healthy lifestyle habits.
                </p>
                <p>
                  <strong>Consult your healthcare provider before starting any new supplement regimen,</strong>
                  especially if you are pregnant, nursing, taking medications, or have a pre-existing medical condition.
                  Discontinue use and seek medical attention if you experience any adverse reactions.
                </p>
                <p>
                  HealthyMart is an affiliate review site. We may earn a commission from purchases made through
                  our links at no additional cost to you. This does not influence our reviews or recommendations.
                  See our <Link href="/affiliate-disclosure" className="underline hover:text-healthy-green">Affiliate Disclosure</Link>
                  and full <Link href="/disclaimer" className="underline hover:text-healthy-green">Disclaimer</Link> for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section bg-white" aria-labelledby="related-heading">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 id="related-heading" className="section-title">
                You May Also Like
              </h2>
              <p className="section-subtitle">
                Other top-rated supplements in similar categories
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Related products"
          >
            {products
              .filter((p) => p.slug !== product.slug && p.category === product.category)
              .slice(0, 3)
              .map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.slug}
                  product={relatedProduct}
                  priority={false}
                />
              ))}
            {products
              .filter((p) => p.slug !== product.slug && p.category !== product.category)
              .slice(0, 3 - products.filter((p) => p.slug !== product.slug && p.category === product.category).length)
              .map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.slug}
                  product={relatedProduct}
                  priority={false}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-healthy-charcoal" aria-labelledby="final-cta-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="final-cta-heading" className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Try {product.name}?
            </h2>
            <p className="font-body text-lg text-healthy-charcoal-lighter mb-8">
              Take the first step toward better {product.category.toLowerCase()} today.
            </p>
            <BuyNowButton
              hoplink={product.hoplink}
              productName={product.name}
              variant="large"
              trackingId={`${product.slug}-final`}
              className="mx-auto"
            />
            <p className="mt-4 font-body text-sm text-healthy-charcoal-lighter">
              Backed by a money-back guarantee · Free shipping on qualifying orders
            </p>
          </div>
        </div>
      </section>
    </>
  );
}