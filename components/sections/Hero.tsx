"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.16),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.12),transparent_30%)]" />
      <Container className="max-w-4xl space-y-8 text-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-white/80 shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-primary" />
          {/* {siteConfig.hero.eyebrow} */}
        </motion.div>
        <div className="space-y-6">
          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.05 }}
            className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
              {siteConfig.hero.title}
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="text-pretty text-lg text-muted-foreground sm:text-xl"
          >
            {siteConfig.hero.description}
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.15 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center"
        >
          <Button asChild size="lg">
            <Link href={siteConfig.hero.primaryCta.href}>
              {siteConfig.hero.primaryCta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href={siteConfig.hero.secondaryCta.href}>
              <Play className="mr-2 h-4 w-4" />
              {siteConfig.hero.secondaryCta.label}
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
