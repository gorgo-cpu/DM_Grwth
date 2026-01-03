"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

import { analyticsEnabled, publicEnv } from "@/lib/env";

export function Analytics() {
  useEffect(() => {
    if (!analyticsEnabled || !publicEnv.NEXT_PUBLIC_POSTHOG_KEY) return;

    posthog.init(publicEnv.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: publicEnv.NEXT_PUBLIC_POSTHOG_HOST ?? "https://app.posthog.com",
      persistence: "localStorage",
    });
    posthog.capture("$pageview");
  }, []);

  return null;
}
