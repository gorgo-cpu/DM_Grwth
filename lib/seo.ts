import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import { publicEnv } from "./env";

export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  const metadataBase = new URL(publicEnv.siteUrl);

  const base: Metadata = {
    metadataBase,
    title: {
      default: siteConfig.seo.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.seo.description,
    openGraph: {
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      url: metadataBase,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.seo.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      images: [siteConfig.seo.ogImage],
    },
  };

  return {
    ...base,
    ...overrides,
    title: overrides?.title ?? base.title,
    description: overrides?.description ?? base.description,
    openGraph: { ...base.openGraph, ...overrides?.openGraph },
    twitter: { ...base.twitter, ...overrides?.twitter },
  };
}
