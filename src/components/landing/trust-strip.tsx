"use client";

import { motion } from "framer-motion";

const items = [
  "Right coverage and structure",
  "Ownership and beneficiary coordination",
  "Ongoing review and continuity",
];

export function TrustStrip() {
  return (
    <section className="border-t border-border bg-surface-2 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <ul className="grid gap-8 text-center md:grid-cols-3 md:gap-12">
          {items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-sm font-medium text-foreground md:text-base"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
