import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReviewsClient } from "./ReviewsClient";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "Read real customer reviews and testimonials for all HealthyMart recommended supplements. Filter by product to find experiences relevant to your needs.",
  openGraph: {
    title: "Customer Reviews | HealthyMart",
    description: "Real customer reviews for all HealthyMart supplements.",
    type: "website",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        <ReviewsClient />
      </main>
      <Footer />
    </>
  );
}