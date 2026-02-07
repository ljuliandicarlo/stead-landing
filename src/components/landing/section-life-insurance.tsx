"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CAL_URL = "https://cal.com/juliandicarlo";

const outcomes = [
  "Get the right amount of coverage",
  "Structure ownership and beneficiaries correctly",
  "Avoid gaps and lapses",
  "Coordinate with advisors",
];

const coverageTypes = [
  "Term life",
  "Permanent life",
  "Key person",
  "Buy-sell funding",
  "Income protection coordination",
];

export function SectionLifeInsurance() {
  return (
    <section
      id="life-insurance"
      className="scroll-mt-24 border-t border-border bg-muted/20 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 text-left">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        >
          Life insurance coordination
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          We connect you with licensed professionals who can help you request
          the right coverage—not sell you a policy. Outcomes we care about:
        </motion.p>
        <ul className="mt-8 space-y-4">
          {outcomes.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="flex items-center gap-3 text-foreground"
            >
              <Check className="h-5 w-5 shrink-0 text-foreground" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Coverage types we can help coordinate (non-exhaustive):{" "}
          {coverageTypes.join(", ")}.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button size="lg" asChild>
            <Link href="/request-insurance">Get Insurance</Link>
          </Button>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Book call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
