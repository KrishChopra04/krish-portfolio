# krishchopra.net — Next.js Rebuild

Minimal modernist portfolio site. Built with Next.js 14 App Router, TypeScript, zero external UI libraries.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Google Fonts** — DM Serif Display, DM Mono, Geist
- CSS variables for the full design system (no Tailwind, no CSS modules — intentional)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push this repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js, no config needed
4. Point your domain: go to Vercel project → Settings → Domains → add `krishchopra.net`
5. Update DNS at your registrar: add a CNAME record pointing `www` to `cname.vercel-dns.com`, and an A record for the apex (`@`) pointing to `76.76.21.21`
6. Cancel Squarespace after DNS propagates (usually under an hour)

## Contact form

The contact form uses [Formspree](https://formspree.io). Replace `YOUR_FORM_ID` in `app/contact/page.tsx` with your actual Formspree form ID. Free tier handles up to 50 submissions/month.

## Content

All essay and shorts data lives in `lib/data.ts`. Add new essays there — the writing page and home page pull from the same source automatically.

## Structure

```
app/
  layout.tsx        root layout, nav, footer
  page.tsx          home
  globals.css       design system (CSS variables, resets)
  writing/
    page.tsx        filterable essay index
  shorts/
    page.tsx        video work
  about/
    page.tsx        bio + facts
  contact/
    page.tsx        contact form
components/
  Nav.tsx
  Footer.tsx
lib/
  data.ts           all content (essays, shorts)
```
