"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Users,
  Briefcase,
  Building2,
  Landmark,
  FileText,
  Shield,
  Heart,
  UserCog,
  Handshake,
  Scale,
} from "lucide-react";

const whoYouAre = [
  {
    icon: User,
    label: "Individual",
    subtext: "Personal income and dependents",
  },
  {
    icon: Users,
    label: "Family / Parents",
    subtext: "Spouse, children, long-term planning",
  },
  {
    icon: Briefcase,
    label: "Founder / Operator",
    subtext: "Business risk and continuity",
  },
  {
    icon: Building2,
    label: "Business Owner / Partners",
    subtext: "Ownership transitions",
  },
  {
    icon: Landmark,
    label: "High Net Worth / Complex Estate",
    subtext: "Estate liquidity and legacy",
  },
] as const;

const coverageCoordinated = [
  {
    icon: FileText,
    label: "Term Life Insurance",
    subtext: "Income replacement and dependency protection",
  },
  {
    icon: Shield,
    label: "Permanent Life Insurance",
    subtext: "Estate liquidity and long-term planning",
  },
  {
    icon: Heart,
    label: "Disability & Income Protection",
    subtext: "Protection against loss of earning ability",
  },
  {
    icon: UserCog,
    label: "Key Person Insurance",
    subtext: "Protecting critical contributors",
  },
  {
    icon: Handshake,
    label: "Buy–Sell Funding",
    subtext: "Ownership transition planning",
  },
  {
    icon: Scale,
    label: "Estate Liquidity Planning",
    subtext: "Covering taxes and obligations",
  },
] as const;

// Left index → right indices (which coverage cards connect to which "who you are" card)
const connections: [number, number[]][] = [
  [0, [0, 2]], // Individual → Term Life, Disability
  [1, [0, 1]], // Family → Term Life, Permanent Life
  [2, [2, 3]], // Founder → Disability, Key Person
  [3, [3, 4]], // Business Owner → Key Person, Buy-Sell
  [4, [1, 5]], // HNW → Permanent Life, Estate Liquidity
];

const LEFT_POSITIONS = [0.12, 0.28, 0.44, 0.6, 0.76];
const RIGHT_POSITIONS = [0.1, 0.22, 0.34, 0.46, 0.58, 0.74];

function ConnectorLines({
  hoveredLeftIndex,
  compact = false,
}: {
  hoveredLeftIndex: number | null;
  compact?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 100"
      className={`absolute left-1/2 top-0 h-full -translate-x-1/2 pointer-events-none hidden md:block ${compact ? "w-10" : "w-16"}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      {connections.map(([leftIdx, rightIndices]) =>
        rightIndices.map((rightIdx) => {
          const x1 = 8;
          const x2 = 56;
          const y1 = LEFT_POSITIONS[leftIdx] * 100;
          const y2 = RIGHT_POSITIONS[rightIdx] * 100;
          const midX = 32;
          const isHighlighted = hoveredLeftIndex === leftIdx;
          return (
            <path
              key={`${leftIdx}-${rightIdx}`}
              d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={isHighlighted ? 0.7 : 0.4}
              strokeDasharray="1.5 1.5"
              className={`text-border transition-[stroke,opacity] duration-200 ${isHighlighted ? "opacity-100" : "opacity-60"}`}
            />
          );
        })
      )}
    </svg>
  );
}

type InsuranceMapVariant = "default" | "compact";

export function InsuranceMap({ variant = "default" }: { variant?: InsuranceMapVariant }) {
  const [hoveredLeftIndex, setHoveredLeftIndex] = useState<number | null>(null);
  const isCompact = variant === "compact";

  return (
    <section
      className={
        isCompact
          ? "mt-8"
          : "border-t border-border bg-surface-2 py-16 md:py-24"
      }
      aria-labelledby="insurance-map-title"
    >
      <div
        className={
          isCompact ? "max-w-full" : "mx-auto max-w-5xl px-6"
        }
      >
        <h2
          id="insurance-map-title"
          className={
            isCompact
              ? "text-lg font-semibold tracking-tight text-foreground"
              : "text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
          }
        >
          Coverage, coordinated for different life situations
        </h2>
        <p
          className={
            isCompact
              ? "mt-1 text-xs text-muted-foreground"
              : "mt-2 text-sm text-muted-foreground max-w-2xl"
          }
        >
          We help coordinate the right protection through licensed professionals,
          based on your role and responsibilities.
        </p>

        {/* Diagram: two columns on desktop, stacked on mobile */}
        <div
          className={
            isCompact
              ? "relative mt-4 flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0"
              : "relative mt-10 flex flex-col gap-12 md:flex-row md:items-stretch md:gap-0"
          }
        >
          {/* Left column: Who you are */}
          <div
            className={
              isCompact
                ? "flex flex-1 flex-col gap-1.5 md:pr-6"
                : "flex flex-1 flex-col gap-3 md:pr-8"
            }
          >
            <p
              className={
                isCompact
                  ? "text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-0.5"
                  : "text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1"
              }
            >
              Who you are
            </p>
            {whoYouAre.map((item, i) => (
              <motion.div
                key={item.label}
                initial={isCompact ? undefined : { opacity: 0, y: 8 }}
                whileInView={isCompact ? undefined : { opacity: 1, y: 0 }}
                viewport={isCompact ? undefined : { once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onMouseEnter={() => setHoveredLeftIndex(i)}
                onMouseLeave={() => setHoveredLeftIndex(null)}
                className={
                  isCompact
                    ? "rounded-lg border border-border/70 bg-surface/50 px-2.5 py-2"
                    : "rounded-xl border border-border bg-surface px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
                }
              >
                <div className={`flex items-start gap-2 ${isCompact ? "gap-2" : "gap-3"}`}>
                  <item.icon
                    className={
                      isCompact
                        ? "h-3.5 w-3.5 shrink-0 text-muted-foreground mt-0.5"
                        : "h-5 w-5 shrink-0 text-muted-foreground mt-0.5"
                    }
                    strokeWidth={1.5}
                  />
                  <div className="min-w-0">
                    <p
                      className={
                        isCompact
                          ? "text-xs font-medium text-foreground leading-tight"
                          : "text-sm font-medium text-foreground"
                      }
                    >
                      {item.label}
                    </p>
                    <p
                      className={
                        isCompact
                          ? "mt-0.5 text-[10px] text-muted-foreground leading-tight"
                          : "mt-0.5 text-xs text-muted-foreground"
                      }
                    >
                      {item.subtext}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connector lines (desktop only) */}
          <ConnectorLines hoveredLeftIndex={hoveredLeftIndex} compact={isCompact} />

          {/* Right column: Coverage coordinated */}
          <div
            className={
              isCompact
                ? "flex flex-1 flex-col gap-1.5 md:pl-6"
                : "flex flex-1 flex-col gap-3 md:pl-8"
            }
          >
            <p
              className={
                isCompact
                  ? "text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-0.5 md:text-right"
                  : "text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1 md:text-right"
              }
            >
              Coverage coordinated
            </p>
            {coverageCoordinated.map((item, i) => (
              <motion.div
                key={item.label}
                initial={isCompact ? undefined : { opacity: 0, y: 8 }}
                whileInView={isCompact ? undefined : { opacity: 1, y: 0 }}
                viewport={isCompact ? undefined : { once: true }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                className={
                  isCompact
                    ? "rounded-lg border border-border/70 bg-surface/50 px-2.5 py-2 md:text-right"
                    : "rounded-xl border border-border bg-surface px-4 py-3 shadow-sm md:text-right"
                }
              >
                <div className={`flex items-start gap-2 md:flex-row-reverse ${isCompact ? "gap-2" : "gap-3"}`}>
                  <item.icon
                    className={
                      isCompact
                        ? "h-3.5 w-3.5 shrink-0 text-muted-foreground mt-0.5"
                        : "h-5 w-5 shrink-0 text-muted-foreground mt-0.5 md:mt-0.5"
                    }
                    strokeWidth={1.5}
                  />
                  <div className="min-w-0 flex-1 md:text-right">
                    <p
                      className={
                        isCompact
                          ? "text-xs font-medium text-foreground leading-tight"
                          : "text-sm font-medium text-foreground"
                      }
                    >
                      {item.label}
                    </p>
                    <p
                      className={
                        isCompact
                          ? "mt-0.5 text-[10px] text-muted-foreground leading-tight"
                          : "mt-0.5 text-xs text-muted-foreground"
                      }
                    >
                      {item.subtext}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p
          className={
            isCompact
              ? "mt-4 text-[10px] text-muted-foreground"
              : "mt-10 text-xs text-muted-foreground max-w-2xl"
          }
        >
          Coverage is coordinated through properly licensed professionals. Stead
          does not sell or issue insurance policies.
        </p>
      </div>
    </section>
  );
}
