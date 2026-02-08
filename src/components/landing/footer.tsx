"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { InsuranceLicensingDisclosure } from "@/components/legal/insurance-licensing-disclosure";
import { ChevronDown, Linkedin, Mail } from "lucide-react";
import { DISCLAIMER_SHORT } from "@/lib/compliance";

function XLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
import { useState } from "react";

const CAL_URL = "https://cal.com/juliandicarlo";
const LINKEDIN_URL = "https://linkedin.com/company/steadorg";
const X_URL = "https://x.com/steadorg";

export function Footer() {
  const [disclosureOpen, setDisclosureOpen] = useState(false);

  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/stead-logo.png"
                alt="Stead"
                width={24}
                height={24}
                className="h-6 w-6 rounded-lg object-contain"
              />
              <p className="text-sm font-medium text-foreground">Stead</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Life insurance coordination and document organization.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <a
                href="mailto:hello@stead.org"
                className="inline-flex items-center gap-1.5 underline hover:text-primary"
              >
                <Mail className="h-3.5 w-3.5" />
                hello@stead.org
              </a>
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                aria-label="LinkedIn @steadorg"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                aria-label="X @steadorg"
              >
                <XLogoIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground/60">
              Built with love in NYC
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="/partners"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Partner with us
            </Link>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Book a call
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            {DISCLAIMER_SHORT}
          </p>

          <Collapsible open={disclosureOpen} onOpenChange={setDisclosureOpen}>
            <CollapsibleTrigger
              className="mt-4 flex w-full items-center justify-start gap-1.5 text-left text-xs text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
              aria-expanded={disclosureOpen}
            >
              Legal & regulatory disclosure
              <ChevronDown
                className={`h-3 w-3 shrink-0 transition-transform duration-200 ${disclosureOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:duration-200">
              <div className="mt-3">
                <InsuranceLicensingDisclosure />
              </div>
            </CollapsibleContent>
          </Collapsible>

          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Stead Technologies, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
