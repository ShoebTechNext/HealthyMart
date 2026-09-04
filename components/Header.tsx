"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Globe, ShoppingBag, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { categories } from "@/data/products";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-card border-b border-healthy-charcoal-lighter/20"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="container-custom"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo size="lg" className="flex-shrink-0" />

          <div className="hidden lg:flex lg:items-center lg:gap-8 flex-1 lg:justify-center">
            <div className="relative flex-1 max-w-md">
              <form onSubmit={handleSearch} className="relative" role="search">
                <label htmlFor="header-search" className="sr-only">
                  Search products
                </label>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-healthy-charcoal-lighter" aria-hidden="true" />
                <input
                  id="header-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search supplements..."
                  className="input-field pl-12 pr-4 py-2.5 text-sm"
                  autoComplete="off"
                />
              </form>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative" role="menu" aria-label="Categories">
                <button
                  type="button"
                  className="btn-ghost gap-2 font-medium"
                  onClick={() => setShowCategoryMenu(!showCategoryMenu)}
                  aria-expanded={showCategoryMenu}
                  aria-haspopup="true"
                >
                  <span>Categories</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showCategoryMenu ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                {showCategoryMenu && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setShowCategoryMenu(false)} aria-hidden="true" />
                    <div className="absolute right-0 top-full mt-2 z-20 w-56 bg-white rounded-card-lg shadow-card-lg border border-healthy-charcoal-lighter/20 py-2 animate-slide-down" role="menu">
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setActiveCategory(null);
                          setShowCategoryMenu(false);
                          window.location.href = "/shop";
                        }}
                        className={`w-full px-4 py-2 text-left font-body text-sm ${!activeCategory ? "bg-healthy-green/10 text-healthy-green" : "text-healthy-charcoal hover:bg-healthy-charcoal-lighter/50"}`}
                      >
                        All Categories
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            setActiveCategory(cat);
                            setShowCategoryMenu(false);
                            window.location.href = `/shop?category=${encodeURIComponent(cat)}`;
                          }}
                          className={`w-full px-4 py-2 text-left font-body text-sm ${activeCategory === cat ? "bg-healthy-green/10 text-healthy-green" : "text-healthy-charcoal hover:bg-healthy-charcoal-lighter/50"}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <Link
                href="/shop"
                className="btn-ghost font-medium hidden sm:inline-flex"
              >
                <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                <span>Shop</span>
              </Link>

              <a
                href="https://www.instagram.com/modonest_links/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost p-2"
                aria-label="Follow us on Instagram"
              >
                <Globe className="w-5 h-5 text-healthy-charcoal" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              className="btn-ghost p-2"
              onClick={() => setShowSearch(!showSearch)}
              aria-expanded={showSearch}
              aria-label="Search"
            >
              <Search className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="btn-ghost p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {showSearch && (
          <div className="lg:hidden animate-slide-down border-t border-healthy-charcoal-lighter/20 pt-4 pb-2">
            <form onSubmit={handleSearch} className="relative" role="search">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-healthy-charcoal-lighter" aria-hidden="true" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search supplements..."
                className="input-field pl-12"
                autoComplete="off"
                autoFocus
              />
            </form>
          </div>
        )}

        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}`}
          role="navigation"
          aria-label="Mobile menu"
        >
          <div className="space-y-1 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-card font-body font-medium text-healthy-charcoal hover:bg-healthy-charcoal-lighter/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-healthy-charcoal-lighter/20">
              <div className="px-4 py-2">
                <span className="font-heading font-semibold text-healthy-charcoal block mb-2">Categories</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/shop?category=${encodeURIComponent(cat)}`}
                      className="px-3 py-1.5 text-sm rounded-full bg-healthy-charcoal-lighter/20 text-healthy-charcoal-lighter hover:bg-healthy-green/10 hover:text-healthy-green transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}