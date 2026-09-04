"use client";

import { MessageSquare, Globe, Link2, Copy, Check, Share2, X } from "lucide-react";
import { useState, useCallback } from "react";

interface ShareButtonProps {
  url: string;
  title: string;
  className?: string;
}

interface ShareConfig {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  href?: (url: string, title: string) => string;
  action?: "copy";
}

const shareConfigs: ShareConfig[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageSquare,
    color: "text-green-500 hover:bg-green-50",
    href: (url: string, title: string) =>
      `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`,
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: Globe,
    color: "text-pink-500 hover:bg-pink-50",
    href: (url: string) =>
      `https://www.instagram.com/?url=${encodeURIComponent(url)}`,
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: Link2,
    color: "text-blue-600 hover:bg-blue-50",
    href: (url: string, title: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`,
  },
  {
    id: "x",
    label: "X (Twitter)",
    icon: X,
    color: "text-gray-800 hover:bg-gray-100",
    href: (url: string, title: string) =>
      `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  {
    id: "copy",
    label: "Copy Link",
    icon: Copy,
    color: "text-healthy-green hover:bg-healthy-green/10",
    action: "copy",
  },
];

export function ShareButton({ url, title, className = "" }: ShareButtonProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleShare = useCallback(
    async (config: (typeof shareConfigs)[0]) => {
      if (config.action === "copy") {
        try {
          await navigator.clipboard.writeText(url);
          setCopied("copy");
          setTimeout(() => setCopied(null), 2000);
        } catch {
          // Fallback for older browsers
          const textarea = document.createElement("textarea");
          textarea.value = url;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
          setCopied("copy");
          setTimeout(() => setCopied(null), 2000);
        }
      } else {
        const href = config.href?.(url, title) ?? "";
        window.open(href, "_blank", "noopener,noreferrer");
      }
    },
    [url, title]
  );

  return (
    <div className={`relative inline-flex ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="btn-ghost gap-2"
        aria-label="Share this product"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Share2 className="w-5 h-5" aria-hidden="true" />
        <span className="hidden sm:inline">Share</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-full mt-2 z-20 w-48 bg-white rounded-card-lg shadow-card-lg border border-healthy-charcoal-lighter/20 py-2 animate-slide-down">
            {shareConfigs.map((config) => (
              <button
                key={config.id}
                type="button"
                onClick={() => {
                  handleShare(config);
                  if (config.action !== "copy") setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left font-body text-sm font-medium ${config.color} transition-colors focus:outline-none focus:bg-healthy-green/5`}
                aria-label={`Share on ${config.label}`}
              >
                <config.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>{config.label}</span>
                {copied === config.id && (
                  <Check className="w-4 h-4 ml-auto text-green-500" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}