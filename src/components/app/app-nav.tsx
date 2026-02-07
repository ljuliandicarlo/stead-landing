"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Bell,
  Settings,
} from "lucide-react";

const links = [
  { href: "/app/overview", label: "Overview", icon: LayoutDashboard },
  { href: "/app/documents", label: "Documents", icon: FileText },
  { href: "/app/assistant", label: "Assistant", icon: MessageSquare },
  { href: "/app/alerts", label: "Alerts", icon: Bell },
  { href: "/app/settings", label: "Settings", icon: Settings },
];

export function AppNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row gap-2 p-4 md:flex-col md:gap-0 md:p-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors md:py-2",
            pathname === link.href
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
          )}
        >
          <link.icon className="h-4 w-4 shrink-0" />
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
