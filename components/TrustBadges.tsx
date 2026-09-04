"use client";

import { Shield, Truck, RotateCcw, Award, Leaf, FlaskConical } from "lucide-react";

const trustBadges = [
  {
    icon: Shield,
    title: "Money-Back Guarantee",
    description: "Risk-free trial on all products",
    color: "text-healthy-green",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $50",
    color: "text-healthy-green",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "60-day hassle-free returns",
    color: "text-healthy-green",
  },
  {
    icon: Award,
    title: "Third-Party Tested",
    description: "Verified purity & potency",
    color: "text-healthy-green",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "Non-GMO, gluten-free formulas",
    color: "text-healthy-green",
  },
  {
    icon: FlaskConical,
    title: "Science-Backed",
    description: "Research-supported formulations",
    color: "text-healthy-green",
  },
];

export function TrustBadges({ className = "", variant = "grid" }: { className?: string; variant?: "grid" | "carousel" }) {
  if (variant === "carousel") {
    return (
      <div className={`${className} overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4`} role="list" aria-label="Trust badges">
        <div className="flex gap-6 min-w-max">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 card p-6 flex flex-col items-center text-center"
              role="listitem"
            >
              <div className={`w-14 h-14 rounded-full bg-healthy-green/10 flex items-center justify-center mb-4 ${badge.color}`}>
                <badge.icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <h4 className="font-heading font-semibold text-healthy-charcoal mb-1">{badge.title}</h4>
              <p className="font-body text-sm text-healthy-charcoal-lighter">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4`} role="list" aria-label="Trust badges">
      {trustBadges.map((badge, index) => (
        <div
          key={index}
          className="card p-6 flex flex-col items-center text-center"
          role="listitem"
        >
          <div className={`w-14 h-14 rounded-full bg-healthy-green/10 flex items-center justify-center mb-4 ${badge.color}`}>
            <badge.icon className="w-7 h-7" aria-hidden="true" />
          </div>
          <h4 className="font-heading font-semibold text-healthy-charcoal mb-1">{badge.title}</h4>
          <p className="font-body text-sm text-healthy-charcoal-lighter">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}