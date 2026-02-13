import type { Metadata } from "next";

const siteConfig = {
  name: "Royal Veterinary Clinic",
  description: "Premium veterinary care in Cape Town. Two locations in Diep River and N1 City offering comprehensive pet healthcare with a personal touch.",
  url: "https://royalvet.co.za",
  ogImage: "/images/og-image.jpg",
};

export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    title: overrides.title
      ? `${overrides.title} | ${siteConfig.name}`
      : siteConfig.name,
    description: (overrides.description as string) || siteConfig.description,
    openGraph: {
      title: (overrides.title as string) || siteConfig.name,
      description: (overrides.description as string) || siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
      locale: "en_ZA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: (overrides.title as string) || siteConfig.name,
      description: (overrides.description as string) || siteConfig.description,
      images: [siteConfig.ogImage],
    },
    ...overrides,
  };
}
