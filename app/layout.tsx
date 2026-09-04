import type { Metadata, Viewport } from "next";
import { Sora, Poppins, Inter, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2E7D32",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://healthymart.example.com"),
  title: {
    default: "HealthyMart — Premium Health Supplements Reviewed",
    template: "%s | HealthyMart",
  },
  description:
    "Discover science-backed health supplements for brain, vision, weight management, oral health, hearing, and women's wellness. Expert reviews, ingredient deep-dives, and trusted recommendations.",
  keywords: [
    "health supplements",
    "nootropics",
    "vision support",
    "weight loss supplements",
    "oral probiotics",
    "hearing health",
    "menopause support",
    "affiliate reviews",
  ],
  authors: [{ name: "HealthyMart" }],
  creator: "HealthyMart",
  publisher: "HealthyMart",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healthymart.example.com",
    siteName: "HealthyMart",
    title: "HealthyMart — Premium Health Supplements Reviewed",
    description:
      "Discover science-backed health supplements for brain, vision, weight management, oral health, hearing, and women's wellness.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HealthyMart - Premium Health Supplements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthyMart — Premium Health Supplements Reviewed",
    description:
      "Discover science-backed health supplements for brain, vision, weight management, oral health, hearing, and women's wellness.",
    images: ["/og-image.png"],
    creator: "@healthymart",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${poppins.variable} ${inter.variable} ${manrope.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body bg-white text-healthy-charcoal min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}