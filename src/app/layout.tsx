import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.ivanjasik.sk";

const title =
  "JS Investor | Sprievodca investovaním pre ambicióznych ľudí";

const description =
  "Sprievodca investovaním pre ambicióznych ľudí: praktické kroky, jasné ciele a systém pre váš finančný rast. Bez všeobecných rád — len to, čo má pre vás zmysel.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JS Investor",
  url: siteUrl,
  description,
  logo: `${siteUrl}/favicon.png`,
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
    apple: "/favicon.png",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    type: "website",
    locale: "sk_SK",
    siteName: "JS Investor",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
