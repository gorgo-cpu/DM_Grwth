"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LeadForm } from "./LeadForm";
import { publicEnv } from "@/lib/env";

type CTAProps = {
  inlineCalendly?: boolean;
};

export function CTA({ inlineCalendly = true }: CTAProps) {
  return (
    <section id="contact" className="py-20">
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">
            Contact
          </p>
          <h3 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            {siteConfig.cta.title}
          </h3>
          <p className="text-pretty text-base text-muted-foreground sm:text-lg">{siteConfig.cta.description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={siteConfig.cta.calendlyUrl} target="_blank" rel="noreferrer">
                Book a call
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="#contact">Send a note</Link>
            </Button>
          </div>
          {inlineCalendly && <CalendlyEmbed url={siteConfig.cta.calendlyUrl} />}
        </div>
        <Card id="contact" className="border border-border/70 bg-card/80 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl">{siteConfig.lead.title}</CardTitle>
            <CardDescription>{siteConfig.lead.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <LeadForm />
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}

type CalendlyEmbedProps = {
  url: string;
};

function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const embedUrl = (() => {
    try {
      const parsed = new URL(url);
      const hostname = new URL(publicEnv.siteUrl).hostname;
      parsed.searchParams.set("embed_type", "Inline");
      if (hostname) parsed.searchParams.set("embed_domain", hostname);
      return parsed.toString();
    } catch {
      return url;
    }
  })();

  useEffect(() => {
    const existingCss = document.querySelector<HTMLLinkElement>(
      'link[href="https://assets.calendly.com/assets/external/widget.css"]',
    );
    if (!existingCss) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );

    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [url]);

  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/60 shadow-inner">
      <div
        className="calendly-inline-widget min-h-[520px]"
        data-url={embedUrl}
        style={{ minWidth: "320px" }}
      />
    </div>
  );
}
