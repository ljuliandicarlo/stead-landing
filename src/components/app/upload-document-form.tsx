"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { uploadDocument } from "@/app/app/documents/actions";
import type { VaultCategory } from "@/types/database";

const CATEGORY_LABELS: Record<VaultCategory, string> = {
  identity: "Identity",
  legal: "Legal",
  insurance: "Insurance",
  financial: "Financial",
  property: "Property",
  medical: "Medical",
};

export function UploadDocumentForm({
  categories,
  userId,
}: {
  categories: readonly VaultCategory[];
  userId: string;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [category, setCategory] = useState<VaultCategory>("legal");
  const [file, setFile] = useState<File | null>(null);
  const [expiresAt, setExpiresAt] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!file) return;
    setPending(true);
    try {
      const formData = new FormData();
      formData.set("file", file);
      formData.set("category", category);
      formData.set("userId", userId);
      if (expiresAt) formData.set("expires_at", expiresAt);
      const result = await uploadDocument(formData);
      if (result?.error) {
        setPending(false);
        return;
      }
      setFile(null);
      setExpiresAt("");
      router.refresh();
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-end gap-4">
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select value={category} onValueChange={(v) => setCategory(v as VaultCategory)}>
          <SelectTrigger id="category" className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((c) => (
              <SelectItem key={c} value={c}>
                {CATEGORY_LABELS[c]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input
          id="file"
          type="file"
          accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          required
          className="w-full min-w-[180px]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="expires_at">Expires (optional)</Label>
        <Input
          id="expires_at"
          type="date"
          value={expiresAt}
          onChange={(e) => setExpiresAt(e.target.value)}
          className="w-[160px]"
        />
      </div>
      <Button type="submit" disabled={pending || !file}>
        {pending ? "Uploading…" : "Upload"}
      </Button>
    </form>
  );
}
