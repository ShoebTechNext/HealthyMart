"use client";

import { Star, Verified, MessageSquare, Heart } from "lucide-react";

interface ReviewCardProps {
  author: string;
  avatar?: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified?: boolean;
  productName?: string;
  helpful?: number;
}

export function ReviewCard({
  author,
  avatar,
  rating,
  title,
  content,
  date,
  verified = false,
  productName,
  helpful = 0,
}: ReviewCardProps) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <article className="card p-6">
      <div className="flex items-start gap-4">
        {avatar ? (
          <img
            src={avatar}
            alt=""
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            aria-hidden="true"
          />
        ) : (
          <div
            className="w-12 h-12 rounded-full bg-healthy-green/10 flex items-center justify-center flex-shrink-0 text-healthy-green font-heading font-semibold"
            aria-hidden="true"
          >
            {initials}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-heading font-semibold text-healthy-charcoal">{author}</span>
                {verified && (
                  <span className="flex items-center gap-1 text-xs text-healthy-green" title="Verified Purchase">
                    <Verified className="w-3 h-3" aria-hidden="true" />
                    Verified
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-healthy-charcoal-lighter">
                <time dateTime={date} className="whitespace-nowrap">
                  {new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {productName && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-healthy-green">{productName}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {title && (
            <h4 className="font-heading font-medium text-healthy-charcoal mb-2">{title}</h4>
          )}

          <div className="flex items-center gap-1 mb-3" aria-label={`Rating: ${rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= Math.floor(rating)
                    ? "fill-current text-amber-500"
                    : star - 0.5 <= rating
                    ? "text-amber-500"
                    : "text-healthy-charcoal-lighter/30"
                }`}
                aria-hidden="true"
              />
            ))}
            <span className="font-semibold text-healthy-charcoal ml-1">{rating.toFixed(1)}</span>
          </div>

          <p className="font-body text-healthy-charcoal-lighter leading-relaxed mb-4">{content}</p>

          <div className="flex items-center gap-4 text-sm text-healthy-charcoal-lighter">
            <button
              type="button"
              className="flex items-center gap-1 hover:text-healthy-green transition-colors"
              aria-label={`Mark as helpful (${helpful})`}
            >
              <Heart className="w-4 h-4" aria-hidden="true" />
              <span>{helpful} Helpful</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-1 hover:text-healthy-green transition-colors"
              aria-label="Reply to review"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>Reply</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}