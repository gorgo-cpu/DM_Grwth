# DM Growth Starter

Framer-style marketing site stack built on Next.js App Router with Tailwind tokens, shadcn/ui primitives, Framer Motion, and conversion-ready components.

## Stack
- Next.js 16 (App Router) + TypeScript
- TailwindCSS with CSS variable tokens + shadcn/ui (Button, Card, Input, Textarea, Dialog)
- Framer Motion entrance animations
- React Hook Form + Zod for validated lead capture
- next-sitemap for sitemap/robots generation
- Optional PostHog analytics (client-side, env-gated)

## Quickstart
1) Install dependencies: `npm install`
2) Run the dev server: `npm run dev`
3) Open `http://localhost:3000`

## Scripts
- `npm run dev` - start Next.js in dev mode
- `npm run build` - production build
- `npm run start` - start the built app
- `npm run lint` - ESLint
- `npm run typecheck` - TypeScript without emit
- `npm run format` - Prettier format (Tailwind plugin included)
- `npm run sitemap` - generate sitemap/robots via next-sitemap

## Customize
- Copy & links: `content/site.ts` (nav, hero, features, CTA, footer, Calendly URL)
- Design tokens/theme: `app/globals.css` for CSS variables + `tailwind.config.ts` for mapping/fonts/container
- Sections: `components/sections/*` (Hero with motion, Features grid, CTA with Calendly + lead form)
- Layout: `components/layout/*` for Navbar/Footer/Container
- Forms: `components/sections/LeadForm.tsx` posts to `app/api/lead/route.ts` (TODO inside to wire CRM/email)
- Calendly: set `siteConfig.cta.calendlyUrl` in `content/site.ts`; inline embed supported via `CTA` component
- Analytics: set `NEXT_PUBLIC_POSTHOG_KEY` (and optional `NEXT_PUBLIC_POSTHOG_HOST`) to enable `components/Analytics.tsx`
- SEO: defaults in `content/site.ts` + `lib/seo.ts`; set `NEXT_PUBLIC_SITE_URL` to correct metadata/sitemaps
- Sitemap/robots: run `npm run sitemap` after updating `NEXT_PUBLIC_SITE_URL`

## Tooling
- shadcn/ui initialized via `components.json`; primitives live in `components/ui/`
- Prettier + `prettier-plugin-tailwindcss` and VS Code settings for format on save
- ESLint (Next core web vitals) and strict TypeScript

## Project structure
```
app/
  api/lead/route.ts     # Lead form API stub (server validation with Zod)
  layout.tsx            # Global metadata, fonts, Analytics injection
  page.tsx              # Page composition (Navbar, Hero, Features, CTA, Footer)
  globals.css           # Tailwind + design tokens
components/
  layout/               # Navbar, Footer, Container
  sections/             # Hero, Features, CTA, LeadForm
  ui/                   # shadcn/ui components (Button, Card, Input, Textarea, Dialog)
lib/                    # env, seo, utils, validations
content/site.ts         # Single source of truth for copy/links
public/                 # Empty placeholder for assets
```

## Env vars
See `.env.example`:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

Start building: tweak the tokens, drop in new sections, and wire the API route into your CRM.
