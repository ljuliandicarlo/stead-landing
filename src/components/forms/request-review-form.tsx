"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { submitReviewLead } from "@/app/request-review/actions";

export function RequestReviewForm() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError(null);
    setPending(true);
    try {
      const result = await submitReviewLead(formData);
      if (result?.error) {
        setError(result.error);
        setPending(false);
        return;
      }
      setSuccess(true);
      setPending(false);
    } catch {
      setError("Something went wrong. Please try again.");
      setPending(false);
    }
  }

  if (success) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-8 rounded-xl border border-border bg-muted/30 p-10 text-center"
        >
          <p className="text-lg font-medium text-foreground">
            We review requests and respond when there is a clear fit.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Thank you. We will be in touch only if we can help.
          </p>
          <Button variant="secondary" className="mt-8" asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.form
      key="form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      action={handleSubmit}
      className="mt-8 space-y-6"
    >
      {error && (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200">
          {error}
        </p>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Full name *</Label>
        <Input id="name" name="name" required placeholder="Jane Smith" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          placeholder="City, State / Country"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="context">Context (optional)</Label>
        <Textarea
          id="context"
          name="context"
          rows={4}
          placeholder="Brief description of your situation and what you're looking for"
        />
      </div>

      {consent && <input type="hidden" name="consent" value="on" />}
      <div className="rounded-lg border border-border bg-muted/30 p-4">
        <div className="flex items-start gap-3">
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(v) => setConsent(v === true)}
            required
          />
          <Label
            htmlFor="consent"
            className="cursor-pointer text-sm leading-relaxed text-foreground"
          >
            I consent to be contacted by Stead regarding this request. *
          </Label>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? "Submitting…" : "Submit request"}
      </Button>
    </motion.form>
  );
}
