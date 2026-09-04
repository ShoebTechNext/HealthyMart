"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, X, Filter } from "lucide-react";
import { products, searchProducts, getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { CategoryFilter } from "@/components/CategoryFilter";

export function ShopClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Initialize from URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    const q = params.get("q");
    if (cat) setSelectedCategory(cat);
    if (q) setSearchQuery(q);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory) {
      result = getProductsByCategory(selectedCategory);
    }

    if (searchQuery.trim()) {
      result = searchProducts(searchQuery.trim());
    }

    return result;
  }, [searchQuery, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("q", searchQuery.trim());
    if (selectedCategory) params.set("category", selectedCategory);
    window.history.pushState({}, "", `/shop?${params.toString()}`);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    window.history.pushState({}, "", "/shop");
  };

  const hasActiveFilters = searchQuery.trim() || selectedCategory;

  return (
    <>
      <section className="section bg-gradient-to-b from-healthy-green/5 to-white" aria-labelledby="shop-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 id="shop-heading" className="section-title">
              All Supplements
            </h1>
            <p className="section-subtitle mx-auto">
              Explore our complete catalog of science-backed health supplements. Filter by category or search for specific ingredients.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="relative mb-6" role="search">
              <label htmlFor="shop-search" className="sr-only">
                Search supplements
              </label>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-healthy-charcoal-lighter" aria-hidden="true" />
              <input
                id="shop-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, ingredient, or benefit..."
                className="input-field pl-12 pr-12 py-4 text-lg"
                autoComplete="off"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-healthy-charcoal-lighter hover:text-healthy-green transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </form>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
              <CategoryFilter />
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn-ghost gap-2 text-sm"
                >
                  <Filter className="w-4 h-4" aria-hidden="true" />
                  <span>Clear filters</span>
                </button>
              )}
            </div>

            {/* Results count */}
            <div className="mb-6 font-body text-healthy-charcoal-lighter">
              <span className="font-semibold text-healthy-charcoal">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? "s" : ""} found
              {selectedCategory && (
                <> in <span className="font-semibold text-healthy-green">{selectedCategory}</span></>
              )}
              {searchQuery && (
                <> matching <span className="font-semibold text-healthy-green">&ldquo;{searchQuery}&rdquo;</span></>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="results-heading">
        <div className="container-custom">
          <h2 id="results-heading" className="sr-only">
            Search Results
          </h2>

          {filteredProducts.length > 0 ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
              aria-label="Product listings"
            >
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.slug} product={product} priority={index < 6} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 card">
              <Search className="w-16 h-16 mx-auto text-healthy-charcoal-lighter/50 mb-4" aria-hidden="true" />
              <h3 className="font-heading text-xl font-semibold text-healthy-charcoal mb-2">No products found</h3>
              <p className="font-body text-healthy-charcoal-lighter mb-6">
                Try adjusting your search or filter criteria.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="btn-primary"
              >
                Show All Products
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}