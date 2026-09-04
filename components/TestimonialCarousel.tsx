"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  author: string;
  role: string;
  content: string;
  rating: number;
  productName: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Sarah Mitchell",
    role: "Verified Customer",
    content:
      "I've been using Phytomem One for three months now, and the difference in my focus and memory recall is remarkable. No jitters, no crashes—just clean mental energy throughout my workday.",
    rating: 4.8,
    productName: "Phytomem One",
  },
  {
    id: 2,
    author: "James Chen",
    role: "Verified Customer",
    content:
      "VisiFlora has been a game-changer for my eye strain from long coding sessions. The ingredients list is impressive, and I appreciate that it addresses the gut-eye connection. Highly recommended for anyone staring at screens all day.",
    rating: 4.7,
    productName: "VisiFlora",
  },
  {
    id: 3,
    author: "Maria Rodriguez",
    role: "Verified Customer",
    content:
      "Java Burn 2.0 fits perfectly into my morning routine. Tasteless in my coffee, and I've noticed my metabolism feels more active. Down 8 pounds in 6 weeks without changing anything else.",
    rating: 4.6,
    productName: "Java Burn 2.0",
  },
  {
    id: 4,
    author: "David Thompson",
    role: "Verified Customer",
    content:
      "ProDentim changed my dental checkups. My hygienist asked what I'd been doing differently—healthier gums, less sensitivity. The probiotic candy format makes it easy to remember daily.",
    rating: 4.9,
    productName: "ProDentim",
  },
  {
    id: 5,
    author: "Lisa Park",
    role: "Verified Customer",
    content:
      "Audifort drops have helped with the ringing I've dealt with for years. It's not a miracle cure, but the reduction in tinnitus intensity has improved my sleep quality significantly.",
    rating: 4.5,
    productName: "Audifort",
  },
  {
    id: 6,
    author: "Robert Kim",
    role: "Verified Customer",
    content:
      "Nagano Tonic gives me steady energy without the crash. The Japanese ingredient profile intrigued me, and the results speak for themselves. Great addition to my morning routine.",
    rating: 4.7,
    productName: "Nagano Tonic",
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const itemsPerView = typeof window !== "undefined" ? (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1) : 3;
  const maxIndex = testimonials.length - itemsPerView;

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  // Touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
    setTouchStart(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="section bg-white" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="testimonials-heading" className="section-title">
            Trusted by Wellness Enthusiasts
          </h2>
          <p className="section-subtitle mx-auto">
            Real experiences from people who&apos;ve made these supplements part of their daily health routine.
          </p>
        </div>

        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Customer testimonials carousel"
        >
          <div className="flex gap-6 overflow-hidden">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`flex-1 min-w-0 ${itemsPerView > 1 ? "basis-1/2 md:basis-1/3" : "basis-full"}`}
                >
                  <article className="card-lg p-6 h-full flex flex-col">
                    <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= Math.floor(testimonial.rating)
                              ? "fill-current text-amber-500"
                              : star - 0.5 <= testimonial.rating
                              ? "text-amber-500"
                              : "text-healthy-charcoal-lighter/30"
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    <Quote className="w-10 h-10 text-healthy-green/20 mb-4" aria-hidden="true" />

                    <p className="font-body text-healthy-charcoal-lighter leading-relaxed mb-6 flex-1">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-healthy-charcoal-lighter/30">
                      <div className="w-10 h-10 rounded-full bg-healthy-green/10 flex items-center justify-center text-healthy-green font-heading font-semibold flex-shrink-0">
                        {testimonial.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-heading font-semibold text-healthy-charcoal truncate">
                          {testimonial.author}
                        </div>
                        <div className="font-body text-sm text-healthy-charcoal-lighter">
                          {testimonial.role} · {testimonial.productName}
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-healthy-charcoal-lighter/30 flex items-center justify-center text-healthy-charcoal hover:bg-healthy-green hover:border-healthy-green hover:text-white transition-all duration-200 shadow-card"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {Array.from({ length: maxIndex + 1 }, (_, i) => i).map((i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Go to testimonial group ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    i === currentIndex
                      ? "bg-healthy-green w-6"
                      : "bg-healthy-charcoal-lighter/40 hover:bg-healthy-green/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-healthy-charcoal-lighter/30 flex items-center justify-center text-healthy-charcoal hover:bg-healthy-green hover:border-healthy-green hover:text-white transition-all duration-200 shadow-card"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}