# DM Growth

<<<<<<< HEAD
Framer-style marketing site built with Next.js, deployed on Cloudflare Pages with Supabase backend for lead capture.
=======
Framer-style marketing site built with Next.js, deployed on Cloudflare Pages with Supabase backend.
>>>>>>> beb1ea251b23458612440d77875abcc4b9ef2f24

## Stack
- Next.js 15 (App Router, Static Export) + TypeScript
- TailwindCSS with CSS variable tokens + shadcn/ui (Button, Card, Input, Textarea, Dialog)
- Framer Motion entrance animations
- React Hook Form + Zod for validated lead capture
- Cloudflare Pages Functions for serverless API
- Supabase PostgreSQL for lead storage
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

## Deployment
<<<<<<< HEAD
See `DEPLOYMENT.md` for Cloudflare Pages deployment instructions.

Quick setup:
=======
See [DEPLOYMENT.md](DEPLOYMENT.md) for complete Cloudflare Pages deployment instructions.

**Quick setup:**
>>>>>>> beb1ea251b23458612440d77875abcc4b9ef2f24
1. Connect your GitHub repo to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `out`
4. Add environment variables: `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
5. Deploy

## Customize
- Copy & links: `content/site.ts` (nav, hero, features, CTA, footer, Calendly URL)
- Design tokens/theme: `app/globals.css` for CSS variables + `tailwind.config.ts` for mapping/fonts/container
- Sections: `components/sections/*` (Hero with motion, Features grid, CTA with Calendly + lead form)
- Layout: `components/layout/*` for Navbar/Footer/Container
- Lead capture: `components/sections/LeadForm.tsx` posts to `/api/lead` (Cloudflare Pages Function)
- Calendly: set `siteConfig.cta.calendlyUrl` in `content/site.ts`; inline embed supported via `CTA` component
- Analytics: set `NEXT_PUBLIC_POSTHOG_KEY` (and optional `NEXT_PUBLIC_POSTHOG_HOST`) to enable `components/Analytics.tsx`
- SEO: defaults in `content/site.ts` + `lib/seo.ts`; set `NEXT_PUBLIC_SITE_URL` to correct metadata/sitemaps

## Tooling
- shadcn/ui initialized via `components.json`; primitives live in `components/ui/`
- Prettier + `prettier-plugin-tailwindcss` and VS Code settings for format on save
- ESLint (Next core web vitals) and strict TypeScript

## Project structure
```
app/
  layout.tsx            # Global metadata, fonts, Analytics injection
  page.tsx              # Page composition (Navbar, Hero, Features, CTA, Footer)
  globals.css           # Tailwind + design tokens
components/
  layout/               # Navbar, Footer, Container
  sections/             # Hero, Features, CTA, LeadForm
  ui/                   # shadcn/ui components (Button, Card, Input, Textarea, Dialog)
functions/
  api/lead.ts           # Cloudflare Pages Function for lead capture
lib/                    # env, seo, utils, validations
content/site.ts         # Single source of truth for copy/links
out/                    # Build output (static site)
```

## Environment Variables
<<<<<<< HEAD
See `.env.example` for local development and `DEPLOYMENT.md` for production setup.

Local development:
=======
See `.env.example` for local development and DEPLOYMENT.md for production setup.

**Local development:**
>>>>>>> beb1ea251b23458612440d77875abcc4b9ef2f24
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

<<<<<<< HEAD
Production (Cloudflare Pages):
```
NEXT_PUBLIC_SITE_URL=https://datamodulator.ro
SUPABASE_URL=https://your-project-url.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Optional (Mailgun email notifications):
```
MAILGUN_API_KEY=your-mailgun-api-key
MAILGUN_DOMAIN=your-domain.mailgun.org
MAILGUN_FROM="DM Growth <no-reply@your-domain.com>"
MAILGUN_TO=you@your-domain.com
MAILGUN_API_BASE=https://api.mailgun.net
```

## Lead Storage
All form submissions are stored in Supabase PostgreSQL. Access your leads in the Supabase dashboard -> Table Editor -> `leads` table.
=======
**Production (Cloudflare Pages):**
```
NEXT_PUBLIC_SITE_URL=https://datamodulator.ro
SUPABASE_URL=your-project-url.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Lead Storage
All form submissions are stored in Supabase PostgreSQL. Access your leads in the Supabase dashboard → Table Editor → `leads` table.
>>>>>>> beb1ea251b23458612440d77875abcc4b9ef2f24
