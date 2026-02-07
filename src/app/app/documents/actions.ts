"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import type { VaultCategory } from "@/types/database";

export async function uploadDocument(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Unauthorized" };

  const file = formData.get("file") as File | null;
  const category = formData.get("category") as VaultCategory | null;
  const userId = formData.get("userId") as string | null;
  const expiresAtStr = formData.get("expires_at") as string | null;

  if (!file || !category || userId !== user.id) {
    return { error: "Invalid input" };
  }

  const ext = file.name.split(".").pop() ?? "bin";
  const path = `${user.id}/${crypto.randomUUID()}.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from("vault")
    .upload(path, file, { upsert: false });

  if (uploadError) {
    console.error("Storage upload error:", uploadError);
    return { error: "Upload failed" };
  }

  const { error: insertError } = await supabase.from("vault_documents").insert({
    user_id: user.id,
    name: file.name,
    category,
    storage_path: path,
    file_size: file.size,
    expires_at: expiresAtStr || null,
  });

  if (insertError) {
    console.error("Document insert error:", insertError);
    return { error: "Failed to save document" };
  }

  revalidatePath("/app/documents");
  revalidatePath("/app/overview");
  revalidatePath("/app/alerts");
  return { success: true };
}

export async function deleteDocument(id: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Unauthorized" };

  const { data: doc, error: fetchError } = await supabase
    .from("vault_documents")
    .select("storage_path, user_id")
    .eq("id", id)
    .single();

  if (fetchError || !doc || doc.user_id !== user.id) {
    return { error: "Not found" };
  }

  await supabase.storage.from("vault").remove([doc.storage_path]);
  const { error: deleteError } = await supabase
    .from("vault_documents")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (deleteError) {
    return { error: "Failed to delete" };
  }

  revalidatePath("/app/documents");
  revalidatePath("/app/overview");
  revalidatePath("/app/alerts");
  return { success: true };
}

export async function getSignedDownloadUrl(storagePath: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Unauthorized" };

  if (!storagePath.startsWith(`${user.id}/`)) {
    return { error: "Forbidden" };
  }

  const { data, error } = await supabase.storage
    .from("vault")
    .createSignedUrl(storagePath, 60);

  if (error) return { error: error.message };
  return { url: data.signedUrl };
}
