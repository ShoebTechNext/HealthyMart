"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { BuyNowButton } from "./BuyNowButton";

interface StickyBuyBarProps {
  product: Product;
}

export function StickyBuyBar({ product }: StickyBuyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("product-hero");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsVisible(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-healthy-charcoal-lighter/30 shadow-xl animate-slide-up lg:hidden"
      role="banner"
      aria-label="Quick purchase bar"
    >
      <div className="container-custom px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-healthy-green/10 text-healthy-green">
              {product.category}
            </span>
          </div>
          <h3 className="font-heading text-base font-bold text-healthy-charcoal truncate">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-xs text-healthy-charcoal-lighter mt-1">
            <Star className="w-3 h-3 fill-current text-amber-500" aria-hidden="true" />
            <span className="font-semibold">4.7</span>
            <span>(200+ reviews)</span>
          </div>
        </div>
        <BuyNowButton
          hoplink={product.hoplink}
          productName={product.name}
          variant="large"
          trackingId={`${product.slug}-sticky`}
        />
      </div>
    </div>
  );
}