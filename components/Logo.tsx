"use client";

export function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: { icon: 20, text: "text-xl", gap: 1.5 },
    md: { icon: 28, text: "text-2xl", gap: 2 },
    lg: { icon: 36, text: "text-3xl", gap: 2.5 },
  };

  const { icon, text, gap } = sizes[size];

  return (
    <a href="/" className={`flex items-center gap-${gap} ${className}`} aria-label="HealthyMart Home">
      <span className="flex items-center justify-center" aria-hidden="true">
        <svg
          width={icon}
          height={icon}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-healthy-green"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
            stroke="#2E7D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12C8 10.3431 9.34315 9 11 9C12.6569 9 14 10.3431 14 12C14 13.6569 12.6569 15 11 15C9.34315 15 8 13.6569 8 12Z"
            stroke="#2E7D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 12C16 10.3431 17.3431 9 19 9C20.6569 9 22 10.3431 22 12C22 13.6569 20.6569 15 19 15C17.3431 15 16 13.6569 16 12Z"
            stroke="#2E7D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={`font-heading font-bold ${text}`}>
        <span className="text-healthy-green">Healthy</span>
        <span className="text-healthy-charcoal">Mart</span>
      </span>
    </a>
  );
}