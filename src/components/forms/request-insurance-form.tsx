"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { submitInsuranceLead } from "@/app/request-insurance/actions";

const COVERAGE_OPTIONS = [
  "Term life",
  "Permanent life",
  "Key person",
  "Buy-sell funding",
  "Review existing coverage",
  "Other",
];

const TIMELINE_OPTIONS = ["ASAP", "30 days", "90 days", "6+ months"];

const INCOME_OPTIONS = [
  "Under $100k",
  "$100k – $250k",
  "$250k – $500k",
  "$500k – $1M",
  "$1M+",
  "Prefer not to say",
];

const NET_WORTH_OPTIONS = [
  "Under $250k",
  "$250k – $1M",
  "$1M – $5M",
  "$5M – $10M",
  "$10M+",
  "Prefer not to say",
];

const FAMILY_OPTIONS = [
  "Single",
  "Partnered",
  "Married",
  "Married with kids",
  "Other",
];

const EXISTING_OPTIONS = ["Yes", "No", "Unsure"];

export function RequestInsuranceForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [coverageInterest, setCoverageInterest] = useState("");
  const [timeline, setTimeline] = useState("");
  const [incomeRange, setIncomeRange] = useState("");
  const [netWorthRange, setNetWorthRange] = useState("");
  const [familyStatus, setFamilyStatus] = useState("");
  const [existingCoverage, setExistingCoverage] = useState("");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError(null);
    if (!coverageInterest?.trim()) {
      setError("Please select what you want help with.");
      return;
    }
    if (!consent) {
      setError("You must consent to be contacted.");
      return;
    }
    setPending(true);
    try {
      const result = await submitInsuranceLead(formData);
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
            We review requests and respond when there is a clear fit.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            You will hear from us only if we can help. Thank you.
          </p>
          <Button
            variant="secondary"
            className="mt-8"
            onClick={() => router.push("/")}
          >
            Back to home
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

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2 sm:col-span-1">
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" placeholder="San Francisco" />
        </div>
        <div className="space-y-2 sm:col-span-1">
          <Label htmlFor="state">State / Province</Label>
          <Input id="state" name="state" placeholder="CA" />
        </div>
        <div className="space-y-2 sm:col-span-1">
          <Label htmlFor="country">Country</Label>
          <Input id="country" name="country" placeholder="United States" />
        </div>
      </div>

      <input type="hidden" name="coverage_interest" value={coverageInterest} />
      <div className="space-y-2">
        <Label htmlFor="coverage_interest">What do you want help with? *</Label>
        <Select
          name="coverage_interest"
          value={coverageInterest}
          onValueChange={setCoverageInterest}
          required
        >
          <SelectTrigger id="coverage_interest">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            {COVERAGE_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <input type="hidden" name="timeline" value={timeline} />
      <div className="space-y-2">
        <Label htmlFor="timeline">Timeline</Label>
        <Select value={timeline} onValueChange={setTimeline}>
          <SelectTrigger id="timeline">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            {TIMELINE_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="occupation">Occupation</Label>
        <Input id="occupation" name="occupation" placeholder="e.g. Executive" />
      </div>

      <input type="hidden" name="income_range" value={incomeRange} />
      <div className="space-y-2">
        <Label htmlFor="income_range">Income range</Label>
        <Select value={incomeRange} onValueChange={setIncomeRange}>
          <SelectTrigger id="income_range">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            {INCOME_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <input type="hidden" name="net_worth_range" value={netWorthRange} />
      <div className="space-y-2">
        <Label htmlFor="net_worth_range">Net worth range</Label>
        <Select value={netWorthRange} onValueChange={setNetWorthRange}>
          <SelectTrigger id="net_worth_range">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            {NET_WORTH_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <input type="hidden" name="family_status" value={familyStatus} />
      <div className="space-y-2">
        <Label htmlFor="family_status">Family status</Label>
        <Select value={familyStatus} onValueChange={setFamilyStatus}>
          <SelectTrigger id="family_status">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            {FAMILY_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <input type="hidden" name="existing_coverage" value={existingCoverage} />
      <div className="space-y-2">
        <Label htmlFor="existing_coverage">Existing coverage?</Label>
        <Select value={existingCoverage} onValueChange={setExistingCoverage}>
          <SelectTrigger id="existing_coverage">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            {EXISTING_OPTIONS.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Anything else you'd like us to know (optional)"
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
            I understand that Stead does not sell or issue insurance. I am
            requesting a consultation and consent to be contacted by Stead or
            its partners regarding this request. *
          </Label>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? "Submitting…" : "Submit request"}
      </Button>
    </motion.form>
  );
}
