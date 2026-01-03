import Link from "next/link";

import { siteConfig } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/80">
      <Container className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            {siteConfig.name}
          </p>
          <p className="text-sm text-muted-foreground">{siteConfig.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {siteConfig.footer.links.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
