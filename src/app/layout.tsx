import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE_URL, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@/lib/seo";
import { DefaultStructuredData } from "@/components/seo/default-structured-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
      <body
        className={`${inter.variable} font-sans bg-background text-foreground min-h-screen`}
      >
        <DefaultStructuredData />
        {children}
      </body>
    </html>
  );
}
