# Programmatic SEO Strategy (Placeholder)

This doc outlines a future strategy for programmatic or scalable SEO pages on Stead. **Nothing here is implemented yet.**

## Possible Programmatic Routes

### 1. Professionals by location / category
- **Pattern**: `/professionals/[city]`, `/professionals/[city]/[category]`
- **Example**: `/professionals/new-york`, `/professionals/new-york/life-insurance`
- **Content**: City/category-specific landing copy, partner CTA, same compliance disclaimers.
- **Data**: Could be driven by a list of cities/categories (static or CMS). Avoid thin or duplicate content; each URL should have distinct, useful content.

### 2. Location-based landing pages
- **Pattern**: `/life-insurance/[state]` or `/life-insurance/[city]`
- **Use case**: “Life insurance consultation in [location].” Must stay coordination/referral only; no location-specific guarantees.
- **Caution**: Only add if you can maintain unique, compliant copy per page. Duplicate or near-duplicate pages can be demoted by Google.

### 3. Topic or intent-based pages
- **Pattern**: `/life-vault/estate-planning-documents`, `/life-insurance/beneficiary-structure`
- **Use case**: Deep dives on estate planning documents, executor checklist, power of attorney, will storage, etc.
- **Content**: One page per topic, H1/H2 structure, internal links to Life Vault / Life Insurance / Concierge, FAQs, CTA.

### 4. Search as entry point
- **Current**: `/search?q=...` is noindex.
- **Future**: If you add a real search (e.g. professionals or content), you could:
  - Keep result pages noindex, or
  - Index only curated “landing” result pages (e.g. `/search?q=life+insurance+consultation` → dedicated landing) with unique metadata and content.

## Implementation Notes (When You Build)

- **Metadata**: Use `buildMetadata()` and a shared helper for programmatic title/description (e.g. “Life insurance coordination in {city} | Stead”).
- **Structured data**: BreadcrumbList and, if relevant, LocalBusiness or Service per page. No misleading or location-specific guarantees.
- **Sitemap**: Include programmatic URLs in `PUBLIC_ROUTES` or a separate sitemap entry so they’re discoverable.
- **Internal links**: Link from home, nav, or hub pages (e.g. `/professionals`) to programmatic pages with descriptive anchor text.
- **Compliance**: Every programmatic page must state that Stead does not sell or issue insurance and that services are coordination/referral only.

## When to Avoid Programmatic SEO

- Don’t create hundreds of near-identical pages (e.g. same template with only city name changed).
- Don’t target locations or products you don’t actually support.
- Don’t promise outcomes (e.g. “best rates,” “guaranteed coverage”) on any page.

This strategy can be expanded when you have clear data sources and content guidelines for programmatic pages.
