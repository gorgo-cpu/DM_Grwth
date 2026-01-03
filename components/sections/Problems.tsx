import { Container } from "@/components/layout/Container";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function Problems() {
  return (
    <section id="problems" className="py-16 sm:py-20">
      <Container className="space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Problems</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            So you want to grow your business? Here are your options:
          </h2>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            {siteConfig.problems.slice(0, 2).map((item) => (
              <Card
                key={item.title}
                className="h-full border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5"
              >
                <CardHeader className="items-start gap-3 space-y-3">
                  <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-primary">
                    {item.badge}
                  </span>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Card className="border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5">
            <CardHeader className="items-center space-y-4 text-center">
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-primary">
                {siteConfig.problems[2].badge}
              </span>
              <CardTitle className="text-2xl sm:text-3xl">{siteConfig.problems[2].title}</CardTitle>
              <CardDescription className="text-base text-muted-foreground sm:text-lg">
                {siteConfig.problems[2].description}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Container>
    </section>
  );
}
