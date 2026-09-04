"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/data/products";

export function CategoryFilter({ className = "" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const handleCategoryClick = (category: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div className={`${className} flex flex-wrap gap-3`} role="group" aria-label="Filter by category">
      <button
        type="button"
        onClick={() => handleCategoryClick(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          !currentCategory
            ? "bg-healthy-green text-white shadow-card"
            : "bg-healthy-charcoal-lighter/20 text-healthy-charcoal hover:bg-healthy-green/10 hover:text-healthy-green"
        }`}
        aria-pressed={!currentCategory}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => handleCategoryClick(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            currentCategory === category
              ? "bg-healthy-green text-white shadow-card"
              : "bg-healthy-charcoal-lighter/20 text-healthy-charcoal hover:bg-healthy-green/10 hover:text-healthy-green"
          }`}
          aria-pressed={currentCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}