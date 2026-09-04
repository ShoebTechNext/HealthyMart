"use client";

import { useState, useMemo } from "react";
import { Search, Filter, X, Star } from "lucide-react";
import { products } from "@/data/products";
import { ReviewCard } from "@/components/ReviewCard";

const allReviews = [
  {
    id: 1,
    productSlug: "phytomem-one",
    productName: "Phytomem One",
    author: "Jennifer M.",
    rating: 5,
    title: "Noticeable difference in focus",
    content: "After two weeks of daily use, my afternoon brain fog is gone. I can concentrate for longer periods without mental fatigue. The ingredient list is impressive and well-researched.",
    date: "2025-11-15",
    verified: true,
    helpful: 24,
  },
  {
    id: 2,
    productSlug: "phytomem-one",
    productName: "Phytomem One",
    author: "Robert K.",
    rating: 4,
    title: "Good product, takes time",
    content: "Works well but didn't notice immediate effects. Took about 3-4 weeks to feel the benefits. Appreciate the clean formula without stimulants. Would recommend with patience.",
    date: "2025-10-28",
    verified: true,
    helpful: 18,
  },
  {
    id: 3,
    productSlug: "visiflora",
    productName: "VisiFlora",
    author: "Sarah T.",
    rating: 5,
    title: "Eye strain relief",
    content: "As a graphic designer, my eyes are tired by noon. VisiFlora has made a noticeable difference in reducing eye fatigue. The lutein/zeaxanthin dose is spot on.",
    date: "2025-11-10",
    verified: true,
    helpful: 31,
  },
  {
    id: 4,
    productSlug: "visiflora",
    productName: "VisiFlora",
    author: "Michael R.",
    rating: 4,
    title: "Great for night driving",
    content: "Bought this for night driving glare issues. After a month, the halos around lights are much less intense. Pricey but worth it for the quality ingredients.",
    date: "2025-10-20",
    verified: true,
    helpful: 15,
  },
  {
    id: 5,
    productSlug: "java-burn",
    productName: "Java Burn 2.0",
    author: "Maria Rodriguez",
    rating: 5,
    title: "Fits perfectly in my routine",
    content: "Tasteless in my coffee, and I've noticed my metabolism feels more active. Down 8 pounds in 6 weeks without changing anything else. Love the convenience.",
    date: "2025-11-05",
    verified: true,
    helpful: 42,
  },
  {
    id: 6,
    productSlug: "java-burn",
    productName: "Java Burn 2.0",
    author: "James L.",
    rating: 4,
    title: "Works but expensive long-term",
    content: "Definitely gives an energy boost without jitters. The green tea extract is a nice touch. Just wish it was more affordable for daily use over months.",
    date: "2025-10-15",
    verified: true,
    helpful: 19,
  },
  {
    id: 7,
    productSlug: "prodentim",
    productName: "ProDentim",
    author: "David Thompson",
    rating: 5,
    title: "Dentist noticed the difference",
    content: "My hygienist asked what I'd been doing differently - healthier gums, less sensitivity. The probiotic candy format makes it easy to remember daily. Great product.",
    date: "2025-11-12",
    verified: true,
    helpful: 28,
  },
  {
    id: 8,
    productSlug: "prodentim",
    productName: "ProDentim",
    author: "Lisa Park",
    rating: 4,
    title: "Fresh breath bonus",
    content: "Teeth feel cleaner and breath stays fresh longer. The peppermint flavor is pleasant. Only downside is needing to let it dissolve fully for best results.",
    date: "2025-10-30",
    verified: false,
    helpful: 11,
  },
  {
    id: 9,
    productSlug: "audifort",
    productName: "Audifort",
    author: "Robert Kim",
    rating: 4,
    title: "Helped with tinnitus",
    content: "Drops have helped with the ringing I've dealt with for years. Not a miracle cure, but the reduction in intensity has improved my sleep quality significantly.",
    date: "2025-11-08",
    verified: true,
    helpful: 22,
  },
  {
    id: 10,
    productSlug: "nagano-tonic",
    productName: "Nagano Tonic",
    author: "Amanda S.",
    rating: 5,
    title: "Steady energy all morning",
    content: "No crash, no jitters. The Japanese ingredient profile intrigued me and the results speak for themselves. Great addition to my morning routine.",
    date: "2025-11-02",
    verified: true,
    helpful: 35,
  },
  {
    id: 11,
    productSlug: "menorescue",
    productName: "MenoRescue",
    author: "Patricia W.",
    rating: 5,
    title: "Life-changing for hot flashes",
    content: "Within 3 weeks, my night sweats reduced by 80%. Mood is more stable too. The two-part formula makes sense - morning energy, evening calm. Highly recommend.",
    date: "2025-10-25",
    verified: true,
    helpful: 47,
  },
  {
    id: 12,
    productSlug: "menorescue",
    productName: "MenoRescue",
    author: "Susan K.",
    rating: 4,
    title: "Good but takes commitment",
    content: "Noticed gradual improvement over 6 weeks. The Sensoril ashwagandha is high quality. Need to take consistently for best results. Worth the investment.",
    date: "2025-10-05",
    verified: true,
    helpful: 16,
  },
];

export function ReviewsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"newest" | "highest" | "lowest" | "helpful">("newest");

  const filteredReviews = useMemo(() => {
    let result = [...allReviews];

    if (selectedProduct) {
      result = result.filter((r) => r.productSlug === selectedProduct);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.content.toLowerCase().includes(query) ||
          r.author.toLowerCase().includes(query) ||
          r.productName.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case "highest":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "lowest":
        result.sort((a, b) => a.rating - b.rating);
        break;
      case "helpful":
        result.sort((a, b) => b.helpful - a.helpful);
        break;
      default:
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return result;
  }, [searchQuery, selectedProduct, sortBy]);

  const averageRating = useMemo(() => {
    if (filteredReviews.length === 0) return 0;
    const sum = filteredReviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / filteredReviews.length).toFixed(1);
  }, [filteredReviews]);

  return (
    <>
      <section className="section bg-gradient-to-b from-healthy-green/5 to-white" aria-labelledby="reviews-heading">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 id="reviews-heading" className="section-title">
              Customer Reviews
            </h1>
            <p className="section-subtitle mx-auto">
              Real experiences from people using HealthyMart recommended supplements
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
            <div className="card p-6 text-center">
              <div className="font-heading text-4xl font-bold text-healthy-green mb-1">{averageRating}</div>
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <div className="font-body text-healthy-charcoal-lighter">Average Rating</div>
            </div>
            <div className="card p-6 text-center">
              <div className="font-heading text-4xl font-bold text-healthy-charcoal mb-1">{allReviews.length}</div>
              <div className="font-body text-healthy-charcoal-lighter">Total Reviews</div>
            </div>
            <div className="card p-6 text-center">
              <div className="font-heading text-4xl font-bold text-healthy-charcoal mb-1">
                {allReviews.filter((r) => r.verified).length}
              </div>
              <div className="font-body text-healthy-charcoal-lighter">Verified Purchases</div>
            </div>
            <div className="card p-6 text-center">
              <div className="font-heading text-4xl font-bold text-healthy-charcoal mb-1">
                {products.length}
              </div>
              <div className="font-body text-healthy-charcoal-lighter">Products Reviewed</div>
            </div>
          </div>

          {/* Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <label htmlFor="review-search" className="sr-only">
                  Search reviews
                </label>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-healthy-charcoal-lighter" aria-hidden="true" />
                <input
                  id="review-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search reviews by keyword, author, or product..."
                  className="input-field pl-12 pr-12"
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
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  value={selectedProduct || ""}
                  onChange={(e) => setSelectedProduct(e.target.value || null)}
                  className="input-field appearance-none bg-white"
                  aria-label="Filter by product"
                >
                  <option value="">All Products</option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="input-field appearance-none bg-white w-full sm:w-48"
                  aria-label="Sort reviews"
                >
                  <option value="newest">Newest First</option>
                  <option value="highest">Highest Rated</option>
                  <option value="lowest">Lowest Rated</option>
                  <option value="helpful">Most Helpful</option>
                </select>

                {(searchQuery || selectedProduct) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedProduct(null);
                    }}
                    className="btn-ghost gap-2"
                  >
                    <Filter className="w-4 h-4" aria-hidden="true" />
                    <span>Clear Filters</span>
                  </button>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="mb-6 font-body text-healthy-charcoal-lighter">
              Showing <span className="font-semibold text-healthy-charcoal">{filteredReviews.length}</span> of{" "}
              <span className="font-semibold text-healthy-charcoal">{allReviews.length}</span> reviews
              {selectedProduct && (
                <> for <span className="font-semibold text-healthy-green">
                  {products.find((p) => p.slug === selectedProduct)?.name}
                </span></>
              )}
              {searchQuery && (
                <> matching <span className="font-semibold text-healthy-green">&ldquo;{searchQuery}&rdquo;</span></>
              )}
            </div>

            {filteredReviews.length > 0 ? (
              <div className="space-y-6" role="list" aria-label="Customer reviews">
                {filteredReviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    author={review.author}
                    rating={review.rating}
                    title={review.title}
                    content={review.content}
                    date={review.date}
                    verified={review.verified}
                    productName={review.productName}
                    helpful={review.helpful}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 card">
                <Search className="w-16 h-16 mx-auto text-healthy-charcoal-lighter/50 mb-4" aria-hidden="true" />
                <h3 className="font-heading text-xl font-semibold text-healthy-charcoal mb-2">No reviews found</h3>
                <p className="font-body text-healthy-charcoal-lighter mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedProduct(null);
                  }}
                  className="btn-primary"
                >
                  Show All Reviews
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}