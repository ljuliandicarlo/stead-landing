"use client";

import {
  FileText,
  Shield,
  Heart,
  UserCog,
  Handshake,
  User,
  Users,
  Briefcase,
  Building2,
} from "lucide-react";

const coverageTypes = [
  { label: "Term Life", icon: FileText },
  { label: "Permanent Life", icon: Shield },
  { label: "Income Protection", icon: Heart },
  { label: "Key Person", icon: UserCog },
  { label: "Buy–Sell Funding", icon: Handshake },
] as const;

const whoItsFor = [
  { label: "Individuals", icon: User },
  { label: "Families", icon: Users },
  { label: "Founders", icon: Briefcase },
  { label: "Business Owners", icon: Building2 },
] as const;

export function CoverageAtAGlance() {
  return (
    <section
      className="w-full border-y border-border/60 bg-surface-2 py-12 md:py-16"
      aria-labelledby="coverage-at-a-glance-title"
    >
      <h2 id="coverage-at-a-glance-title" className="sr-only">
        Coverage and who it’s for
      </h2>
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center gap-8 md:gap-10">
          {/* Top row: coverage types */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {coverageTypes.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg border border-border/70 bg-surface px-4 py-2.5"
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.5}
                />
                <span className="text-sm font-medium text-foreground md:text-base">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Center: You */}
          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-12 bg-border/80" aria-hidden />
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border/80 bg-surface">
              <span className="text-lg font-medium text-foreground md:text-xl">
                You
              </span>
            </div>
            <div className="h-px w-12 bg-border/80" aria-hidden />
          </div>

          {/* Bottom row: who it's for */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {whoItsFor.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg border border-border/70 bg-surface px-4 py-2.5"
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.5}
                />
                <span className="text-sm font-medium text-foreground md:text-base">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Coverage coordinated through licensed professionals. Documents and
          access organized in your Life Vault.
        </p>
      </div>
    </section>
  );
}
