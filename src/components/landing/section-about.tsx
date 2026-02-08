"use client";

import { motion } from "framer-motion";

export function SectionAbout() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border bg-surface-2 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 text-left">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        >
          About Stead
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          Stead coordinates life insurance and organizes life-critical
          documents. We help you request the right coverage, work with licensed
          professionals, and keep documents in one place. We do not sell or
          issue insurance.
        </motion.p>
      </div>
    </section>
  );
}
