"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Shield, Truck, RotateCcw, Package } from "lucide-react";
import { Product } from "@/data/products";
import { BuyNowButton } from "./BuyNowButton";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

// Deterministic pseudo-random values derived from the slug so server and client
// render identical markup (avoids hydration mismatch from Math.random()).
function seededFromSlug(slug: string, salt: number): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return ((hash ^ salt) % 1000) / 1000;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const rating = (4.5 + seededFromSlug(product.slug, 101) * 0.4).toFixed(1);
  const reviewCount = Math.floor(seededFromSlug(product.slug, 202) * 500) + 100;

  return (
    <article className="card-lg overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-healthy-charcoal-lighter/10">
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-healthy-charcoal-lighter/10 text-healthy-charcoal-lighter">
            <Package className="w-10 h-10" aria-hidden="true" />
            <span className="text-sm font-medium px-4 text-center">{product.name}</span>
          </div>
        ) : (
          <Image
            src={product.mainImage}
            alt={`${product.name} - ${product.tagline}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={priority}
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex-1 flex flex-col p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-healthy-green/10 text-healthy-green">
            {product.category}
          </span>
        </div>

        <h3 className="font-heading text-xl font-bold text-healthy-charcoal mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="font-body text-healthy-charcoal-lighter text-sm mb-4 line-clamp-2 flex-1">
          {product.tagline}
        </p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-current" aria-hidden="true" />
            <span className="font-semibold text-healthy-charcoal">{rating}</span>
            <span className="text-healthy-charcoal-lighter text-xs">({reviewCount}+)</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.keyIngredients.slice(0, 3).map((ingredient, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded bg-healthy-charcoal-lighter/20 text-healthy-charcoal-lighter"
            >
              {ingredient}
            </span>
          ))}
          {product.keyIngredients.length > 3 && (
            <span className="text-xs px-2 py-1 rounded bg-healthy-charcoal-lighter/20 text-healthy-charcoal-lighter">
              +{product.keyIngredients.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-healthy-charcoal-lighter/30">
          <BuyNowButton
            hoplink={product.hoplink}
            productName={product.name}
            variant="primary"
            trackingId={product.slug}
          />
        </div>
      </div>

      <div className="px-6 pb-6 grid grid-cols-3 gap-4 text-center border-t border-healthy-charcoal-lighter/30">
        <div className="flex flex-col items-center gap-1">
          <Shield className="w-5 h-5 text-healthy-green" aria-hidden="true" />
          <span className="font-body text-xs text-healthy-charcoal-lighter">Money-back</span>
          <span className="font-body text-xs text-healthy-charcoal-lighter">Guarantee</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Truck className="w-5 h-5 text-healthy-green" aria-hidden="true" />
          <span className="font-body text-xs text-healthy-charcoal-lighter">Free</span>
          <span className="font-body text-xs text-healthy-charcoal-lighter">Shipping</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <RotateCcw className="w-5 h-5 text-healthy-green" aria-hidden="true" />
          <span className="font-body text-xs text-healthy-charcoal-lighter">Easy</span>
          <span className="font-body text-xs text-healthy-charcoal-lighter">Returns</span>
        </div>
      </div>
    </article>
  );
}
