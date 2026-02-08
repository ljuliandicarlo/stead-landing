import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import {
  ServiceSchema,
  FAQPageSchema,
  BreadcrumbListSchema,
} from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Search,
  Bell,
  Share2,
  FileArchive,
  FolderOpen,
  Lock,
  FileCheck,
  Calendar,
  Users,
  Fingerprint,
  Scale,
  FileText,
  Home,
  Heart,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Life Vault — Secure Document Vault | Stead",
  description:
    "Store and organize life-critical documents in one secure place. Know what’s missing, what’s expiring, and who has access. Identity, legal, insurance, financial, property, medical.",
  path: "/life-vault",
});

const categories = [
  { label: "Identity", icon: Fingerprint },
  { label: "Legal", icon: Scale },
  { label: "Insurance", icon: FileText },
  { label: "Financial", icon: FileCheck },
  { label: "Property", icon: Home },
  { label: "Medical", icon: Heart },
] as const;

const features = [
  { icon: Lock, title: "Secure uploads", visual: "Encrypted storage" },
  { icon: Search, title: "Smart search", visual: "Find anything fast" },
  { icon: Bell, title: "Expiration alerts", visual: "Never miss a renewal" },
  { icon: Share2, title: "Controlled sharing", visual: "Role-based, time-limited" },
  { icon: FileArchive, title: "Emergency export", visual: "One-click pack" },
] as const;

const flowSteps = [
  { icon: FolderOpen, label: "Store" },
  { icon: Shield, label: "Organize" },
  { icon: Users, label: "Access" },
] as const;

const faqs = [
  {
    question: "What is Life Vault?",
    answer:
      "Life Vault is a secure place to store and organize life-critical documents. You can see what you have, what’s expiring, and who has access. We do not sell or issue insurance.",
  },
  {
    question: "What kinds of documents can I store?",
    answer:
      "You can organize identity documents, legal documents (e.g., will, power of attorney, health care proxy), insurance policies, financial records, property documents, and medical information. Categories are designed for estate planning documents and family document vault use.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Uploads are stored securely. You control access. We use industry-standard security practices. See our Privacy Policy and Terms for details.",
  },
  {
    question: "Can I share documents with my executor or advisor?",
    answer:
      "Yes. Life Vault supports controlled sharing with role-based and time-limited access. You choose who can see what and for how long.",
  },
  {
    question: "What are expiration alerts?",
    answer:
      "You can set expiration dates on documents (e.g., passports, licenses). We alert you when they’re coming up for renewal so you can avoid gaps.",
  },
  {
    question: "What is the emergency export pack?",
    answer:
      "You can generate a pack of your key documents for emergency or executor use. Details are in the product and in our Terms.",
  },
];

export default function LifeVaultPage() {
  return (
    <>
      <Nav />
      <ServiceSchema
        name="Life Vault — Secure document vault"
        description="Stead Life Vault is a secure place to store and organize life-critical documents. Categories include identity, legal, insurance, financial, property, and medical. Features include expiration alerts, smart search, controlled sharing, and emergency export. You control access."
        url="/life-vault"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Life Vault", path: "/life-vault" },
        ]}
      />

      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          {/* Hero — single vertical axis, centered */}
          <section
            className="flex flex-col items-center pb-12 md:pb-16 text-center"
            aria-labelledby="life-vault-hero"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <Shield className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden />
            </div>
            <h1 id="life-vault-hero" className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Life Vault
            </h1>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              One place for life-critical documents.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/signin?redirect=/app">Create your Life Vault</Link>
              </Button>
            </div>
          </section>

          {/* Purpose — visual: store → organize → access */}
          <section className="border-t border-border/60 pt-10 md:pt-14" aria-labelledby="purpose-heading">
            <h2 id="purpose-heading" className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              How it works
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-surface-2/80 px-8 py-10 md:gap-10 md:py-12">
              {flowSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border/50 bg-surface shadow-sm">
                      <step.icon className="h-7 w-7 text-muted-foreground" strokeWidth={1.5} aria-hidden />
                    </div>
                    <span className="text-sm font-medium text-foreground">{step.label}</span>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <ArrowRight className="h-5 w-5 shrink-0 text-border md:h-6 md:w-6" aria-hidden />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Categories — visual grid */}
          <section className="border-t border-border/60 pt-10 md:pt-14" aria-labelledby="categories-heading">
            <h2 id="categories-heading" className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Document categories
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-8 md:gap-4">
              {categories.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-surface/80 px-4 py-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2">
                    <Icon className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} aria-hidden />
                  </div>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Features — visual cards with icon + title + minimal line */}
          <section className="pt-10 md:pt-14" aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Features
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:mt-8 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, visual }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-2xl border border-border/50 bg-surface-2/80 p-5 shadow-sm md:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface border border-border/50">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground">{title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{visual}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What you see — visual: missing, expiring, access */}
          <section className="pt-10 md:pt-14" aria-labelledby="visibility-heading">
            <h2 id="visibility-heading" className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              At a glance
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 md:mt-8">
              <div className="flex items-start gap-4 rounded-2xl border border-border/50 bg-surface/80 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
                  <AlertCircle className="h-5 w-5 text-amber-600" strokeWidth={1.5} aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">What’s missing</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Gaps in your vault</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-border/50 bg-surface/80 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">What’s expiring</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Renewal alerts</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-border/50 bg-surface/80 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Who has access</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Sharing controls</p>
                </div>
              </div>
            </div>
          </section>

          {/* Who it’s for — icon row, centered */}
          <section className="pt-10 md:pt-14 text-center" aria-labelledby="who-heading">
            <h2 id="who-heading" className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Who it’s for
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8 md:gap-6">
              {["Families", "Executors", "Advisors"].map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-border/50 bg-surface/80 px-4 py-3 shadow-sm"
                >
                  <Users className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} aria-hidden />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA — centered */}
          <section className="pt-10 md:pt-14" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="sr-only">
              Get started
            </h2>
            <div className="mx-auto max-w-2xl rounded-2xl border border-border/50 bg-surface-2/80 p-8 text-center md:p-10">
              <p className="text-sm font-medium text-foreground">Policies and documents in one place.</p>
              <p className="mt-1 text-xs text-muted-foreground">Access controls, renewal alerts, continuity planning.</p>
              <Button size="lg" className="mt-6" asChild>
                <Link href="/signin?redirect=/app">Create your Life Vault</Link>
              </Button>
            </div>
          </section>

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

          <RelatedLinks currentPath="/life-vault" />
        </div>
      </main>
      <Footer />
    </>
  );
}
