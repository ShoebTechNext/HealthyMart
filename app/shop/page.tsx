import { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShopClient } from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop All Supplements",
  description: "Browse all HealthyMart recommended health supplements. Filter by category, search by ingredient, and find the perfect supplement for your wellness goals.",
  openGraph: {
    title: "Shop All Supplements | HealthyMart",
    description: "Browse all HealthyMart recommended health supplements with filtering and search.",
    type: "website",
  },
};

function ShopSkeleton() {
  return (
    <section className="section bg-gradient-to-b from-healthy-green/5 to-white" aria-labelledby="shop-heading">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="h-10 w-3/4 mx-auto bg-healthy-charcoal-lighter/20 animate-pulse rounded" />
          <div className="h-6 w-1/2 mx-auto mt-4 bg-healthy-charcoal-lighter/20 animate-pulse rounded" />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="h-16 w-full bg-healthy-charcoal-lighter/20 animate-pulse rounded-lg mb-6" />
          <div className="h-12 w-full bg-healthy-charcoal-lighter/20 animate-pulse rounded-lg mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card animate-pulse h-80" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ShopPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        <Suspense fallback={<ShopSkeleton />}>
          <ShopClient />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}