"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";

export function AssistantClient({ hasOpenAI }: { hasOpenAI: boolean }) {
  const [query, setQuery] = useState("");

  if (!hasOpenAI) {
    return (
      <div className="mt-10 rounded-xl border border-border bg-muted/30 p-12 text-center">
        <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground" />
        <p className="mt-4 font-medium text-foreground">
          Assistant coming soon
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Document Q&A will be available when configured. Your documents are
          stored securely in the meantime.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 rounded-xl border border-border bg-muted/30 p-8">
      <p className="text-sm text-muted-foreground">
        Document assistant is available. Ask a question about your documents
        below. (Full implementation: wire to OpenAI with document context.)
      </p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask about your documents…"
        className="mt-4 w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
