import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function Solution() {
  return (
    <section id="solution" className="py-16 sm:py-20">
      <Container className="space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Solution</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Introducing DM Growth <span className="text-primary">Outbound.</span>
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">{siteConfig.solution.description}</p>
          <div className="flex justify-center">
            <Button asChild size="lg" variant="default">
              <a href="#contact">Book a call</a>
            </Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {siteConfig.solution.pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="h-full border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5"
            >
              <CardHeader>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{pillar.description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
