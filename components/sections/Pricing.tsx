import { Check } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <Container className="space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Pricing</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Choose the pace that matches your goals.
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Every tier includes strategy, execution, and reporting - tailored to your niche.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-2">
          {siteConfig.pricing.map((plan) => (
            <Card
              key={plan.name}
              className={`flex h-full flex-col border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5 ${
                plan.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-3">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {plan.perks.map((perk) => {
                    const tone = (perk as { tone?: string }).tone;
                    return (
                      <li key={perk.text} className="flex items-start gap-2 text-left">
                        <Check
                          className={`mt-0.5 h-4 w-4 ${tone === "negative" ? "text-red-400" : "text-primary"}`}
                          aria-hidden
                        />
                        <span className={tone === "negative" ? "text-red-300" : ""}>{perk.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <Button className="mt-auto rounded-full" asChild variant={plan.featured ? "default" : "outline"}>
                  <a href="#contact">{plan.ctaLabel ?? "Get Started"}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
