"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
  multiple?: boolean;
}

export function FAQAccordion({ items, className = "", multiple = false }: FAQAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>(multiple ? [] : [0]);

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      if (multiple) {
        return prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index];
      }
      return prev.includes(index) ? [] : [index];
    });
  };

  return (
    <div className={`${className} space-y-4`} role="region" aria-label="Frequently Asked Questions">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <details
            key={index}
            className="group card overflow-hidden"
            open={isOpen}
            onToggle={() => toggle(index)}
          >
            <summary
              className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none focus:ring-2 focus:ring-healthy-green focus:ring-offset-2"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="font-heading text-lg font-semibold text-healthy-charcoal pr-10">{item.question}</h3>
              <div className="absolute right-6 flex items-center gap-2 transition-transform duration-200 group-open:rotate-180">
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-healthy-green" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-healthy-charcoal-lighter" aria-hidden="true" />
                )}
              </div>
            </summary>
            <div
              id={`faq-answer-${index}`}
              className="px-6 pb-6 font-body text-healthy-charcoal-lighter leading-relaxed animate-slide-down"
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              <p>{item.answer}</p>
            </div>
          </details>
        );
      })}
    </div>
  );
}