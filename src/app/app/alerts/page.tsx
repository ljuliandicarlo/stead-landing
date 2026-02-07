import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export const metadata = {
  title: "Alerts — Life Vault",
  description: "Document expiration and missing-item alerts.",
};

export default async function AlertsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: documents } = await supabase
    .from("vault_documents")
    .select("id, name, category, expires_at")
    .eq("user_id", user.id)
    .not("expires_at", "is", null)
    .order("expires_at", { ascending: true });

  const now = new Date();
  const in90Days = new Date(now);
  in90Days.setDate(in90Days.getDate() + 90);

  const expired =
    documents?.filter((d) => d.expires_at && new Date(d.expires_at) < now) ?? [];
  const expiringSoon =
    documents?.filter((d) => {
      if (!d.expires_at) return false;
      const exp = new Date(d.expires_at);
      return exp >= now && exp <= in90Days;
    }) ?? [];

  const hasAlerts = expired.length > 0 || expiringSoon.length > 0;

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        Alerts
      </h1>
      <p className="mt-2 text-muted-foreground">
        Documents expiring in the next 90 days or already expired.
      </p>

      {!hasAlerts && (
        <div className="mt-10 rounded-xl border border-border bg-muted/30 p-12 text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="mt-4 font-medium text-foreground">No alerts</p>
          <p className="mt-2 text-sm text-muted-foreground">
            No documents are expiring in the next 90 days.
          </p>
        </div>
      )}

      {hasAlerts && (
        <ul className="mt-10 space-y-4">
          {expired.map((d) => (
            <li
              key={d.id}
              className="flex items-center justify-between rounded-lg border border-red-200 bg-red-50/50 px-4 py-4 dark:border-red-900 dark:bg-red-950/20"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                <div>
                  <p className="font-medium text-foreground">{d.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Expired {d.expires_at && new Date(d.expires_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <Link
                href={`/app/documents?doc=${d.id}`}
                className="text-sm font-medium text-foreground underline"
              >
                View
              </Link>
            </li>
          ))}
          {expiringSoon.map((d) => (
            <li
              key={d.id}
              className="flex items-center justify-between rounded-lg border border-border bg-muted/30 px-4 py-4"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 shrink-0 text-amber-500" />
                <div>
                  <p className="font-medium text-foreground">{d.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Expires {d.expires_at && new Date(d.expires_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <Link
                href={`/app/documents?doc=${d.id}`}
                className="text-sm font-medium text-foreground underline"
              >
                View
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
