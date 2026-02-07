import type { Metadata } from "next";

export const SITE_NAME = "Stead";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stead.org";
export const DEFAULT_TITLE =
  "Stead — Life insurance and life organization, in one place";
export const DEFAULT_DESCRIPTION =
  "Stead helps you request the right coverage, organize life-critical documents, and coordinate execution with trusted professionals. Secure document vault and estate planning support.";

export const TWITTER_HANDLE = "@steadorg";
export const LINKEDIN_URL = "https://linkedin.com/company/steadorg";
export const X_URL = "https://x.com/steadorg";

export interface SEOConfig {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  nofollow?: boolean;
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
  };
}

export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
  nofollow = false,
  openGraph,
}: SEOConfig): Metadata {
  const canonical = path.startsWith("http") ? path : `${SITE_URL}${path}`;
  const ogImage = openGraph?.images?.[0] ?? `${SITE_URL}/og.png`;

  return {
    title: title.length >= 60 ? title.slice(0, 57) + "..." : title,
    description:
      description.length >= 160 ? description.slice(0, 157) + "..." : description,
    alternates: {
      canonical,
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE_NAME,
      title: openGraph?.title ?? title,
      description: openGraph?.description ?? description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: openGraph?.title ?? title,
      description: openGraph?.description ?? description,
      images: [ogImage],
    },
  };
}

export const PUBLIC_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/life-insurance", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/life-vault", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/concierge", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/professionals", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/partners", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/request-insurance", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/request-review", priority: 0.6, changeFrequency: "monthly" as const },
];
