import { createClient } from "@/lib/supabase/server";
import { SignOutButton } from "@/components/app/sign-out-button";

export const metadata = {
  title: "Settings — Life Vault",
  description: "Account and app settings.",
};

export default async function SettingsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        Settings
      </h1>
      <p className="mt-2 text-muted-foreground">
        Account and Life Vault preferences.
      </p>

      <div className="mt-10 rounded-xl border border-border bg-muted/30 p-6">
        <h2 className="text-sm font-medium text-foreground">Account</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {user.email}
        </p>
        <SignOutButton className="mt-4" />
      </div>
    </div>
  );
}
