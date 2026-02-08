"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitPartnerLead } from "@/app/partners/actions";

const ROLES = [
  "Estate attorney",
  "Accountant / CPA",
  "Tax advisor",
  "Insurance professional",
  "Trust / fiduciary",
  "Notary",
  "Other",
] as const;

const EXPERIENCE_RANGES = [
  "1–5 years",
  "5–10 years",
  "10–20 years",
  "20+ years",
];

export function PartnerLeadForm() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [role, setRole] = useState("");
  const [experienceRange, setExperienceRange] = useState("");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError(null);
    if (!role?.trim()) {
      setError("Please select your professional role.");
      return;
    }
    if (!consent) {
      setError("You must consent to be contacted.");
      return;
    }
    setPending(true);
    try {
      const result = await submitPartnerLead(formData);
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
          className="rounded-xl border border-border bg-surface-2 p-10 text-center"
        >
          <p className="text-lg font-medium text-foreground">
            Thank you for your interest. We review partner inquiries on a rolling basis and will reach out if there is a fit.
          </p>
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
      className="mt-12 space-y-6"
    >
      {error && (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200">
          {error}
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
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
            placeholder="jane@firm.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
      </div>

      <input type="hidden" name="role" value={role} />
      <div className="space-y-2">
        <Label htmlFor="role">Professional role *</Label>
        <Select value={role} onValueChange={setRole} required>
          <SelectTrigger id="role">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            {ROLES.map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="firm">Firm / organization</Label>
        <Input id="firm" name="firm" placeholder="Firm name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="jurisdiction">Primary jurisdiction (state / country)</Label>
        <Input id="jurisdiction" name="jurisdiction" placeholder="e.g. California, USA" />
      </div>

      <input type="hidden" name="experience_range" value={experienceRange} />
      <div className="space-y-2">
        <Label htmlFor="experience_range">Years of experience</Label>
        <Select value={experienceRange} onValueChange={setExperienceRange}>
          <SelectTrigger id="experience_range">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            {EXPERIENCE_RANGES.map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="licenses">Licenses held</Label>
        <Input id="licenses" name="licenses" placeholder="e.g. Bar, CPA, Series 7" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="current_workflow">How do you currently work with clients?</Label>
        <Textarea
          id="current_workflow"
          name="current_workflow"
          rows={3}
          placeholder="Brief description"
          className="resize-none"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest_reason">Why are you interested in partnering with Stead?</Label>
        <Textarea
          id="interest_reason"
          name="interest_reason"
          rows={3}
          placeholder="Brief description"
          className="resize-none"
        />
      </div>

      {consent && <input type="hidden" name="consent" value="on" />}
      <div className="rounded-lg border border-border bg-surface-2 p-4">
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
            I consent to be contacted by Stead regarding this partner inquiry. *
          </Label>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={pending}>
        {pending ? "Submitting…" : "Submit"}
      </Button>
    </motion.form>
  );
}
