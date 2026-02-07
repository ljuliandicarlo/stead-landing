import { createClient } from "@/lib/supabase/server";
import { DocumentsClient } from "@/components/app/documents-client";
import { UploadDocumentForm } from "@/components/app/upload-document-form";

export const metadata = {
  title: "Documents — Life Vault",
  description: "Your Life Vault documents.",
};

const CATEGORIES = [
  "identity",
  "legal",
  "insurance",
  "financial",
  "property",
  "medical",
] as const;

export default async function DocumentsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: documents } = await supabase
    .from("vault_documents")
    .select("id, name, category, created_at, expires_at, file_size, storage_path")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Documents
          </h1>
          <p className="mt-2 text-muted-foreground">
            Upload and organize your life-critical documents.
          </p>
        </div>
        <UploadDocumentForm categories={CATEGORIES} userId={user.id} />
      </div>

      <DocumentsClient
        documents={documents ?? []}
        categories={CATEGORIES}
        userId={user.id}
      />
    </div>
  );
}
