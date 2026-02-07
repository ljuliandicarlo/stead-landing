import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/seo";
import { BreadcrumbListSchema } from "@/components/seo/structured-data";
import { RelatedLinks } from "@/components/seo/related-links";

export const metadata = buildMetadata({
  title: "Terms of service | Stead",
  description:
    "Stead terms of service. Disclaimers that Stead does not sell or issue insurance; insurance services are provided by third parties; limits of liability.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Nav />
      <BreadcrumbListSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Terms of service", path: "/terms" },
        ]}
      />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-2xl px-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to home
          </Link>
          <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground">
            Terms of service
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: February 2025. These terms govern your use of the Stead website and Life Vault service operated by Stead Technologies, Inc. (“Stead,” “we,” “us”).
          </p>

          <section className="mt-10 space-y-6 text-sm text-foreground">
            <div>
              <h2 className="text-lg font-medium text-foreground">1. Acceptance</h2>
              <p className="mt-2 text-muted-foreground">
                By using our website or Life Vault, you agree to these terms and our Privacy Policy. If you do not agree, do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">2. Services we provide</h2>
              <p className="mt-2 text-muted-foreground">
                Stead operates a marketing website and a document storage and organization service (Life Vault). We also facilitate requests for life insurance consultation and concierge review by collecting your information and connecting you with properly licensed professionals or partners. We do not underwrite, sell, solicit, negotiate, place, or bind insurance. All insurance-related services are provided by third parties. Our role is coordination and connection only.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">3. Disclaimers</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li><strong>Not insurance.</strong> Stead is not a licensed insurance agency or brokerage. We do not sell, place, or issue insurance. Insurance products and advice are provided solely by licensed third parties.</li>
                <li><strong>No guarantee.</strong> Submitting a lead form does not create a contract or guarantee of coverage, service, or response. We and our partners respond when there is a fit; there is no obligation to offer or provide services.</li>
                <li><strong>Not professional advice.</strong> We do not provide legal, tax, accounting, or insurance advice. Any such advice comes from licensed professionals you engage separately.</li>
                <li><strong>Life Vault.</strong> Life Vault is a storage and organization tool. We are not responsible for the content or accuracy of documents you upload, or for decisions you make based on that content.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">4. Your use of the site and app</h2>
              <p className="mt-2 text-muted-foreground">
                You agree to use our services only for lawful purposes. You may not misuse the site or app, attempt to gain unauthorized access to our systems or other users’ data, upload malicious content, or violate any applicable law. You are responsible for keeping your account credentials (e.g., email) secure.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">5. Intellectual property</h2>
              <p className="mt-2 text-muted-foreground">
                The Stead site and app, including design, text, and branding, are owned by Stead or our licensors. You may not copy, modify, or distribute our materials without permission. Documents you upload to Life Vault remain yours; you grant us a limited license to store and display them as necessary to provide the service.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">6. Limitation of liability</h2>
              <p className="mt-2 text-muted-foreground">
                To the fullest extent permitted by law, Stead and its officers, directors, and affiliates are not liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of data, revenue, or profits, arising from your use of our services. Our total liability for any claim related to these terms or our services is limited to the amount you paid us in the twelve months before the claim (or one hundred U.S. dollars if greater). Some jurisdictions do not allow these limitations; in such cases our liability is limited to the maximum permitted by law.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">7. Indemnification</h2>
              <p className="mt-2 text-muted-foreground">
                You agree to indemnify and hold harmless Stead and its officers, directors, and affiliates from any claims, damages, or expenses (including reasonable attorneys’ fees) arising from your use of our services, your violation of these terms, or your violation of any third party’s rights.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">8. Termination</h2>
              <p className="mt-2 text-muted-foreground">
                We may suspend or terminate your access to Life Vault or the site at any time, with or without cause. You may stop using our services at any time. Provisions that by their nature should survive (e.g., disclaimers, limitation of liability, indemnification) will survive termination.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">9. Changes</h2>
              <p className="mt-2 text-muted-foreground">
                We may update these terms from time to time. We will post the updated terms on this page and update the “Last updated” date. Continued use after changes constitutes acceptance. If you do not agree, discontinue use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">10. General</h2>
              <p className="mt-2 text-muted-foreground">
                These terms are governed by the laws of the State of New York, without regard to conflict of laws. Any dispute will be resolved in the courts of New York. If any provision is held invalid, the remaining provisions remain in effect. Our failure to enforce a right does not waive that right.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-foreground">11. Contact</h2>
              <p className="mt-2 text-muted-foreground">
                Questions about these terms:{" "}
                <a href="mailto:hello@stead.org" className="underline hover:text-foreground">hello@stead.org</a>.
              </p>
            </div>
          </section>

          <RelatedLinks currentPath="/terms" />
        </div>
      </main>
      <Footer />
    </>
  );
}
