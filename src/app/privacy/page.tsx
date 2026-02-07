import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";

export const metadata = buildMetadata({
  title: "Privacy policy | Stead",
  description:
    "Stead privacy policy. How we collect, use, and protect your data. Cookie policy and contact for privacy requests.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy policy", path: "/privacy" },
        ]}
      />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-2xl px-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to home
          </Link>
          <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground">
            Privacy policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: February 2025. Stead Technologies, Inc. (“Stead,” “we,” “us”) operates the website and Life Vault service. This policy describes how we collect, use, and protect your information.
          </p>

          <section className="mt-10 space-y-6 text-sm text-foreground">
            <div>
              <h2 className="text-lg font-medium text-foreground">1. Information we collect</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li><strong>Lead and contact forms.</strong> When you submit a request for insurance consultation, concierge review, or partner interest, we collect the information you provide (e.g., name, email, location, occupation, income or net worth range, family status, timeline, and any notes). We do not collect date of birth, Social Security number, medical history, or other underwriting data on these forms.</li>
                <li><strong>Life Vault account.</strong> To use Life Vault we collect your email address and authenticate you via magic link. We do not store your password.</li>
                <li><strong>Documents you upload.</strong> If you use Life Vault, you may upload documents (e.g., identity, legal, insurance, financial). We store these in secure cloud storage and associate them with your account. We do not use document content for advertising or sell it to third parties.</li>
                <li><strong>Usage and technical data.</strong> We may collect IP address, browser type, and similar technical data when you use our site or app. Our hosting and auth provider (Supabase) may collect such data in accordance with their policies.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">2. How we use your information</h2>
              <p className="mt-2 text-muted-foreground">
                We use your information to: respond to your requests and connect you with licensed professionals where applicable; operate and secure Life Vault (including document storage and expiration alerts); communicate with you about your account or our services; improve our site and app; and comply with law. We do not sell your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">3. Storage and security</h2>
              <p className="mt-2 text-muted-foreground">
                Data is stored using Supabase (database and storage) and is transmitted over HTTPS. We use industry-standard practices to protect your data. You are responsible for keeping your email account secure so that magic links and account access remain under your control.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">4. Cookies and similar technologies</h2>
              <p className="mt-2 text-muted-foreground">
                We use cookies and similar technologies where necessary to operate the site and app (e.g., authentication and session management). We do not use third-party advertising cookies. You can control cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">5. Sharing and third parties</h2>
              <p className="mt-2 text-muted-foreground">
                We may share your information with: service providers that help us operate the site and app (e.g., Supabase, hosting); licensed professionals or partners when you have requested a consultation or referral; and authorities when required by law. We do not sell your data to third parties for marketing.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">6. Retention</h2>
              <p className="mt-2 text-muted-foreground">
                We retain lead and account data as long as needed to fulfill the purposes in this policy and to comply with legal obligations. You may ask us to delete your account and associated data; we will do so subject to applicable law and our retention requirements.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">7. Your rights</h2>
              <p className="mt-2 text-muted-foreground">
                Depending on where you live, you may have rights to access, correct, delete, or port your data, or to object to or restrict processing. To exercise these rights or ask questions about your data, contact us at{" "}
                <a href="mailto:hello@stead.org" className="underline hover:text-foreground">hello@stead.org</a>.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">8. Changes</h2>
              <p className="mt-2 text-muted-foreground">
                We may update this policy from time to time. We will post the updated policy on this page and update the “Last updated” date. Continued use of the site or app after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">9. Contact</h2>
              <p className="mt-2 text-muted-foreground">
                For privacy-related questions or requests:{" "}
                <a href="mailto:hello@stead.org" className="underline hover:text-foreground">hello@stead.org</a>.
              </p>
            </div>
          </section>

          <RelatedLinks currentPath="/privacy" />
        </div>
      </main>
      <Footer />
    </>
  );
}
