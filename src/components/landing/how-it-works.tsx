"use client";

import { motion } from "framer-motion";

const steps = [
  "Share your situation and what you need",
  "We coordinate with licensed professionals when there is a clear fit",
  "Your policies and documents stay organized in one place",
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-t border-border bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 text-left">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        >
          How it works
        </motion.h2>
        <ol className="mt-10 space-y-8">
          {steps.map((step, i) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="flex gap-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-sm font-medium text-foreground">
                {i + 1}
              </span>
              <span className="text-lg text-muted-foreground">{step}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
