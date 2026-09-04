"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Leaf, FlaskConical } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-healthy-green/5 via-white to-healthy-charcoal/5"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-healthy-green/10" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl bg-healthy-charcoal/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-healthy-green/5" />
      </div>

      <div className="container-custom relative py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="px-4 py-1.5 rounded-full bg-healthy-green/10 text-healthy-green text-sm font-medium">
                <Sparkles className="w-4 h-4 inline mr-1" aria-hidden="true" />
                Science-Backed Wellness
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-healthy-charcoal leading-tight tracking-tight"
            >
              Premium Supplements for{" "}
              <span className="text-healthy-green">Optimal Health</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="font-body text-lg sm:text-xl text-healthy-charcoal-lighter mt-6 mb-8 max-w-xl leading-relaxed"
            >
              Discover expert-reviewed, research-supported supplements for brain health, vision, metabolism,
              oral care, hearing, and women&apos;s wellness. Your journey to better health starts here.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/shop"
                className="btn-primary text-lg px-10 py-4 flex items-center justify-center gap-2"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/faq"
                className="btn-secondary text-lg px-10 py-4 flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center gap-8 text-sm"
            >
              <div className="flex items-center gap-2 text-healthy-charcoal-lighter">
                <Shield className="w-5 h-5 text-healthy-green" aria-hidden="true" />
                <span className="font-medium text-healthy-charcoal">Money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-healthy-charcoal-lighter">
                <Leaf className="w-5 h-5 text-healthy-green" aria-hidden="true" />
                <span className="font-medium text-healthy-charcoal">Natural ingredients</span>
              </div>
              <div className="flex items-center gap-2 text-healthy-charcoal-lighter">
                <FlaskConical className="w-5 h-5 text-healthy-green" aria-hidden="true" />
                <span className="font-medium text-healthy-charcoal">Science-backed</span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Floating product cards */}
              <div className="absolute top-4 left-4 w-48 h-48 sm:w-56 sm:h-56 rounded-card-lg bg-white shadow-card-lg border border-healthy-charcoal-lighter/20 flex flex-col items-center justify-center p-4 text-center animate-pulse-slow">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-healthy-green/10 flex items-center justify-center mb-3">
                  <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-healthy-green" />
                </div>
                <p className="font-heading font-semibold text-healthy-charcoal text-sm sm:text-base">Phytomem One</p>
                <p className="font-body text-xs sm:text-sm text-healthy-charcoal-lighter mt-1">Brain & Cognitive</p>
              </div>

              <div className="absolute top-1/2 right-4 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 rounded-card-lg bg-white shadow-card-lg border border-healthy-charcoal-lighter/20 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-healthy-green/10 flex items-center justify-center mb-3">
                  <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-healthy-green" />
                </div>
                <p className="font-heading font-semibold text-healthy-charcoal text-sm sm:text-base">VisiFlora</p>
                <p className="font-body text-xs sm:text-sm text-healthy-charcoal-lighter mt-1">Eye & Vision</p>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-56 sm:h-56 rounded-card-lg bg-white shadow-card-lg border border-healthy-charcoal-lighter/20 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-healthy-green/10 flex items-center justify-center mb-3">
                  <FlaskConical className="w-10 h-10 sm:w-12 sm:h-12 text-healthy-green" />
                </div>
                <p className="font-heading font-semibold text-healthy-charcoal text-sm sm:text-base">Java Burn 2.0</p>
                <p className="font-body text-xs sm:text-sm text-healthy-charcoal-lighter mt-1">Metabolism</p>
              </div>

              {/* Center main visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-healthy-green/20 to-healthy-green/5 border border-healthy-green/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-4 border-healthy-green/10 animate-pulse-slow" />
                  <div className="relative z-10">
                    <Sparkles className="w-24 h-24 sm:w-32 sm:h-32 text-healthy-green/30" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg className="w-6 h-6 text-healthy-charcoal-lighter" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}