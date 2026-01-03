import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function Process() {
  return (
    <section id="process" className="py-16 sm:py-20">
      <Container className="space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Process</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Here’s our step-by-step plan.
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            We don't reinvent the wheel—we make it rounder. Highly personalized outbound that converts into $$$.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.process.map((step) => (
            <Card
              key={step.title}
              className="h-full border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5"
            >
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between text-sm font-semibold text-primary">
                  <span>{step.number}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">{step.label}</span>
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{step.description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
