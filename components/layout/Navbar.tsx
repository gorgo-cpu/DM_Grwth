import Link from "next/link";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/50 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-8">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-white">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-8 text-base font-medium text-muted-foreground md:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 shadow-lg backdrop-blur-lg">
            {siteConfig.nav
              .filter((item) => item.label !== "Pricing" && item.label !== "Contact")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 transition hover:text-foreground hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </nav>
        <Button asChild size="lg" className="rounded-full bg-white text-black shadow-lg hover:bg-white/90">
          <Link href="#contact">{siteConfig.hero.primaryCta.label}</Link>
        </Button>
      </Container>
    </header>
  );
}
