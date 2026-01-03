import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function Results() {
  return (
    <section id="results" className="py-16 sm:py-20">
      <Container className="space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-primary">Results</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Proof it works.
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Reply lifts, booked calls, and niches we serve — delivered with transparent reporting.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {siteConfig.results.map((result) => (
            <Card key={result.label} className="border border-white/5 bg-gradient-to-br from-white/5 via-white/3 to-white/5">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary">{result.value}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">{result.label}</CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
