import type { Metadata, Viewport } from "next";
import { SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@/lib/seo";
import { DefaultStructuredData } from "@/components/seo/default-structured-data";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${DEFAULT_TITLE.split(" — ")[0]}`,
  },
  description: DEFAULT_DESCRIPTION,
  robots: { index: true, follow: true },
  icons: {
    icon: "/stead-logo.png",
    apple: "/stead-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Stead",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Stead" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="font-sans bg-background text-foreground min-h-screen antialiased">
        <DefaultStructuredData />
        {children}
      </body>
    </html>
  );
}
