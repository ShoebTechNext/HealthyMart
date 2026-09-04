import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductClient } from "./ProductClient";
import { getProduct, products } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: `${product.tagline} - Read our detailed review of ${product.name}, including ingredients, benefits, pros & cons, and real customer reviews.`,
    keywords: [product.name, product.category, ...product.keyIngredients.slice(0, 5), "review", "supplement", "ingredients"],
    openGraph: {
      title: `${product.name} | HealthyMart`,
      description: product.tagline,
      type: "website",
      images: [
        {
          url: product.mainImage,
          width: 1200,
          height: 630,
          alt: `${product.name} - ${product.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | HealthyMart`,
      description: product.tagline,
      images: [product.mainImage],
    },
    other: {
      "product:category": product.category,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        <ProductClient product={product} />
      </main>
      <Footer />
    </>
  );
}