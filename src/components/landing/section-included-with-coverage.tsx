"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductVisual } from "./product-visual";

export function SectionIncludedWithCoverage() {
  return (
    <section
      id="included"
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
          Included with your coverage
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          Every client gets a private Life Vault for policies, documents, and
          access. Nothing gets lost. Nothing expires unnoticed.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-12 max-w-6xl px-6"
      >
        <ProductVisual />
      </motion.div>

      <div className="mx-auto mt-12 max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center"
        >
          <Button size="lg" className="min-w-[200px] text-base shadow-md hover:shadow-lg" asChild>
            <Link href="/life-vault">Create Life Vault</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
