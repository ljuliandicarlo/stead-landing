# Stead SEO Checklist & Implementation Guide

## Owning “Stead life insurance” (branded + category)

To rank for **“stead life insurance”**, **“stead insurance”**, and related branded queries:

### On-site (implemented)
- **Homepage**: Title “Stead — Life insurance, done right” and default description tie brand + category.
- **Life insurance page**: Title “Stead life insurance | Coordination & review” and description include “Stead life insurance” once, with compliant coordination language.
- **Organization schema**: `description` added so Google can show “Stead – life insurance coordination…” in knowledge panel / snippets.
- **Canonical + sitemap**: One canonical URL per page; `/life-insurance` and subpages in sitemap.
- **H1**: “Life insurance” on `/life-insurance`; brand is in title and schema (avoid H1 keyword stuffing).

### Technical
- Set **`NEXT_PUBLIC_SITE_URL`** in production to your live domain (e.g. `https://stead.org`). Wrong value breaks canonicals and sitemap.
- In **Google Search Console**: Add property, submit `https://<your-domain>/sitemap.xml`, use URL Inspection on `/` and `/life-insurance` until they show “URL is on Google”.

### Off-site (your actions)
- **Google Business Profile**: If you have a business listing, use name “Stead” and description that includes “life insurance coordination” (no sales language; keep compliant).
- **Consistent NAP**: Same business name, address, phone everywhere (site, GBP, directories).
- **Brand mentions**: Get “Stead” and “life insurance” (or “life insurance coordination”) used together in reputable places: LinkedIn, press, partner sites, directories. Quality backlinks to stead.org help.
- **Social**: Keep LinkedIn/X profiles (sameAs in schema) updated; link to stead.org and key pages.

### What to avoid
- Don’t stuff “Stead life insurance” in every heading or paragraph; one clear signal in title + description + schema is enough.
- Don’t claim to sell/issue insurance; keep coordination/disclaimer language everywhere.

---

## What Was Implemented

### 1. Technical SEO
- **Config** (`/lib/seo.ts`): `SITE_NAME`, `SITE_URL`, `DEFAULT_TITLE`, `DEFAULT_DESCRIPTION`, `buildMetadata()`, `PUBLIC_ROUTES`.
- **Canonicals**: Every public page has `alternates.canonical` via `buildMetadata({ path })` using `SITE_URL`.
- **Robots**: Root layout defaults to `index, follow`. App layout and signin set `robots: { index: false, follow: false }`.
- **robots.txt** (`/app/robots.ts`): Allow `/`, disallow `/app/`, `/admin/`, `/signin`, `/auth/`, `/api/`. Sitemap URL included.
- **Sitemap** (`/app/sitemap.ts`): Dynamic sitemap of all `PUBLIC_ROUTES` with `lastModified`, `changeFrequency`, `priority`. Served at `/sitemap.xml`.

### 2. Metadata & Social
- **Root layout**: `metadataBase`, default title/description, icons (favicon + apple), OpenGraph/Twitter defaults.
- **Per-page**: Each public route uses `buildMetadata()` for unique `title` (< 60 chars), `description` (< 160 chars), canonical, OpenGraph, Twitter cards.
- **OG image**: `/public/og.png` used for social. Replace with a proper 1200×630 image (black background + Stead branding) for best results; current file is a copy of the logo.

### 3. Structured Data (JSON-LD)
- **Organization**: Site-wide (in root layout via `DefaultStructuredData`). Name, url, logo, sameAs (LinkedIn, X).
- **WebSite**: Site-wide. Includes `SearchAction` with target `/search?q={search_term_string}`.
- **Service**: On `/life-insurance`, `/life-vault`, `/concierge` (coordination/referral language, no issuing).
- **FAQPage**: On `/life-insurance` and `/life-vault` (6–10 FAQs, compliant copy).
- **BreadcrumbList**: On all subpages (home → section → page).
- **Components**: `/components/seo/structured-data.tsx` (OrganizationSchema, WebSiteSchema, ServiceSchema, FAQPageSchema, BreadcrumbListSchema).

### 4. On-Page SEO
- **H1**: One per page, keyword-relevant.
- **H2 sections**: 2–5 per page with clear structure.
- **Related section**: `RelatedLinks` at bottom of public pages (Life Insurance, Life Vault, Concierge, Professionals).
- **Internal links**: Nav links to `/life-insurance`, `/life-vault`, `/concierge`, `/about`; descriptive anchor text.
- **Alt text**: Logo images use `alt="Stead"`.

### 5. Routes & Indexability
| Route | Indexable | Notes |
|-------|-----------|--------|
| `/` | Yes | Home |
| `/life-insurance` | Yes | Life insurance coordination |
| `/life-vault` | Yes | Document vault |
| `/concierge` | Yes | Private review |
| `/about` | Yes | About |
| `/contact` | Yes | Contact |
| `/professionals` | Yes | Partner landing |
| `/privacy` | Yes | Privacy policy |
| `/terms` | Yes | Terms |
| `/request-insurance` | Yes | Get Insurance form |
| `/request-review` | Yes | Private review form |
| `/search` | No | noindex (query results) |
| `/app/*` | No | noindex (auth) |
| `/signin` | No | noindex |
| `/auth/*` | No | Disallowed in robots.txt |

### 6. Analytics-Ready
- No trackers added. When you add analytics (e.g. GTM, Vercel Analytics), use env vars (e.g. `NEXT_PUBLIC_GTM_ID`) and only load if present.

### 7. Performance / Core Web Vitals
- `next/image` used for logo and icons; width/height set; `priority` only on hero/above-fold where needed.
- Font: Inter via `next/font/google` (preloaded).
- Animations: Framer Motion kept subtle to avoid layout shift; product visual reserves space.

---

## How to Test

### Lighthouse (Chrome DevTools)
1. Open a public page (e.g. `/life-insurance`).
2. DevTools → Lighthouse → SEO (and Performance).
3. Check: meta description, canonical, h1, structured data, mobile-friendly.

### Rich Results (Google)
- [Rich Results Test](https://search.google.com/test/rich-results): Paste a page URL. Verify Organization, WebSite, FAQPage, BreadcrumbList.

### Sitemap & Robots
- Visit `https://<your-domain>/sitemap.xml`: Should list all public URLs.
- Visit `https://<your-domain>/robots.txt`: Should show allow/disallow and Sitemap URL.

### Google Search Console
1. Add property (domain or URL prefix).
2. **Sitemaps**: Submit `https://<your-domain>/sitemap.xml`.
3. **URL Inspection**: Test a few public URLs; confirm “URL is on Google” or “Submitted” after indexing.
4. **Coverage**: Monitor indexed vs excluded; fix any unexpected noindex or errors.

---

## Common Pitfalls

1. **SITE_URL**: Set `NEXT_PUBLIC_SITE_URL` in production (e.g. `https://stead.org`). Wrong value breaks canonicals and sitemap URLs.
2. **OG image**: Replace `/public/og.png` with a proper 1200×630 image for social previews.
3. **Duplicate content**: Don’t create separate URLs for the same content; use one canonical.
4. **Compliance**: All copy stays “request consultation,” “coordinate,” “connect with licensed professionals.” No “we sell/issue insurance.”
5. **Search route**: `/search` is noindex; not in sitemap. Add to sitemap only if you later make search indexable.

---

## File Reference

| File | Purpose |
|------|---------|
| `src/lib/seo.ts` | SEO config, buildMetadata, PUBLIC_ROUTES |
| `src/app/robots.ts` | robots.txt output |
| `src/app/sitemap.ts` | Sitemap XML |
| `src/app/layout.tsx` | Base metadata, icons, DefaultStructuredData |
| `src/app/app/layout.tsx` | noindex for app |
| `src/app/signin/page.tsx` | noindex for signin |
| `src/components/seo/structured-data.tsx` | JSON-LD components |
| `src/components/seo/default-structured-data.tsx` | Organization + WebSite in layout |
| `src/components/seo/related-links.tsx` | Related section |
