import { createClient } from "@/lib/supabase/server";
import { AlertCircle, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Overview — Life Vault",
  description: "Your Life Vault readiness and summary.",
};

export default async function OverviewPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: documents } = await supabase
    .from("vault_documents")
    .select("id, name, category, expires_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(20);

  const now = new Date();
  const in90Days = new Date(now);
  in90Days.setDate(in90Days.getDate() + 90);
  const expiringSoon =
    documents?.filter((d) => {
      if (!d.expires_at) return false;
      const exp = new Date(d.expires_at);
      return exp >= now && exp <= in90Days;
    }) ?? [];
  const expired =
    documents?.filter((d) => d.expires_at && new Date(d.expires_at) < now) ?? [];

  const total = documents?.length ?? 0;
  const needAttention = expiringSoon.length + expired.length;
  const score = total === 0 ? 0 : Math.max(0, 100 - needAttention * 10);

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        Overview
      </h1>
      <p className="mt-2 text-muted-foreground">
        Your Life Vault at a glance. Your documents are stored securely; you control access.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Readiness score
          </h2>
          <p className="mt-4 text-4xl font-light tabular-nums text-foreground">
            {score}
            <span className="text-lg text-muted-foreground"> / 100</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {needAttention > 0
              ? `${needAttention} item${needAttention === 1 ? "" : "s"} need attention`
              : "All clear"}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Documents
          </h2>
          <p className="mt-4 text-4xl font-light tabular-nums text-foreground">
            {total}
          </p>
          <Button variant="secondary" size="sm" className="mt-4" asChild>
            <Link href="/app/documents">View all</Link>
          </Button>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Alerts
          </h2>
          <p className="mt-4 text-2xl font-light tabular-nums text-foreground">
            {expiringSoon.length + expired.length}
          </p>
          <Button variant="secondary" size="sm" className="mt-4" asChild>
            <Link href="/app/alerts">View alerts</Link>
          </Button>
        </div>
      </div>

      {(expiringSoon.length > 0 || expired.length > 0) && (
        <div className="mt-10">
          <h2 className="text-lg font-medium text-foreground">
            Items needing attention
          </h2>
          <ul className="mt-4 space-y-3">
            {expired.map((d) => (
              <li
                key={d.id}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3"
              >
                <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {d.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Expired
                    {d.expires_at &&
                      ` ${new Date(d.expires_at).toLocaleDateString()}`}
                  </p>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/app/documents?doc=${d.id}`}>View</Link>
                </Button>
              </li>
            ))}
            {expiringSoon.map((d) => (
              <li
                key={d.id}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3"
              >
                <AlertCircle className="h-4 w-4 shrink-0 text-amber-500" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {d.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Expires {d.expires_at && new Date(d.expires_at).toLocaleDateString()}
                  </p>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/app/documents?doc=${d.id}`}>View</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {total === 0 && (
        <div className="mt-10 rounded-xl border border-border bg-surface-2 p-10 text-center">
          <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="mt-4 font-medium text-foreground">
            No documents yet
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Upload your first document to get started.
          </p>
          <Button className="mt-6" asChild>
            <Link href="/app/documents">Go to Documents</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
