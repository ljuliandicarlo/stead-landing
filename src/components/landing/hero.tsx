"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductVisual } from "./product-visual";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-3xl px-6 text-left">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          Life insurance and life organization, in one place.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground md:text-xl"
        >
          Stead helps you request the right coverage, organize life-critical
          documents, and coordinate execution with trusted professionals.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          Private by default. You control access. Built for long-term.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button size="lg" asChild>
            <Link href="/request-insurance">Get Insurance</Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/signin?redirect=/app">Create your Life Vault</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-20 max-w-6xl px-6"
      >
        <ProductVisual />
      </motion.div>
    </section>
  );
}
