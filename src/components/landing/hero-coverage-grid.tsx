"use client";

import Link from "next/link";
import {
  FileText,
  Shield,
  Heart,
  UserCog,
  Handshake,
  Layers,
  Users,
  Briefcase,
  Building2,
  Share2,
  ArrowRight,
} from "lucide-react";

const coverageTypes = [
  { label: "Term life", href: "/life-insurance/term", icon: FileText },
  { label: "Permanent life", href: "/life-insurance/permanent", icon: Shield },
  { label: "Income protection", href: "/life-insurance/income-protection", icon: Heart },
  { label: "Key person", href: "/life-insurance/key-person", icon: UserCog },
  { label: "Buy–sell planning", href: "/life-insurance/buy-sell", icon: Handshake },
  { label: "Complex & custom", href: "/request-insurance", icon: Layers },
] as const;

const personas = [
  { label: "Individuals & families", href: "/life-insurance#individuals", icon: Users },
  { label: "Founders & executives", href: "/life-insurance#founders", icon: Briefcase },
  { label: "Business owners", href: "/life-insurance#business-owners", icon: Building2 },
  { label: "Partners & shareholders", href: "/life-insurance#partners", icon: Share2 },
] as const;

const CAL_URL = "https://cal.com/juliandicarlo";

function CoverageCard({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-start gap-3 rounded-[15px] border border-border/50 bg-surface px-5 py-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
    >
      <Icon
        className="h-5 w-5 shrink-0 text-muted-foreground transition-colors duration-200 group-hover:text-primary"
        strokeWidth={1.5}
        aria-hidden
      />
      <span className="text-sm font-medium leading-snug text-foreground">
        {label}
      </span>
    </Link>
  );
}

function PersonaCard({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-start gap-3 rounded-[15px] border border-border/40 bg-surface/80 px-5 py-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md"
    >
      <Icon
        className="h-5 w-5 shrink-0 text-muted-foreground transition-colors duration-200 group-hover:text-primary"
        strokeWidth={1.5}
        aria-hidden
      />
      <span className="text-sm font-medium leading-snug text-foreground">
        {label}
      </span>
    </Link>
  );
}

export function HeroCoverageGrid() {
  return (
    <section
      className="pt-6 pb-8 text-left md:pt-8 md:pb-10"
      aria-labelledby="hero-coverage-label"
    >
      <div className="mx-auto max-w-3xl px-6">
        {/* Single soft container — stacked vertically */}
        <div className="overflow-hidden rounded-3xl bg-surface-2/80 px-6 py-10 shadow-sm md:px-10 md:py-14">
          {/* Coverage section */}
          <div>
            <h2
              id="hero-coverage-label"
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
            >
              Coverage we help coordinate
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-8 md:gap-5">
              {coverageTypes.map(({ label, href, icon }) => (
                <CoverageCard key={label} href={href} icon={icon} label={label} />
              ))}
            </div>

            {/* CTA — directly beneath coverage grid */}
            <Link
              href="/life-insurance"
              className="group mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-primary/30 bg-surface px-4 py-2.5 text-sm font-medium text-primary shadow-sm transition-all duration-200 hover:border-primary/50 hover:bg-primary/5"
            >
              Explore policies
              <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.5} aria-hidden />
            </Link>
          </div>

          {/* Divider */}
          <div className="my-10 h-px w-full bg-border/50 md:my-14" aria-hidden />

          {/* Persona section */}
          <div>
            <h2 className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Who we work with
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 md:mt-8 md:gap-5">
              {personas.map(({ label, href, icon }) => (
                <PersonaCard key={label} href={href} icon={icon} label={label} />
              ))}
            </div>

            {/* CTA — directly beneath persona grid */}
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-primary/30 bg-surface px-4 py-2.5 text-sm font-medium text-primary shadow-sm transition-all duration-200 hover:border-primary/50 hover:bg-primary/5"
            >
              Book a call
              <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.5} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
