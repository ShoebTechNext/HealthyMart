import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { TrustBadges } from "@/components/TrustBadges";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Newsletter } from "@/components/Newsletter";
import { CategoryFilter } from "@/components/CategoryFilter";

function CategoryFilterSkeleton() {
  return (
    <div className="flex flex-wrap gap-3 justify-center" role="group" aria-label="Filter by category">
      <div className="px-4 py-2 rounded-full bg-healthy-charcoal-lighter/20 animate-pulse" />
      <div className="px-4 py-2 rounded-full bg-healthy-charcoal-lighter/20 animate-pulse" />
      <div className="px-4 py-2 rounded-full bg-healthy-charcoal-lighter/20 animate-pulse" />
      <div className="px-4 py-2 rounded-full bg-healthy-charcoal-lighter/20 animate-pulse" />
      <div className="px-4 py-2 rounded-full bg-healthy-charcoal-lighter/20 animate-pulse" />
      <div className="px-4 py-2 rounded-full bg-healthy-charcoal-lighter/20 animate-pulse" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        <Hero />
        <section className="section bg-white" aria-labelledby="categories-heading">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 id="categories-heading" className="section-title">
                Shop by Category
              </h2>
              <p className="section-subtitle mx-auto">
                Browse our curated selection of premium health supplements organized by wellness focus.
              </p>
            </div>
            <Suspense fallback={<CategoryFilterSkeleton />}>
              <CategoryFilter className="justify-center" />
            </Suspense>
          </div>
        </section>
        <ProductGrid />
        <TrustBadges />
        <TestimonialCarousel />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}