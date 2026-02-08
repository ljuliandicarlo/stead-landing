import Link from "next/link";

const links = [
  { href: "/life-insurance", label: "Explore Insurance" },
  { href: "/life-vault", label: "Life Vault" },
  { href: "/concierge", label: "Concierge" },
  { href: "/partners", label: "Partners" },
  { href: "/professionals", label: "Professionals" },
];

export function RelatedLinks({ currentPath }: { currentPath?: string }) {
  const filtered = links.filter((l) => l.href !== currentPath);
  if (filtered.length === 0) return null;

  return (
    <nav
      className="mt-16 border-t border-border pt-10"
      aria-label="Related pages"
    >
      <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
        Related
      </h2>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {filtered.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-foreground underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
