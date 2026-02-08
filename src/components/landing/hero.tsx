"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CAL_URL = "https://cal.com/juliandicarlo";

export function Hero() {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-x-hidden">
      <div className="mx-auto max-w-3xl px-4 text-left sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          Life insurance, done right.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground md:text-xl"
        >
          Get the right coverage, structured correctly, and keep everything
          organized for when it actually matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <Button size="lg" asChild>
            <Link href="/request-insurance">Get Insurance</Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          Coordinated through properly licensed professionals. Private by
          default.
        </motion.p>
      </div>
    </section>
  );
}
