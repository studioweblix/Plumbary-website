import type { Metadata } from "next";
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-heading-src",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-body-src",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plumbary GmbH – Bleigießerei",
  description:
    "Plumbary GmbH – Hersteller von medizinischen und industriellen Bleiprodukten. Präzision, Qualität und Werkstoffkompetenz seit Grund auf.",
  openGraph: {
    title: "Plumbary GmbH – Bleigießerei",
    description:
      "Präzisionsgefertigte Bleiprodukte für medizinische und industrielle Anwendungen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${barlowSemiCondensed.variable} ${barlow.variable}`}
    >
      <body className="min-h-screen antialiased font-body bg-[var(--color-dark)] text-[var(--color-foreground)]">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
