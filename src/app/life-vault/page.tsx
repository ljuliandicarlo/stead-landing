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
import { Shield, Search, Bell, Share2, FileArchive } from "lucide-react";

export const metadata = buildMetadata({
  title: "Life Vault — Secure Document Vault | Stead",
  description:
    "Store and organize life-critical documents in one secure place. Identity, legal, insurance, financial, property, medical. Expiration alerts, smart search, controlled sharing, emergency export.",
  path: "/life-vault",
});

const features = [
  { icon: Shield, text: "Categories: Identity, Legal, Insurance, Financial, Property, Medical" },
  { icon: Shield, text: "Secure uploads" },
  { icon: Search, text: "Smart search" },
  { icon: Bell, text: "Expiration alerts" },
  { icon: Share2, text: "Controlled sharing (role-based, time-limited)" },
  { icon: FileArchive, text: "Emergency export pack" },
];

const faqs = [
  {
    question: "What is Life Vault?",
    answer:
      "Life Vault is a secure document vault where you store and organize life-critical documents. It helps you see what you have, what’s expiring, and who has access. We do not sell or issue insurance; the vault is for your important document organizer needs.",
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
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Life Vault
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A secure place to store and organize life-critical documents. Know
            what’s missing, what’s expiring, and who has access.
          </p>

          <section className="mt-10" aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-xl font-medium text-foreground">
              Features
            </h2>
            <ul className="mt-4 space-y-3">
              {features.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10" aria-labelledby="use-cases-heading">
            <h2 id="use-cases-heading" className="text-xl font-medium text-foreground">
              Who it’s for
            </h2>
            <p className="mt-3 text-muted-foreground">
              Families, executors, and anyone who wants an important document
              organizer and estate planning document storage in one place. Works
              alongside life insurance consultation requests.
            </p>
          </section>

          <div className="mt-10">
            <Button size="lg" asChild>
              <Link href="/signin?redirect=/app">Create your Life Vault</Link>
            </Button>
          </div>

          <section className="mt-16" aria-labelledby="faq-heading">
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
