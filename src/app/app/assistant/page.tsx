import { AssistantClient } from "@/components/app/assistant-client";

export const metadata = {
  title: "Assistant — Life Vault",
  description: "Ask questions about your documents.",
};

export default function AssistantPage() {
  const hasOpenAI = !!process.env.OPENAI_API_KEY;
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        Assistant
      </h1>
      <p className="mt-2 text-muted-foreground">
        Ask questions about your Life Vault documents. Answers are based only on
        your uploaded documents.
      </p>
      <AssistantClient hasOpenAI={hasOpenAI} />
    </div>
  );
}
