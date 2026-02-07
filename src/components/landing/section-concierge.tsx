"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const outcomes = [
  "Coverage and document audit",
  "Execution readiness plan",
  "Introductions to vetted professionals",
];

export function SectionConcierge() {
  return (
    <section
      id="concierge"
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
          Private review and coordination
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          Continuity Blueprint for complex lives. Limited availability.
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
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button variant="secondary" size="lg" asChild>
            <Link href="/request-review">Request a private review</Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/partners">Partner with us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
