"use client";

import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ limit = 6, className = "" }) {
  const featuredProducts = products.slice(0, limit);

  return (
    <section className={`${className} section bg-white`} aria-labelledby="products-heading">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 id="products-heading" className="section-title">
              Featured Supplements
            </h2>
            <p className="section-subtitle">
              Our top picks based on ingredient quality, research backing, and customer satisfaction.
            </p>
          </div>
          <a
            href="/shop"
            className="btn-secondary self-end whitespace-nowrap"
          >
            View All Products
          </a>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Featured products"
        >
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              priority={index < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}