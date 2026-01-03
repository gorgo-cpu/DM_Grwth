import { z } from "zod";

import { siteConfig } from "@/content/site";

const publicEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .optional(),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url().optional(),
});

const parsedPublicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
});

export const publicEnv = {
  ...parsedPublicEnv,
  siteUrl: parsedPublicEnv.NEXT_PUBLIC_SITE_URL ?? siteConfig.url ?? "http://localhost:3000",
};

export const analyticsEnabled = Boolean(parsedPublicEnv.NEXT_PUBLIC_POSTHOG_KEY);
