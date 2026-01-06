# Cloudflare Pages Deployment Guide

## Overview
This project is configured to deploy to Cloudflare Pages as a static site with serverless API functions. The lead capture form at `/api/lead` stores submissions in Supabase.

## Cloudflare Pages Settings

### Build Configuration
Navigate to your Cloudflare Pages project settings and configure:

**Framework preset:** Next.js

**Build command:**
npm run build

**Build output directory:**
out

**Node version:**
22.16.0

### Environment Variables
Set these in Cloudflare Pages dashboard under Settings -> Environment variables:

**Production & Preview environments:**
NEXT_PUBLIC_SITE_URL=https://datamodulator.ro
SUPABASE_URL=https://your-project-url.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

**Optional (for analytics):**
NEXT_PUBLIC_POSTHOG_KEY=your-posthog-key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

**Optional (email notifications via Mailgun):**
MAILGUN_API_KEY=your-mailgun-api-key
MAILGUN_DOMAIN=your-domain.mailgun.org
MAILGUN_FROM="DM Growth <no-reply@your-domain.com>"
MAILGUN_TO=you@your-domain.com
MAILGUN_API_BASE=https://api.mailgun.net

### Supabase Setup
1. Ensure your Supabase project has a `leads` table created via the provided migration
2. Get your Supabase URL from: Project Settings -> API -> Project URL
3. Get your Service Role Key from: Project Settings -> API -> service_role key (keep this secret)
4. Add both values to Cloudflare Pages environment variables

## DNS Configuration
Ensure your custom domain `datamodulator.ro` has a CNAME record pointing to:
dm-grwth.pages.dev

## Testing the Deployment

### Homepage
Visit `https://dm-grwth.pages.dev/` or `https://datamodulator.ro/`
- Expected: 200 status, full homepage content visible

### Lead Form
1. Scroll to the Contact section
2. Fill out the form with test data
3. Submit the form
4. Expected: Success message appears
5. Verify in Supabase: Check the `leads` table for your test submission

### API Endpoint Direct Test
```bash
curl -X POST https://dm-grwth.pages.dev/api/lead \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "message": "This is a test message with more than ten characters"
  }'
```
Expected response: {"ok":true}

## Deployment Architecture

### Static Site
Next.js app exported as static HTML/CSS/JS
All pages pre-rendered at build time
Served from Cloudflare's global CDN

### Serverless Functions
/api/lead handled by Cloudflare Pages Function
Source: functions/api/lead.ts
Runtime: Cloudflare Workers (V8 isolate)
Database: Supabase PostgreSQL

### Lead Storage Flow
User submits form -> POST to /api/lead
Cloudflare Pages Function validates data
Data inserted into Supabase `leads` table
Success response returned to client

### Viewing Leads
Access your Supabase dashboard:

Go to Table Editor
Select `leads` table
View all submissions with timestamps

## Troubleshooting

### Build Failures
Check that Node 22 is selected in Cloudflare build settings
Verify package.json and package-lock.json are committed
Review build logs in Cloudflare Pages dashboard

### 404 on Homepage
Verify build output directory is set to `out`
Check that `next.config.ts` has `output: "export"`
Confirm build succeeded and generated files in `out/index.html`

### API Endpoint Not Working
Verify `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are set in Cloudflare
Check Cloudflare Functions logs for errors
Verify the `functions/api/lead.ts` file is committed
Test with curl command above to see exact error

### CORS Errors
Cloudflare Pages Functions handle CORS automatically
Check browser console for specific error messages
Verify request is going to correct domain

## Local Development

npm install
npm run dev
Note: `/api/lead` won't work in local dev since it requires Cloudflare Pages runtime. Test after deployment.

## Monitoring
View function invocations: Cloudflare Dashboard -> Pages -> dm-grwth -> Functions
View logs: Use `wrangler pages deployment tail` (requires Wrangler CLI)
Database monitoring: Supabase Dashboard -> Database -> Logs
