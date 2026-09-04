"use client";

import { ExternalLink, ShoppingCart } from "lucide-react";

interface BuyNowButtonProps {
  hoplink: string;
  productName: string;
  variant?: "primary" | "secondary" | "large";
  className?: string;
  trackingId?: string;
}

export function BuyNowButton({
  hoplink,
  productName,
  variant = "primary",
  className = "",
  trackingId,
}: BuyNowButtonProps) {
  const handleClick = () => {
    // Click tracking stub - replace with actual analytics
    if (trackingId) {
      console.log("[Tracking] Buy Now Clicked", {
        product: productName,
        hoplink,
        trackingId,
        timestamp: new Date().toISOString(),
      });
      // Example: gtag('event', 'click_affiliate_link', { product: productName, trackingId });
      // Example: fetch('/api/track', { method: 'POST', body: JSON.stringify({ product: productName, trackingId }) });
    }
  };

  const variants = {
    primary: "btn-primary text-base px-8 py-3",
    secondary: "btn-secondary text-base px-8 py-3",
    large: "btn-primary text-lg px-10 py-4 w-full sm:w-auto",
  };

  return (
    <a
      href={hoplink}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={handleClick}
      className={`${variants[variant]} ${className} flex items-center gap-2 font-heading font-semibold`}
      aria-label={`Buy ${productName} - Opens in new tab`}
    >
      <ShoppingCart className="w-5 h-5" aria-hidden="true" />
      <span>Buy Now</span>
      <ExternalLink className="w-4 h-4" aria-hidden="true" />
    </a>
  );
}