"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CAL_URL = "https://cal.com/juliandicarlo";

const navLinks = [
  { href: "/life-insurance", label: "Explore Insurance" },
  { href: "/life-vault", label: "Life Vault" },
  { href: "/concierge", label: "Concierge" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 overflow-x-hidden border-b border-border bg-surface/95 backdrop-blur-md shadow-sm"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/stead-logo.png"
            alt="Stead"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg object-contain"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Stead
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm text-muted-foreground transition-colors hover:text-primary",
                pathname === link.href && "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex min-w-0 shrink items-center gap-2 sm:gap-4">
          <Link
            href="/signin?redirect=/app"
            className="shrink-0 text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Sign in
          </Link>
          <Button variant="secondary" size="sm" className="shrink-0 text-xs sm:text-sm" asChild>
            <Link href="/request-review">
              <span className="sm:hidden">Review</span>
              <span className="hidden sm:inline">Request private review</span>
            </Link>
          </Button>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 whitespace-nowrap text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
            aria-label="Book a call"
          >
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">Book a call</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
