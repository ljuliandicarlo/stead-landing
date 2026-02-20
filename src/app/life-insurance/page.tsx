import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { InsuranceLicensingDisclosure } from "@/components/legal/insurance-licensing-disclosure";
import { buildMetadata } from "@/lib/seo";
import { ServiceSchema, FAQPageSchema, BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";
import { Button } from "@/components/ui/button";
import { Check, FileText, Shield, Heart, UserCog, Handshake, Layers, Users, Briefcase, Building2, Share2, FileCheck, Bell, Lock } from "lucide-react";

const CAL_URL = "https://cal.com/juliandicarlo";

export const metadata = buildMetadata({
  title: "Stead life insurance | Coordination & review",
  description:
    "Stead life insurance coordination: get the right coverage and structure with licensed professionals. We connect you with advisors; we do not sell or issue insurance.",
  path: "/life-insurance",
});

const coverageCards = [
  { title: "Term Life", description: "Simple protection for a specific period", href: "/life-insurance/term", icon: FileText },
  { title: "Permanent Life", description: "Long-term coverage with estate planning considerations", href: "/life-insurance/permanent", icon: Shield },
  { title: "Income Protection", description: "Planning for loss of earning ability", href: "/life-insurance/income-protection", icon: Heart },
  { title: "Key Person Insurance", description: "Protecting critical people in a business", href: "/life-insurance/key-person", icon: UserCog },
  { title: "Buy–Sell Funding", description: "Ownership transition planning", href: "/life-insurance/buy-sell", icon: Handshake },
  { title: "Complex / Custom", description: "Multi-policy or cross-border needs", href: "/request-insurance", icon: Layers },
] as const;

const personas = [
  { title: "Individuals & families", href: "/life-insurance#individuals", icon: Users },
  { title: "Founders & executives", href: "/life-insurance#founders", icon: Briefcase },
  { title: "Business owners", href: "/life-insurance#business-owners", icon: Building2 },
  { title: "Partners & shareholders", href: "/life-insurance#partners", icon: Share2 },
] as const;

const whatWeHelpWith = [
  "Determining the right amount of coverage",
  "Structuring ownership and beneficiaries correctly",
  "Avoiding gaps, lapses, and misalignment",
  "Coordinating with estate, tax, and legal advisors",
] as const;

const faqs = [
  {
    question: "Does Stead sell or issue life insurance?",
    answer:
      "No. Stead Technologies, Inc. does not sell, place, negotiate, or bind insurance. We collect requests for consultation and route them to properly licensed professionals who can help you.",
  },
  {
    question: "What is life insurance coordination?",
    answer:
      "Life insurance coordination means we help you request the right coverage and connect you with licensed professionals who can advise on term life, permanent life, key person coverage, buy-sell funding, and income protection. We do not underwrite or issue policies.",
  },
  {
    question: "What information do I need to request a consultation?",
    answer:
      "You can share your location, occupation, income range, family status, timeline, and what you want help with (e.g., term life, review existing coverage). We do not collect medical history, DOB, SSN, or underwriting data.",
  },
  {
    question: "How does beneficiary and ownership structure work?",
    answer:
      "Licensed professionals we connect you with can advise on how to structure ownership and beneficiaries for your situation. Stead facilitates the request; we do not provide legal or insurance advice.",
  },
  {
    question: "What happens after I submit a request?",
    answer:
      "We review requests and respond when there is a clear fit. There is no guarantee of coverage or service. You will hear from us or a partner only if we can help.",
  },
  {
    question: "Can I also use Stead for document storage?",
    answer:
      "Yes. Life Vault is our secure document vault for life-critical documents—identity, legal, insurance, financial, property, medical. You can use it alongside requesting insurance consultation.",
  },
];

export default function LifeInsurancePage() {
  return (
    <>
      <Nav />
      <ServiceSchema
        name="Life insurance coordination"
        description="Stead facilitates requests for life insurance consultation and connects you with licensed professionals. We do not sell, place, negotiate, or bind insurance. Services include coordination for term life, permanent life, key person, buy-sell funding, and income protection."
        url="/life-insurance"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Life Insurance", path: "/life-insurance" },
        ]}
      />

      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          {/* 1. Simple page intro — not a hero duplicate */}
          <section className="pb-8 md:pb-10" aria-labelledby="life-insurance-hero">
            <h1 id="life-insurance-hero" className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              Life insurance
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Right coverage, right structure. We connect you with licensed professionals.
            </p>
            <div className="mt-5">
              <Link
                href="/request-insurance"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Get Insurance
              </Link>
            </div>
          </section>

          {/* 2. Visual Coverage Overview */}
          <section className="border-t border-border/60 pt-10 md:pt-14" aria-labelledby="coverage-overview-heading">
            <h2 id="coverage-overview-heading" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Coverage we help coordinate
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coverageCards.map(({ title, description, href, icon: Icon }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex flex-col gap-3 rounded-2xl bg-surface-2/80 p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <Icon className="h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={1.5} aria-hidden />
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 3. Persona Section */}
          <section className="border-t border-border/60 pt-10 md:pt-14" id="who-this-is-for" aria-labelledby="personas-heading">
            <h2 id="personas-heading" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Who this is for
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {personas.map(({ title, href, icon: Icon }) => (
                <Link
                  key={title}
                  href={href}
                  className="flex items-center gap-2.5 rounded-xl bg-surface/90 px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
                >
                  <Icon className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} aria-hidden />
                  <span className="text-sm font-medium text-foreground">{title}</span>
                </Link>
              ))}
            </div>
            {/* Persona anchors — short “how coverage is typically used” */}
            <div className="mt-10 space-y-8">
              <div id="individuals" className="scroll-mt-24">
                <h3 className="text-sm font-medium text-foreground">Individuals & families</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Income replacement, mortgage protection, education funding, and beneficiary planning. Coverage is typically structured around dependents and long-term obligations.
                </p>
              </div>
              <div id="founders" className="scroll-mt-24">
                <h3 className="text-sm font-medium text-foreground">Founders & executives</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Key person protection, business continuity, and personal coverage. Often combines term or permanent life with key person policies to protect the business and the family.
                </p>
              </div>
              <div id="business-owners" className="scroll-mt-24">
                <h3 className="text-sm font-medium text-foreground">Business owners</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Buy-sell funding, key person coverage, and succession planning. Ownership transition and business continuity are coordinated with licensed professionals.
                </p>
              </div>
              <div id="partners" className="scroll-mt-24">
                <h3 className="text-sm font-medium text-foreground">Partners & shareholders</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Buy-sell agreements, ownership transition, and equitable structuring. Coverage is aligned with partnership or operating agreements and reviewed on a regular cadence.
                </p>
              </div>
            </div>
          </section>

          {/* 4. What We Help With */}
          <section className="border-t border-border/60 pt-10 md:pt-14" aria-labelledby="what-we-help-heading">
            <h2 id="what-we-help-heading" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              What we help with
            </h2>
            <ul className="mt-6 divide-y divide-border/50 rounded-xl border border-border/40 bg-surface-2/60 overflow-hidden">
              {whatWeHelpWith.map((item) => (
                <li key={item} className="flex items-center gap-4 px-5 py-4">
                  <Check className="h-5 w-5 shrink-0 text-foreground" strokeWidth={2} aria-hidden />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5. Included: Life Vault */}
          <section className="border-t border-border/60 pt-10 md:pt-14" aria-labelledby="life-vault-heading">
            <h2 id="life-vault-heading" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Included: your Life Vault
            </h2>
            <div className="mt-6 rounded-2xl border border-border/40 bg-surface-2/80 p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-start gap-6 md:gap-8">
                <div className="flex flex-col gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <FileCheck className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden />
                    <span className="text-sm font-medium text-foreground">Documents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden />
                    <span className="text-sm font-medium text-foreground">Alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden />
                    <span className="text-sm font-medium text-foreground">Access</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Policies and supporting documents are stored in a private vault with access controls, renewal alerts, and continuity planning.
                  </p>
                  <Link
                    href="/life-vault"
                    className="mt-4 inline-block text-sm font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    See Life Vault
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Compliance block */}
          <section className="border-t border-border/60 pt-10 md:pt-14" aria-labelledby="compliance-heading">
            <h2 id="compliance-heading" className="sr-only">
              Compliance
            </h2>
            <div className="rounded-2xl border border-border/50 bg-surface-2/80 px-5 py-5 shadow-sm md:px-6 md:py-6">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Stead does not sell, place, negotiate, or bind insurance. We connect you with properly licensed professionals for consultation and coordination. Insurance products are offered by licensed third parties and subject to underwriting and state regulations.
              </p>
            </div>
          </section>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/request-insurance">Get Insurance</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/life-vault">Create your Life Vault</Link>
            </Button>
          </div>

          {/* FAQ */}
          <section className="mt-16 border-t border-border pt-10" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-xl font-medium text-foreground">
              Frequently asked questions
            </h2>
            <ul className="mt-6 space-y-6">
              {faqs.map((faq) => (
                <li key={faq.question}>
                  <h3 className="font-medium text-foreground">{faq.question}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 border-t border-border pt-10" aria-labelledby="disclosure-heading">
            <h2 id="disclosure-heading" className="sr-only">
              Legal disclosure
            </h2>
            <InsuranceLicensingDisclosure />
          </section>

          <RelatedLinks currentPath="/life-insurance" />
        </div>
      </main>
      <Footer />
    </>
  );
}
