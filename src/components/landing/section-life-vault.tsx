"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, Search, Bell, Share2, FileArchive, MessageSquare } from "lucide-react";

const features = [
  { icon: Shield, text: "Categories: Identity, Legal, Insurance, Financial, Property, Medical" },
  { icon: Shield, text: "Secure uploads" },
  { icon: Search, text: "Smart search" },
  { icon: Bell, text: "Expiration alerts" },
  { icon: Check, text: "Missing document detection" },
  { icon: Share2, text: "Controlled sharing (role-based, time-limited)" },
  { icon: FileArchive, text: "Emergency export pack" },
  { icon: MessageSquare, text: "Answers from your stored documents only" },
];

export function SectionLifeVault() {
  return (
    <section
      id="life-vault"
      className="scroll-mt-24 border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 text-left">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        >
          Life Vault
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          A secure place to store and organize life-critical documents. Know
          what’s missing, what’s expiring, and who has access.
        </motion.p>
        <ul className="mt-10 space-y-4">
          {features.map((item, i) => (
            <motion.li
              key={item.text}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.04 }}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
              <span>{item.text}</span>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-10"
        >
          <Button size="lg" asChild>
            <Link href="/signin?redirect=/app">Create your Life Vault</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
