"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteDocument, getSignedDownloadUrl } from "@/app/app/documents/actions";
import type { VaultCategory } from "@/types/database";

const CATEGORY_LABELS: Record<VaultCategory, string> = {
  identity: "Identity",
  legal: "Legal",
  insurance: "Insurance",
  financial: "Financial",
  property: "Property",
  medical: "Medical",
};

type Doc = {
  id: string;
  name: string;
  category: VaultCategory;
  created_at: string;
  expires_at: string | null;
  file_size: number | null;
  storage_path?: string;
};

export function DocumentsClient({
  documents,
  categories,
  userId,
}: {
  documents: Doc[];
  categories: readonly VaultCategory[];
  userId: string;
}) {
  const searchParams = useSearchParams();
  const openId = searchParams.get("doc");
  const [drawerDoc, setDrawerDoc] = useState<Doc | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const doc = openId
    ? documents.find((d) => d.id === openId) || null
    : null;

  useEffect(() => {
    if (doc) {
      setDrawerDoc(doc);
      const path = (doc as Doc & { storage_path?: string }).storage_path;
      if (path) {
        getSignedDownloadUrl(path).then((r) => {
          if (r?.url) setDownloadUrl(r.url);
        });
      }
    } else {
      setDrawerDoc(null);
      setDownloadUrl(null);
    }
  }, [doc]);

  const closeDrawer = useCallback(() => {
    setDrawerDoc(null);
    setDownloadUrl(null);
    window.history.replaceState({}, "", "/app/documents");
  }, []);

  async function handleDelete(id: string) {
    setDeleting(true);
    await deleteDocument(id);
    setDeleting(false);
    closeDrawer();
    window.location.reload();
  }

  if (documents.length === 0) {
    return (
      <div className="mt-12 rounded-xl border border-border bg-surface-2 p-12 text-center">
        <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
        <p className="mt-4 font-medium text-foreground">No documents yet</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Upload your first document above.
        </p>
      </div>
    );
  }

  return (
    <>
      <ul className="mt-10 space-y-2">
        {documents.map((d) => (
          <li key={d.id}>
            <Link
              href={`/app/documents?doc=${d.id}`}
              className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:bg-muted/50"
            >
              <div className="flex min-w-0 items-center gap-3">
                <FileText className="h-4 w-4 shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    {d.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {CATEGORY_LABELS[d.category]}
                    {d.expires_at &&
                      ` · Expires ${new Date(d.expires_at).toLocaleDateString()}`}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {drawerDoc && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-foreground/20"
              onClick={closeDrawer}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-border bg-background shadow-xl"
            >
              <div className="flex h-14 items-center justify-between border-b border-border px-4">
                <h2 className="truncate text-sm font-medium text-foreground">
                  {drawerDoc.name}
                </h2>
                <Button variant="ghost" size="icon" onClick={closeDrawer}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Category: {CATEGORY_LABELS[drawerDoc.category]}
                </p>
                {drawerDoc.expires_at && (
                  <p className="text-sm text-muted-foreground">
                    Expires: {new Date(drawerDoc.expires_at).toLocaleDateString()}
                  </p>
                )}
                <div className="flex gap-2">
                  {downloadUrl && (
                    <Button variant="secondary" size="sm" asChild>
                      <a href={downloadUrl} download target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30"
                    disabled={deleting}
                    onClick={() => handleDelete(drawerDoc.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
