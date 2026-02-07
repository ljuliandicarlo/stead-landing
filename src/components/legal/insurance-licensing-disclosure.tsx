import {
  INSURANCE_LICENSING_DISCLOSURE_HEADING,
  INSURANCE_LICENSING_DISCLOSURE_PARAGRAPHS,
} from "@/lib/compliance";
import { cn } from "@/lib/utils";

/**
 * Renders the canonical Insurance & Licensing Disclosure (verbatim text).
 * Used in footer collapsible and on insurance-related pages. Do not modify wording.
 */
export function InsuranceLicensingDisclosure({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-2 text-xs text-muted-foreground",
        className
      )}
      {...props}
    >
      <p>{INSURANCE_LICENSING_DISCLOSURE_HEADING}</p>
      {INSURANCE_LICENSING_DISCLOSURE_PARAGRAPHS.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  );
}
